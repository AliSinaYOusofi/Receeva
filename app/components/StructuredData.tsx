import { faqs } from "./faqData";

const SITE_URL = "https://receeva.app";

/**
 * Schema.org JSON-LD. This is what makes Google treat "Receeva" as a named
 * entity rather than a generic string — strengthening the brand-name ranking,
 * enabling a richer SERP listing, and making the FAQ eligible for rich results.
 *
 * Rendered in a Server Component as plain <script> tags. We use a single
 * @graph so the WebSite, Organization, SoftwareApplication and FAQPage nodes
 * can reference one another by @id.
 */
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
      description:
        "Receeva is an offline-first, multi-currency personal finance and ledger app for tracking money sent and received with anyone.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Receeva",
      description:
        "Track money you send and receive with anyone, in any currency — with live exchange rates and net balances. Offline-first, no ads.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Receeva",
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      description:
        "Offline-first, multi-currency personal finance and ledger app. Track money sent and received with anyone, see net balances per currency, and convert with live exchange rates.",
      url: SITE_URL,
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
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; there is no user input here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
