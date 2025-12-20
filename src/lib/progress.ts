/* src/lib/progress.ts */
import type { JobRolePath } from "../data/jobRolePaths";
import type { CompletionState } from "./storage";

export function computePathProgress(
    path: JobRolePath,
    state: CompletionState
): { done: number; total: number; percent: number } {
    const total = path.modules.length;
    const done = path.modules.reduce((acc, m) => acc + (state[m.key] ? 1 : 0), 0);
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return { done, total, percent };
}

export function computeOverallProgress(
    paths: JobRolePath[],
    state: CompletionState
): { done: number; total: number; percent: number } {
    const allModules = paths.flatMap((p) => p.modules);
    const total = allModules.length;
    const done = allModules.reduce((acc, m) => acc + (state[m.key] ? 1 : 0), 0);
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return { done, total, percent };
}

