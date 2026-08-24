"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollConnector() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-2 z-[2] w-px sm:left-3 md:left-6 xl:left-10"
      aria-hidden="true"
    >
      <div className="absolute inset-y-8 left-0 w-px bg-[#9e8857]/25 sm:inset-y-10" />
      <motion.div
        className="absolute left-0 top-8 h-[calc(100%-4rem)] w-px origin-top bg-[#9e8857] sm:top-10 sm:h-[calc(100%-5rem)]"
        style={{ scaleY: reduceMotion ? 1 : scaleY }}
      />
    </div>
  );
}
