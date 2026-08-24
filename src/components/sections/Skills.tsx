import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import { skills } from "@/data/skills";

export function Skills() {
  const groupedSkills = Object.entries(
    skills.reduce<Record<string, string[]>>((accumulator, skill) => {
      accumulator[skill.category] ??= [];
      accumulator[skill.category].push(skill.name);
      return accumulator;
    }, {}),
  );

  return (
    <section id="skills" className="section-padding">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A curated stack for building fast, scalable, design-conscious web experiences."
            description="The technology list lives in a dedicated data file so you can swap categories, tools, and labels without touching the section layout."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {groupedSkills.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.08}>
              <div className="panel rounded-[1.75rem] p-6 md:p-7">
                <Typography as="h3" variant="h4" className="text-[var(--foreground)]">
                  {category}
                </Typography>
                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="type-body-sm rounded-full border border-[var(--border)] bg-white/4 px-4 py-2 text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
