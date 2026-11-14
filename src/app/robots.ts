import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://vyomamedia.co.in/sitemap.xml",
    host: "https://vyomamedia.co.in",
  };
}
