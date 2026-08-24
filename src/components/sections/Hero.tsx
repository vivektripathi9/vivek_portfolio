"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] ?? "" };
}

function AnimatedStat({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const { target, suffix } = parseStatValue(value);
  const spring = useSpring(0, { stiffness: 70, damping: 22, mass: 0.8 });
  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    if (inView) {
      const timeout = window.setTimeout(() => spring.set(target), delay * 1000);
      return () => window.clearTimeout(timeout);
    }
    spring.set(0);
    setDisplay(0);
  }, [delay, inView, reduceMotion, spring, target]);

  useEffect(() => {
    if (reduceMotion) return;
    return spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [reduceMotion, spring]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-1.5 text-3xl font-black tabular-nums text-[#9e8857] sm:text-4xl lg:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="type-body-sm mx-auto max-w-[9rem] text-black/80">{label}</p>
    </motion.div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % siteConfig.rotatingRoles.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative min-h-screen pb-16 pt-16 md:pb-20 md:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="space-y-6 lg:col-span-7 xl:col-span-8">
            <Reveal>
              <p className="text-base font-light text-black/90 md:text-lg">
                {siteConfig.heroIntro}&nbsp;
              </p>
              <div className="relative h-[clamp(3rem,9vw,5rem)] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={siteConfig.rotatingRoles[roleIndex]}
                    initial={reduceMotion ? false : { y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: -28, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Typography as="p" variant="display-lg" className="text-black">
                      {siteConfig.rotatingRoles[roleIndex]}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="type-body-md max-w-xl text-black/80">
                Hi! I&apos;m <strong className="font-semibold text-black">{siteConfig.name}</strong>. A{" "}
                <strong className="font-semibold text-black">{siteConfig.title}</strong> with 4 years
                of experience specializing in building high-performance, scalable web solutions. I
                focus on delivering efficient software and exceptional user experiences.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <Button href={siteConfig.hireUrl}>Hire Me</Button>
            </Reveal>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
              {siteConfig.stats.map((stat, index) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={0.08 + index * 0.12}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#about"
            className="type-nav text-[#9e8857] transition hover:text-black"
          >
            Scroll Down ↓
          </a>
        </div>
      </Container>
    </section>
  );
}
