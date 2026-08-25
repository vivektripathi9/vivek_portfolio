"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const brandIcons = [
  "/website_asset/icons/asymmetrik-brands-solid-full.svg",
  "/website_asset/icons/cloudversify-brands-solid-full.svg",
  "/website_asset/icons/lumon-brands-solid-full.svg",
  "/website_asset/icons/pied-piper-alt-brands-solid-full.svg",
  "/website_asset/icons/sitrox-brands-solid-full.svg",
  "/website_asset/icons/studiovinari-brands-solid-full.svg",
] as const;

type Slide = { type: "letter" } | { type: "icon"; src: string };

const slides: Slide[] = [
  { type: "letter" },
  ...brandIcons.map((src) => ({ type: "icon" as const, src })),
];

const flipTransition = {
  duration: 0.72,
  ease: [0.45, 0, 0.55, 1] as const,
};

export function AnimatedBrandE({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  if (reduceMotion) {
    return <span aria-hidden="true">E</span>;
  }

  const slide = slides[index];

  return (
    <span
      aria-hidden="true"
      className="relative -mx-[0.04em] inline-flex shrink-0 items-center justify-center"
      style={{
        width: "0.86em",
        height: "1em",
        perspective: "900px",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={flipTransition}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
          }}
        >
          {slide.type === "letter" ? (
            <span className="block translate-y-[0.02em] leading-none">E</span>
          ) : (
            <Image
              src={slide.src}
              alt=""
              width={32}
              height={32}
              className="block h-[0.96em] w-[0.96em] object-contain"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
