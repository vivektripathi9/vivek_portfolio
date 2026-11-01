import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DesignsShowcase } from "@/components/sections/DesignsShowcase";

export const metadata: Metadata = {
  title: "Design references",
  description:
    "Credited interface references from open-source projects on GitHub, curated by Vivek Tripathi.",
};

export default function DesignsPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <DesignsShowcase />
      </main>
      <Footer />
    </div>
  );
}
