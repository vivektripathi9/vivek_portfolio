"use client";

import { motion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

export function Tagline() {
  const outro = useOutro();

  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-5 py-16 sm:min-h-[70vh] sm:px-6 sm:py-24">
      <Reveal className="max-w-md text-center">
        <motion.div
          style={outro && !outro.reduceMotion ? { color: outro.mutedColor } : undefined}
        >
          {/* Same vertical treatment as desktop; scales down on small screens */}
          <p
            className="type-body-lg tracking-[0.12em] !text-inherit sm:tracking-[0.18em]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {siteConfig.taglinePrimary}, {siteConfig.taglineSecondary}
          </p>
        </motion.div>
      </Reveal>
    </section>
  );
}
