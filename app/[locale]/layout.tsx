import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Fraunces, Noto_Sans_Arabic, Noto_Nastaliq_Urdu, Amiri } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { StructuredData } from "../components/StructuredData";
import { ThemeProvider } from "../components/ThemeProvider";
import { routing, isRtl, type Locale } from "@/i18n/routing";

// Body / UI face. Optical-size axis lets glyphs adapt from caption to display.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"],
});

// Editorial display serif for headlines — high-contrast, "atelier" character.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

// Arabic sans-serif — clean, geometric, legible at UI sizes.
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

// Nastaliq is the culturally expected script for Urdu — used for both
// headings and body so the Urdu locale reads as native, not transliterated.
// It needs materially more line-height than Latin/Naskh scripts (see the
// `html[lang="ur"]` rules in globals.css) because letterforms stack diagonally.
const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-noto-nastaliq-urdu",
  display: "swap",
});

// Amiri — a classical Arabic typeface with the same editorial, high-contrast
// character as Fraunces. Used for Arabic display headlines only.
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri-serif",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const description = t("description");
  const languageAlternates = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}`]),
  );
  const ogLocales: Record<Locale, string> = {
    en: "en_US",
    ur: "ur_PK",
    ar: "ar_SA",
  };

  return {
    metadataBase: new URL("https://ledgerbest.app"),
    title: {
      default: t("titleDefault"),
      template: t("titleTemplate"),
    },
    description,
    applicationName: "LedgerBest",
    // Canonical + hreflang alternates — tells search engines these are the
    // same page in different languages, not duplicate content.
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languageAlternates, "x-default": "/en" },
    },
    keywords: t.raw("keywords") as string[],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: t("titleDefault"),
      description,
      url: `/${locale}`,
      siteName: "LedgerBest",
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
      // og:image / twitter:image are supplied by app/opengraph-image.tsx.
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleDefault"),
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: requested } = await params;
  if (!hasLocale(routing.locales, requested)) notFound();
  const locale = requested;

  // Enables static rendering for this locale's request-scoped APIs.
  setRequestLocale(locale);

  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${notoSansArabic.variable} ${notoNastaliqUrdu.variable} ${amiri.variable}`}
    >
      <head>
        {/* Without JS, framer-motion can't animate from its initial hidden
            state — force the inline-styled motion elements visible. */}
        <noscript>
          <style>{`main [style]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
            <StructuredData locale={locale} />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
