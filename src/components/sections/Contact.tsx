"use client";

import { motion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function Contact() {
  const outro = useOutro();

  return (
    <section id="contact" className="section-padding pb-16 md:pb-20">
      <Container>
        <Reveal>
          <motion.div
            style={outro && !outro.reduceMotion ? { color: outro.textColor } : undefined}
          >
            <SectionHeading
              title="Contact Me"
              className="min-w-0 py-1 text-center !text-inherit sm:min-w-[280px] lg:min-w-[400px] lg:py-5"
            />
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-center type-body-md"
            style={
              outro && !outro.reduceMotion
                ? { color: outro.mutedColor }
                : { color: "rgba(10,10,10,0.7)" }
            }
          >
            {siteConfig.contactIntro}
          </motion.p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={siteConfig.hireUrl}>Hire Me</Button>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="text-sm tracking-wide underline-offset-4 transition hover:underline hover:opacity-70"
              whileHover={outro?.reduceMotion ? undefined : { y: -2 }}
              style={
                outro && !outro.reduceMotion
                  ? { color: outro.mutedColor }
                  : { color: "rgba(10,10,10,0.65)" }
              }
            >
              {siteConfig.email}
            </motion.a>
          </div>
        </Reveal>

        {siteConfig.socialLinks.length > 1 ? (
          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:mt-8 sm:gap-6 md:gap-8">
              {siteConfig.socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="type-nav transition-opacity duration-300 hover:opacity-70"
                  style={
                    outro && !outro.reduceMotion
                      ? { color: outro.mutedColor }
                      : { color: "#0a0a0a" }
                  }
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
