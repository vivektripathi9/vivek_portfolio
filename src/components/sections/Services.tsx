"use client";

import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { Spotlight } from "@/components/ui/Spotlight";
import { serviceFaqs, serviceSteps, services } from "@/data/services";
import { skills } from "@/data/skills";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const skillByName = new Map(skills.map((skill) => [skill.name, skill]));

function stackItems(names: string[]) {
  return names
    .map((name) => skillByName.get(name))
    .filter((item): item is (typeof skills)[number] => Boolean(item));
}

function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof serviceSteps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduceMotion = useHydratedReducedMotion();
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index) * 0.035]);

  return (
    <div className="sticky" style={{ top: `${6.5 + index * 1.75}rem` }}>
      <motion.article
        className="flex min-h-[22rem] origin-top flex-col justify-between rounded-3xl border border-line bg-background p-7 shadow-[0_-12px_40px_rgba(15,15,16,0.07)] md:p-12"
        style={reduceMotion ? undefined : { scale }}
      >
        <div className="flex items-start justify-between gap-6">
          <span className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-none font-medium tracking-[-0.04em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ServiceGlyph name={step.icon} className="h-7 w-7" />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-10">
          <h3 className="display-md">{step.title}</h3>
          <p className="body-lg">{step.details}</p>
        </div>
      </motion.article>
    </div>
  );
}

export function Services() {
  const reduceMotion = useHydratedReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeId, setActiveId] = useState(services[0].id);
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stepsProgress } = useScroll({ target: stepsRef, offset: ["start start", "end end"] });

  return (
    <>
      <section className="canvas-dots pb-16 pt-36 md:pb-24 md:pt-48">
        <Container className="text-center">
          <p className="label mb-6">Services — {String(services.length).padStart(2, "0")}</p>
          <TextReveal as="h1" className="display-xl" text={"Idea to\n*live site.*"} stagger={0.08} />
          <p className="body-lg mx-auto mt-8 max-w-2xl">
            I take brands from idea to a live site you can sell on. New storefronts, redesigns, migrations,
            campaign pages, and the front-end and back-end work in between.
          </p>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="Services on this page" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-32 space-y-1">
              {services.map((service) => {
                const active = activeId === service.id;
                return (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      aria-current={active ? "true" : undefined}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-300 ${active ? "bg-surface text-foreground" : "text-soft hover:text-foreground"}`}
                    >
                      <span className={`font-mono text-xs ${active ? "text-accent" : ""}`}>{service.number}</span>
                      {service.shortTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ol className="space-y-24 md:space-y-36 lg:col-span-9">
            {services.map((service) => {
              const stack = stackItems(service.stack);

              return (
                <motion.li
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28"
                  onViewportEnter={() => setActiveId(service.id)}
                  viewport={{ amount: 0.3 }}
                >
                  <article>
                    <p className="label">{service.number} — {service.timeline}</p>
                    <TextReveal className="display-lg mt-4" text={service.title} />
                    <Reveal className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
                      <p className="body-lg">{service.details}</p>
                      <div className="space-y-5">
                        <p className="body-md">{service.detailsExtra}</p>
                        <p className="body-md">
                          <span className="text-foreground">Best for: </span>
                          {service.bestFor}
                        </p>
                      </div>
                    </Reveal>

                    <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item, index) => (
                        <li key={item.label}>
                          <Reveal delay={index * 0.06} className="h-full">
                            <Spotlight className="h-full rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/60">
                              <span className="text-accent">
                                <ServiceGlyph name={item.icon} className="h-6 w-6" />
                              </span>
                              <p className="mt-5 font-medium">{item.label}</p>
                              <p className="body-sm mt-1">{item.text}</p>
                            </Spotlight>
                          </Reveal>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {service.includes.map((item) => (
                        <span key={item} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
                          {item}
                        </span>
                      ))}
                      {stack.map((item) => (
                        <span key={item.name} title={item.name} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3efe7]">
                          <Image src={item.icon} alt={item.name} width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="theme-light rounded-[2rem] section-padding md:rounded-[3rem]">
        <Container>
          <p className="label mb-5">Process</p>
          <TextReveal className="display-lg" text={"How a project *moves*"} />
          <div ref={stepsRef} className="mt-12 space-y-6 pb-8">
            {serviceSteps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} total={serviceSteps.length} progress={stepsProgress} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <TextReveal className="display-lg" text={"Common\n*questions*"} />
          </div>
          <ul className="border-b border-line lg:col-span-7">
            {serviceFaqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <li key={item.question} className="border-t border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="display-sm">{item.question}</span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl leading-none transition-colors ${isOpen ? "border-accent text-accent" : "border-line"}`}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-md max-w-2xl pb-7">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
