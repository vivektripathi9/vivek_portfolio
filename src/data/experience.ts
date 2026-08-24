export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Studio Current",
    role: "Senior Frontend Developer",
    period: "2024 - Present",
    summary:
      "Leading premium marketing sites and product experiences with a strong focus on reusable architecture, performance, and motion design.",
  },
  {
    company: "Northbound Labs",
    role: "Frontend Engineer",
    period: "2022 - 2024",
    summary:
      "Built responsive product interfaces, design systems, and internal dashboards while collaborating closely with design and product teams.",
  },
  {
    company: "Independent Projects",
    role: "Freelance Developer",
    period: "2020 - 2022",
    summary:
      "Delivered polished portfolio sites, launch pages, and MVP frontends for founders who needed fast execution without sacrificing quality.",
  },
];
