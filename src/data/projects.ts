export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  sector?: string;
  group?: "Ecommerce" | "Brand" | "Product";
  role?: string;
  featured?: boolean;
  ctaLabel?: string;
};

export const projects: Project[] = [
  {
    title: "cfab",
    subtitle: "by Creamy Fabrics",
    description:
      "Shopify storefront for a shapewear brand — collection merchandising, fit-led product pages, and a shopping flow built around the wardrobe.",
    image: "/projects/cfab.jpg",
    technologies: ["Shopify", "Theme", "Ecommerce"],
    liveUrl: "https://cfab.com",
    category: "Fashion",
    sector: "Fashion & Apparel",
    group: "Ecommerce",
    role: "Shopify storefront",
    featured: true,
    ctaLabel: "Store",
  },
  {
    title: "tryBello",
    subtitle: "Hair Growth & Beauty",
    description:
      "Hair-care storefront with conversion-focused product stories for growth sprays, serums, and lash lines.",
    image: "/projects/trybello.jpg",
    technologies: ["Shopify", "PDP", "Ecommerce"],
    liveUrl: "https://trybello.com",
    category: "Beauty",
    sector: "Health & Beauty",
    group: "Ecommerce",
    role: "Shopify storefront",
    featured: true,
    ctaLabel: "Store",
  },
  {
    title: "NATUF",
    subtitle: "Levantine Cuisine",
    description:
      "Brand and ecommerce site covering cafe culture, D2C sweets, and franchise storytelling from the Levant to India.",
    image: "/projects/natuf.jpg",
    technologies: ["Ecommerce", "Brand", "Web"],
    liveUrl: "https://natuf.in",
    category: "Food",
    sector: "Food & Beverage",
    group: "Ecommerce",
    role: "Brand + ecommerce",
    featured: true,
    ctaLabel: "Store",
  },
  {
    title: "Thrivin",
    subtitle: "Women's Athleisure",
    description:
      "Athleisure storefront with collection merchandising, lifestyle photography, and a high-energy shopping experience.",
    image: "/projects/thrivin.jpg",
    technologies: ["Shopify", "Theme", "Ecommerce"],
    liveUrl: "https://thrivin.com",
    category: "Athleisure",
    sector: "Sport & Athleisure",
    group: "Ecommerce",
    role: "Shopify storefront",
    ctaLabel: "Store",
  },
  {
    title: "London Brow Company",
    subtitle: "Professional Beauty",
    description:
      "Professional beauty store for vegan brow lamination and lash lift products, structured for salon buyers and D2C.",
    image: "/projects/londonbrowcompany.jpg",
    technologies: ["Shopify", "Ecommerce", "Beauty"],
    liveUrl: "https://londonbrowcompany.com",
    category: "Beauty",
    sector: "Health & Beauty",
    group: "Ecommerce",
    role: "Shopify storefront",
    ctaLabel: "Store",
  },
  {
    title: "Ambela",
    subtitle: "Inclusive Denim",
    description:
      "Inclusive denim and ready-to-wear storefront focused on stretch fits, size range, and a calm shopping UI.",
    image: "/projects/ambela.jpg",
    technologies: ["Shopify", "Theme", "Ecommerce"],
    liveUrl: "https://ambela.com",
    category: "Fashion",
    sector: "Fashion & Apparel",
    group: "Ecommerce",
    role: "Shopify storefront",
    ctaLabel: "Store",
  },
  {
    title: "Anastasia Beverly Hills",
    subtitle: "Cosmetics & Brows",
    description:
      "Frontend work on the beauty ecommerce experience — brows, makeup collections, and campaign storytelling.",
    image: "/projects/anastasia-beverly-hills.jpg",
    technologies: ["Ecommerce", "Frontend", "Beauty"],
    liveUrl: "https://www.anastasiabeverlyhills.com",
    category: "Beauty",
    sector: "Health & Beauty",
    group: "Ecommerce",
    role: "Ecommerce frontend",
    ctaLabel: "Store",
  },
  {
    title: "Touristal India",
    subtitle: "Education & Travel",
    description:
      "Travel site for destinations and trip inspiration across India, built to stay readable on mobile.",
    image: "/projects/touristal-india.jpg",
    technologies: ["Web", "Responsive", "Travel"],
    liveUrl: "https://touristalindia.com",
    category: "Travel",
    sector: "Travel & Education",
    group: "Brand",
    role: "Marketing website",
    ctaLabel: "Website",
  },
  {
    title: "DGX Films",
    subtitle: "Film Production",
    description:
      "Cinematic studio site for presenting projects and creative identity with a dark, image-led layout.",
    image: "/projects/dgx-films.jpg",
    technologies: ["Web", "Branding", "UI"],
    liveUrl: "https://dgxfilms.modernxwebs.com",
    category: "Media",
    sector: "Media & Film",
    group: "Brand",
    role: "Brand website",
    featured: true,
    ctaLabel: "Website",
  },
  {
    title: "Butlerco Marketing",
    subtitle: "Marketing Agency",
    description:
      "Agency site with a conversion-ready service layout and clear paths from story to enquiry.",
    image: "/projects/butlerco.jpg",
    technologies: ["Web", "Marketing", "SEO"],
    liveUrl: "https://www.butlercomarketing.com",
    category: "Agency",
    sector: "Marketing & Agency",
    group: "Brand",
    role: "Marketing website",
    ctaLabel: "Website",
  },
  {
    title: "ModernX SaaS",
    subtitle: "Product Platform",
    description:
      "SaaS landing page with a tight hierarchy, feature storytelling, and product-focused visuals.",
    image: "/projects/modernx-saas.jpg",
    technologies: ["SaaS", "Landing page", "UI"],
    liveUrl: "https://saas.modernxwebs.com",
    category: "SaaS",
    sector: "SaaS & Product",
    group: "Product",
    role: "Product landing",
    ctaLabel: "Website",
  },
  {
    title: "Zeko",
    subtitle: "Modern Product Brand",
    description:
      "Product brand site with a strong visual rhythm and a responsive layout for a modern catalogue.",
    image: "/projects/zeko.jpg",
    technologies: ["Web", "Product", "UI"],
    liveUrl: "https://zeko.modernxwebs.com",
    category: "Product",
    sector: "Product",
    group: "Product",
    role: "Brand website",
    ctaLabel: "Website",
  },
  {
    title: "Pinakkaa",
    subtitle: "Digital Marketing Agency",
    description:
      "Growth-agency site covering SEO, paid media, Shopify development, and an ROI-led service story.",
    image: "/projects/pinakkaa.jpg",
    technologies: ["Web", "Agency", "Shopify"],
    liveUrl: "https://pinakkaa.com",
    category: "Agency",
    sector: "Marketing & Agency",
    group: "Brand",
    role: "Marketing website",
    ctaLabel: "Website",
  },
  {
    title: "Stratus",
    subtitle: "Architecture & Interiors",
    description:
      "Practice site for architecture and interiors — material storytelling, selected work, and a design-to-build process.",
    image: "/projects/stratus.jpg",
    technologies: ["Web", "Branding", "Architecture"],
    liveUrl: "https://www.stratus.company",
    category: "Architecture",
    sector: "Architecture & Interiors",
    group: "Brand",
    role: "Brand website",
    featured: true,
    ctaLabel: "Website",
  },
  {
    title: "Tula Projects",
    subtitle: "Luxury Real Estate",
    description:
      "Real estate brand site for projects in Bangalore — storytelling, sustainability, and enquiry-led conversion.",
    image: "/projects/tulaprojects.jpg",
    technologies: ["Web", "Branding", "Real estate"],
    liveUrl: "https://www.tulaprojects.com",
    category: "Real Estate",
    sector: "Real Estate & Development",
    group: "Brand",
    role: "Brand website",
    featured: true,
    ctaLabel: "Website",
  },
  {
    title: "Hotwheelz",
    subtitle: "Automotive",
    description:
      "Automotive brand site with bold presentation, service highlights, and a performance-led visual style.",
    image: "/projects/hotwheelz.jpg",
    technologies: ["Web", "Branding", "Automotive"],
    liveUrl: "https://hotwheelz.co",
    category: "Automotive",
    sector: "Automotive",
    group: "Brand",
    role: "Brand website",
    ctaLabel: "Website",
  },
  {
    title: "Adchitects",
    subtitle: "Creative Studio",
    description:
      "Advertising studio site for campaigns and capabilities, with a design-forward identity.",
    image: "/projects/adchitects.jpg",
    technologies: ["Web", "Agency", "UI"],
    liveUrl: "https://adchitects.co",
    category: "Agency",
    sector: "Marketing & Agency",
    group: "Brand",
    role: "Brand website",
    ctaLabel: "Website",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectGroups = ["All", "Ecommerce", "Brand", "Product"] as const;
