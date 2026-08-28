export type Skill = {
  name: string;
  category: "Languages" | "Frameworks" | "Tools";
  icon: string;
};

export const skills: Skill[] = [
  { name: "HTML", category: "Languages", icon: "/website_asset/languages/html-logo.svg" },
  { name: "CSS", category: "Languages", icon: "/website_asset/languages/css-logo.svg" },
  { name: "JavaScript", category: "Languages", icon: "/website_asset/languages/javascript-logo.svg" },
  { name: "Sass", category: "Languages", icon: "/website_asset/languages/sass-logo.png" },
  { name: "React", category: "Frameworks", icon: "/website_asset/framework/react-logo.svg" },
  { name: "Next.js", category: "Frameworks", icon: "/website_asset/framework/nextjs-logo.svg" },
  { name: "Shopify", category: "Frameworks", icon: "/website_asset/framework/shopify-logo.svg" },
  { name: "Vue.js", category: "Frameworks", icon: "/website_asset/framework/vuejs-logo.svg" },
  { name: "Node.js", category: "Frameworks", icon: "/website_asset/framework/node-js-icon.svg" },
  { name: "Figma", category: "Tools", icon: "/website_asset/tools/figma-logo.svg" },
  { name: "GSAP", category: "Tools", icon: "/website_asset/tools/gsap.png" },
  { name: "Docker", category: "Tools", icon: "/website_asset/tools/docker.png" },
  { name: "Jest", category: "Tools", icon: "/website_asset/tools/jest.png" },
  { name: "Git", category: "Tools", icon: "/website_asset/tools/git-logo.svg" },
];
