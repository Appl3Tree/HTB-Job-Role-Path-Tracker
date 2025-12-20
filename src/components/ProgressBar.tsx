/* src/components/ProgressBar.tsx */
import "./ProgressBar.css";

type Props = {
    percent: number;
    label?: string;
};

export function ProgressBar({ percent, label }: Props) {
    const clamped = Math.max(0, Math.min(100, percent));

    return (
        <div className="progress">
            <div className="progress__meta">
                <div className="progress__label">{label ?? "Progress"}</div>
                <div className="progress__value">{clamped}%</div>
            </div>
            <div className="progress__track" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress__fill" style={{ width: `${clamped}%` }} />
            </div>
        </div>
    );
}

