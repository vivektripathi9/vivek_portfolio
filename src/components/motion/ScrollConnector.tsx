"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollConnector() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-4 z-[2] hidden w-px md:left-6 lg:block xl:left-10"
      aria-hidden="true"
    >
      <div className="absolute inset-y-10 left-0 w-px bg-[#9e8857]/20" />
      <motion.div
        className="absolute left-0 top-10 h-[calc(100%-5rem)] w-px origin-top bg-[#9e8857]"
        style={{ scaleY: reduceMotion ? 1 : scaleY }}
      />
    </div>
  );
}
