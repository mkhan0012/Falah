import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://falahbrandhouse.com";
  
  // Base static routes
  const staticRoutes = [
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
    "/industries"
  ];

  // Helper to dynamically read directories for pSEO (programmatic SEO) pages
  const getDynamicRoutes = (dirName: string, prefix: string) => {
    try {
      const dirPath = path.join(process.cwd(), "src", "app", dirName);
      if (!fs.existsSync(dirPath)) return [];
      
      return fs.readdirSync(dirPath)
        .filter(file => {
          const stat = fs.statSync(path.join(dirPath, file));
          // We only want directories that have a page.tsx (excluding dynamic routes with brackets if we want, or handling them if we have a data source)
          return stat.isDirectory() && !file.startsWith("[") && fs.existsSync(path.join(dirPath, file, "page.tsx"));
        })
        .map(folder => `${prefix}/${folder}`);
    } catch (e) {
      return [];
    }
  };

  // Get all programmatic industry pages (/industries/healthcare, etc)
  const industryRoutes = getDynamicRoutes("industries", "/industries");
  
  // Get all programmatic solution pages (/services/solutions/geo, etc)
  // Assuming they are hardcoded folders or we can just map the services array from Navbar
  const solutionRoutes = getDynamicRoutes(path.join("services", "solutions"), "/services/solutions");

  const allStaticRoutes = [...staticRoutes, ...industryRoutes, ...solutionRoutes];

  const staticPages = allStaticRoutes.map((route) => ({
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
