"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function PageEnter({ children }: { children: ReactNode }) {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
