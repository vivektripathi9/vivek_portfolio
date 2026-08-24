"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <div className="panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <Link href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-[var(--foreground)]">
              {siteConfig.shortName}
            </span>
            <div className="hidden sm:block">
              <p className="type-nav text-[var(--foreground)]">{siteConfig.name}</p>
              <p className="type-small">{siteConfig.title}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="type-nav text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="panel mt-3 rounded-[1.5rem] p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="type-nav rounded-2xl px-4 py-3 text-[var(--foreground)] transition hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button href="#contact" variant="secondary" className="mt-2 w-full">
                  Let&apos;s Talk
                </Button>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
