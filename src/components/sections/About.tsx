"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

function Gold({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-[#7a683f]">{children}</span>;
}

function AboutPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 35%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const top = useTransform(progress, [0, 0.3], [0, 1]);
  const right = useTransform(progress, [0.2, 0.55], [0, 1]);
  const bottom = useTransform(progress, [0.45, 0.75], [0, 1]);
  const left = useTransform(progress, [0.65, 1], [0, 1]);
  const imageReveal = useTransform(progress, [0.15, 0.55], [0, 1]);
  const imageY = useTransform(progress, [0, 1], [24, 0]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:mx-0 lg:max-w-[400px]">
      <div className="relative aspect-square w-full">
        <div className="absolute inset-[10%] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4">
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 h-[2px] origin-left bg-[#9e8857]"
            style={{ width: "100%", scaleX: reduceMotion ? 1 : top }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute right-0 top-0 w-[2px] origin-top bg-[#9e8857]"
            style={{ height: "100%", scaleY: reduceMotion ? 1 : right }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] origin-right bg-[#9e8857]"
            style={{ width: "100%", scaleX: reduceMotion ? 1 : bottom }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 w-[2px] origin-bottom bg-[#9e8857]"
            style={{ height: "100%", scaleY: reduceMotion ? 1 : left }}
          />
        </div>

        <motion.div
          className="relative z-[1] h-full w-full overflow-hidden rounded-md"
          style={reduceMotion ? undefined : { opacity: imageReveal, y: imageY }}
        >
          <Image
            src={siteConfig.portrait}
            alt={`${siteConfig.name} portrait`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 360px, 400px"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <AboutPortrait />

          <div className="space-y-6 md:space-y-7">
            <Reveal>
              <Typography as="h2" variant="eyebrow">
                About Me
              </Typography>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="type-body-lg text-black/85">
                My name is {siteConfig.firstName}, I&apos;m a developer who likes challenges. As a{" "}
                <Gold>Systems Engineer</Gold> and <Gold>Fullstack Developer</Gold>, I specialize in
                creating fast and scalable web applications applying the best <Gold>Back-End</Gold>{" "}
                technologies with modern <Gold>Front-End</Gold> interfaces.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="type-body-md text-black/80">
                I&apos;ve been working with various startups and companies developing applications,
                performing optimizations, and refactoring projects. My philosophy is{" "}
                <Gold>Simplicity</Gold> and <Gold>Functionality</Gold>. I strive to create scalable
                and simple applications capable of solving complex problems.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="type-h4 pt-1 text-black">
                More is <Gold>Less</Gold> and <Gold>Less</Gold> is <Gold>More</Gold>...
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
