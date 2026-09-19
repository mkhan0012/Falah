export interface Project {
  slug: string;
  name: string;
  client: string;
  category: string;
  website: string;
  description: string;
  thesis: string;
  coreStory: string;
  services: string[];
  heroImage: string;
  gallery: string[];
  strategy?: string;
}

export const projects: Project[] = [
  {
    slug: "bharat-hydraulics",
    name: "Bharat Hydraulics",
    client: "BHARAT HYDRAULICS",
    category: "Industrial / Manufacturing",
    website: "https://www.bharathydraulics.site/",
    description: "Transforming an industrial business into a stronger, more credible digital presence.",
    thesis: "FROM WORKSHOP → DIGITAL SYSTEM",
    coreStory: "Position the case study around an industrial business organizing complex information into a digital structure for better search visibility, digital presence, and customer communication.",
    services: [
      "Strategy",
      "Website",
      "SEO",
      "Digital Presence"
    ],
    heroImage: "/images/mockups/bharat.jpg",
    gallery: [
      "/images/mockups/bharat.jpg",
      "/images/mockups/bharat-mobile.jpg"
    ]
  },
  {
    slug: "novazen",
    name: "Novazen",
    client: "NOVAZEN",
    category: "Pharmaceutical / Healthcare",
    website: "https://novazen.vercel.app/",
    description: "Creating a modern digital experience for a pharmaceutical brand.",
    thesis: "FROM PRODUCT → TRUST",
    coreStory: "Position the case study around clinical information clarity, modern brand experience, and information hierarchy.",
    services: [
      "Brand Experience",
      "Website",
      "Content Direction"
    ],
    heroImage: "/images/mockups/novazen.jpg",
    gallery: [
      "/images/mockups/novazen.jpg",
      "/images/mockups/novazen-mobile.jpg"
    ]
  },
  {
    slug: "velora",
    name: "Velora",
    client: "VELORA",
    category: "Real Estate / Luxury",
    website: "https://velora-alpha-eight.vercel.app/",
    description: "A premium digital experience designed around modern real-estate positioning.",
    thesis: "FROM PROPERTY → DESIRE",
    coreStory: "Position the case study around luxury lifestyle storytelling, atmosphere, architecture, and premium digital experience.",
    services: [
      "Digital Experience",
      "Website",
      "UI/UX",
      "Brand Presentation"
    ],
    heroImage: "/images/mockups/velora.jpg",
    gallery: [
      "/images/mockups/velora.jpg",
      "/images/mockups/velora-mobile.jpg"
    ]
  }
];

