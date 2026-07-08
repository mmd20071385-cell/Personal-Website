export default function SkillBadge({ name, version }) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-lg border border-line-light bg-surface-light px-4 py-3 font-mono text-sm transition-colors hover:border-accent dark:border-line-dark dark:bg-surface-dark">
      <span className="text-ink-light dark:text-ink-dark">"{name}"</span>
      <span dir="ltr" className="text-muted-light dark:text-muted-dark">
        {version}
      </span>
    </div>
  );
}
