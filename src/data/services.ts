export interface ServiceCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  link: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "01",
    category: "STRATEGY",
    title: "Strategy",
    description: "Uncover where commercial demand exists and define the singular idea that sets you apart from competitors.",
    link: "/services/branding",
    items: [
      "Brand Positioning",
      "Tone of Voice",
      "Digital Strategy",
      "Market Research"
    ]
  },
  {
    id: "02",
    category: "DESIGN",
    title: "Design",
    description: "Craft timeless visual identity, art direction, and Swiss-grid UI/UX that signal instant capability.",
    link: "/services/branding",
    items: [
      "Visual Identity",
      "Art Direction",
      "UI/UX Design",
      "Web Design"
    ]
  },
  {
    id: "03",
    category: "TECHNOLOGY",
    title: "Technology",
    description: "Engineer sub-second Next.js web systems and technical indexing foundations that convert visitors into revenue.",
    link: "/services/web-development",
    items: [
      "Frontend Development",
      "Headless CMS",
      "Web Performance",
      "Technical SEO"
    ]
  },
  {
    id: "04",
    category: "GROWTH",
    title: "Growth",
    description: "Build compounding search discoverability and topical authority that generate high-value inbound leads.",
    link: "/services/seo",
    items: [
      "Content Strategy",
      "Organic Search",
      "Local SEO",
      "Personal Branding",
      "Developer Marketing"
    ]
  }
];
