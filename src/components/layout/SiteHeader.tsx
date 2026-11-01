"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { pauseScroll } from "@/components/motion/SmoothScroll";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const ease = [0.76, 0, 0.24, 1] as const;

export function SiteHeader() {
  const reduceMotion = useHydratedReducedMotion();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 240);
  });

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    pauseScroll(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      pauseScroll(false);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-3 z-50 md:top-5"
        animate={{ y: hidden && !open ? "-140%" : "0%" }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
      >
        <div className="glass mx-auto flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 text-[#f3efe7]">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="font-display text-[1.05rem] font-medium tracking-tight whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Vivek<em className="font-serif font-normal text-[#e3c285]"> Tripathi</em>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-sm text-[#f3efe7]/75 transition-colors hover:text-[#f3efe7]"
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-[#f3efe7]/12"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={siteConfig.hireUrl} className="!min-h-10 !bg-[#e3c285] !px-5 !text-[#0a0a0b]">
              Hire me
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3efe7]/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-2.5 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-[#f3efe7] transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-[#f3efe7] transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            data-lenis-prevent
            className="fixed inset-0 z-40 flex flex-col justify-end bg-[#0a0a0b] px-5 pb-24 pt-24 text-[#f3efe7] md:hidden"
            initial={reduceMotion ? false : { clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={reduceMotion ? undefined : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {[{ label: "Home", href: "/" }, ...siteConfig.navLinks].map((link, index) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={reduceMotion ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: 0.15 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={link.href} onClick={() => setOpen(false)} className="display-lg block !text-[#f3efe7]">
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <a href={`mailto:${siteConfig.email}`} className="body-md mt-8 !text-[#f3efe7]/70">
              {siteConfig.email}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
