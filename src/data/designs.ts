export type Design = {
  title: string;
  author: string;
  description: string;
  image: string;
  sourceUrl: string;
  group: "Landing pages" | "Mobile apps" | "3D";
  figmaUrl?: string;
};

export const designGroups = ["All", "Landing pages", "Mobile apps", "3D"] as const;

/** Third-party projects from https://github.com/topics/modern-ui-ux. Always credit the author. */
export const designs: Design[] = [
  {
    title: "Brainwave",
    author: "sanidhyy",
    description: "Animated landing page for a generative AI SaaS product.",
    image: "https://repository-images.githubusercontent.com/769925881/02498e4d-f341-413a-8105-03820ab7a458",
    sourceUrl: "https://github.com/sanidhyy/brainwave",
    group: "Landing pages",
  },
  {
    title: "Metaversus",
    author: "sanidhyy",
    description: "Metaverse website built with Next.js.",
    image: "https://repository-images.githubusercontent.com/596607913/2773c794-1acf-4058-a161-b78343e5a2e5",
    sourceUrl: "https://github.com/sanidhyy/metaversus",
    group: "Landing pages",
  },
  {
    title: "Multivendor Shop",
    author: "Atuoha",
    description: "Multi-vendor shopping app built with Flutter and Firestore.",
    image: "https://repository-images.githubusercontent.com/538481368/7c422d59-f19e-4c42-889e-a545a6537fe2",
    sourceUrl: "https://github.com/Atuoha/multivendor_shop",
    group: "Mobile apps",
  },
  {
    title: "Diaree",
    author: "Atuoha",
    description: "Private journaling app, based on a concept by Iyiola on Behance.",
    image: "https://repository-images.githubusercontent.com/557820474/02d63bf8-4d27-4d63-8919-a16dbcaab1d0",
    sourceUrl: "https://github.com/Atuoha/diaree",
    group: "Mobile apps",
  },
  {
    title: "3D Portfolio",
    author: "sanidhyy",
    description: "Developer portfolio with 3D scenes, built with React and Three.js.",
    image: "https://repository-images.githubusercontent.com/718065867/81b8e49a-505c-421c-8e86-128abde3ac36",
    sourceUrl: "https://github.com/sanidhyy/3d_portfolio",
    group: "3D",
  },
  {
    title: "3D T-Shirt Customizer",
    author: "sanidhyy",
    description: "AI-powered T-shirt customizer built with Three.js.",
    image: "https://repository-images.githubusercontent.com/622113818/497fe8e6-47b1-49a8-8ad9-1e676965434b",
    sourceUrl: "https://github.com/sanidhyy/3d-website",
    group: "3D",
  },
];
