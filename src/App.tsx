import { useEffect, useMemo, useState } from "react";
import "./app.css";
import { JOB_ROLE_PATHS } from "./data/jobRolePaths";
import {
    clearCompletionState,
    loadCompletionState,
    saveCompletionState,
    type CompletionState
} from "./lib/storage";
import { computeOverallProgress } from "./lib/progress";
import { ProgressBar } from "./components/ProgressBar";
import { PathCard } from "./components/PathCard";

function buildEmptyState(): CompletionState {
    const state: CompletionState = {};
    for (const p of JOB_ROLE_PATHS) {
        for (const m of p.modules) {
            state[m.key] = false;
        }
    }
    return state;
}

function normalizeState(raw: CompletionState): CompletionState {
    // Ensure we only keep canonical keys we know about.
    const allowed = new Set<string>();
    for (const p of JOB_ROLE_PATHS) {
        for (const m of p.modules) {
            allowed.add(m.key);
        }
    }

    const next: CompletionState = {};
    for (const key of allowed) {
        next[key] = !!raw[key];
    }

    return next;
}

export default function App() {
    const [state, setState] = useState<CompletionState>(() => {
        const loaded = loadCompletionState();
        if (!loaded) return buildEmptyState();
        return normalizeState(loaded);
    });

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        saveCompletionState(state);
    }, [state]);

    const overall = useMemo(() => computeOverallProgress(JOB_ROLE_PATHS, state), [state]);

    function toggleModule(moduleKey: string) {
        setState((prev) => ({
            ...prev,
            [moduleKey]: !prev[moduleKey]
        }));
    }

    function resetAll() {
        // Clear everything (not “defaults”)
        const next = buildEmptyState();
        setState(next);
        clearCompletionState();
    }

    function resetPath(pathId: string) {
        const path = JOB_ROLE_PATHS.find((p) => p.id === pathId);
        if (!path) return;

        // Reset everything in this path (even shared modules)
        setState((prev) => {
            const next = { ...prev };
            for (const m of path.modules) {
                next[m.key] = false;
            }
            return next;
        });
    }

    return (
        <div className="page">
            <div className="container">
                <header className="top">
                    <div>
                        <div className="brand">
                            <div className="brand__dot" />
                            <div className="brand__title">HTB Study Tracker</div>
                        </div>
                        <div className="subtitle">
                            Job Role Paths module checklist with local progress persistence.
                        </div>
                    </div>

                    <div className="top__right">
                        <button className="btn btn--danger" type="button" onClick={resetAll}>
                            Reset all
                        </button>
                    </div>
                </header>

                <section className="overview">
                    <div className="overview__left">
                        <div className="overview__metric">
                            <div className="overview__label">Overall</div>
                            <div className="overview__value">{overall.percent}%</div>
                        </div>
                        <div className="overview__meta">
                            {overall.done} of {overall.total} modules completed
                        </div>
                    </div>

                    <div className="overview__right">
                        <ProgressBar percent={overall.percent} label="Overall completion" />
                    </div>
                </section>

                <section className="controls">
                    <input
                        className="search"
                        type="search"
                        value={searchText}
                        placeholder="Search modules (filters within paths)"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </section>

                <main className="grid">
                    {JOB_ROLE_PATHS.map((p) => (
                        <PathCard
                            key={p.id}
                            path={p}
                            state={state}
                            onToggle={toggleModule}
                            onResetPath={resetPath}
                            searchText={searchText}
                        />
                    ))}
                </main>

                <footer className="footer">
                    <span>Saved locally in your browser via localStorage.</span>
                </footer>
            </div>
        </div>
    );
}

