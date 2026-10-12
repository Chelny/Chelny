"use client";

import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCode,
} from "@tabler/icons-react";
import { Section } from "@/components/layout/Section";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { TextLink } from "@/components/ui/TextLink";

export function Contact(): React.JSX.Element {
  return (
    <Section
      id="contact"
      title="Contact"
      heading={
        <>
          Let&apos;s build
          <br />
          something <span className="text-(--accent)">great.</span>
        </>
      }
      variant="contact"
    >
      <ResponsiveMotion>
        <p className="mx-auto mt-7.5 leading-[1.7] text-(--muted)">
          Have a product to build, a problem to solve, or just want to
          talk engineering?
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-x-7 md:gap-y-4.5">
          <TextLink
            className="inline-flex items-center gap-2 font-semibold hover:text-(--accent)!"
            href="https://www.linkedin.com/in/chelny/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandLinkedin size={19} aria-hidden="true" />
            LinkedIn
            <IconArrowUpRight size={16} aria-hidden="true" />
          </TextLink>

          <TextLink
            className="inline-flex items-center gap-2 font-semibold hover:text-(--accent)!"
            href="https://github.com/Chelny"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub size={19} aria-hidden="true" />
            GitHub
            <IconArrowUpRight size={16} aria-hidden="true" />
          </TextLink>

          <TextLink
            className="inline-flex items-center gap-2 font-semibold hover:text-(--accent)!"
            href="https://www.upwork.com/freelancers/~01991710a4cf08f291?mp_source=share"
            target="_blank"
            rel="noreferrer"
          >
            <IconCode size={19} aria-hidden="true" />
            Upwork
            <IconArrowUpRight size={16} aria-hidden="true" />
          </TextLink>

          <TextLink
            className="inline-flex items-center gap-2 font-semibold hover:text-(--accent)!"
            href="https://www.x.com/Chelny"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandX size={19} aria-hidden="true" />
            X
            <IconArrowUpRight size={16} aria-hidden="true" />
          </TextLink>
        </div>
      </ResponsiveMotion>
    </Section>
  );
}