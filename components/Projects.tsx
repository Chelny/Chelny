"use client";

import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Section } from "@/components/layout/Section";
import { ResponsiveMotion } from "@/components/ResponsiveMotion";
import { type Project, projects } from "@/lib/projects";

export function Projects(): React.JSX.Element {
  return (
    <Section
      id="projects"
      title="Projects"
      heading={
        <>
          Things I&apos;ve
          <br />
          <span className="text-(--muted)">built.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project, index: number) => (
          <ResponsiveMotion as="a"
            key={index}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-97.5 flex-col rounded-lg border border-(--border) bg-(--surface) p-5.5 no-underline shadow-[0_5px_20px_var(--shadow)] transition-[transform,border-color,box-shadow] duration-180 ease-in-out hover:-translate-y-1"
            delay={index * 0.07}
          >
            <div className="flex items-center justify-between">
              <span className="font-(--font-mono) text-sm text-(--accent)">
                {project.year}
              </span>

              <IconArrowUpRight
                className="text-(--muted) transition-transform duration-150"
                size={21}
                aria-hidden="true"
              />
            </div>

            <div className="relative my-3 aspect-video w-full overflow-hidden rounded-md bg-(--surface-2)">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mt-auto">
              <h3 className="mb-3 text-[1.6875rem] leading-[1.05] font-bold tracking-[-0.045em] text-foreground">
                {project.title}
              </h3>

              <p className="mb-5 text-sm leading-[1.7] text-(--muted)">
                {project.description}
              </p>

              <span className="block font-(--font-mono) text-sm leading-[1.7] text-(--subtle)">
                {project.stack}
              </span>
            </div>

            <span className="mt-6 font-bold text-foreground underline decoration-double decoration-(--accent) underline-offset-4">
              View project
            </span>
          </ResponsiveMotion>
        ))}
      </div>
    </Section>
  );
}