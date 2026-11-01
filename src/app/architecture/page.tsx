import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArchitectureShowcase } from "@/components/sections/ArchitectureShowcase";

export const metadata: Metadata = {
  title: "Architecture & Real Estate",
  description:
    "Websites for developers, architects, and real-estate brands by Vivek Tripathi, including Studio Real Estate.",
};

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <ArchitectureShowcase />
      </main>
      <Footer />
    </div>
  );
}
