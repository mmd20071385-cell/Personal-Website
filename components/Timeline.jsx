import Reveal from "./Reveal";

export default function Timeline({ items }) {
  return (
    <div className="relative ms-3 border-s-2 border-dashed border-line-light ps-8 dark:border-line-dark">
      {items.map((item, i) => (
        <Reveal key={item.hash} delay={i * 80}>
          <div className="relative pb-10 last:pb-0">
            <span className="absolute -start-[41px] top-0 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-bg-light font-mono text-[10px] text-accent dark:bg-bg-dark">
              ●
            </span>
            <div className="rounded-lg border border-line-light bg-surface-light p-5 dark:border-line-dark dark:bg-surface-dark">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-muted-light dark:text-muted-dark">
                <span className="rounded bg-accent/10 px-1.5 py-0.5 text-accent">
                  #{item.hash}
                </span>
                <span dir="ltr">{item.period}</span>
              </div>
              <h3 className="text-base font-semibold text-ink-light dark:text-ink-dark">
                {item.role}
              </h3>
              <p className="mb-2 text-sm text-steel dark:text-steel-soft">
                {item.company}
              </p>
              <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                {item.desc}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
