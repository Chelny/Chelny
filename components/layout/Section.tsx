"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

type SectionProps = {
  id: string;
  title: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "contact";
};

export function Section(props: SectionProps): React.JSX.Element {
  const headingId = `${props.id}-title`;

  if (props.variant === "contact") {
    return (
      <section
        id={props.id}
        className="mx-auto mt-30 mb-10 w-[min(100%-28px,1180px)] rounded-xl border border-(--border) bg-[linear-gradient(135deg,var(--surface),var(--surface-2))] px-5 py-14 md:mt-22.5 md:w-[min(1180px,calc(100%-40px))] md:pt-30 md:pb-17.5"
        aria-labelledby={headingId}
      >
        <div className="mx-auto max-w-225 text-center">
          <SectionHeading title={props.title} />

          <h2
            id={headingId}
            className="m-0 text-[clamp(3.5rem,17vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.08em] md:text-[clamp(3.5rem,8vw,7.5rem)]"
          >
            {props.heading}
          </h2>

          {props.children}
        </div>
      </section>
    );
  }

  return (
    <section
      id={props.id}
      className="mx-auto w-[min(100%-28px,1180px)] pt-22.5 md:w-[min(1180px,calc(100%-40px))] md:pt-30"
      aria-labelledby={headingId}
    >
      <div className="mb-10 md:mb-13.5">
        <SectionHeading title={props.title} />

        <h2
          id={headingId}
          className="text-[clamp(2.8rem,14vw,5rem)] leading-[0.98] font-bold tracking-[-0.065em] md:text-[clamp(2.8rem,6vw,5.5rem)]"
        >
          {props.heading}
        </h2>
      </div>

      {props.children}
    </section>
  );
}