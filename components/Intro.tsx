"use client";

import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { CodeCard } from "@/components/ui/CodeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export function Intro(): React.JSX.Element {
  return (
    <section
      className="mx-auto flex min-h-auto w-[min(100%-28px,1180px)] items-center pt-10 pb-0 md:min-h-[calc(100svh-64px)] md:w-[min(1180px,calc(100%-40px))] md:pt-25 md:pb-25"
      aria-labelledby="intro-title"
    >
      <div className="grid w-full grid-cols-1 items-center gap-14 gap-x-[clamp(2rem,5vw,80px)] md:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)]">
        <ResponsiveMotion>
          <SectionHeading title="Senior Software Engineer · Canada" />

          <h1
            id="intro-title"
            className="m-0 max-w-200 text-[clamp(3.5rem,9vw,8rem)] leading-[0.87] font-extrabold tracking-[-0.085em]"
          >
            Hi, I&apos;m <span className="text-(--accent)">Chelny.</span>
          </h1>

          <p className="mt-3 mb-0 font-(--font-mono) text-sm text-(--muted)">
            *Pronounced{" "}
            <strong className="text-foreground">/&apos;ʃɛlni/</strong>
          </p>

          <p className="mt-8 mb-0 max-w-150 leading-7 text-(--muted)">
            Senior software engineer with many years of experience building
            web and mobile products across frontend, full-stack and product
            engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              className="relative inline-flex items-center gap-2.5 rounded-md bg-(--accent) px-4 py-3 font-bold text-white! no-underline shadow-[0_4px_14px_var(--shadow)] transition-[transform,background] duration-150 hover:-translate-y-0.5"
              href="#projects"
            >
              View my work
              <IconArrowDown size={17} aria-hidden="true" />
            </a>

            <TextLink
              className="inline-flex items-center font-medium hover:text-(--accent)!"
              href="#contact"
            >
              Get in touch
              <IconArrowUpRight size={16} aria-hidden="true" />
            </TextLink>
          </div>
        </ResponsiveMotion>

        <ResponsiveMotion delay={0.12}>
          <CodeCard
            cardAriaLabel="Introduction code example"
            filename="chelny.ts"
            language="TypeScript"
            code={`const engineer = {
  name: "Chelny",
  pronunciation: "Shell-nee",
  level: "senior",
  focus: [
    "Frontend",
    "Full-stack",
    "Product engineering",
  ],
  approach: "Make complex things feel simple.",
};`}
          />
        </ResponsiveMotion>
      </div>
    </section>
  );
}