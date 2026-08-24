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
  { name: "PHP", category: "Languages", icon: "/website_asset/languages/php-logo.svg" },
  { name: "C#", category: "Languages", icon: "/website_asset/languages/Logo_C_sharp.svg" },
  { name: "React", category: "Frameworks", icon: "/website_asset/framework/react-logo.svg" },
  { name: "Angular", category: "Frameworks", icon: "/website_asset/framework/angular-logo.svg" },
  { name: "Vue.js", category: "Frameworks", icon: "/website_asset/framework/vuejs-logo.svg" },
  { name: "Nuxt", category: "Frameworks", icon: "/website_asset/framework/nuxt.png" },
  { name: "Node.js", category: "Frameworks", icon: "/website_asset/framework/node-js-icon.svg" },
  { name: "Django", category: "Frameworks", icon: "/website_asset/framework/django-logo.svg" },
  { name: "Stencil", category: "Frameworks", icon: "/website_asset/framework/stencil-logo.svg" },
  { name: "Figma", category: "Tools", icon: "/website_asset/tools/figma-logo.svg" },
  { name: "Bootstrap", category: "Tools", icon: "/website_asset/tools/bootstrap-logo.svg" },
  { name: "Photoshop", category: "Tools", icon: "/website_asset/tools/photoshop-logo.svg" },
  { name: "Docker", category: "Tools", icon: "/website_asset/tools/docker.png" },
  { name: "GSAP", category: "Tools", icon: "/website_asset/tools/gsap.png" },
  { name: "Jest", category: "Tools", icon: "/website_asset/tools/jest.png" },
  { name: "Postman", category: "Tools", icon: "/website_asset/tools/postman.png" },
  { name: "Swagger", category: "Tools", icon: "/website_asset/tools/swagger.png" },
  { name: "Ubuntu", category: "Tools", icon: "/website_asset/tools/ubuntu.png" },
];
