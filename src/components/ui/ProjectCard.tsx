"use client";

import Image from "next/image";
import Link from "next/link";

import { ClipReveal } from "@/components/motion/Reveal";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="h-full">
      <Link
        href={project.liveUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} website`}
        className="group block"
      >
        <ClipReveal className="relative aspect-[4/3] rounded-lg">
          <div className="relative h-full w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
            <Image
              src={project.image}
              alt={`${project.title} website preview`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
              preload={index < 2}
            />
          </div>
        </ClipReveal>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="display-sm transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
            <p className="body-sm mt-1.5 max-w-md">{project.description}</p>
          </div>
          <p className="label shrink-0 pt-2 text-right">{project.role}</p>
        </div>
      </Link>
    </article>
  );
}
