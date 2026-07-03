import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { FeatureBlock } from "../components/FeatureBlock";
import { FeatureGrid } from "../components/FeatureGrid";
import { Privacy } from "../components/Privacy";
import { LanguageShowcase } from "../components/LanguageShowcase";
import { Languages } from "../components/Languages";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />

        <div id="features" className="scroll-mt-16">
          <FeatureBlock
            eyebrow={t("contacts.eyebrow")}
            headline={t("contacts.headline")}
            body={t("contacts.body")}
            chips={t.raw("contacts.chips") as string[]}
            image="/images/single_customer_transactions.png"
            imageAlt={t("contacts.imageAlt")}
            side="left"
          />
        </div>

        <FeatureBlock
          id="currencies"
          eyebrow={t("currencies.eyebrow")}
          headline={t("currencies.headline")}
          body={t("currencies.body")}
          chips={t.raw("currencies.chips") as string[]}
          image="/images/record_transactions_screen.png"
          imageAlt={t("currencies.imageAlt")}
          side="right"
        />

        <FeatureBlock
          eyebrow={t("insights.eyebrow")}
          headline={t("insights.headline")}
          body={t("insights.body")}
          chips={t.raw("insights.chips") as string[]}
          image="/images/analytics_screen.png"
          imageAlt={t("insights.imageAlt")}
          side="left"
        />

        <FeatureGrid />
        <Privacy />
        <LanguageShowcase />
        <Languages />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
