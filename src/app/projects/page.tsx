import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shopify storefronts and brand websites by Vivek Tripathi — ecommerce, architecture, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  );
}
