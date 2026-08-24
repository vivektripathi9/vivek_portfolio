"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

export function SplashIntro() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const [firstName, lastName] = siteConfig.name.split(" ");

  useEffect(() => {
    const timer = window.setTimeout(
      () => setVisible(false),
      reduceMotion ? 800 : 4400,
    );
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative px-6 text-center">
            <div className="overflow-hidden pb-2">
              <motion.h1
                className="type-display-xl text-white"
                aria-label={siteConfig.name}
                initial={
                  reduceMotion
                    ? false
                    : { y: "110%", rotate: 4, opacity: 0.2 }
                }
                animate={{ y: "0%", rotate: 0, opacity: 1 }}
                transition={{
                  duration: 1.15,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
              >
                <span className="block">{firstName}</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="type-display-lg text-[#c4a96a]"
                initial={
                  reduceMotion
                    ? false
                    : { y: "-110%", rotate: -3, opacity: 0.2 }
                }
                animate={{ y: "0%", rotate: 0, opacity: 1 }}
                transition={{
                  duration: 1.15,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.28,
                }}
              >
                {lastName}
              </motion.p>
            </div>

            <motion.div
              aria-hidden="true"
              className="mx-auto mt-7 h-0.5 origin-center bg-[#9e8857]"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "min(70vw, 18rem)" }}
            />

            <motion.p
              className="role-label mt-6"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.45, ease: "easeOut" }}
            >
              {siteConfig.title}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
