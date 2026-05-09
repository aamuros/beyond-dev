import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://beyond.dev";

  const staticPages = [
    "",
    "/services",
    "/process",
    "/work",
    "/team",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
