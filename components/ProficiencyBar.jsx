export default function ProficiencyBar({ name, value }) {
  const totalBlocks = 10;
  const filled = Math.round((value / 100) * totalBlocks);

  return (
    <div className="flex items-center gap-4 py-2">
      <span className="w-32 shrink-0 text-sm text-ink-light dark:text-ink-dark">
        {name}
      </span>
      <div
        dir="ltr"
        className="flex-1 font-mono text-sm leading-none tracking-tighter text-accent"
        aria-hidden="true"
      >
        {"█".repeat(filled)}
        <span className="text-line-light dark:text-line-dark">
          {"░".repeat(totalBlocks - filled)}
        </span>
      </div>
      <span
        dir="ltr"
        className="w-10 shrink-0 text-end font-mono text-xs text-muted-light dark:text-muted-dark"
      >
        {value}%
      </span>
    </div>
  );
}
