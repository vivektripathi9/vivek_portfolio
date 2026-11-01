"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      data-reveal
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Image block that opens with a clip-path wipe while its content settles from a slight zoom. */
export function ClipReveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = useHydratedReducedMotion();
  // Observed on the wrapper: a fully clipped element can never report as in view itself.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        data-reveal
        className="h-full w-full overflow-hidden rounded-[inherit]"
        initial={reduceMotion ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          data-reveal
          className="h-full w-full"
          initial={reduceMotion ? false : { scale: 1.2 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.5, delay, ease }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
