"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import ProficiencyBar from "@/components/ProficiencyBar";
import Timeline from "@/components/Timeline";
import { skillProficiency } from "@/lib/translations";

export default function AboutPage() {
  const { t } = useLanguage();
  const about = t.about;
  const infoRows = [
    ["fullName", about.infoLabels.fullName, about.infoValues.fullName],
    ["gender", about.infoLabels.gender, about.infoValues.gender],
    ["marital", about.infoLabels.marital, about.infoValues.marital],
    ["military", about.infoLabels.military, about.infoValues.military],
    ["birth", about.infoLabels.birth, about.infoValues.birth],
    ["city", about.infoLabels.city, about.infoValues.city],
    ["english", about.infoLabels.english, about.infoValues.english],
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <Reveal>
        <h1 className="mb-1 text-3xl font-bold text-ink-light dark:text-ink-dark">
          {about.title}
        </h1>
        <p className="mb-10 text-muted-light dark:text-muted-dark">
          {about.subtitle}
        </p>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <Reveal>
            <p className="mb-10 leading-relaxed text-ink-light/90 dark:text-ink-dark/90">
              {about.intro}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="mb-4 text-xl font-bold text-ink-light dark:text-ink-dark">
              {about.approachTitle}
            </h2>
          </Reveal>
          <div className="mb-10 space-y-4">
            {about.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="flex gap-4 rounded-xl border border-line-light bg-surface-light p-5 dark:border-line-dark dark:bg-surface-dark">
                  <span className=" text-xs font-semibold text-accent">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold text-ink-light dark:text-ink-dark">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="mb-4 text-xl font-bold text-ink-light dark:text-ink-dark">
              {about.skillsTitle}
            </h2>
            <div className="mb-10 rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark">
              {skillProficiency.map((skill) => (
                <ProficiencyBar
                  key={skill.name}
                  name={skill.name}
                  value={skill.value}
                />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal>
            <div className="rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark">
              <p className="mb-4 text-xs text-muted-light dark:text-muted-dark">
                {about.infoTitle}
              </p>
              <dl className="space-y-3 text-sm">
                {infoRows.map(([key, label, value]) => (
                  <div key={key} className="flex justify-between gap-3 border-b border-dashed border-line-light pb-2 last:border-0 dark:border-line-dark">
                    <dt className="text-muted-light dark:text-muted-dark">{label}</dt>
                    <dd className="font-medium text-ink-light dark:text-ink-dark">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 rounded-xl border border-line-light bg-surface-light p-6 dark:border-line-dark dark:bg-surface-dark">
              <p className="mb-4 text-xs text-muted-light dark:text-muted-dark">
                {about.educationTitle}
              </p>
              <h3 className="mb-1 font-semibold text-ink-light dark:text-ink-dark">
                {about.education.degree}
              </h3>
              <p className="mb-3 text-sm text-steel dark:text-steel-soft">
                {about.education.school}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span dir="ltr" className="text-muted-light dark:text-muted-dark">
                  {about.education.period}
                </span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">
                  {about.education.status}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="experience" className="mt-16 scroll-mt-24">
        <Reveal>
          <h2 className="mb-1 text-2xl font-bold text-ink-light dark:text-ink-dark">
            {about.experienceTitle}
          </h2>
          <p className="mb-10 text-sm text-muted-light dark:text-muted-dark">
            {about.experienceSubtitle}
          </p>
        </Reveal>
        <Timeline items={about.experience} />
      </div>
    </div>
  );
}
