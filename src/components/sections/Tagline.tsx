"use client";

import { motion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export function Tagline() {
  const outro = useOutro();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      <Reveal className="max-w-md text-center">
        <motion.div
          style={outro && !outro.reduceMotion ? { color: outro.mutedColor } : undefined}
        >
          <p className="type-body-lg tracking-[0.08em] !text-inherit md:hidden">
            {siteConfig.taglinePrimary}
            <br />
            {siteConfig.taglineSecondary}
          </p>
          <p
            className="hidden type-body-lg tracking-[0.18em] !text-inherit md:block"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {siteConfig.taglinePrimary}, {siteConfig.taglineSecondary}
          </p>
        </motion.div>
      </Reveal>
    </section>
  );
}
