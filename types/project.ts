export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tools: string[];
  thumbnail: string;
  images: string[];
  featured?: boolean;
};
