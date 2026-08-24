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
    title: "Touristal India",
    description:
      "A travel and tourism website showcasing destinations, experiences, and trip inspiration across India.",
    image: "/projects/touristal-india.jpg",
    technologies: ["Web", "Travel", "Responsive"],
    liveUrl: "https://touristalindia.com",
    category: "Travel",
  },
  {
    title: "DGX Films",
    description:
      "A cinematic brand website for a film production studio, built to present projects and creative identity with impact.",
    image: "/projects/dgx-films.jpg",
    technologies: ["Web", "Media", "Branding"],
    liveUrl: "https://dgxfilms.modernxwebs.com",
    category: "Media",
  },
  {
    title: "Butlerco Marketing",
    description:
      "A marketing agency website focused on clear service presentation, conversion-ready layout, and brand storytelling.",
    image: "/projects/butlerco.jpg",
    technologies: ["Marketing", "Web", "SEO"],
    liveUrl: "https://www.butlercomarketing.com",
    category: "Agency",
  },
  {
    title: "ModernX SaaS",
    description:
      "A modern SaaS product landing experience with clean hierarchy, feature storytelling, and product-focused visuals.",
    image: "/projects/modernx-saas.jpg",
    technologies: ["SaaS", "Landing Page", "UI"],
    liveUrl: "https://saas.modernxwebs.com",
    category: "SaaS",
  },
  {
    title: "Zeko",
    description:
      "A polished product website crafted for a modern brand presence with strong visual rhythm and responsive design.",
    image: "/projects/zeko.jpg",
    technologies: ["Web", "Product", "UI"],
    liveUrl: "https://zeko.modernxwebs.com",
    category: "Product",
  },
  {
    title: "HomeEase MTGs",
    description:
      "A mortgage and home finance website designed to communicate services clearly and guide users toward consultation.",
    image: "/projects/homeease.jpg",
    technologies: ["Finance", "Web", "Lead Gen"],
    liveUrl: "https://homeeasemtgs.com",
    category: "Finance",
  },
  {
    title: "Sacramento Psych Care",
    description:
      "A healthcare practice website for psychology and mental health services, focused on trust, clarity, and accessibility.",
    image: "/projects/sacramento.jpg",
    technologies: ["Healthcare", "Web", "Accessibility"],
    liveUrl: "https://sacramentopsychcare.com",
    category: "Healthcare",
  },
  {
    title: "Hotwheelz",
    description:
      "An automotive brand website with bold presentation, service highlights, and a performance-focused visual style.",
    image: "/projects/hotwheelz.jpg",
    technologies: ["Automotive", "Web", "Branding"],
    liveUrl: "https://hotwheelz.co",
    category: "Automotive",
  },
  {
    title: "Adchitects",
    description:
      "A creative advertising studio website built to showcase campaigns, capabilities, and a strong design-forward identity.",
    image: "/projects/adchitects.jpg",
    technologies: ["Advertising", "Agency", "UI"],
    liveUrl: "https://adchitects.co",
    category: "Agency",
  },
];
