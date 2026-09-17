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
    heroImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2053&auto=format&fit=crop"
    ]
  }
];
