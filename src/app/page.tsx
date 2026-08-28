import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { OutroZone } from "@/components/motion/OutroZone";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { SplashIntro } from "@/components/sections/SplashIntro";
import { Tagline } from "@/components/sections/Tagline";
import { ScrollConnector } from "@/components/motion/ScrollConnector";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SplashIntro />
      <div className="relative">
        <SiteHeader />
        <ScrollConnector />
        <main id="content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <OutroZone>
            <Experience />
            <Tagline />
            <Contact />
            <Footer />
          </OutroZone>
        </main>
      </div>
    </div>
  );
}
