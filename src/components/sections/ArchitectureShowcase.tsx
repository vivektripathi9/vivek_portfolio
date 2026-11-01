"use client";

import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ClipReveal, Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  architectureGroups,
  architectureProjects,
  architectureSite,
  featuredArchitectureProject as featured,
} from "@/data/architecture";

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

export function ArchitectureShowcase() {
  const [activeGroup, setActiveGroup] = useState<(typeof architectureGroups)[number]>("All");
  const visible = architectureProjects.filter((project) => activeGroup === "All" || project.group === activeGroup);

  return (
    <>
      <section className="canvas-dots pb-12 pt-32 md:pt-44">
        <Container className="text-center">
          <p className="label mb-6">Architecture · Real estate · Digital</p>
          <TextReveal as="h1" className="display-xl" text={"Digital homes for\n*landmark* properties"} stagger={0.06} />
          <p className="body-lg mx-auto mt-8 max-w-2xl">
            {architectureSite.name} is my dedicated website for developers, architects, and real-estate brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={architectureSite.url}>
              Visit {architectureSite.name} <ArrowIcon />
            </Button>
          </div>
        </Container>

        <Container className="mt-12 md:mt-16">
          <Link
            href={architectureSite.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${architectureSite.name} website`}
            className="group block"
          >
            <ClipReveal className="relative aspect-[4/3] rounded-2xl md:aspect-[16/8]">
              <div className="relative h-full w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                <Image
                  src={architectureSite.image}
                  alt={`${architectureSite.name} website preview`}
                  fill
                  preload
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </ClipReveal>
            <span className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
              <span className="label !text-accent">Featured website</span>
              <span className="body-sm break-all transition-colors group-hover:text-foreground">
                {architectureSite.domain} <ArrowIcon />
              </span>
            </span>
          </Link>
        </Container>
      </section>

      <section className="section-padding border-t border-line">
        <Container>
          <p className="label mb-5">Featured project</p>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${featured.title} website`}
              className="group block lg:col-span-7"
            >
              <ClipReveal className="relative aspect-[4/3] rounded-xl">
                <div className="relative h-full w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  <Image src={featured.image} alt={`${featured.title} website preview`} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 58vw" />
                </div>
              </ClipReveal>
            </Link>
            <div className="lg:col-span-5">
              <TextReveal className="display-lg" text={featured.title} />
              <Reveal delay={0.1}>
                <p className="body-lg mt-6">{featured.description}</p>
                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6">
                  {[
                    ["Scope", featured.scope],
                    ["Type", featured.type],
                    ["Platform", featured.platform],
                    ["Live", featured.domain],
                  ].map(([term, value]) => (
                    <div key={term}>
                      <dt className="label">{term}</dt>
                      <dd className="mt-1.5 text-sm break-words">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <Button href={featured.url} variant="outline">
                    View project <ArrowIcon />
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding border-t border-line">
        <Container className="space-y-10 md:space-y-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label mb-5">Project index — {String(architectureProjects.length).padStart(2, "0")}</p>
              <TextReveal className="display-lg" text={"The *archive*"} />
            </div>
            <LayoutGroup id="architecture-filter">
              <div className="flex flex-wrap gap-1 rounded-full border border-line p-1">
                {architectureGroups.map((group) => {
                  const isActive = group === activeGroup;
                  return (
                    <button
                      key={group}
                      type="button"
                      onClick={() => setActiveGroup(group)}
                      aria-pressed={isActive}
                      className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${isActive ? "text-on-accent" : "text-muted hover:text-foreground"}`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="architecture-filter-pill"
                          className="absolute inset-0 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <span className="relative">{group}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>

          <ul key={activeGroup} className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <li key={project.title}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="group block"
                >
                  <ClipReveal className="relative aspect-[4/3] rounded-lg">
                    <div className="relative h-full w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                      <Image src={project.image} alt={`${project.title} website preview`} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                  </ClipReveal>
                  <span className="mt-4 block">
                    <span className="display-sm block transition-colors duration-300 group-hover:!text-accent">{project.title}</span>
                    <span className="label mt-2 block">
                      {project.group}
                      {project.domain ? ` · ${project.domain}` : ""}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-6 border-t border-line pt-14 text-center">
            <p className="display-md">
              See it all on <em>{architectureSite.name}</em>
            </p>
            <Button href={architectureSite.url}>
              Visit the website <ArrowIcon />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
