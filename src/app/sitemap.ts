import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://falahbrandhouse.com";
  
  const staticPages = [
    "",
    "/work",
    "/services",
    "/services/branding",
    "/services/web-development",
    "/services/seo",
    "/services/digital-marketing",
    "/personal-branding",
    "/about",
    "/insights",
    "/contact",
    "/request-proposal",
    "/careers",
    "/web-design-company-hyderabad",
    "/seo-agency-hyderabad",
    "/branding-studio-hyderabad",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
