"use client";

import { useContext } from "react";
import { SectionNumberContext } from "@/contexts/SectionNumberProvider";

type SectionHeadingProps = {
  title: string;
};

export function SectionHeading(
  props: SectionHeadingProps,
): React.JSX.Element {
  const number = useContext(SectionNumberContext);

  return (
    <p className="mb-4.5 mt-0 font-mono text-sm font-bold tracking-[0.08em] text-(--accent) uppercase">
      {number !== null
        ? `${String(number).padStart(2, "0")} / `
        : null}
      {props.title}
    </p>
  );
}