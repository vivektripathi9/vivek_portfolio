"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type MouseEvent } from "react";

import { TextReveal } from "@/components/motion/TextReveal";
import { VelocityMarquee } from "@/components/motion/VelocityMarquee";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectGroups, projects, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/** Editorial rhythm: alternating wide and narrow columns on a 12-col grid. */
const gridSpans = [
  "md:col-span-7",
  "md:col-span-5 md:mt-32",
  "md:col-span-5",
  "md:col-span-7 md:mt-20",
];

function ProjectList({ items }: { items: Project[] }) {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [hovered, setHovered] = useState<Project | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });

  function onMove(event: MouseEvent) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
      <ul className="border-b border-line">
        {items.map((project, index) => (
          <li key={project.title} className="border-t border-line">
            <Link
              href={project.liveUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(project)}
              className="group grid items-baseline gap-2 py-5 transition-colors md:grid-cols-12 md:gap-6 md:py-7"
            >
              <span className="label md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <span className="display-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:!text-accent md:col-span-7">
                {project.title}
              </span>
              <span className="body-sm md:col-span-2">{project.subtitle}</span>
              <span className="label md:col-span-2 md:text-right">{project.role}</span>
            </Link>
          </li>
        ))}
      </ul>

      {finePointer ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-30 w-[24rem]"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        >
          <AnimatePresence>
            {hovered ? (
              <motion.div
                key={hovered.title}
                className="absolute inset-x-0 top-0 aspect-[4/3] overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src={hovered.image} alt="" fill className="object-cover object-top" sizes="24rem" />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </div>
  );
}

export function ProjectsShowcase() {
  const [activeGroup, setActiveGroup] = useState<(typeof projectGroups)[number]>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const reduceMotion = useHydratedReducedMotion();

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeGroup === "All" || project.group === activeGroup),
    [activeGroup],
  );

  return (
    <>
      <section className="canvas-dots pb-12 pt-36 md:pb-20 md:pt-48">
        <Container className="text-center">
          <p className="label mb-6">{projects.length} live websites</p>
          <TextReveal as="h1" className="display-xl" text={"Work that\n*ships.*"} stagger={0.08} />
          <p className="body-lg mx-auto mt-8 max-w-2xl">
            Shopify storefronts and brand websites I have helped ship — fashion and beauty, food,
            architecture, and product.
          </p>
        </Container>
      </section>

      <VelocityMarquee items={siteConfig.marquee} speed={2} />

      <section className="section-padding !pt-12">
        <Container className="space-y-12 md:space-y-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <LayoutGroup id="project-filter">
              <div className="flex flex-wrap gap-1 rounded-full border border-line p-1">
                {projectGroups.map((group) => {
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
                          layoutId="project-filter-pill"
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

            <div className="flex gap-1 rounded-full border border-line p-1" role="group" aria-label="Layout">
              {(["grid", "list"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setView(option)}
                  aria-pressed={view === option}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition-colors duration-300 ${view === option ? "bg-foreground text-background" : "text-muted hover:text-foreground"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {view === "list" ? (
            <ProjectList items={visibleProjects} />
          ) : (
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12 md:gap-y-24">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout={!reduceMotion}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={gridSpans[index % gridSpans.length]}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          <div className="grid gap-5 border-t border-line pt-10 md:grid-cols-2 md:gap-16">
            <h2 className="display-md">
              Beyond the <em>full builds</em>
            </h2>
            <p className="body-lg">
              I&apos;ve also partnered with other Shopify brands on critical features, performance work, and
              targeted UI refinements — without a full rebuild.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
