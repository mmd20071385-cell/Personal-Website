export default function ProjectCard({ project, viewLabel, comingSoon }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-line-light bg-surface-light transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl dark:border-line-dark dark:bg-surface-dark">
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-ink-light/5 to-steel/10 dark:from-white/5 dark:to-steel/20">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-14 w-14 text-muted-light/60 transition-transform group-hover:scale-110 dark:text-muted-dark/60"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path strokeLinecap="round" d="M3 9h18M8 4v14" />
          </svg>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent">
          {project.tag}
        </span>
        <h3 className="text-lg font-semibold text-ink-light dark:text-ink-dark">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {project.desc}
        </p>

        {/*
          project.url comes from lib/translations.js -> projectLinks.
          As long as it's still "#" we treat it as "not ready yet".
        */}
        <a
          href={project.url || "#"}
          target={project.url && project.url !== "#" ? "_blank" : undefined}
          rel={project.url && project.url !== "#" ? "noopener noreferrer" : undefined}
          className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-steel transition-colors group-hover:text-accent dark:text-steel-soft"
          title={!project.url || project.url === "#" ? comingSoon : undefined}
        >
          {viewLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
