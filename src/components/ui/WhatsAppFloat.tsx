"use client";

import { Magnetic } from "@/components/motion/Magnetic";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <Magnetic className="fixed bottom-5 right-5 z-40 md:bottom-7 md:right-7" strength={0.4}>
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp at ${siteConfig.phone}`}
        className="glass flex h-13 w-13 items-center justify-center rounded-full text-[#4ade80] transition-colors hover:text-[#86efac]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </Magnetic>
  );
}
