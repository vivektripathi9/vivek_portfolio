"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** Matches SSR on the first paint, then follows prefers-reduced-motion. */
export function useHydratedReducedMotion() {
  const prefersReduced = useReducedMotion();
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  return hydrated ? Boolean(prefersReduced) : false;
}
