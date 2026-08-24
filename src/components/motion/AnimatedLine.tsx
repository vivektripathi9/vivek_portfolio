"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type RefObject } from "react";

type Axis = "x" | "y";

function useLinkedProgress(
  target: RefObject<HTMLElement | null>,
  offset: [string, string] = ["start 90%", "start 35%"],
) {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as ["start 90%", "start 35%"],
  });

  return useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.001,
  });
}

function useAxisScale(
  progress: MotionValue<number>,
  axis: Axis,
  start = 0,
  end = 1,
) {
  const mapped = useTransform(progress, [start, end], [0, 1]);
  const scaleX = useTransform(mapped, (value) => (axis === "x" ? value : 1));
  const scaleY = useTransform(mapped, (value) => (axis === "y" ? value : 1));

  return { scaleX, scaleY };
}

type AnimatedLineProps = {
  axis?: Axis;
  className?: string;
  delay?: number;
  duration?: number;
  from?: "start" | "end";
  thickness?: number;
  offset?: [string, string];
};

export function AnimatedLine({
  axis = "y",
  className = "",
  delay = 0,
  from = "start",
  thickness = 4,
  offset,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const progress = useLinkedProgress(ref, offset ?? ["start 90%", "start 35%"]);
  const origin =
    axis === "y"
      ? from === "end"
        ? "50% 100%"
        : "50% 0%"
      : from === "end"
        ? "100% 50%"
        : "0% 50%";
  const start = Math.min(delay, 0.45);
  const scale = useAxisScale(progress, axis, start, 1);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`}>
      <motion.div
        className="bg-[#9e8857]"
        style={{
          transformOrigin: origin,
          width: axis === "y" ? thickness : "100%",
          height: axis === "x" ? thickness : "100%",
          scaleX: reduceMotion ? 1 : scale.scaleX,
          scaleY: reduceMotion ? 1 : scale.scaleY,
        }}
      />
    </div>
  );
}

type AnimatedCornerProps = {
  className?: string;
  delay?: number;
  duration?: number;
  thickness?: number;
};

export function AnimatedCorner({
  className = "",
  delay = 0,
  thickness = 4,
}: AnimatedCornerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const progress = useLinkedProgress(ref, ["start 95%", "start 40%"]);
  const start = Math.min(delay, 0.35);
  const vertical = useTransform(progress, [start, Math.min(start + 0.45, 0.9)], [0, 1]);
  const horizontal = useTransform(progress, [Math.min(start + 0.25, 0.7), 1], [0, 1]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`}>
      <motion.div
        className="absolute left-0 top-0 origin-top bg-[#9e8857]"
        style={{
          width: thickness,
          height: "100%",
          scaleY: reduceMotion ? 1 : vertical,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 origin-left bg-[#9e8857]"
        style={{
          height: thickness,
          width: "100%",
          scaleX: reduceMotion ? 1 : horizontal,
        }}
      />
    </div>
  );
}

type AnimatedFrameProps = {
  className?: string;
  delay?: number;
};

export function AnimatedFrame({ className = "" }: AnimatedFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const progress = useLinkedProgress(ref, ["start 95%", "center 45%"]);
  const top = useTransform(progress, [0, 0.28], [0, 1]);
  const left = useTransform(progress, [0.12, 0.45], [0, 1]);
  const bottom = useTransform(progress, [0.32, 0.7], [0, 1]);
  const right = useTransform(progress, [0.48, 1], [0, 1]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <motion.div
        className="absolute left-2 top-2 h-0.5 origin-left bg-[#9e8857]"
        style={{ width: "calc(100% - 16px)", scaleX: reduceMotion ? 1 : top }}
      />
      <motion.div
        className="absolute left-2 top-2 w-0.5 origin-top bg-[#9e8857]"
        style={{ height: "calc(100% - 16px)", scaleY: reduceMotion ? 1 : left }}
      />
      <motion.div
        className="absolute bottom-2 left-2 h-0.5 origin-right bg-[#9e8857]"
        style={{ width: "calc(100% - 16px)", scaleX: reduceMotion ? 1 : bottom }}
      />
      <motion.div
        className="absolute right-2 top-2 w-0.5 origin-bottom bg-[#9e8857]"
        style={{ height: "calc(100% - 16px)", scaleY: reduceMotion ? 1 : right }}
      />
    </div>
  );
}
