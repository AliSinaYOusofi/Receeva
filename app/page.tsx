import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { FeatureBlock } from "./components/FeatureBlock";
import { FeatureGrid } from "./components/FeatureGrid";
import { Privacy } from "./components/Privacy";
import { LanguageShowcase } from "./components/LanguageShowcase";
import { Languages } from "./components/Languages";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />

        <div id="features" className="scroll-mt-16">
          <FeatureBlock
            eyebrow="01 — Contacts & Ledgers"
            headline="Every person, every cent."
            body="Add a contact — or pull one from your phone book — and record unlimited transactions against them, each in any currency. Split costs, track debts, and settle balances. Currency cards show the net per currency: total received minus total sent."
            chips={["Sent / Received", "Net balances", "Per-currency cards", "Contact import"]}
            image="/images/single_customer_transactions.png"
            imageAlt="Receeva customer detail screen with per-currency net balance cards"
            side="left"
          />
        </div>

        <FeatureBlock
          id="currencies"
          eyebrow="02 — Currency Conversion"
          headline="One world, one balance."
          body="USD, EUR, GBP, JPY — every transaction keeps its own currency, then resolves to your home currency in real time with live exchange rates. A built-in converter unifies any set of transactions into a single currency for a clean, consolidated view."
          chips={["Live exchange rates", "Set a default currency", "Manual rate fallback", "One unified view"]}
          image="/images/record_transactions_screen.png"
          imageAlt="Receeva transaction entry screen recording an amount in a selected currency wallet"
          side="right"
        />

        <FeatureBlock
          eyebrow="03 — Insights & Trends"
          headline="See where it flows."
          body="Visualise transaction flow — sent vs received — across the last 6 months, by weekday, by currency, and by top contacts. Spot patterns without spreadsheets."
          chips={["6-month trends", "Activity by weekday", "By currency", "Top customers"]}
          image="/images/analytics_screen.png"
          imageAlt="Receeva statistics screen with a per-currency sent versus received breakdown"
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
