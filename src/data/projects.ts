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
  ctaLabel?: string;
};

export const projects: Project[] = [
  {
    title: "cfab",
    subtitle: "by Creamy Fabrics",
    description:
      "A fashion ecommerce store for sculpting shapewear, bras, and modern essentials, built around precise fits and a curated wardrobe experience.",
    image: "/projects/cfab.jpg",
    technologies: ["Ecommerce", "Fashion", "Shopify"],
    liveUrl: "https://cfab.com",
    category: "Fashion",
    sector: "Fashion & Apparel",
    ctaLabel: "Store",
  },
  {
    title: "tryBello",
    subtitle: "Hair Growth & Beauty",
    description:
      "A natural hair-care brand site featuring growth sprays, serums, and lash products with a conversion-focused product story.",
    image: "/projects/trybello.jpg",
    technologies: ["Ecommerce", "Beauty", "Shopify"],
    liveUrl: "https://trybello.com",
    category: "Beauty",
    sector: "Health & Beauty",
    ctaLabel: "Store",
  },
  {
    title: "NATUF",
    subtitle: "Levantine Cuisine",
    description:
      "A Levantine food brand experience covering cafe culture, D2C sweets, and franchise storytelling from the Levant to India.",
    image: "/projects/natuf.jpg",
    technologies: ["Ecommerce", "Food", "Brand"],
    liveUrl: "https://natuf.in",
    category: "Food",
    sector: "Food & Beverage",
    ctaLabel: "Store",
  },
  {
    title: "Thrivin",
    subtitle: "Women's Athleisure",
    description:
      "A premium women's athleisure store with sculpting gymwear, collection merchandising, and a high-energy lifestyle shopping experience.",
    image: "/projects/thrivin.jpg",
    technologies: ["Ecommerce", "Athleisure", "Shopify"],
    liveUrl: "https://thrivin.com",
    category: "Athleisure",
    sector: "Sport & Athleisure",
    ctaLabel: "Store",
  },
  {
    title: "London Brow Company",
    subtitle: "Professional Beauty",
    description:
      "A professional beauty ecommerce site for vegan brow lamination and lash lift products, trusted by salons worldwide.",
    image: "/projects/londonbrowcompany.jpg",
    technologies: ["Ecommerce", "Beauty", "Shopify"],
    liveUrl: "https://londonbrowcompany.com",
    category: "Beauty",
    sector: "Health & Beauty",
    ctaLabel: "Store",
  },
  {
    title: "Ambela",
    subtitle: "Inclusive Denim",
    description:
      "An inclusive denim and ready-to-wear brand site focused on feel-good clothing, stretch fits, and size-inclusive fashion.",
    image: "/projects/ambela.jpg",
    technologies: ["Ecommerce", "Fashion", "Shopify"],
    liveUrl: "https://ambela.com",
    category: "Fashion",
    sector: "Fashion & Apparel",
    ctaLabel: "Store",
  },
  {
    title: "Anastasia Beverly Hills",
    subtitle: "Cosmetics & Brows",
    description:
      "The official ecommerce experience for Anastasia Beverly Hills, spanning iconic brows, makeup collections, and beauty storytelling.",
    image: "/projects/anastasia-beverly-hills.jpg",
    technologies: ["Ecommerce", "Beauty", "Brand"],
    liveUrl: "https://www.anastasiabeverlyhills.com",
    category: "Beauty",
    sector: "Health & Beauty",
    ctaLabel: "Store",
  },
  {
    title: "Touristal India",
    subtitle: "Education & Travel",
    description:
      "A travel and tourism website showcasing destinations, experiences, and trip inspiration across India.",
    image: "/projects/touristal-india.jpg",
    technologies: ["Web", "Travel", "Responsive"],
    liveUrl: "https://touristalindia.com",
    category: "Travel",
    sector: "Travel & Education",
    ctaLabel: "Website",
  },
  {
    title: "DGX Films",
    subtitle: "Film Production",
    description:
      "A cinematic brand website for a film production studio, built to present projects and creative identity with impact.",
    image: "/projects/dgx-films.jpg",
    technologies: ["Web", "Media", "Branding"],
    liveUrl: "https://dgxfilms.modernxwebs.com",
    category: "Media",
    sector: "Media & Film",
    ctaLabel: "Website",
  },
  {
    title: "Butlerco Marketing",
    subtitle: "Marketing Agency",
    description:
      "A marketing agency website focused on clear service presentation, conversion-ready layout, and brand storytelling.",
    image: "/projects/butlerco.jpg",
    technologies: ["Marketing", "Web", "SEO"],
    liveUrl: "https://www.butlercomarketing.com",
    category: "Agency",
    sector: "Marketing & Agency",
    ctaLabel: "Website",
  },
  {
    title: "ModernX SaaS",
    subtitle: "Product Platform",
    description:
      "A modern SaaS product landing experience with clean hierarchy, feature storytelling, and product-focused visuals.",
    image: "/projects/modernx-saas.jpg",
    technologies: ["SaaS", "Landing Page", "UI"],
    liveUrl: "https://saas.modernxwebs.com",
    category: "SaaS",
    sector: "SaaS & Product",
    ctaLabel: "Website",
  },
  {
    title: "Zeko",
    subtitle: "Modern Product Brand",
    description:
      "A polished product website crafted for a modern brand presence with strong visual rhythm and responsive design.",
    image: "/projects/zeko.jpg",
    technologies: ["Web", "Product", "UI"],
    liveUrl: "https://zeko.modernxwebs.com",
    category: "Product",
    sector: "Product",
    ctaLabel: "Website",
  },
  {
    title: "Pinakkaa",
    subtitle: "Digital Marketing Agency",
    description:
      "A growth-focused digital marketing agency site covering SEO, paid media, Shopify development, and brand campaigns with an ROI-led story.",
    image: "/projects/pinakkaa.jpg",
    technologies: ["Marketing", "Agency", "Web"],
    liveUrl: "https://pinakkaa.com",
    category: "Agency",
    sector: "Marketing & Agency",
    ctaLabel: "Website",
  },
  {
    title: "Stratus",
    subtitle: "Architecture & Interiors",
    description:
      "An architecture and interior design practice site built around material storytelling, selected work, and a clear design-to-build process.",
    image: "/projects/stratus.jpg",
    technologies: ["Architecture", "Web", "Branding"],
    liveUrl: "https://www.stratus.company",
    category: "Architecture",
    sector: "Architecture & Interiors",
    ctaLabel: "Website",
  },
  {
    title: "Tula Projects",
    subtitle: "Luxury Real Estate",
    description:
      "A luxury real estate brand site for conscious living in Bangalore — project storytelling, sustainability philosophy, and enquiry-led conversion flows.",
    image: "/projects/tulaprojects.jpg",
    technologies: ["Real Estate", "Web", "Branding"],
    liveUrl: "https://www.tulaprojects.com",
    category: "Real Estate",
    sector: "Real Estate & Development",
    ctaLabel: "Website",
  },
  {
    title: "Hotwheelz",
    subtitle: "Automotive",
    description:
      "An automotive brand website with bold presentation, service highlights, and a performance-focused visual style.",
    image: "/projects/hotwheelz.jpg",
    technologies: ["Automotive", "Web", "Branding"],
    liveUrl: "https://hotwheelz.co",
    category: "Automotive",
    sector: "Automotive",
    ctaLabel: "Website",
  },
  {
    title: "Adchitects",
    subtitle: "Creative Studio",
    description:
      "A creative advertising studio website built to showcase campaigns, capabilities, and a strong design-forward identity.",
    image: "/projects/adchitects.jpg",
    technologies: ["Advertising", "Agency", "UI"],
    liveUrl: "https://adchitects.co",
    category: "Agency",
    sector: "Marketing & Agency",
    ctaLabel: "Website",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(
    new Set(
      projects
        .map((project) => project.category)
        .filter((category): category is string => Boolean(category)),
    ),
  ),
];
