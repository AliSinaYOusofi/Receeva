import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ur", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales that read right-to-left. */
export const rtlLocales: readonly Locale[] = ["ur", "ar"];

export function isRtl(locale: string): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ur: "اردو",
  ar: "العربية",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
