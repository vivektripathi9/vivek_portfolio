"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { AnimatedBrandE } from "@/components/motion/AnimatedBrandE";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function PageHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-3.5 md:py-4">
        <Link
          href="/"
          aria-label="Vivek — home"
          className="group block min-w-0 pb-0.5"
        >
          <motion.span
            className="type-display-sm inline-flex items-center whitespace-nowrap leading-none tracking-[0.07em] text-black transition-colors group-hover:text-[var(--accent)]"
            style={{ fontSize: "clamp(1.05rem, 2.8vw, 1.45rem)" }}
            initial={reduceMotion ? false : { y: "110%", opacity: 0.2 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.08,
            }}
          >
            <span className="inline-block">Viv</span>
            <AnimatedBrandE reduceMotion={reduceMotion} />
            <span className="inline-block">k</span>
          </motion.span>
        </Link>

        <nav className="flex shrink-0 items-center gap-4 sm:gap-5">
          <Link
            href="/"
            className="type-nav group inline-flex items-center gap-1.5 py-2 text-black/55 transition-colors hover:text-black"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Home
          </Link>

          <Button href={siteConfig.hireUrl}>Hire Me</Button>
        </nav>
      </Container>
    </header>
  );
}
