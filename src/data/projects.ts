export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
};

export const projects: Project[] = [
  {
    title: "Northstar Commerce",
    description:
      "A premium storefront concept focused on editorial storytelling, polished transitions, and a frictionless checkout path.",
    image: "/project-northstar.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    category: "E-commerce Experience",
  },
  {
    title: "Metric Flow",
    description:
      "Analytics dashboard system with modular data cards, dark UI, and scalable component patterns for product teams.",
    image: "/project-metricflow.svg",
    technologies: ["React", "Framer Motion", "Charting", "Design Systems"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    category: "Product Dashboard",
  },
  {
    title: "Atlas Studio",
    description:
      "A sleek agency portfolio experience designed around visual hierarchy, case study presentation, and smooth section reveals.",
    image: "/project-atlas.svg",
    technologies: ["Next.js", "CMS", "Motion", "SEO"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    category: "Brand Portfolio",
  },
];
