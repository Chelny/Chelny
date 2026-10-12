"use client";

import { Section } from "@/components/layout/Section";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { type Experience, experiences } from "@/lib/experiences";

export function WorkHistory(): React.JSX.Element {
  return (
    <Section
      id="work-history"
      title="Work History"
      heading={
        <>
          Many years of
          <br />
          <span className="text-(--muted)">building.</span>
        </>
      }
    >
      <div className="flex flex-col border-t border-(--border)">
        {experiences.map((experience: Experience, index: number) => (
          <ResponsiveMotion
            key={experience.company}
            className="grid grid-cols-1 gap-3.5 border-t border-(--border) py-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-11"
            delay={index * 0.04}
          >
            <div className="flex flex-row justify-start gap-1.5 font-(--font-mono) text-sm text-(--muted) md:flex-col">
              <span className="font-bold text-foreground">
                {experience.period}
              </span>
              <span className="text-(--subtle)">
                {experience.industry}
              </span>
            </div>

            <div className="min-w-0">
              <div>
                <h3 className="m-0 text-[26px] leading-normal font-bold tracking-[-0.04em]">
                  {experience.company}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-(--accent)">
                  {experience.role}
                </p>
              </div>

              <p className="mt-4.5 mb-5 max-w-190 leading-[1.75] text-(--muted)">
                {experience.description}
              </p>

              <div
                className="flex flex-wrap gap-1.5"
                aria-label={`${experience.company} technologies`}
              >
                {experience.technologies.map((technology: string) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--border) bg-(--surface-2) px-2 py-1 font-(--font-mono) text-sm text-(--muted)"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </ResponsiveMotion>
        ))}
      </div>
    </Section>
  );
}