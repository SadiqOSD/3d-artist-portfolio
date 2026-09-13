import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work."
          description="A collection of 3D artwork, visualization projects, experiments, and creative development."
        />

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
