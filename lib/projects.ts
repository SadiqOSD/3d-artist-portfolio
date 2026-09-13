import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "product-visualization",
    title: "Product Visualization",
    category: "3D Art",
    year: "2026",
    description:
      "A cinematic product visualization project focused on modeling, materials, lighting, and presentation.",
    tools: ["Blender"],
    thumbnail: "/images/projects/product-visualization/thumbnail.webp",
    images: [
      "/images/projects/product-visualization/hero.webp",
      "/images/projects/product-visualization/render-01.webp",
      "/images/projects/product-visualization/render-02.webp",
    ],
    featured: true,
  },
  {
    slug: "3d-environment",
    title: "3D Environment",
    category: "Environment Art",
    year: "2026",
    description:
      "A detailed 3D environment exploring composition, atmosphere, lighting, and visual storytelling.",
    tools: ["Blender"],
    thumbnail: "/images/projects/3d-environment/thumbnail.webp",
    images: [
      "/images/projects/3d-environment/hero.webp",
      "/images/projects/3d-environment/render-01.webp",
      "/images/projects/3d-environment/render-02.webp",
    ],
    featured: true,
  },
  {
    slug: "hard-surface-model",
    title: "Hard Surface Model",
    category: "3D Modeling",
    year: "2026",
    description:
      "A hard-surface modeling study focused on clean topology, realistic materials, and studio lighting.",
    tools: ["Blender"],
    thumbnail: "/images/projects/hard-surface-model/thumbnail.webp",
    images: [
      "/images/projects/hard-surface-model/hero.webp",
      "/images/projects/hard-surface-model/render-01.webp",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
