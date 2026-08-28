"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
