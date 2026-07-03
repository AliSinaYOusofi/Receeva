import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://receeva.app";

function languageAlternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === routing.defaultLocale ? 1 : 0.9,
      alternates: { languages: languageAlternates("") },
    });
    entries.push({
      url: `${SITE_URL}/${locale}/privacy`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: languageAlternates("/privacy") },
    });
  }

  return entries;
}
