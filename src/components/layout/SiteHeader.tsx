"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

import { AnimatedBrandE } from "@/components/motion/AnimatedBrandE";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative type-nav py-2 text-black/55 transition-colors hover:text-black"
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-black transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />
    </Link>
  );
}

export function SiteHeader({ wide = false }: { wide?: boolean }) {
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.header
      className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-md"
      initial={reduceMotion ? false : { y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container wide={wide} className="flex items-center justify-between gap-4 py-3.5 md:py-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="group block min-w-0 pb-0.5"
        >
          <motion.span
            className="type-display-sm inline-flex items-center whitespace-nowrap leading-none tracking-[0.07em] text-black transition-colors group-hover:text-[var(--accent)]"
            style={{ fontSize: "clamp(1.05rem, 2.8vw, 1.45rem)" }}
            initial={false}
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

        <nav className="flex shrink-0 items-center gap-3 sm:gap-5">
          <span className="sm:hidden">
            <NavLink href="/projects" label="Work" />
          </span>
          <div className="hidden items-center gap-4 sm:flex md:gap-5">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <Button href={siteConfig.hireUrl}>Hire Me</Button>
        </nav>
      </Container>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-black"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}
