"use client";

import { useSyncExternalStore } from "react";

export const INTRO_EVENT = "vt:intro-done";

function subscribe(onChange: () => void) {
  window.addEventListener(INTRO_EVENT, onChange);
  return () => window.removeEventListener(INTRO_EVENT, onChange);
}

/** True once the preloader has lifted, so hero animations start as it clears. */
export function useIntroDone() {
  return useSyncExternalStore(
    subscribe,
    () => Boolean(document.documentElement.dataset.intro),
    () => false,
  );
}
