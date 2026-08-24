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
    stiffness: 55,
    damping: 28,
    mass: 0.55,
    restDelta: 0.0005,
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
  glow?: boolean;
};

export function AnimatedLine({
  axis = "y",
  className = "",
  delay = 0,
  from = "start",
  thickness = 4,
  offset,
  glow = false,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const progress = useLinkedProgress(ref, offset ?? ["start 92%", "start 30%"]);
  const origin =
    axis === "y"
      ? from === "end"
        ? "50% 100%"
        : "50% 0%"
      : from === "end"
        ? "100% 50%"
        : "0% 50%";
  const start = Math.min(delay, 0.4);
  const scale = useAxisScale(progress, axis, start, 1);
  const opacity = useTransform(progress, [start, Math.min(start + 0.2, 0.85)], [0.35, 1]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`}>
      {glow ? (
        <motion.div
          className="absolute inset-0 bg-[#9e8857]/35 blur-[3px]"
          style={{
            transformOrigin: origin,
            width: axis === "y" ? thickness + 4 : "100%",
            height: axis === "x" ? thickness + 4 : "100%",
            marginLeft: axis === "y" ? -2 : 0,
            marginTop: axis === "x" ? -2 : 0,
            scaleX: reduceMotion ? 1 : scale.scaleX,
            scaleY: reduceMotion ? 1 : scale.scaleY,
          }}
        />
      ) : null}
      <motion.div
        className="relative bg-[#9e8857]"
        style={{
          transformOrigin: origin,
          width: axis === "y" ? thickness : "100%",
          height: axis === "x" ? thickness : "100%",
          scaleX: reduceMotion ? 1 : scale.scaleX,
          scaleY: reduceMotion ? 1 : scale.scaleY,
          opacity: reduceMotion ? 1 : opacity,
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
  const progress = useLinkedProgress(ref, ["start 96%", "start 38%"]);
  const start = Math.min(delay, 0.3);
  const mid = Math.min(start + 0.38, 0.82);
  const vertical = useTransform(progress, [start, mid], [0, 1]);
  const horizontal = useTransform(progress, [Math.min(start + 0.22, 0.65), 1], [0, 1]);
  const opacity = useTransform(progress, [start, mid], [0.4, 1]);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`}>
      <motion.div
        className="absolute left-0 top-0 origin-top bg-[#9e8857]"
        style={{
          width: thickness,
          height: "100%",
          scaleY: reduceMotion ? 1 : vertical,
          opacity: reduceMotion ? 1 : opacity,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 origin-left bg-[#9e8857]"
        style={{
          height: thickness,
          width: "100%",
          scaleX: reduceMotion ? 1 : horizontal,
          opacity: reduceMotion ? 1 : opacity,
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
