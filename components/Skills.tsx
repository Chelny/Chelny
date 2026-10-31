"use client";

import { Section } from "@/components/layout/Section";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { SkillCard } from "@/components/ui/SkillCard";
import { skillGroups } from "@/lib/skills";
import type { SkillGroup, SkillIcon } from "@/lib/skills";

export function Skills(): React.JSX.Element {
  return (
    <Section
      id="skills"
      title="Skills"
      heading={
        <>
          Tools I use
          <br />
          <span className="text-(--muted)">to build things.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-stretch">
        {skillGroups.map((group: SkillGroup, index: number) => (
          <ResponsiveMotion key={group.title} delay={index * 0.07}>
            <SkillCard
              title={group.title}
              icon={group.icon}
              skills={Object.entries(group.skills).map(([name, icon]: [string, SkillIcon]) => ({
                name,
                icon,
              }))}
            />
          </ResponsiveMotion>
        ))}
      </div>
    </Section>
  );
}