import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { Typography } from "@/components/ui/Typography";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel group overflow-hidden rounded-[1.75rem]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(143,178,255,0.18),rgba(255,255,255,0.02))]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-5 p-6 md:p-7">
        <div className="space-y-3">
          {project.category ? (
            <Typography variant="eyebrow">{project.category}</Typography>
          ) : null}
          <Typography as="h3" variant="h3" className="text-[var(--foreground)]">
            {project.title}
          </Typography>
          <Typography variant="body-md">{project.description}</Typography>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Tag key={technology} label={technology} />
          ))}
        </div>

        <div className="flex flex-wrap gap-5 pt-1">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              className="type-button text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
            >
              View Live
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              className="type-button text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
            >
              Source Code
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
