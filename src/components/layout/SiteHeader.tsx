"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { AnimatedBrandE } from "@/components/motion/AnimatedBrandE";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

function NavLink({
  href,
  label,
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative type-nav py-2 text-black/55 transition-colors hover:text-black ${className}`}
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md"
      initial={reduceMotion ? false : { y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-10">
      <Container wide={wide} className="flex items-center justify-between gap-4 py-3.5 md:py-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="group block min-w-0 pb-0.5"
          onClick={() => setOpen(false)}
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

        <nav className="flex shrink-0 items-center gap-2 sm:gap-5">
          <div className="hidden items-center gap-4 sm:flex md:gap-5">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <Button
            href={siteConfig.hireUrl}
            className="!min-h-0 !px-4 !py-2 sm:!min-h-[2.5rem] sm:!px-8 sm:!py-3"
          >
            Hire Me
          </Button>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-black transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6.5px] h-px w-full bg-black transition-opacity duration-150 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[13px] h-px w-full bg-black transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            id="mobile-nav"
            className="overflow-hidden border-t border-black/10 bg-white sm:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container wide={wide} className="flex flex-col gap-1 py-4">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="py-3 text-base text-black"
                  onClick={() => setOpen(false)}
                />
              ))}
              <div className="mt-3 flex flex-col gap-3 pb-2 [&_.inline-flex]:w-full [&_a]:w-full">
                <Button href={siteConfig.whatsappUrl} variant="whatsapp">
                  <WhatsAppIcon />
                  WhatsApp
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </div>

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-black"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}
