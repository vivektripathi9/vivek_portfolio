"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, type CSSProperties } from "react";

import { PageEnter } from "@/components/motion/PageEnter";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { Typography } from "@/components/ui/Typography";
import { serviceFaqs, serviceSteps, services } from "@/data/services";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const skillByName = new Map(skills.map((skill) => [skill.name, skill]));
const stepColors = ["#3d5a80", "#c45c3e", "#2f5d50"] as const;

function stackItems(names: string[]) {
  return names
    .map((name) => skillByName.get(name))
    .filter((item): item is (typeof skills)[number] => Boolean(item));
}

function bandStyle(accent: string, wash = 16): CSSProperties {
  return {
    backgroundColor: `color-mix(in srgb, ${accent} ${wash}%, white)`,
  };
}

export function Services() {
  const reduceMotion = useHydratedReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageEnter>
      <section className="section-padding bg-[#f4f6f8] pt-10 md:pt-14">
        <Container wide className="space-y-12 md:space-y-16">
          <header className="grid gap-8 border-b border-black/10 pb-10 md:grid-cols-12 md:items-start md:gap-10 md:pb-14 lg:gap-14">
            <div className="md:col-span-5">
              <Reveal>
                <h1 className="type-eyebrow text-[#1f4b6e]">Services</h1>
              </Reveal>
              <motion.div
                aria-hidden="true"
                className="mt-5 h-1.5 w-24 origin-left bg-[#c45c3e]"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <Reveal delay={0.1}>
                <motion.nav
                  aria-label="Services on this page"
                  className="mt-6 flex flex-wrap gap-2"
                  initial={reduceMotion ? false : "hidden"}
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.18 },
                    },
                  }}
                >
                  {services.map((service) => (
                    <motion.a
                      key={service.id}
                      href={`#${service.id}`}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em]"
                      style={{ backgroundColor: service.accent, color: "#fff" }}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    >
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/75">
                        {service.number}
                      </span>
                      {service.shortTitle}
                    </motion.a>
                  ))}
                </motion.nav>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.08}>
                <Typography variant="body-lg" className="max-w-2xl text-black/80">
                  I take brands from idea to a live site you can sell on. New
                  storefronts, redesigns, migrations, campaign pages, and the
                  front-end and back-end work in between.
                </Typography>
              </Reveal>
            </div>
          </header>

          <ol className="space-y-6 md:space-y-8">
            {services.map((service, index) => {
              const stack = stackItems(service.stack);

              return (
                <li key={service.id} id={service.id} className="scroll-mt-28">
                  <Reveal delay={Math.min(index * 0.04, 0.12)}>
                    <article
                      className="grid gap-8 border-l-[6px] p-6 sm:p-8 md:grid-cols-12 md:gap-10 md:p-10 lg:gap-14 lg:p-12"
                      style={{
                        ...bandStyle(service.accent),
                        borderLeftColor: service.accent,
                      }}
                    >
                      <div className="md:col-span-4">
                        <p
                          className="font-mono text-[0.7rem] tracking-[0.22em]"
                          style={{ color: service.accent }}
                        >
                          {service.number}
                        </p>
                        <div className="mt-4 flex items-start gap-3">
                          <motion.span
                            className="flex h-12 w-12 shrink-0 items-center justify-center text-white"
                            style={{ backgroundColor: service.accent }}
                            whileHover={
                              reduceMotion ? undefined : { rotate: -8, scale: 1.06 }
                            }
                            transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          >
                            <ServiceGlyph name={service.icon} className="h-6 w-6" />
                          </motion.span>
                          <Typography as="h2" variant="h3" className="text-black">
                            {service.title}
                          </Typography>
                        </div>
                        <p
                          className="mt-5 inline-block px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.14em] text-white"
                          style={{ backgroundColor: service.accent }}
                        >
                          {service.timeline}
                        </p>
                      </div>

                      <div className="min-w-0 space-y-8 md:col-span-8">
                        <div className="space-y-4">
                          <Typography variant="body-lg" className="text-black/80">
                            {service.details}
                          </Typography>
                          <Typography variant="body-md" className="text-black/65">
                            {service.detailsExtra}
                          </Typography>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                          <div
                            className="border-l-4 bg-white p-4 sm:p-5"
                            style={{ borderLeftColor: service.accent }}
                          >
                            <p
                              className="text-[0.7rem] font-semibold uppercase tracking-[0.16em]"
                              style={{ color: service.accent }}
                            >
                              Best for
                            </p>
                            <p className="mt-2 type-body-sm text-black/70">
                              {service.bestFor}
                            </p>
                          </div>
                          <div
                            className="border-l-4 bg-white p-4 sm:p-5"
                            style={{ borderLeftColor: service.accent }}
                          >
                            <p
                              className="text-[0.7rem] font-semibold uppercase tracking-[0.16em]"
                              style={{ color: service.accent }}
                            >
                              Includes
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {service.includes.map((item) => (
                                <li
                                  key={item}
                                  className="px-2.5 py-1 text-[0.72rem] leading-snug"
                                  style={{
                                    color: service.accent,
                                    backgroundColor: `color-mix(in srgb, ${service.accent} 12%, white)`,
                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <ul className="grid gap-3 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <motion.li
                              key={item.label}
                              className="flex gap-3 border-t-2 bg-white p-4"
                              style={{ borderTopColor: service.accent }}
                              whileHover={reduceMotion ? undefined : { y: -3 }}
                              transition={{ type: "spring", stiffness: 380, damping: 24 }}
                            >
                              <span
                                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-white"
                                style={{ backgroundColor: service.accent }}
                              >
                                <ServiceGlyph name={item.icon} className="h-5 w-5" />
                              </span>
                              <div>
                                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-black">
                                  {item.label}
                                </p>
                                <p className="mt-1 type-body-sm text-black/60">
                                  {item.text}
                                </p>
                              </div>
                            </motion.li>
                          ))}
                        </ul>

                        {stack.length > 0 ? (
                          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            {stack.map((item) => (
                              <li key={item.name} className="flex items-center gap-2">
                                <Image
                                  src={item.icon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="h-5 w-5 object-contain"
                                />
                                <span className="text-[0.65rem] uppercase tracking-[0.12em] text-black/45">
                                  {item.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <div className="pt-4 md:pt-8">
            <Reveal>
              <Typography as="h2" variant="h3" className="mb-8 text-black">
                How a project moves
              </Typography>
            </Reveal>
            <ol className="grid gap-4 sm:grid-cols-3 sm:gap-5">
              {serviceSteps.map((step, index) => {
                const color = stepColors[index];
                return (
                  <motion.li
                    key={step.title}
                    className="border-t-4 bg-white p-6 md:p-8"
                    style={{ borderTopColor: color }}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  >
                    <Reveal delay={index * 0.06}>
                      <span
                        className="flex h-11 w-11 items-center justify-center text-white"
                        style={{ backgroundColor: color }}
                      >
                        <ServiceGlyph name={step.icon} className="h-5 w-5" />
                      </span>
                      <p
                        className="mt-5 font-mono text-[0.7rem] tracking-[0.22em]"
                        style={{ color }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <Typography as="h3" variant="h4" className="mt-2 text-black">
                        {step.title}
                      </Typography>
                      <Typography variant="body-md" className="mt-3 text-black/70">
                        {step.details}
                      </Typography>
                    </Reveal>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          <div>
            <Reveal>
              <Typography as="h2" variant="h3" className="mb-6 text-black">
                Common questions
              </Typography>
            </Reveal>
            <ul className="divide-y divide-black/10 border border-black/10 bg-white">
              {serviceFaqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <li
                    key={item.question}
                    style={
                      isOpen
                        ? { backgroundColor: "color-mix(in srgb, #3d5a80 7%, white)" }
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-[0.95rem] font-semibold text-black sm:text-base">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-lg leading-none"
                        style={{ color: isOpen ? "#3d5a80" : "rgba(0,0,0,0.45)" }}
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
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-4xl px-5 pb-5 type-body-md text-black/65 sm:px-6">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal>
            <div
              className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-10"
              style={{ backgroundColor: "#1f4b6e" }}
            >
              <div className="max-w-xl space-y-2">
                <Typography as="h2" variant="h4" className="text-white">
                  Ready when you are
                </Typography>
                <Typography variant="body-md" className="text-white/75">
                  Book a 30-minute call, or look through the work first.
                </Typography>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={siteConfig.hireUrl}>Hire Me</Button>
                <Button
                  href={siteConfig.projectsHref}
                  variant="outline"
                  className="!border-white !text-white hover:!bg-white hover:!text-[#1f4b6e]"
                >
                  See work
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageEnter>
  );
}
