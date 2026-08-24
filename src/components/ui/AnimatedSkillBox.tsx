"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import type { Skill } from "@/data/skills";

type SkillIconProps = {
  item: Skill;
  progress: MotionValue<number>;
  start: number;
  index: number;
  reduceMotion: boolean | null;
};

function SkillIcon({ item, progress, start, index, reduceMotion }: SkillIconProps) {
  const from = Math.min(start + 0.22 + index * 0.03, 0.88);
  const to = Math.min(start + 0.4 + index * 0.03, 1);
  const opacity = useTransform(progress, [from, to], [0, 1]);
  const y = useTransform(progress, [from, to], [10, 0]);

  return (
    <motion.li
      className="list-none"
      style={reduceMotion ? undefined : { opacity, y }}
    >
      <div
        title={item.name}
        className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
      >
        <Image
          src={item.icon}
          alt={`${item.name} logo`}
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>
    </motion.li>
  );
}

type AnimatedSkillBoxProps = {
  items: Skill[];
  delay?: number;
};

export function AnimatedSkillBox({ items, delay = 0 }: AnimatedSkillBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 40%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    restDelta: 0.001,
  });

  const start = Math.min(delay, 0.25);
  // Grow from the top-left join (where the tree L meets the frame)
  const top = useTransform(progress, [start, start + 0.22], [0, 1]);
  const left = useTransform(progress, [start + 0.02, start + 0.28], [0, 1]);
  const bottom = useTransform(progress, [start + 0.26, start + 0.5], [0, 1]);
  const right = useTransform(progress, [start + 0.48, start + 0.72], [0, 1]);

  return (
    <div ref={ref} className="relative min-w-0 w-full">
      <div className="relative px-3 py-4 sm:px-5 sm:py-5 md:px-6">
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] origin-left bg-[#9e8857]"
          style={{ width: "100%", scaleX: reduceMotion ? 1 : top }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 w-[3px] origin-top bg-[#9e8857]"
          style={{ height: "100%", scaleY: reduceMotion ? 1 : left }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] origin-left bg-[#9e8857]"
          style={{ width: "100%", scaleX: reduceMotion ? 1 : bottom }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute right-0 top-0 w-[3px] origin-top bg-[#9e8857]"
          style={{ height: "100%", scaleY: reduceMotion ? 1 : right }}
        />

        <ul className="flex flex-wrap items-center justify-start gap-x-4 gap-y-4 sm:gap-x-5 sm:gap-y-5 md:gap-x-6 lg:gap-x-7">
          {items.map((item, index) => (
            <SkillIcon
              key={item.name}
              item={item}
              progress={progress}
              start={start}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
