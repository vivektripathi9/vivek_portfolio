"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { experience } from "@/data/experience";

export function Experience() {
  const outro = useOutro();
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding overflow-hidden">
      <Container className="space-y-10 sm:space-y-12 md:space-y-16">
        <Reveal>
          <motion.div
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
            style={outro && !outro.reduceMotion ? { color: outro.textColor } : undefined}
          >
            <div className="relative">
              <Typography
                as="h2"
                variant="eyebrow"
                className="min-w-0 p-2 !text-inherit sm:min-w-[250px] lg:min-w-[400px]"
              >
                Experience
              </Typography>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-2 flex gap-1.5 opacity-[0.12] sm:-right-8 sm:-top-3 sm:gap-2"
              >
                <Image
                  src="/website_asset/icons/studiovinari-brands-solid-full.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />
                <Image
                  src="/website_asset/icons/pied-piper-alt-brands-solid-full.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="mt-2 h-5 w-5 object-contain sm:mt-3 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <p className="max-w-xs type-body-sm !text-inherit opacity-70 md:text-right">
              Roles, teams, and the feedback that shaped the work.
            </p>
          </motion.div>
        </Reveal>

        <div className="relative">
          <AnimatedLine
            axis="y"
            glow
            className="absolute left-5 top-0 z-[1] h-full w-1 sm:left-6 md:left-10 lg:left-14"
            thickness={3}
            offset={["start 90%", "end 15%"]}
          />

          <ol className="relative space-y-8 sm:space-y-10 md:space-y-14 lg:space-y-16">
            {experience.map((item, index) => {
              const isOdd = index % 2 === 1;

              return (
                <Reveal key={`${item.company}-${item.period}`} delay={index * 0.06}>
                  <li className="relative pl-[4.25rem] sm:pl-24 md:pl-28 lg:pl-36">
                    <motion.div
                      className="absolute left-0 top-1 z-[2] sm:top-2"
                      initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
                      whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 border border-[#9e8857] bg-white"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute -inset-1 border border-[#9e8857]/35"
                        />
                        <Image
                          src={item.icon}
                          alt={`${item.company} mark`}
                          width={40}
                          height={40}
                          className="relative z-[1] h-6 w-6 object-contain opacity-90 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
                          style={{
                            filter:
                              "invert(48%) sepia(18%) saturate(700%) hue-rotate(6deg) brightness(90%)",
                          }}
                        />
                      </div>
                      <AnimatedLine
                        axis="x"
                        delay={0.08}
                        className="absolute left-full top-1/2 h-1 w-5 -translate-y-1/2 sm:w-8 md:w-10 lg:w-14"
                        thickness={2}
                      />
                    </motion.div>

                    <article
                      className={`relative overflow-hidden border border-black/15 bg-white/90 ${
                        isOdd ? "md:ml-8 lg:ml-16" : "md:mr-8 lg:mr-24"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -bottom-6 opacity-[0.06] ${
                          isOdd ? "-left-4" : "-right-4"
                        }`}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={180}
                          height={180}
                          className="h-28 w-28 object-contain sm:h-36 sm:w-36 lg:h-44 lg:w-44"
                        />
                      </div>

                      <div className="relative grid gap-4 p-4 sm:gap-6 sm:p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
                        <div className="flex items-center gap-3 sm:gap-4 md:flex-col md:items-start md:gap-5">
                          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-[#9e8857] sm:text-xs">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="type-caption whitespace-nowrap text-black/55 md:[writing-mode:vertical-rl] md:rotate-180">
                            {item.period}
                          </p>
                        </div>

                        <div className="min-w-0 space-y-3 sm:space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-block bg-[rgba(87,109,158,0.12)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(87,109,158,0.9)]">
                              {item.role}
                            </span>
                          </div>

                          <Typography
                            as="h3"
                            variant="h4"
                            className="uppercase tracking-wide text-black"
                          >
                            {item.company}
                          </Typography>

                          <p className="max-w-xl type-body-md text-black/75">
                            {item.summary}
                          </p>

                          {item.quote ? (
                            <blockquote className="relative max-w-xl pl-4 type-body-sm italic text-black/65 before:absolute before:left-0 before:top-1 before:h-[calc(100%-0.5rem)] before:w-0.5 before:bg-[#9e8857]">
                              {item.quote}
                            </blockquote>
                          ) : null}
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#9e8857]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#9e8857]"
                      />
                    </article>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
