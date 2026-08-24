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
  const from = Math.min(start + 0.28 + index * 0.045, 0.86);
  const to = Math.min(from + 0.16, 1);
  const opacity = useTransform(progress, [from, to], [0, 1]);
  const y = useTransform(progress, [from, to], [18, 0]);
  const scale = useTransform(progress, [from, to], [0.72, 1]);
  const rotate = useTransform(progress, [from, to], [index % 2 === 0 ? -8 : 8, 0]);

  return (
    <motion.li
      className="list-none"
      style={reduceMotion ? undefined : { opacity, y, scale, rotate }}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.14 }}
      whileTap={reduceMotion ? undefined : { scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div
        title={item.name}
        className="relative flex h-8 w-8 cursor-default items-center justify-center sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
      >
        <Image
          src={item.icon}
          alt={`${item.name} logo`}
          width={48}
          height={48}
          className="h-full w-full object-contain drop-shadow-sm"
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
    offset: ["start 94%", "start 32%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 26,
    mass: 0.6,
    restDelta: 0.0005,
  });

  const start = Math.min(delay, 0.2);
  // Continuous draw around the frame: top → right → bottom → left
  const top = useTransform(progress, [start, start + 0.2], [0, 1]);
  const right = useTransform(progress, [start + 0.16, start + 0.38], [0, 1]);
  const bottom = useTransform(progress, [start + 0.34, start + 0.56], [0, 1]);
  const left = useTransform(progress, [start + 0.5, start + 0.72], [0, 1]);
  const frameGlow = useTransform(
    progress,
    [start, start + 0.35, start + 0.75],
    [0.25, 0.85, 1],
  );

  return (
    <div ref={ref} className="relative min-w-0 w-full">
      <div className="relative px-3 py-4 sm:px-5 sm:py-5 md:px-6">
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] origin-left bg-[#9e8857]"
          style={{
            width: "100%",
            scaleX: reduceMotion ? 1 : top,
            opacity: reduceMotion ? 1 : frameGlow,
          }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute right-0 top-0 w-[3px] origin-top bg-[#9e8857]"
          style={{
            height: "100%",
            scaleY: reduceMotion ? 1 : right,
            opacity: reduceMotion ? 1 : frameGlow,
          }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] origin-right bg-[#9e8857]"
          style={{
            width: "100%",
            scaleX: reduceMotion ? 1 : bottom,
            opacity: reduceMotion ? 1 : frameGlow,
          }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 w-[3px] origin-top bg-[#9e8857]"
          style={{
            height: "100%",
            scaleY: reduceMotion ? 1 : left,
            opacity: reduceMotion ? 1 : frameGlow,
          }}
        />

        {/* Soft inner wash as the frame completes */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(158,136,87,0.08),transparent_70%)]"
          style={{ opacity: reduceMotion ? 0 : frameGlow }}
        />

        <ul className="relative flex flex-wrap items-center justify-start gap-x-4 gap-y-4 sm:gap-x-5 sm:gap-y-5 md:gap-x-6 lg:gap-x-7">
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
