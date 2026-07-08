"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import TerminalHero from "@/components/TerminalHero";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";
import { skillsList } from "@/lib/translations";

export default function HomePage() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="font-sans mb-3 text-sm text-accent">{home.eyebrow}</p>
            <h1 className="mb-3 text-3xl font-bold leading-tight text-ink-light sm:text-4xl dark:text-ink-dark">
              {home.title}
            </h1>
            <p className="mb-5 text-lg text-steel dark:text-steel-soft">
              {home.subtitle}
            </p>
            <p className="mb-8 max-w-md leading-relaxed text-muted-light dark:text-muted-dark">
              {home.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-md bg-ink-light px-5 py-2.5 text-sm font-semibold text-bg-light transition-transform hover:-translate-y-0.5 dark:bg-accent dark:text-bg-dark"
              >
                {home.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-line-light px-5 py-2.5 text-sm font-semibold text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
              >
                {home.ctaSecondary}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <TerminalHero lines={home.terminalLines} />
          </Reveal>
        </div>
      </section>

      {/* Quick summary */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <Reveal>
          <div className="rounded-xl border border-line-light bg-surface-light p-6  text-sm dark:border-line-dark dark:bg-surface-dark">
            <p className="mb-3 text-muted-light dark:text-muted-dark">
              {home.resumeJsonTitle}
            </p>
            <pre dir="ltr" className="font-sans overflow-x-auto text-ink-light dark:text-ink-dark">
{`{
  "location"   :   "${home.resumeJson.location}",
  "experience"   :   "${home.resumeJson.experience}",
  "education"   :   "${home.resumeJson.education}",
  "focus"   :   [${home.resumeJson.focus.map((f) => `"${f}"`).join(", ")}]
}`}
            </pre>
          </div>
        </Reveal>
      </section>

      {/* Why me */}
      <section className="mx-auto max-w-5xl px-5 pb-16 ">
        <Reveal>
          <h2 className="mb-1 text-2xl font-bold text-ink-light dark:text-ink-dark">
            {home.whyTitle}
          </h2>
          <p className="mb-8 text-muted-light dark:text-muted-dark">
            {home.whySubtitle}
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {home.why.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-line-light bg-surface-light p-6 transition-colors hover:border-accent dark:border-line-dark dark:bg-surface-dark">
                <h3 className="mb-2 font-semibold text-ink-light dark:text-ink-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <Reveal>
          <h2 className="mb-1 text-2xl font-bold text-ink-light dark:text-ink-dark">
            {home.skillsTitle}
          </h2>
          <p className="mb-8 font-mono text-sm text-muted-light dark:text-muted-dark">
            {home.skillsSubtitle}
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skillsList.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <SkillBadge name={skill.name} version={skill.version} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-line-light bg-surface-light p-7 sm:flex-row sm:items-center dark:border-line-dark dark:bg-surface-dark">
            <div>
              <h3 className="mb-1 text-lg font-semibold text-ink-light dark:text-ink-dark">
                {home.experiencePreviewTitle}
              </h3>
              <p className="max-w-md text-sm text-muted-light dark:text-muted-dark">
                {home.experiencePreviewDesc}
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 rounded-md border border-line-light px-4 py-2 text-sm font-semibold text-ink-light transition-colors hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark"
            >
              {home.experiencePreviewCta}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <Reveal>
          <div className="rounded-xl bg-ink-light px-7 py-10 text-center dark:bg-surface-dark dark:border dark:border-accent/30">
            <h2 className="mb-2 text-2xl font-bold text-bg-light dark:text-ink-dark">
              {home.ctaBandTitle}
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm text-bg-light/70 dark:text-muted-dark">
              {home.ctaBandDesc}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-bg-dark transition-transform hover:-translate-y-0.5"
            >
              {home.ctaBandButton}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
