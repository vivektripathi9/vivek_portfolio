"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export function Tagline() {
  const outro = useOutro();
  const reduceMotion = useReducedMotion();
  const primaryWords = siteConfig.taglinePrimary.split(" ");

  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden px-5 py-16 sm:min-h-[50vh] sm:px-6 sm:py-24">
      <Reveal className="max-w-xl text-center">
        <motion.div
          style={outro && !outro.reduceMotion ? { color: outro.mutedColor } : undefined}
        >
          <p className="type-h2 tracking-tight !text-inherit">
            {primaryWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="inline-block me-[0.28em] last:me-0"
                initial={reduceMotion ? false : { y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
            .
          </p>
          <motion.p
            className="mt-3 type-body-lg !text-inherit opacity-80"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.taglineSecondary}.
          </motion.p>
        </motion.div>
      </Reveal>
    </section>
  );
}
