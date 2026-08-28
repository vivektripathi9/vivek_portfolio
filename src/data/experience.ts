export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  quote?: string;
  icon: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Pixel Foundry",
    role: "Frontend Developer",
    period: "Feb 2022 — Jul 2022",
    summary:
      "Built and refined UI across the product site, with a focus on detail, consistency, and shipping with the team.",
    quote: "Great attention to detail and a very good team member.",
    icon: "/website_asset/icons/asymmetrik-brands-solid-full.svg",
  },
  {
    company: "Harbor Labs",
    role: "Web Developer",
    period: "Aug 2022 — Dec 2022",
    summary:
      "Improved the service pages and overall presentation of the site so the offering was easier to understand and find.",
    quote: "It was a great help in improving the views of our service page, great job!",
    icon: "/website_asset/icons/cloudversify-brands-solid-full.svg",
  },
  {
    company: "North Exchange",
    role: "UI Engineer",
    period: "Jan 2023 — Jun 2023",
    summary:
      "Led the visual and interaction design of a new website, from layout through to a polished front-end.",
    quote: "Vivek was very proactive with the design of our new website.",
    icon: "/website_asset/icons/lumon-brands-solid-full.svg",
  },
  {
    company: "Fieldline Services",
    role: "Fullstack Developer",
    period: "Jun 2023 — Dec 2025",
    summary:
      "Long-term partner on web applications — new features, refactors, and the day-to-day of keeping product shipping.",
    quote:
      "Vivek was a dedicated and hard worker for a very long time and I appreciate the work he did for me!",
    icon: "/website_asset/icons/sitrox-brands-solid-full.svg",
  },
];
