"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { BeyondBuilds } from "@/components/sections/BeyondBuilds";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import { projectCategories, projects } from "@/data/projects";

const marqueeItems = [
  "Shopify",
  "Fashion",
  "Beauty",
  "Athleisure",
  "Food",
  "Travel",
  "Media",
  "SaaS",
  "Performance",
  "Merchandising",
];

function AnimatedTitle() {
  const reduceMotion = useReducedMotion();
  const letters = "All Projects".split("");

  return (
    <h1
      aria-label="All Projects"
      className="type-eyebrow !mb-0 inline-block overflow-hidden bg-[rgba(158,104,87,0.1)] p-2"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          initial={reduceMotion ? false : { y: "0.7em", opacity: 0 }}
          animate={{ y: "0em", opacity: 1 }}
          transition={{
            duration: 0.55,
            delay: 0.03 * index,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}

function IndustryMarquee() {
  const reduceMotion = useReducedMotion();
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-black/10 py-3">
      <motion.div
        className="flex w-max gap-8 pr-8"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="type-caption shrink-0 uppercase tracking-[0.22em] text-black/40"
          >
            {item}
            <span className="mx-8 text-[#9e8857]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects.map((project, index) => ({ project, index }))
        : projects
            .map((project, index) => ({ project, index }))
            .filter(({ project }) => project.category === activeCategory),
    [activeCategory],
  );

  const browsingLabel =
    activeCategory === "All"
      ? "A living archive of storefronts, launches, and brand sites."
      : `Work across ${activeCategory.toLowerCase()} — filter the collection.`;

  return (
    <section className="section-padding pt-10 md:pt-14">
      <Container className="space-y-10 md:space-y-14">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-5">
            <AnimatedTitle />
            <motion.div
              aria-hidden="true"
              className="h-px origin-left bg-[#9e8857]"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="space-y-4"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <Typography variant="body-lg" className="text-black/80">
                A closer look at the shops, brand worlds, and product sites I have
                helped bring to life — from sculpting shapewear and hair care to
                Levantine food, gymwear, and cosmetics.
              </Typography>
              <Typography variant="body-md" className="max-w-2xl text-black/65">
                Each build is a different brief: some needed a full storefront with
                a strong first impression, others needed quieter work — faster pages,
                clearer collections, and interfaces that make the product easier to
                trust. Scroll the work, or jump by category.
              </Typography>
            </motion.div>
          </div>
        </div>

        <IndustryMarquee />

        <div className="space-y-4">
          <LayoutGroup>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              {projectCategories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className="relative border border-black/20 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.12em] text-black/60 transition hover:border-black/50 hover:text-black"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 bg-black"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span
                      className={`relative z-[1] ${isActive ? "text-white" : ""}`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </LayoutGroup>
          <p className="type-caption text-black/45">{browsingLabel}</p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map(({ project, index }) => (
              <motion.div
                key={project.title}
                layout
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.2) }}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeCategory === "All" ? (
          <Reveal delay={0.08}>
            <BeyondBuilds />
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
