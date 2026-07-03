import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Next injects <meta name="robots" content="noindex"> for 404 responses, but
// being explicit about the title keeps the tab label clean.
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound");
  return { title: t("title") };
}

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-text-muted">
        {t("eyebrow")}
      </p>

      <h1 className="mt-5 font-serif text-6xl tracking-[-0.02em] text-text sm:text-7xl">
        {t("headline")}
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
        {t("body")}
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-inverse transition-transform duration-200 hover:-translate-y-0.5"
        >
          {t("backHome")}
        </Link>
        <Link
          href="/#features"
          className="rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text"
        >
          {t("exploreFeatures")}
        </Link>
      </div>
    </main>
  );
}
