"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let instance: Lenis | null = null;

export function pauseScroll(paused: boolean) {
  if (paused) instance?.stop();
  else instance?.start();
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    instance = new Lenis({ autoRaf: true, anchors: { offset: -80 }, lerp: 0.1 });
    return () => {
      instance?.destroy();
      instance = null;
    };
  }, []);

  return null;
}
