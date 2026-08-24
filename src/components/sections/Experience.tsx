"use client";

import { motion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { experience } from "@/data/experience";

export function Experience() {
  const outro = useOutro();

  return (
    <section id="experience" className="section-padding">
      <Container className="space-y-10">
        <Reveal>
          <motion.div style={outro && !outro.reduceMotion ? { color: outro.textColor } : undefined}>
            <Typography
              as="h2"
              variant="eyebrow"
              className="min-w-[250px] p-2 !text-inherit lg:min-w-[400px]"
            >
              Experience
            </Typography>
          </motion.div>
        </Reveal>

        <div className="relative">
          <AnimatedLine
            axis="y"
            className="absolute left-1/2 top-[-40px] z-[1] hidden h-[calc(100%+80px)] w-1 -translate-x-1/2 md:block lg:top-[-80px] lg:h-[calc(100%+120px)]"
            thickness={3}
            offset={["start 85%", "end 25%"]}
          />

          <div className="grid gap-8 md:gap-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
                  <article
                    className={`relative grid md:grid-cols-2 md:gap-10 ${
                      isLeft ? "" : "md:[&>*]:col-start-2"
                    }`}
                  >
                    <div
                      className={`border border-[var(--border)] bg-white p-5 shadow-sm md:p-6 ${
                        isLeft ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <Typography variant="caption" className="mb-3 block text-black/70">
                        {item.period}
                      </Typography>
                      <Typography
                        as="h3"
                        variant="h5"
                        className="mb-4 inline-block bg-[rgba(87,109,158,0.12)] px-3 py-2 uppercase text-[rgba(87,109,158,0.85)]"
                      >
                        {item.company}
                      </Typography>
                      <Typography variant="body-md" className="italic text-black/85">
                        {item.summary}
                      </Typography>
                    </div>

                    <AnimatedLine
                      axis="x"
                      delay={0.1}
                      from={isLeft ? "end" : "start"}
                      className={`absolute top-8 hidden h-1 w-10 md:block ${
                        isLeft ? "right-1/2" : "left-1/2"
                      }`}
                      thickness={2}
                    />
                    <span className="absolute left-1/2 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#9e8857] bg-white md:block" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
