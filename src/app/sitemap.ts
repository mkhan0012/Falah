import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vyomamedia.co.in";
  
  // 1. Core High-Priority Static & Hub Pages
  const coreStaticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/insights", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/request-proposal", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/keyword-tool", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  // 2. High-Intent Commercial Local SEO Pages (Hyderabad)
  const localSeoRoutes = [
    { path: "/web-design-company-hyderabad", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/seo-agency-hyderabad", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/branding-studio-hyderabad", priority: 0.95, changeFrequency: "weekly" as const },
  ];

  // 3. Core Discipline & Service Hubs
  const serviceRoutes = [
    { path: "/services/branding", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/services/web-development", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/services/seo", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/services/digital-marketing", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/services/personal-branding", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/services/social-media", priority: 0.85, changeFrequency: "weekly" as const },
  ];

  // 4. Industry Vertical Hubs
  const industryRoutes = [
    { path: "/industries", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/industries/manufacturing", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/industries/healthcare", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/industries/real-estate", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/industries/education", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const staticEntries = [
    ...coreStaticRoutes,
    ...localSeoRoutes,
    ...serviceRoutes,
    ...industryRoutes,
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 5. Specialized Solution Architecture Pages
  const solutionEntries = solutions.map((solution) => ({
    url: `${baseUrl}/services/solutions/${solution.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 6. Case Studies
  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // 7. Editorial & Thought Leadership Articles
  const insightEntries = insights.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticEntries,
    ...solutionEntries,
    ...projectEntries,
    ...insightEntries,
  ];
}
