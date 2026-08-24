"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCorner, AnimatedLine } from "@/components/motion/AnimatedLine";
import { AnimatedSkillBox } from "@/components/ui/AnimatedSkillBox";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { skills } from "@/data/skills";

const categories = ["Languages", "Frameworks", "Tools"] as const;

const titleBranch =
  "absolute left-[-1rem] h-1 w-[calc(1rem+1.25rem)] sm:left-[-2rem] sm:w-[calc(2rem+2rem)] lg:left-[-2.5rem] lg:w-[calc(2.5rem+2.5rem)]";

const skillBranch =
  "absolute left-[calc(-1rem-1.25rem)] h-1 w-[calc(1rem+1.25rem)] sm:left-[calc(-2rem-2rem)] sm:w-[calc(2rem+2rem)] lg:left-[calc(-2.5rem-2.5rem)] lg:w-[calc(2.5rem+2.5rem)]";

function SpineNode({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={`absolute z-[3] block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#9e8857] bg-white ${className}`}
      initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        delay,
      }}
    >
      <motion.span
        className="absolute inset-[-5px] rounded-full border border-[#9e8857]/40"
        initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
        whileInView={
          reduceMotion
            ? undefined
            : { scale: [0.8, 1.35, 1], opacity: [0, 0.7, 0] }
        }
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1.4, delay: delay + 0.15, ease: "easeOut" }}
      />
    </motion.span>
  );
}

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-padding">
      <Container>
        <Reveal>
          <Typography as="h2" variant="eyebrow" className="mb-10 md:mb-14">
            Technology and Knowledge
          </Typography>
        </Reveal>

        <div className="relative ps-4 sm:ps-8 lg:ps-10">
          <AnimatedLine
            axis="y"
            glow
            className="absolute left-0 top-0 h-full w-1"
            thickness={3}
            offset={["start 92%", "end 8%"]}
          />

          <div className="relative space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
            {categories.map((category, index) => {
              const items = skills.filter((skill) => skill.category === category);
              const branchDelay = 0.04 + index * 0.06;

              return (
                <div key={category} className="relative pl-5 sm:pl-8 lg:pl-10">
                  <SpineNode
                    delay={0.05 + index * 0.08}
                    className="left-[-1rem] top-[0.85rem] sm:left-[-2rem] sm:top-4 lg:left-[-2.5rem]"
                  />

                  <AnimatedLine
                    axis="x"
                    glow
                    delay={branchDelay}
                    className={`${titleBranch} top-[0.85rem] sm:top-4`}
                    thickness={3}
                  />

                  <div className="relative mb-4 w-fit pb-2.5 sm:mb-6 sm:pb-4 lg:pb-5">
                    <AnimatedCorner
                      delay={branchDelay + 0.06}
                      className="absolute left-0 top-0 h-full w-full"
                      thickness={3}
                    />
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.45 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.12 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Typography
                        as="h3"
                        variant="h3"
                        className="relative z-[1] ps-2.5 text-lg uppercase tracking-wide text-black sm:ps-3 sm:text-2xl lg:text-4xl"
                      >
                        {category}
                      </Typography>
                    </motion.div>
                  </div>

                  <div className="relative">
                    <SpineNode
                      delay={0.12 + index * 0.08}
                      className="left-[calc(-1rem-1.25rem)] top-0 sm:left-[calc(-2rem-2rem)] lg:left-[calc(-2.5rem-2.5rem)]"
                    />

                    <AnimatedLine
                      axis="x"
                      glow
                      delay={branchDelay + 0.1}
                      className={`${skillBranch} top-0`}
                      thickness={3}
                    />

                    <AnimatedCorner
                      delay={branchDelay + 0.16}
                      className="absolute left-0 top-0 z-[1] h-8 w-3.5 sm:h-12 sm:w-5 lg:h-14 lg:w-6"
                      thickness={3}
                    />

                    <div className="pt-8 sm:pt-12 lg:pt-14">
                      <AnimatedSkillBox items={items} delay={branchDelay + 0.2} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
