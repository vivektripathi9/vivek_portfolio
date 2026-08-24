import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Work that blends refined interface craft with scalable frontend execution."
            description="This timeline is structured from a single data source so future updates stay quick and content-only."
          />
        </Reveal>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.06}>
              <article className="panel rounded-[1.75rem] p-6 md:p-7">
                <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                  <div className="space-y-2">
                    <Typography variant="eyebrow">{item.period}</Typography>
                    <Typography as="h3" variant="h4" className="text-[var(--foreground)]">
                      {item.role}
                    </Typography>
                    <Typography variant="body-sm">{item.company}</Typography>
                  </div>
                  <Typography variant="body-md">{item.summary}</Typography>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
