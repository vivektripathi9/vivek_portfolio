"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { Typography } from "@/components/ui/Typography";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function DeviceMockup({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#e8e5df]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-4 h-28 w-28 rounded-full bg-[#b7b1a4]/40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-[#cfc9bd]/45 blur-2xl"
      />

      <div className="absolute left-[6%] top-[13%] w-[64%]">
        <div className="overflow-hidden rounded-t-[11px] border-[7px] border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_20px_44px_rgba(0,0,0,0.22)] sm:border-[9px]">
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 70vw, 35vw"
              priority={priority}
            />
          </div>
        </div>
        <div className="relative mx-auto h-1.5 w-[112%] rounded-b-md bg-[#1c1c1c] sm:h-2">
          <span className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b bg-[#2e2e2e] sm:h-1.5 sm:w-16" />
        </div>
      </div>

      <div className="absolute bottom-[9%] right-[8%] z-[1] w-[24%] overflow-hidden rounded-[1.15rem] border-[5px] border-[#1c1c1c] bg-[#1c1c1c] shadow-[0_16px_34px_rgba(0,0,0,0.3)] sm:rounded-[1.35rem] sm:border-[6px]">
        <div className="relative mx-auto mt-1 h-1 w-7 rounded-full bg-[#444] sm:mt-1.5 sm:h-1.5 sm:w-8" />
        <div className="relative aspect-[9/19] overflow-hidden bg-white">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 28vw, 14vw"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const label = project.sector ?? project.category;
  const cta = project.ctaLabel ?? "Store";

  return (
    <article className="flex h-full flex-col">
      {project.liveUrl ? (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition duration-300 hover:-translate-y-0.5"
          aria-label={`Open ${project.title} website`}
        >
          <DeviceMockup
            src={project.image}
            alt={`${project.title} website preview`}
            priority={index < 2}
          />
        </Link>
      ) : (
        <DeviceMockup
          src={project.image}
          alt={`${project.title} website preview`}
          priority={index < 2}
        />
      )}

      <div className="flex flex-1 flex-col pt-5">
        {label ? (
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-black/40">
            {label}
          </p>
        ) : null}

        <Typography as="h3" variant="h2" className="mt-2 text-black">
          {project.title}
        </Typography>

        {project.subtitle ? (
          <p className="mt-1 text-[0.95rem] text-black/45">{project.subtitle}</p>
        ) : null}

        <Typography variant="body-sm" className="mt-3 max-w-md text-black/55">
          {project.description}
        </Typography>

        {project.liveUrl ? (
          <div className="mt-auto pt-5">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
            >
              {cta}
              <ExternalIcon />
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
