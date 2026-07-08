"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const portfolio = t.portfolio;

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h1 className="mb-1 text-3xl font-bold text-ink-light dark:text-ink-dark">
          {portfolio.title}
        </h1>
        <p className="mb-10 max-w-lg text-muted-light dark:text-muted-dark">
          {portfolio.subtitle}
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 70}>
            <ProjectCard
              project={project}
              viewLabel={portfolio.viewProject}
              comingSoon={portfolio.comingSoon}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
