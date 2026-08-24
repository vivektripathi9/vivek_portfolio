import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Projects"
            title="Case-study style project presentation with clean hierarchy and upgrade-friendly data."
            description="Each project card is powered by typed data, making it easy to replace placeholder work with real launches, previews, and repositories."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
