"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/data/site";
import { INTRO_EVENT } from "@/hooks/useIntroDone";

const INTRO_KEY = "vt-intro-seen";

function markSeen() {
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    // sessionStorage can throw in private mode
  }
}

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (document.documentElement.dataset.intro) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(0, 100, {
      duration: reduced ? 0 : 1.25,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(value));
      },
      onComplete: () => {
        markSeen();
        document.documentElement.dataset.intro = "done";
        window.dispatchEvent(new Event(INTRO_EVENT));
        setVisible(false);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden="true"
          className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-[#0a0a0b] p-5 text-[#f3efe7] md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="label">{siteConfig.title}</p>
          <div className="flex items-end justify-between gap-6">
            <p className="display-md">{siteConfig.name}</p>
            <p className="font-display text-6xl font-medium tabular-nums tracking-tight text-[#e3c285] md:text-8xl">
              <span ref={countRef}>0</span>
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
