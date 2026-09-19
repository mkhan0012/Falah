export interface Project {
  slug: string;
  name: string;
  client: string;
  category: string;
  website: string;
  description: string;
  services: string[];
  challenge?: string;
  approach?: string;
  strategy?: string;
  design?: string;
  outcome?: string;
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "bharat-hydraulics",
    name: "Bharat Hydraulics",
    client: "BHARAT HYDRAULICS",
    category: "Industrial / Manufacturing",
    website: "https://www.bharathydraulics.site/",
    description: "Transforming an industrial business into a stronger, more credible digital presence.",
    services: [
      "Website",
      "Landing Pages",
      "SEO",
      "Digital Presence",
      "Social Media",
      "Customer Communication"
    ],
    challenge: "As a leading industrial manufacturer, Bharat Hydraulics had a strong offline reputation but lacked a digital presence that matched their scale and expertise. Their legacy website did not effectively communicate their capabilities to modern buyers.",
    approach: "We designed a robust digital system focusing on credibility, clear service communication, and industrial-grade aesthetics. The new platform was structured to generate leads while establishing them as an authority in the manufacturing sector.",
    strategy: "Positioning the brand around reliability and engineering excellence. We structured the content to speak directly to procurement managers and industrial buyers.",
    design: "A brutalist-inspired, clean industrial aesthetic using strong typography, metallic accents, and high-quality imagery of their facilities and products.",
    outcome: "Improved digital presentation, clearer service communication, stronger online presence, and a better-structured website for technical SEO.",
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
    services: [
      "Brand Experience",
      "Website",
      "Digital Presence",
      "Content Direction"
    ],
    challenge: "Novazen needed a digital experience that balanced clinical trust with modern brand aesthetics, breaking away from the typical outdated pharmaceutical website template.",
    approach: "We focused on a clean, light-themed aesthetic that feels hygienic, precise, and scientifically advanced, while ensuring all regulatory and product information was easily accessible.",
    strategy: "Establishing trust through transparent design. We organized complex pharmaceutical data into digestible, user-friendly interfaces.",
    design: "Using a sophisticated off-white and deep blue color palette, combined with precise typography and subtle micro-interactions to signify modern healthcare.",
    outcome: "A highly credible, modern digital presence that instills trust in healthcare professionals and partners.",
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
    services: [
      "Digital Experience",
      "Website",
      "UI/UX",
      "Brand Presentation"
    ],
    challenge: "Velora represents luxury living, but their digital touchpoints lacked the emotional resonance and visual fidelity expected by high-net-worth property buyers.",
    approach: "We built an immersive, highly visual digital experience. By treating the website more like an editorial magazine than a property listing, we elevated the perceived value of their developments.",
    strategy: "Selling a lifestyle, not just square footage. We prioritized large-scale imagery, smooth scrolling, and elegant typography to create a sense of exclusivity.",
    design: "Minimalist luxury. Ample whitespace, elegant serif typography for headings, and fluid, unhurried animations.",
    outcome: "A premium digital experience that matches the luxury positioning of the physical properties, resulting in improved brand consistency and prestige.",
    heroImage: "/images/mockups/velora.jpg",
    gallery: [
      "/images/mockups/velora.jpg",
      "/images/mockups/velora-mobile.jpg"
    ]
  }
];

