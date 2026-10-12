"use client";

import type { TablerIcon } from "@tabler/icons-react";

type Skill = {
  name: string;
  icon: TablerIcon;
};

type SkillCardProps = {
  title: string;
  icon: TablerIcon;
  skills: Skill[];
};

export function SkillCard({
  title,
  icon: GroupIcon,
  skills,
}: SkillCardProps): React.JSX.Element {
  return (
    <article className="rounded-[10px] border border-(--border) bg-(--surface) p-4.5 shadow-[0_5px_20px_var(--shadow)] transition-[border-color,transform,box-shadow] duration-150 ease-in-out hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-[0_10px_30px_var(--shadow)]">
      <div className="mb-5.5 flex items-center gap-2.75">
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-[7px] border border-(--border) bg-(--surface-2) text-(--accent)"
          aria-hidden="true"
        >
          <GroupIcon size={19} strokeWidth={1.7} />
        </span>

        <h3 className="m-0 text-xl font-bold tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map(({ name, icon: SkillIcon }) => (
          <span
            key={name}
            className="inline-flex min-h-9 cursor-default items-center gap-1.5 rounded-full border border-(--border) bg-(--surface-2) px-3 py-2 text-sm leading-[1.3] font-semibold text-(--muted) transition-[border-color,color] duration-150 hover:border-(--accent) hover:text-foreground"
          >
            <SkillIcon
              size={14}
              className="text-(--accent)"
              aria-hidden="true"
            />
            {name}
          </span>
        ))}
      </div>
    </article>
  );
}