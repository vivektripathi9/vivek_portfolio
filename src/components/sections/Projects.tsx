import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            title="Some Projects"
            className="inline-block bg-[rgba(158,104,87,0.1)] p-2"
          />
        </Reveal>

        <div className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="min-w-[min(100%,22rem)] md:min-w-0">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
