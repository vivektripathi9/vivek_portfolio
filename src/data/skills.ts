export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
};

export const skills: Skill[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Figma", category: "Design" },
  { name: "Design Systems", category: "Design" },
  { name: "Accessibility", category: "Design" },
];
