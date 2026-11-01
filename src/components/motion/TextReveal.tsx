"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef, type ElementType } from "react";

import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

type TextRevealProps = {
  /** Words wrapped in *asterisks* render in the italic accent. A newline forces a line break. */
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** When provided, plays on this flag instead of on scroll into view. */
  play?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.045,
  play,
}: TextRevealProps) {
  const reduceMotion = useHydratedReducedMotion();
  const lines = text.split("\n").map((line) => line.split(" ").filter(Boolean));
  const plain = text.replace(/\*/g, "").replace(/\n/g, " ");
  // Observed on the wrapper: the words start clipped, so they can never report as in view themselves.
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const playing = play ?? inView;
  let index = 0;

  return (
    <Tag ref={ref} className={className} aria-label={plain}>
      {lines.map((words, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 ? <br /> : null}
          {words.map((word, wordIndex) => {
            const accent = word.includes("*");
            const clean = word.replace(/\*/g, "");
            const order = index++;
            return (
              <Fragment key={`${lineIndex}-${wordIndex}`}>
                <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.14em] pr-[0.04em] -mb-[0.14em] align-top">
                  <motion.span
                    data-reveal
                    className="inline-block"
                    initial={reduceMotion ? false : { y: "115%" }}
                    animate={playing ? { y: "0%" } : undefined}
                    transition={{ duration: 1, delay: delay + order * stagger, ease }}
                  >
                    {accent ? <em>{clean}</em> : clean}
                  </motion.span>
                </span>{" "}
              </Fragment>
            );
          })}
        </Fragment>
      ))}
    </Tag>
  );
}
