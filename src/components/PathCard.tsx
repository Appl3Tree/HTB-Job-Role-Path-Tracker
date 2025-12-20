/* src/components/PathCard.tsx */
import { useMemo, useState } from "react";
import type { JobRolePath } from "../data/jobRolePaths";
import type { CompletionState } from "../lib/storage";
import { computePathProgress } from "../lib/progress";
import { ProgressBar } from "./ProgressBar";

type Props = {
    path: JobRolePath;
    state: CompletionState;
    onToggle: (moduleKey: string) => void;
    onResetPath: (pathId: string) => void;
    searchText: string;
};

export function PathCard({ path, state, onToggle, onResetPath, searchText }: Props) {
    const [expanded, setExpanded] = useState(false);

    const progress = useMemo(() => computePathProgress(path, state), [path, state]);

    const filteredModules = useMemo(() => {
        const q = searchText.trim().toLowerCase();
        if (!q) return path.modules;

        return path.modules.filter((m) => m.name.toLowerCase().includes(q));
    }, [path.modules, searchText]);

    return (
        <section className="card">
            <header className="card__header">
                <div className="card__titleRow">
                    <div className="card__title">
                        <div className="card__name">{path.name}</div>
                        <div className="card__sub">
                            <span>{progress.done}/{progress.total} completed</span>
                            {path.cert ? <span className="pill">{path.cert}</span> : null}
                        </div>
                    </div>

                    <div className="card__actions">
                        <button
                            className="btn btn--ghost"
                            type="button"
                            onClick={() => onResetPath(path.id)}
                            title="Reset this path (unique modules only)"
                        >
                            Reset
                        </button>
                        <button className="btn" type="button" onClick={() => setExpanded((v) => !v)}>
                            {expanded ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <ProgressBar percent={progress.percent} label="Path completion" />
            </header>

            {expanded ? (
                <div className="card__body">
                    {filteredModules.length === 0 ? (
                        <div className="empty">No modules match your search.</div>
                    ) : (
                        <ul className="moduleList">
                            {filteredModules.map((m, idx) => {
                                const checked = !!state[m.key];
                                const displayNumber = idx + 1;

                                return (
                                    <li key={m.key} className={`module ${checked ? "module--done" : ""}`}>
                                        <div className="module__row">
                                            <span className="module__num" aria-hidden="true">
                                                {displayNumber}
                                            </span>

                                            <label className="module__label">
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() => onToggle(m.key)}
                                                />
                                                <span className="module__name">{m.name}</span>
                                            </label>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            ) : null}
        </section>
    );
}

