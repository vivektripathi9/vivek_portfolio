"use client";

import { motion } from "framer-motion";

import { useOutro } from "@/components/motion/OutroZone";
import { Reveal } from "@/components/motion/Reveal";
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
      </Container>
    </section>
  );
}
