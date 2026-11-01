export const architectureSite = {
  name: "Studio Real Estate",
  url: "https://vivektripathi9.github.io/Real_estate_Portfolio/",
  projectsUrl: "https://vivektripathi9.github.io/Real_estate_Portfolio/project.html",
  image: "/projects/real-estate-portfolio.jpg",
  domain: "vivektripathi9.github.io/Real_estate_Portfolio",
};

export type ArchitectureProject = {
  title: string;
  group: "Property" | "Farmland" | "Brand";
  image: string;
  url: string;
  /** Shown under the title. Falls back to the site's own label when there is no live domain. */
  domain?: string;
};

export const architectureGroups = ["All", "Property", "Farmland", "Brand"] as const;

export const featuredArchitectureProject = {
  title: "Melange One",
  description:
    "A limited-edition sky-villa brand experience with calm layouts, cinematic photography and enquiry paths that feel as considered as the address.",
  scope: "Design + Development",
  type: "Real Estate",
  platform: "Web",
  image: "/projects/architecture/melange.jpg",
  url: "https://melangeoneofficial.com/",
  domain: "melangeoneofficial.com",
};

/** Mirrors the project index at architectureSite.projectsUrl. */
export const architectureProjects: ArchitectureProject[] = [
  { title: "Jankal Group", group: "Property", image: "/projects/architecture/jankal.jpg", url: "https://jankal.in/", domain: "jankal.in" },
  { title: "Tula Properties", group: "Property", image: "/projects/architecture/tula.jpg", url: "https://tulaprojects.com/", domain: "tulaprojects.com" },
  { title: "Sadhvana Farms", group: "Farmland", image: "/projects/architecture/sadhvana.jpg", url: "https://sadhvanafarms.com/", domain: "sadhvanafarms.com" },
  { title: "Melange One", group: "Property", image: "/projects/architecture/melange.jpg", url: "https://melangeoneofficial.com/", domain: "melangeoneofficial.com" },
  { title: "Magnolia Delight", group: "Property", image: "/projects/architecture/magnolia.jpg", url: "https://magnoliadelight.co.in/", domain: "magnoliadelight.co.in" },
  { title: "RK Celesta", group: "Property", image: "/projects/architecture/rkcelesta.jpg", url: "https://rkcelesta.com/", domain: "rkcelesta.com" },
  { title: "Stratus", group: "Brand", image: "/projects/architecture/stratus.jpg", url: "https://www.stratus.company/", domain: "stratus.company" },
  { title: "MB Realty", group: "Brand", image: "/projects/architecture/mbrealty.jpg", url: architectureSite.projectsUrl },
  { title: "Mandateco", group: "Brand", image: "/projects/architecture/mandateco.jpg", url: architectureSite.projectsUrl },
];
