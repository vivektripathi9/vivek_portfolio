"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

const SPLASH_KEY = "vt-intro-seen";

export function SplashIntro() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SPLASH_KEY)) {
        setVisible(false);
        return;
      }
    } catch {
      // sessionStorage can throw in private mode
    }

    const timer = window.setTimeout(
      () => dismiss(),
      reduceMotion ? 400 : 2400,
    );

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [reduceMotion]);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
    } catch {
      // ignore
    }
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onClick={dismiss}
          role="dialog"
          aria-label="Introduction"
          aria-modal="true"
        >
          <div className="relative px-4 text-center sm:px-6">
            <div className="overflow-hidden pb-2">
              <motion.p
                className="type-display-xl whitespace-nowrap text-white"
                style={{ fontSize: "clamp(1.45rem, 7.2vw, 5.75rem)" }}
                initial={
                  reduceMotion
                    ? false
                    : { y: "110%", opacity: 0.2 }
                }
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.06,
                }}
              >
                {siteConfig.name}
              </motion.p>
            </div>

            <motion.div
              aria-hidden="true"
              className="mx-auto mt-7 h-0.5 origin-center bg-[#9e8857]"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "min(70vw, 18rem)" }}
            />

            <motion.p
              className="role-label mt-6"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
            >
              {siteConfig.title}
            </motion.p>
          </div>

          <p className="absolute bottom-8 text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
            Click or press Esc
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
