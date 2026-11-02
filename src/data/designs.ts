export type Design = {
  title: string;
  author: string;
  description: string;
  image: string;
  sourceUrl: string;
  group: "Landing pages" | "Mobile apps" | "3D";
  figmaUrl?: string;
};

export type FigmaDesign = {
  title: string;
  fileKey: string;
  fileName: string;
  poster: string;
};

export type DesignView = {
  label: string;
  width: number;
  images: { src: string; height: number }[];
};

export type PageDesign = {
  title: string;
  subtitle: string;
  poster: string;
  views: DesignView[];
};

export const figmaDesigns: FigmaDesign[] = [
  { title: "STEP UP", fileKey: "ImUeHM1F0eXAkBBPiddiSM", fileName: "STEP-UP", poster: "/designs/step-up.webp" },
  { title: "MindNest", fileKey: "m0gVyDXEIpfcvG88oASmFc", fileName: "MindNest", poster: "/designs/mindnest.webp" },
  { title: "MediPlux", fileKey: "YFem4bRtBnC18oyzXaxq9a", fileName: "MediPlux", poster: "/designs/mediplux.webp" },
];

/** Rendered from the canvas artboards: Claude canvases cannot be embedded on other sites. */
export const sidhmDesktop: DesignView = {
  label: "Desktop",
  width: 1440,
  images: [
    { src: "/designs/sidhm/desktop-1.jpg", height: 5582 },
    { src: "/designs/sidhm/desktop-2.jpg", height: 4763 },
  ],
};

export const pageDesigns: PageDesign[] = [
  {
    title: "SIDHM",
    subtitle: "Homepage concept",
    poster: "/designs/sidhm/desktop-1.jpg",
    views: [
      sidhmDesktop,
      {
        label: "Phone",
        width: 390,
        images: [
          { src: "/designs/sidhm/phone-1.jpg", height: 4893 },
          { src: "/designs/sidhm/phone-2.jpg", height: 3678 },
        ],
      },
    ],
  },
];

export function figmaEmbedUrl(design: FigmaDesign) {
  return `https://embed.figma.com/design/${design.fileKey}/${design.fileName}?node-id=0-1&embed-host=vivek-portfolio&footer=false&theme=dark`;
}

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
