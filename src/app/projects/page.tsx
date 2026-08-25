import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ScrollConnector } from "@/components/motion/ScrollConnector";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client and product websites by Vivek Tripathi — ecommerce, beauty, fashion, travel, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <ScrollConnector />
      <PageHeader />
      <main>
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  );
}
