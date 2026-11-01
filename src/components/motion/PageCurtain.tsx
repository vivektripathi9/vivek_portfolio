"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

/** Gold wipe that lifts off each new page after a route change. */
export function PageCurtain() {
  const pathname = usePathname();
  const reduceMotion = useHydratedReducedMotion();

  if (reduceMotion) return null;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] origin-top bg-[#e3c285]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
    </AnimatePresence>
  );
}
