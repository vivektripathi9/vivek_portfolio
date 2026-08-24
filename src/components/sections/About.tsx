import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A thoughtful developer with a premium product mindset."
              description="Built to mirror the refined visual rhythm of a high-end portfolio while staying easy to customize."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel space-y-6 rounded-[2rem] p-6 md:p-8">
              <Typography variant="body-lg">{siteConfig.about}</Typography>
              <Typography variant="body-md">{siteConfig.longAbout}</Typography>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["06+", "Years building polished interfaces"],
                  ["20+", "Shipped launches and redesigns"],
                  ["100%", "Responsive, accessible-first execution"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.25rem] border border-[var(--border)] bg-white/4 p-5"
                  >
                    <Typography as="p" variant="h3" className="text-[var(--foreground)]">
                      {value}
                    </Typography>
                    <Typography variant="body-sm" className="mt-2">
                      {label}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
