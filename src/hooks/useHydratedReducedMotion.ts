"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Matches SSR on the first paint, then follows prefers-reduced-motion. */
export function useHydratedReducedMotion() {
  const prefersReduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? Boolean(prefersReduced) : false;
}
