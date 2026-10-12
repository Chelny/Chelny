"use client";

import { Section } from "@/components/layout/Section";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { CodeCard } from "@/components/ui/CodeCard";

export function About(): React.JSX.Element {
  return (
    <Section
      id="about"
      title="About"
      heading={
        <>
          Engineer first.
          <br />
          <span className="text-(--muted)">Curious always.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:gap-20">
        <ResponsiveMotion className="max-w-150">
          <p className="mt-0 mb-6 text-2xl leading-[1.35] font-semibold tracking-tight text-foreground">
            I turn complex problems into clear, useful experiences.
          </p>

          <p className="mt-0 mb-6 leading-[1.8] text-(--muted)">
            My work sits at the intersection of engineering, product and
            design. I care about architecture, performance, accessibility
            and the details that make software feel effortless.
          </p>

          <p className="mt-0 mb-6 leading-[1.8] text-(--muted)">
            From frontend architecture to backend integration, I enjoy
            owning problems end-to-end and building products that people
            actually enjoy using.
          </p>
        </ResponsiveMotion>

        <ResponsiveMotion delay={0.12}>
          <CodeCard
            cardAriaLabel="About me code example"
            filename="about.ts"
            language="TypeScript"
            code={`function build(product) {
  const problem = understand(product);

  return solve(problem, {
    architecture: "simple",
    performance: true,
    accessibility: true,
    experience: "human",
  });
}`}
          />
        </ResponsiveMotion>
      </div>
    </Section>
  );
}