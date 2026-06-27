import type { MetadataRoute } from "next";

const SITE_URL = "https://receeva.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
