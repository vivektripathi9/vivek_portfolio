import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { VelocityMarquee } from "@/components/motion/VelocityMarquee";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WorkHorizontal } from "@/components/sections/WorkHorizontal";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main id="content">
        <Hero />
        <VelocityMarquee items={siteConfig.marquee} />
        <WorkHorizontal />
        <About />
        <ServicesPreview />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
