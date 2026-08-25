"use client";

import { Reveal } from "@/components/motion/Reveal";
import { BeyondBuilds } from "@/components/sections/BeyondBuilds";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const homepageProjects = projects.slice(0, 8);

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
            <p className="max-w-xs type-body-sm text-black/55 sm:text-right">
              Selected client and product websites across ecommerce, beauty, fashion, and more.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
          {homepageProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={Math.min(index * 0.04, 0.28)}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-6 border-t border-black/10 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:pt-12">
            <div className="max-w-xl space-y-2">
              <Typography as="h3" variant="h4" className="text-black">
                There is more on the archive
              </Typography>
              <Typography variant="body-md" className="text-black/65">
                Fashion, beauty, food, travel, and product sites beyond this
                selection — filter by category and open every live storefront.
              </Typography>
            </div>
            <Button href={siteConfig.projectsHref}>View all projects</Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <BeyondBuilds />
        </Reveal>
      </Container>
    </section>
  );
}
