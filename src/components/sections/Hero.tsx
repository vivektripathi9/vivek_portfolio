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
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: null as number | null, suffix: value };
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
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { target, suffix } = parseStatValue(value);
  const spring = useSpring(0, { stiffness: 70, damping: 22, mass: 0.8 });
  const [display, setDisplay] = useState(reduceMotion && target !== null ? target : 0);

  useEffect(() => {
    if (target === null) return;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    if (inView) {
      const timeout = window.setTimeout(() => spring.set(target), delay * 1000);
      return () => window.clearTimeout(timeout);
    }
  }, [delay, inView, reduceMotion, spring, target]);

  useEffect(() => {
    if (reduceMotion || target === null) return;
    return spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [reduceMotion, spring, target]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        className="mb-1.5 text-2xl font-black tabular-nums text-[#9e8857] sm:text-4xl lg:text-5xl"
        aria-label={`${value} ${label}`}
      >
        {target === null ? suffix : `${display}${suffix}`}
      </p>
      <p className="type-body-sm mx-auto max-w-[6.5rem] text-[0.7rem] leading-snug text-black/80 sm:max-w-[9rem] sm:text-[0.875rem]">
        {label}
      </p>
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
    <section id="home" className="relative min-h-[100svh] pb-14 pt-6 sm:pb-16 sm:pt-8 md:pb-20 md:pt-12">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="space-y-5 sm:space-y-6 lg:col-span-7 xl:col-span-8">
            <Reveal>
              <p className="text-base font-light text-black/90 md:text-lg">
                {siteConfig.heroIntro}
              </p>
              <Typography
                as="h1"
                variant="display-lg"
                className="overflow-hidden text-black"
              >
                <span className="sr-only">{siteConfig.firstName}</span>
                <span aria-hidden="true" className="inline-flex">
                  {siteConfig.firstName.split("").map((letter, index) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      className="inline-block"
                      initial={reduceMotion ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.72,
                        delay: 0.08 + index * 0.055,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </Typography>
              <div className="relative h-[1.5rem] overflow-hidden sm:h-[1.75rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={siteConfig.rotatingRoles[roleIndex]}
                    initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: -16, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 text-sm font-semibold uppercase tracking-[0.28em] text-[#9e8857] sm:text-base"
                  >
                    {siteConfig.rotatingRoles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="type-body-md max-w-xl text-black/80">
                {siteConfig.heroBio}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button href={siteConfig.hireUrl}>Hire Me</Button>
                <Button href={siteConfig.whatsappUrl} variant="whatsapp">
                  <WhatsAppIcon />
                  WhatsApp
                </Button>
                <Button href={siteConfig.projectsHref} variant="outline">
                  See work
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
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

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-16">
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-3 type-nav text-[#9e8857] transition hover:text-black"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Scroll
            <motion.span
              aria-hidden="true"
              className="block h-9 w-px bg-current"
              animate={reduceMotion ? undefined : { scaleY: [0.45, 1, 0.45], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
