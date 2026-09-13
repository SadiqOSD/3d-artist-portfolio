import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="A selection of recent projects."
          description="A curated collection of 3D artwork, visual experiments, and creative development work."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
