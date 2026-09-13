import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="mt-2 text-sm text-white/40">
              {project.category}
            </p>
          </div>

          <span className="text-sm text-white/40">{project.year}</span>
        </div>
      </article>
    </Link>
  );
}
