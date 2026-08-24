import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";

const services = [
  {
    title: "Portfolio Design & Development",
    description:
      "Modern personal sites with strong layout rhythm, fluid typography, and responsive structure.",
  },
  {
    title: "Landing Pages for Product Launches",
    description:
      "Conversion-focused marketing pages with premium visuals, sharp hierarchy, and clean motion.",
  },
  {
    title: "Frontend Systems & UI Refactors",
    description:
      "Reusable component architecture, design token cleanup, accessibility, and performance tuning.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Flexible ways to collaborate on polished frontend experiences."
            description="A reusable services grid gives you another editable section without locking content into the main page component."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="panel h-full rounded-[1.75rem] p-6 md:p-7">
                <Typography as="h3" variant="h4" className="text-[var(--foreground)]">
                  {service.title}
                </Typography>
                <Typography variant="body-md" className="mt-4">
                  {service.description}
                </Typography>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
