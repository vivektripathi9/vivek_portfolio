"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container className="space-y-10 md:space-y-12">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeading
              title="Some Projects"
              className="!mb-0 inline-block bg-[rgba(158,104,87,0.1)] p-2"
            />
            <p className="type-body-sm max-w-xs text-black/55 sm:text-right">
              Selected client and product websites across travel, media, SaaS, and more.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={Math.min(index * 0.04, 0.28)}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
