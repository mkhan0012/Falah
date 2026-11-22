import { siteConfig } from "@/config/site";
import { FaqItem } from "@/data/faqs";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: "Vyoma Media",
    alternateName: ["VYOMA Media", "Vyoma", "VYOMA"],
    url: `${siteConfig.url}/`,
    publisher: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/keyword-tool?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateLocalBusinessSchema(options?: {
  title?: string;
  description?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: options?.title || `${siteConfig.name} — Branding, Web Design & Organic Growth Studio`,
    legalName: siteConfig.name,
    slogan: siteConfig.tagline,
    description: options?.description || siteConfig.supportingCopy,
    url: options?.url || siteConfig.url,
    telephone: siteConfig.contact.phone.replace(/\s+/g, ""),
    email: siteConfig.contact.email,
    image: siteConfig.ogImage,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR, USD, EUR, GBP",
    paymentAccepted: "Bank Transfer, UPI, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Road No. 36, Jubilee Hills / HITEC City Corridor",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.385044,
      longitude: 78.486671,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "HITEC City, Hyderabad" },
      { "@type": "AdministrativeArea", name: "Gachibowli, Hyderabad" },
      { "@type": "AdministrativeArea", name: "Jubilee Hills, Hyderabad" },
      { "@type": "AdministrativeArea", name: "Banjara Hills, Hyderabad" },
      { "@type": "AdministrativeArea", name: "Financial District, Hyderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Global" },
    ],
    sameAs: [
      siteConfig.url,
      siteConfig.socials.twitter,
      siteConfig.socials.github,
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
    ].filter(Boolean),
    knowsAbout: [
      "Brand Strategy & Category Positioning",
      "Next.js Web Development",
      "Technical SEO & Programmatic Search",
      "Generative Engine Optimization (GEO)",
      "High-Performance UI/UX Design",
      "Local Map Pack Ranking Hyderabad",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Strategic Growth & Digital Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Next.js Web Systems & UI/UX Design",
            description: "High-speed custom Next.js web systems, headless CMS, and sub-second performance.",
            url: `${siteConfig.url}/web-design-company-hyderabad`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO & Generative Engine Optimization (GEO)",
            description: "Local Hyderabad map pack dominance, technical SEO pipelines, and AI answer engine discoverability.",
            url: `${siteConfig.url}/seo-agency-hyderabad`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Positioning & Visual Identity Systems",
            description: "Editorial brand identity, visual systems, monograms, and category positioning.",
            url: `${siteConfig.url}/branding-studio-hyderabad`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing & Owned Acquisition Systems",
            description: "Full-funnel digital marketing, organic search architecture, Generative Engine Optimization (GEO), and multi-touch revenue attribution.",
            url: `${siteConfig.url}/digital-marketing-agency-hyderabad`,
          },
        },
      ],
    },
  };
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
