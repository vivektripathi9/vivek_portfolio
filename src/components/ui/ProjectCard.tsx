"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Typography } from "@/components/ui/Typography";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-black/20 bg-white transition duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] active:-translate-y-0.5 active:border-black/35">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 z-[2] h-3 w-3 border-l-2 border-t-2 border-black opacity-0 transition group-hover:opacity-100 group-active:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 z-[2] h-3 w-3 border-b-2 border-r-2 border-black opacity-0 transition group-hover:opacity-100 group-active:opacity-100"
      />

      <Link
        href={project.liveUrl ?? "#"}
        target={project.liveUrl ? "_blank" : undefined}
        rel={project.liveUrl ? "noopener noreferrer" : undefined}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden border-b border-black/15 bg-[#f3f3f3]"
        aria-label={`Open ${project.title} website`}
      >
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-[1.04] group-active:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={index < 3}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="space-y-2">
          {project.category ? (
            <p className="type-caption uppercase tracking-[0.16em] text-[#7a683f]">
              {project.category}
            </p>
          ) : null}
          <div className="flex items-start justify-between gap-3">
            <Typography as="h3" variant="h4" className="text-black">
              {project.title}
            </Typography>
            <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.18em] text-[#9e8857]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <Typography variant="body-sm" className="line-clamp-3 text-black/75">
            {project.description}
          </Typography>
        </div>

        {project.technologies?.length ? (
          <ul className="mt-auto flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-black/20 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-black/55"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap items-center gap-4 border-t border-black/5 pt-4">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav text-[var(--accent)] transition hover:text-black"
            >
              View Web →
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav text-black/60 transition hover:text-black"
            >
              View Code
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
