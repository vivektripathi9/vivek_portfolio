"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { featuredProjects, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/** Vertical scroll drives a sideways gallery on desktop; a plain stack on phones. */
export function WorkHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduceMotion = useHydratedReducedMotion();
  const pinned = desktop && !reduceMotion;
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !pinned) return;

    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });
  const x = useTransform(progress, [0, 1], [0, -distance]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative"
      style={pinned ? { height: `calc(${distance}px + 100vh)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-[100svh] items-center overflow-hidden pt-6" : "py-20"}>
        <motion.div
          ref={trackRef}
          className={pinned ? "flex w-max items-center gap-8 px-10" : "flex flex-col gap-14 px-5 md:px-10"}
          style={pinned ? { x } : undefined}
        >
          <div className={pinned ? "w-[34vw] shrink-0 pr-8" : ""}>
            <p className="label mb-5">Selected work — {String(featuredProjects.length).padStart(2, "0")}</p>
            <TextReveal className="display-lg" text={"Six brands.\n*One* standard."} />
            <p className="body-md mt-6 max-w-sm">
              Selected storefronts and brand sites — fashion, beauty, food, architecture, and real estate.
            </p>
          </div>

          {featuredProjects.map((project, index) => (
            <article key={project.title} className={pinned ? "w-[58vw] max-w-[62rem] shrink-0" : ""}>
              <Link
                href={project.liveUrl ?? siteConfig.projectsHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} website`}
                className="group block"
              >
                <div className={`relative overflow-hidden rounded-md ${pinned ? "h-[min(62svh,calc(100svh-12rem))]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    className="object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-6">
                  <h3 className="display-sm">
                    <span className="label mr-4 align-middle">{String(index + 1).padStart(2, "0")}</span>
                    {project.title}
                  </h3>
                  <p className="body-sm shrink-0 text-right">{project.sector ?? project.role}</p>
                </div>
              </Link>
            </article>
          ))}

          <div className={pinned ? "flex w-[34vw] shrink-0 flex-col items-start justify-center pl-8" : ""}>
            <p className="display-md">
              {projects.length} live sites <em>and counting.</em>
            </p>
            <div className="mt-8">
              <Button href={siteConfig.projectsHref}>View all projects</Button>
            </div>
          </div>
        </motion.div>

        {pinned ? (
          <motion.span
            aria-hidden="true"
            className="absolute inset-x-10 bottom-8 h-px origin-left bg-accent"
            style={{ scaleX: progress }}
          />
        ) : null}
      </div>
    </section>
  );
}
