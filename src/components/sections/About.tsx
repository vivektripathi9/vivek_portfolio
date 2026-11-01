"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ClipReveal, Reveal } from "@/components/motion/Reveal";
import { ScrollWords } from "@/components/motion/ScrollWords";
import { TextReveal } from "@/components/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/ui/Spotlight";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const categories = ["Languages", "Frameworks", "Tools"] as const;

function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useHydratedReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = Number(match?.[1] ?? 0);
  const suffix = match?.[2] ?? "";
  const spring = useSpring(0, { stiffness: 45, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring]);
  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, spring, target]);

  return (
    <Spotlight className="flex min-h-48 flex-col justify-between rounded-2xl border border-line p-6">
      <div ref={ref}>
        <p className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none font-medium tracking-[-0.04em] tabular-nums" aria-label={value}>
          {reduceMotion ? target : display}
          <span className="text-accent">{suffix}</span>
        </p>
      </div>
      <p className="body-sm mt-8">{label}</p>
    </Spotlight>
  );
}

export function About() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="theme-light relative z-10 rounded-[2rem] section-padding md:rounded-[3rem]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="label mb-8">About</p>
            <ScrollWords className="display-md" text={siteConfig.about} />
            <Reveal className="mt-10">
              <p className="body-lg max-w-2xl">{siteConfig.aboutSecondary}</p>
            </Reveal>
          </div>
          <div ref={portraitRef} className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <ClipReveal className="relative aspect-[4/5] rounded-2xl">
              <motion.div className="relative -top-[12%] h-[124%] w-full" style={reduceMotion ? undefined : { y: imageY }}>
                <Image
                  src={siteConfig.portrait}
                  alt={`${siteConfig.name} portrait`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </motion.div>
            </ClipReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3">
          {siteConfig.stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div id="skills" className="mt-24 md:mt-36">
          <TextReveal className="display-lg" text={"The *toolkit*"} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category} delay={index * 0.08}>
                <Spotlight className="h-full rounded-2xl border border-line p-6">
                  <h3 className="label">{category}</h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2 rounded-full border border-line bg-white/60 py-1.5 pl-2 pr-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <Image src={skill.icon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                          {skill.name}
                        </li>
                      ))}
                  </ul>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="display-md mt-24 md:mt-36">
          More is <em>Less</em> and <em>Less</em> is More.
        </p>
      </Container>
    </section>
  );
}
