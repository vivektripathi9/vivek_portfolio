"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const glow = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-background pt-[clamp(6rem,14vw,12rem)]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[60rem] w-[90rem] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(227,194,133,0.28),transparent)]"
        style={reduceMotion ? undefined : { opacity: glow }}
      />

      <Container className="relative">
        <p className="label mb-6">{siteConfig.contactIntro}</p>
        <TextReveal as="h2" className="display-xl" text={`${siteConfig.taglinePrimary}.\n${siteConfig.taglineSecondary.replace("real", "*real.*")}`} stagger={0.035} />

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center gap-3 md:mt-16">
          <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
          <Button href={siteConfig.whatsappUrl} variant="outline">
            <WhatsAppIcon className="h-4 w-4" />
            {siteConfig.phone}
          </Button>
        </Reveal>

        <div className="mt-20 flex flex-col gap-5 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p className="body-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.navLinks.map((link) => (
              <Magnetic key={link.href} strength={0.35}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </Magnetic>
            ))}
          </nav>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="relative whitespace-nowrap pb-[0.06em] text-center font-display text-[17vw] leading-[1.05] font-semibold tracking-[-0.05em] text-foreground/90"
      >
        {siteConfig.name}
      </p>
    </footer>
  );
}
