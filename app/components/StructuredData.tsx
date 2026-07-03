import { getTranslations } from "next-intl/server";
import { faqKeys } from "./faqData";
import type { Locale } from "@/i18n/routing";

const SITE_URL = "https://receeva.app";

/**
 * Schema.org JSON-LD. This is what makes Google treat "Receeva" as a named
 * entity rather than a generic string — strengthening the brand-name ranking,
 * enabling a richer SERP listing, and making the FAQ eligible for rich results.
 *
 * Rendered in a Server Component as plain <script> tags. We use a single
 * @graph so the WebSite, Organization, SoftwareApplication and FAQPage nodes
 * can reference one another by @id. Content is localized per-locale so each
 * language's rich results show translated names/descriptions.
 */
export async function StructuredData({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const tFaq = await getTranslations({ locale, namespace: "faq.items" });
  const url = `${SITE_URL}/${locale}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Receeva",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
        },
        description: t("description"),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url,
        name: "Receeva",
        description: t("description"),
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: locale,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Receeva",
        applicationCategory: "FinanceApplication",
        operatingSystem: "iOS, Android",
        description: t("description"),
        url,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqKeys.map((key) => ({
          "@type": "Question",
          name: tFaq(`${key}.q`),
          acceptedAnswer: {
            "@type": "Answer",
            text: tFaq(`${key}.a`),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; there is no user input here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
