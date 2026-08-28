"use client";

import { motion } from "framer-motion";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function WhatsAppFloat() {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <motion.a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${siteConfig.phone}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:bg-[#1ebe57] md:bottom-6 md:right-6"
      whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
