import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shopify storefronts, site redesigns, migrations, and full-stack work by Vivek Tripathi. New builds, performance, campaign pages, and ongoing partnership.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader wide />
      <main id="content">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
