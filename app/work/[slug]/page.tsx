import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.25em] text-white/40 uppercase">
            {project.category}
          </p>

          <h1 className="mt-6 text-5xl tracking-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-10">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-video overflow-hidden rounded-2xl bg-white/5"
            >
              <Image
                src={image}
                alt={`${project.title} render ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
