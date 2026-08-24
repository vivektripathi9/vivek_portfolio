export const siteConfig = {
  name: "Aarav Mehta",
  shortName: "AM",
  title: "Creative Frontend Developer",
  location: "Based in Bengaluru, working globally",
  email: "hello@aaravmehta.dev",
  availability: "Available for selected freelance and full-time roles",
  heroIntro: "Design-forward digital experiences for ambitious brands.",
  heroDescription:
    "I craft fast, polished interfaces that blend thoughtful motion, clean systems, and strong frontend engineering.",
  about:
    "I am a frontend-focused developer who enjoys translating product ideas into clear, scalable experiences. My work balances premium visuals with maintainable architecture, performance, and accessibility.",
  longAbout:
    "Over the last few years, I have partnered with startups and product teams to build interfaces that feel refined on every screen size. I care about rhythm, spacing, typography, and the invisible details that make a portfolio or product feel intentional.",
  contactHeadline: "Let us build something memorable.",
  contactDescription:
    "Whether you need a polished landing page, a portfolio refresh, or a full frontend experience, I am open to discussing your next project.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],
  navItems: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
