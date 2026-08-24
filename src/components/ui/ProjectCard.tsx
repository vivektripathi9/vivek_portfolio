import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Typography } from "@/components/ui/Typography";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative min-w-[min(100%,22rem)] flex-1 overflow-hidden border border-[var(--border)] bg-black/[0.02]">
      <Link
        href={project.liveUrl ?? "#"}
        target={project.liveUrl ? "_blank" : undefined}
        rel={project.liveUrl ? "noopener noreferrer" : undefined}
        className="relative block aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[#f3f3f3]"
        aria-label={`Open ${project.title} website`}
      >
        <Image
          src={project.image}
          alt={`${project.title} website hero preview`}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </Link>

      <div className="space-y-4 p-5 md:p-6">
        <div className="space-y-2">
          {project.category ? (
            <p className="type-caption uppercase tracking-[0.16em] text-[#7a683f]">
              {project.category}
            </p>
          ) : null}
          <Typography as="h3" variant="h4" className="text-black">
            {project.title}
          </Typography>
          <Typography variant="body-sm">{project.description}</Typography>
        </div>

        <div className="flex flex-wrap gap-4 pt-1">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav text-[var(--accent)] transition hover:text-black"
            >
              View Web
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-nav text-black/70 transition hover:text-black"
            >
              View Code
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
