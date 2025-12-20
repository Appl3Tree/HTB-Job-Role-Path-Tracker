/* src/lib/storage.ts */
export type CompletionState = Record<string, boolean>;

const STORAGE_KEY = "htb_study_tracker_v2";

export function loadCompletionState(): CompletionState | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as unknown;
        if (!parsed || typeof parsed !== "object") return null;
        return parsed as CompletionState;
    } catch {
        return null;
    }
}

export function saveCompletionState(state: CompletionState): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        // Ignore storage failures (private mode, quota, etc.)
    }
}

export function clearCompletionState(): void {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // Ignore
    }
}

