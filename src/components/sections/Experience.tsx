"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { experience } from "@/data/experience";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="experience" className="section-padding border-t border-line">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="label mb-5">Experience</p>
            <TextReveal className="display-lg" text={"Four years\nof *shipping*"} />
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-line" />
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px origin-top bg-accent"
            style={{ scaleY: reduceMotion ? 1 : scaleY }}
          />
          {[...experience].reverse().map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative pb-16 pl-8 last:pb-0 md:pl-14">
              <span aria-hidden="true" className="absolute -left-[4px] top-2 h-[9px] w-[9px] rounded-full bg-accent" />
              <Reveal>
                <p className="label">{item.period}</p>
                <h3 className="display-sm mt-3">
                  {item.role} <em>at</em> {item.company}
                </h3>
                <p className="body-md mt-4 max-w-2xl">{item.summary}</p>
                {item.quote ? (
                  <blockquote className="mt-5 max-w-2xl font-serif text-xl leading-snug text-muted italic">
                    “{item.quote}”
                  </blockquote>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
