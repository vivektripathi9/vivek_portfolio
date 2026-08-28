export type ServiceIconName =
  | "bag"
  | "layers"
  | "bolt"
  | "grid"
  | "server"
  | "plug"
  | "paint"
  | "gauge"
  | "spark"
  | "clipboard"
  | "code"
  | "rocket"
  | "chat"
  | "check"
  | "refresh"
  | "pages"
  | "repeat"
  | "search"
  | "calendar";

export type ServiceDeliverable = {
  icon: ServiceIconName;
  label: string;
  text: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  accent: string;
  icon: ServiceIconName;
  summary: string;
  details: string;
  detailsExtra: string;
  bestFor: string;
  timeline: string;
  includes: string[];
  deliverables: ServiceDeliverable[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "shopify",
    number: "01",
    title: "Shopify storefronts",
    shortTitle: "Storefronts",
    accent: "#3d5a80",
    icon: "bag",
    summary: "Full theme builds around how your catalogue actually sells.",
    details:
      "A new store should feel like the brand on day one. I build the theme around your products, not a generic demo: homepage, collections, PDPs, and the path into checkout. Custom sections, metafields, and apps wired in so the team can keep editing without calling a developer for every change.",
    detailsExtra:
      "If you are launching, we start from a clean architecture. If you already sell, we keep what works and rebuild the parts that are holding the store back.",
    bestFor: "New brands going live, and stores that have outgrown their theme.",
    timeline: "Usually 4 to 8 weeks",
    includes: [
      "Theme architecture and templates",
      "Homepage, collections, and PDPs",
      "Merchandising and filters",
      "Apps, metafields, and handoff notes",
    ],
    deliverables: [
      {
        icon: "grid",
        label: "Theme architecture",
        text: "Sections and templates the team can keep editing after launch.",
      },
      {
        icon: "bag",
        label: "Merchandising",
        text: "Collections, filters, and product stories that match the brand.",
      },
      {
        icon: "spark",
        label: "Conversion PDPs",
        text: "Fit, proof, and add-to-cart without the clutter.",
      },
      {
        icon: "plug",
        label: "Apps and metafields",
        text: "The extras connected cleanly, not bolted on top of the theme.",
      },
    ],
    stack: ["Shopify", "JavaScript", "CSS", "Figma"],
  },
  {
    id: "redesign",
    number: "02",
    title: "Site redesign",
    shortTitle: "Redesign",
    accent: "#c45c3e",
    icon: "refresh",
    summary: "A new face for a site that still has to keep selling.",
    details:
      "Redesign is not a fresh coat of paint. It is a new information architecture, a clearer first impression, and pages that match how people shop now. I audit the live site, keep the URLs and content that earn their keep, and rebuild the rest in the browser so you see the real thing before it ships.",
    detailsExtra:
      "Redirects, SEO basics, and a launch plan sit in the same brief. The old site stays up until the new one is ready to take over.",
    bestFor: "Brands whose site looks dated, converts poorly, or no longer matches the product.",
    timeline: "Usually 5 to 10 weeks",
    includes: [
      "Live-site audit and page map",
      "New visual system in the browser",
      "Content and URL migration",
      "Redirects, QA, and cutover",
    ],
    deliverables: [
      {
        icon: "search",
        label: "Audit first",
        text: "What to keep, what to cut, and which pages actually do the work.",
      },
      {
        icon: "paint",
        label: "New visual system",
        text: "Type, space, and components designed on the real pages, not in a deck.",
      },
      {
        icon: "pages",
        label: "Content move",
        text: "Copy, media, and structure brought across without losing the plot.",
      },
      {
        icon: "check",
        label: "Clean cutover",
        text: "Redirects, checks on real devices, then a controlled go-live.",
      },
    ],
    stack: ["Figma", "Shopify", "Next.js", "CSS", "JavaScript"],
  },
  {
    id: "fullstack",
    number: "03",
    title: "Front-end and back-end",
    shortTitle: "Full stack",
    accent: "#2f5d50",
    icon: "layers",
    summary: "Custom interfaces with the systems behind them.",
    details:
      "When Shopify is not the whole answer, I build the site and the stack. React and Next.js on the surface. APIs, webhooks, CMS, and data underneath. Same person, so the UI and the logic do not fight each other.",
    detailsExtra:
      "This covers brand sites, product platforms, and the custom logic a template cannot hold: forms that actually go somewhere, dashboards, and integrations with the tools you already run.",
    bestFor: "Brand sites, product platforms, and anything with custom logic.",
    timeline: "Usually 4 to 12 weeks, scoped to the problem",
    includes: [
      "Custom UI across breakpoints",
      "APIs and data models",
      "CMS, auth, and third-party tools",
      "Staging, docs, and handoff",
    ],
    deliverables: [
      {
        icon: "code",
        label: "Custom UI",
        text: "Interfaces that feel considered on every screen size.",
      },
      {
        icon: "server",
        label: "Back-end systems",
        text: "APIs, data models, and the jobs that keep content moving.",
      },
      {
        icon: "plug",
        label: "Integrations",
        text: "Payments, email, CRM, and the tools you already use.",
      },
      {
        icon: "clipboard",
        label: "CMS and handoff",
        text: "Editable content and notes so the team can run it.",
      },
    ],
    stack: ["React", "Next.js", "Node.js", "JavaScript", "Docker", "Git"],
  },
  {
    id: "performance",
    number: "04",
    title: "Performance and polish",
    shortTitle: "Performance",
    accent: "#2a6f97",
    icon: "bolt",
    summary: "Speed, UI, and the feature blocking the next launch.",
    details:
      "Not every brief is a rebuild. I go into stores that already sell and make them faster, clearer, and more capable. Theme bloat, awkward flows, missing features. The work nobody sees until the numbers move.",
    detailsExtra:
      "Typical entries: Core Web Vitals, PDP cleanup, a custom section the theme cannot do, or a checkout-adjacent flow that keeps dropping people.",
    bestFor: "Live stores that need a lift before the next campaign.",
    timeline: "Days to a couple of weeks",
    includes: [
      "Speed pass and Core Web Vitals",
      "UI and hierarchy cleanup",
      "One focused custom feature",
      "QA on real devices",
    ],
    deliverables: [
      {
        icon: "gauge",
        label: "Speed work",
        text: "Lighter pages, better LCP, less theme drag.",
      },
      {
        icon: "paint",
        label: "UI refinements",
        text: "Spacing, hierarchy, and the details that make it feel finished.",
      },
      {
        icon: "spark",
        label: "Custom features",
        text: "The thing your theme cannot do, shipped without a rewrite.",
      },
      {
        icon: "check",
        label: "QA and launch",
        text: "Checked on real devices, then pushed live with a rollback plan.",
      },
    ],
    stack: ["Shopify", "JavaScript", "GSAP", "Jest", "Figma"],
  },
  {
    id: "migration",
    number: "05",
    title: "Migrations",
    shortTitle: "Migrations",
    accent: "#5c4d7a",
    icon: "repeat",
    summary: "Move the store without losing sales, URLs, or sleep.",
    details:
      "Replatforming is messy when it is treated like a redesign with extra steps. I map the catalogue, customers, URLs, and apps first, then move in slices so the live store stays up. Shopify to Shopify, or a custom site onto a stack that can grow.",
    detailsExtra:
      "Redirects are not an afterthought. Neither are the apps and automations people forget until the day after launch.",
    bestFor: "Teams changing themes, platforms, or agencies without a dark week.",
    timeline: "Usually 3 to 8 weeks, depending on catalogue size",
    includes: [
      "Inventory of products, URLs, and apps",
      "Data and content move",
      "Redirect map and SEO checks",
      "Parallel run, then cutover",
    ],
    deliverables: [
      {
        icon: "clipboard",
        label: "Move plan",
        text: "What comes across, what gets rebuilt, and in what order.",
      },
      {
        icon: "server",
        label: "Data and content",
        text: "Products, customers, and pages moved with a check against the source.",
      },
      {
        icon: "search",
        label: "URL protection",
        text: "Redirects and the pages Google already knows.",
      },
      {
        icon: "rocket",
        label: "Cutover",
        text: "A go-live window, a rollback, and someone watching the first hours.",
      },
    ],
    stack: ["Shopify", "Node.js", "JavaScript", "Git"],
  },
  {
    id: "landing",
    number: "06",
    title: "Landing pages and campaigns",
    shortTitle: "Campaigns",
    accent: "#d2653a",
    icon: "pages",
    summary: "Focused pages for a drop, a paid ad, or a new line.",
    details:
      "Campaign pages need a different pace than the rest of the site. One story, one action, built fast enough to hit the date. I design and ship landing pages that match the brand, load quickly, and connect to the same cart, forms, or CRM as the main site.",
    detailsExtra:
      "Useful for product drops, paid traffic, waitlists, and seasonal stories that should not live forever on the homepage.",
    bestFor: "Launches, paid campaigns, and stories that need their own URL.",
    timeline: "Usually 1 to 3 weeks",
    includes: [
      "Page concept and copy structure",
      "Build on Shopify or a custom stack",
      "Tracking and form or cart hookup",
      "Mobile-first QA",
    ],
    deliverables: [
      {
        icon: "spark",
        label: "One clear story",
        text: "A page that does one job instead of carrying the whole site.",
      },
      {
        icon: "bolt",
        label: "Fast to load",
        text: "Paid traffic should not land on a heavy theme.",
      },
      {
        icon: "plug",
        label: "Hooked up",
        text: "Cart, email, or CRM connected before the campaign starts.",
      },
      {
        icon: "grid",
        label: "Reusable later",
        text: "A pattern you can clone for the next drop, not a one-off mess.",
      },
    ],
    stack: ["Shopify", "Next.js", "JavaScript", "Figma", "GSAP"],
  },
  {
    id: "retainer",
    number: "07",
    title: "Ongoing partnership",
    shortTitle: "Partnership",
    accent: "#1f4b6e",
    icon: "calendar",
    summary: "A slice of every month for the work that never makes a project brief.",
    details:
      "After launch, sites still need someone. New sections, seasonal PDPs, speed regressions, the feature sales asked for on Friday. A retainer keeps that in one thread instead of a new vendor hunt each time.",
    detailsExtra:
      "We agree a monthly hours band and a way of working. Unused time does not vanish into mystery tickets. You see what shipped.",
    bestFor: "Brands that ship often and want a steady pair of hands.",
    timeline: "Month to month, after a first project",
    includes: [
      "Agreed hours each month",
      "Small builds and fixes",
      "Priority for campaign dates",
      "A simple log of what shipped",
    ],
    deliverables: [
      {
        icon: "chat",
        label: "One thread",
        text: "Requests, staging, and sign-off in the same place.",
      },
      {
        icon: "spark",
        label: "Campaign ready",
        text: "Drops and seasonal pages without starting from zero.",
      },
      {
        icon: "gauge",
        label: "Keep it fast",
        text: "Catch bloat before the next sale weekend.",
      },
      {
        icon: "clipboard",
        label: "Clear log",
        text: "What used the hours, so the work stays honest.",
      },
    ],
    stack: ["Shopify", "JavaScript", "Git", "Figma"],
  },
];

export const serviceSteps = [
  {
    title: "Brief",
    icon: "chat" as const,
    text: "We pick the problem worth solving, not the whole wishlist.",
    details:
      "A 30-minute call, then a short written brief. Goals, constraints, pages that matter, and what we will not build. You leave with a scope you can say yes or no to.",
  },
  {
    title: "Build",
    icon: "code" as const,
    text: "Simple systems. Clear pages. Front-end and back-end as one piece.",
    details:
      "Weekly check-ins, staging you can click, and decisions in the open. I design in the browser so you see the real thing, not a deck that never ships.",
  },
  {
    title: "Ship",
    icon: "rocket" as const,
    text: "Live, checked, and easy to hand off or keep iterating.",
    details:
      "QA, launch, and a clean handoff. If you want to keep going, we pick the next slice. If you want to run it in-house, you get the notes to do that.",
  },
] as const;

export const serviceFaqs = [
  {
    question: "How long does a full storefront take?",
    answer:
      "Most Shopify builds land in four to eight weeks, depending on catalogue size and custom work. Redesigns run a little longer. Performance and landing pages can be days or a couple of weeks.",
  },
  {
    question: "Can you redesign a site that is already live?",
    answer:
      "Yes. That is a core offer. The live site stays up. We audit, rebuild, migrate content and URLs, then cut over with redirects and a rollback plan.",
  },
  {
    question: "Do you work on existing themes?",
    answer:
      "Yes. Plenty of the work is inside a live theme: speed, PDPs, and features that were blocking a launch. A full rebuild is only when the foundation is the problem.",
  },
  {
    question: "Can you migrate us to Shopify, or off a bad theme?",
    answer:
      "Yes. Products, content, URLs, and apps get mapped first. The store keeps selling while the new one is built in parallel.",
  },
  {
    question: "Can you handle back-end as well as the UI?",
    answer:
      "Yes. Front-end and back-end are both in the offer. APIs, integrations, CMS, and the custom logic a brand site needs. One thread, not two vendors.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a 30-minute call. If it is a fit, I send a brief and a fixed next step. If it is not, I will say so quickly.",
  },
];
