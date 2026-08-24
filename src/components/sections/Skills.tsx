"use client";

import { Reveal } from "@/components/motion/Reveal";
import { AnimatedCorner, AnimatedLine } from "@/components/motion/AnimatedLine";
import { AnimatedSkillBox } from "@/components/ui/AnimatedSkillBox";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { skills } from "@/data/skills";

const categories = ["Languages", "Frameworks", "Tools"] as const;

/** Title branch: from spine to category content (parent = category with pl-*). */
const titleBranch =
  "absolute left-[-1.25rem] h-1 w-[calc(1.25rem+1.5rem)] sm:left-[-2rem] sm:w-[calc(2rem+2rem)] lg:left-[-2.5rem] lg:w-[calc(2.5rem+2.5rem)]";

/** Skill branch: from spine to content (parent is already inside pl-*, so reach further left). */
const skillBranch =
  "absolute left-[calc(-1.25rem-1.5rem)] h-1 w-[calc(1.25rem+1.5rem)] sm:left-[calc(-2rem-2rem)] sm:w-[calc(2rem+2rem)] lg:left-[calc(-2.5rem-2.5rem)] lg:w-[calc(2.5rem+2.5rem)]";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <Reveal>
          <Typography as="h2" variant="eyebrow" className="mb-10 md:mb-14">
            Technology and Knowledge
          </Typography>
        </Reveal>

        <div className="relative ps-5 sm:ps-8 lg:ps-10">
          <AnimatedLine
            axis="y"
            className="absolute left-0 top-0 h-full w-1"
            thickness={4}
            offset={["start 90%", "end 10%"]}
          />

          <div className="relative space-y-12 md:space-y-16 lg:space-y-20">
            {categories.map((category, index) => {
              const items = skills.filter((skill) => skill.category === category);
              const branchDelay = 0.06 + index * 0.05;

              return (
                <div key={category} className="relative pl-6 sm:pl-8 lg:pl-10">
                  <AnimatedLine
                    axis="x"
                    delay={branchDelay}
                    className={`${titleBranch} top-[0.9rem] sm:top-4`}
                    thickness={4}
                  />

                  <div className="relative mb-5 w-fit pb-3 sm:mb-6 sm:pb-4 lg:pb-5">
                    <AnimatedCorner
                      delay={branchDelay + 0.05}
                      className="absolute left-0 top-0 h-full w-full"
                      thickness={3}
                    />
                    <Typography
                      as="h3"
                      variant="h3"
                      className="relative z-[1] ps-3 text-xl uppercase tracking-wide text-black sm:text-2xl lg:text-4xl"
                    >
                      {category}
                    </Typography>
                  </div>

                  <div className="relative">
                    <AnimatedLine
                      axis="x"
                      delay={branchDelay + 0.1}
                      className={`${skillBranch} top-0`}
                      thickness={4}
                    />

                    <AnimatedCorner
                      delay={branchDelay + 0.14}
                      className="absolute left-0 top-0 z-[1] h-10 w-4 sm:h-12 sm:w-5 lg:h-14 lg:w-6"
                      thickness={4}
                    />

                    <div className="pt-10 sm:pt-12 lg:pt-14">
                      <AnimatedSkillBox items={items} delay={branchDelay + 0.18} />
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
