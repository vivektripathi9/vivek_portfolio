"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";

type OutroContextValue = {
  progress: MotionValue<number>;
  textColor: MotionValue<string>;
  mutedColor: MotionValue<string>;
  reduceMotion: boolean;
};

const OutroContext = createContext<OutroContextValue | null>(null);

export function useOutro() {
  return useContext(OutroContext);
}

/**
 * Scroll-linked white → black fade covering Experience → Footer.
 * Soft start just after mid-Experience; solid black by Contact/Footer.
 */
export function OutroZone({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 ≈ just after mid-Experience (Experience is the first ~25–35% of this block)
    // 1 ≈ Contact/Footer fully in view → solid black
    offset: ["22% 75%", "78% 100%"],
  });

  // Slow ease-in blend: linger near white, then deepen into black
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.85, 1],
    [
      "rgb(255, 255, 255)",
      "rgb(235, 235, 235)",
      "rgb(120, 120, 120)",
      "rgb(25, 25, 25)",
      "rgb(0, 0, 0)",
    ],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.65],
    ["rgb(10, 10, 10)", "rgb(45, 45, 45)", "rgb(255, 255, 255)"],
  );

  const mutedColor = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.65],
    ["rgba(10, 10, 10, 0.7)", "rgba(35, 35, 35, 0.75)", "rgba(255, 255, 255, 0.75)"],
  );

  return (
    <OutroContext.Provider
      value={{ progress: scrollYProgress, textColor, mutedColor, reduceMotion }}
    >
      <motion.div
        ref={ref}
        className="relative"
        style={reduceMotion ? undefined : { backgroundColor: background }}
      >
        {children}
      </motion.div>
    </OutroContext.Provider>
  );
}
