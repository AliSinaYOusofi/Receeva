import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Eyebrow } from "../../components/ui";
import { routing } from "@/i18n/routing";

const EFFECTIVE_DATE = "2026-04-30";
const CONTACT_EMAIL = "senayousofiali@gmail.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/privacy`,
    },
    openGraph: {
      title: `${t("title")} · Receeva`,
      description: t("description"),
      url: `/${locale}/privacy`,
      type: "article",
    },
  };
}

/** Section heading shared across the policy. */
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-14 text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] text-text">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requested } = await params;
  if (!hasLocale(routing.locales, requested)) notFound();
  const locale = requested;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");
  const effectiveDateLabel = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(EFFECTIVE_DATE));

  return (
    <>
      <Nav />
      <main>
        <article className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.03] text-text">
            {t("heading")}
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-text-muted">
            {t("effectiveAsOf")}{" "}
            <time dateTime={EFFECTIVE_DATE}>{effectiveDateLabel}</time>
          </p>

          <Body>{t("intro")}</Body>

          <Heading>{t("collectHeading")}</Heading>
          <Body>{t("collectIntro")}</Body>
          <ul className="mt-5 flex list-disc flex-col gap-3 ps-6 text-[1.0625rem] leading-relaxed text-text-secondary marker:text-text-muted">
            <li>
              <span className="font-medium text-text">
                {t("collectContactLabel")}
              </span>{" "}
              {t("collectContactBody")}
            </li>
            <li>
              <span className="font-medium text-text">
                {t("collectFinancialLabel")}
              </span>{" "}
              {t("collectFinancialBody")}
            </li>
          </ul>
          <Body>{t("collectNone")}</Body>

          <Heading>{t("useHeading")}</Heading>
          <Body>{t("useIntro")}</Body>
          <ul className="mt-5 flex list-disc flex-col gap-3 ps-6 text-[1.0625rem] leading-relaxed text-text-secondary marker:text-text-muted">
            <li>{t("useSync")}</li>
            <li>{t("useAccount")}</li>
          </ul>
          <Body>{t("useNone")}</Body>

          <Heading>{t("trackingHeading")}</Heading>
          <Body>{t("trackingBody")}</Body>

          <Heading>{t("sharingHeading")}</Heading>
          <Body>{t("sharingIntro")}</Body>
          <Body>
            {t("sharingExpo")}{" "}
            <a
              href="https://expo.io/privacy"
              className="text-text underline underline-offset-4 transition-colors hover:text-text-secondary"
            >
              expo.io/privacy
            </a>
            .
          </Body>
          <Body>{t("sharingLegal")}</Body>

          <Heading>{t("storageHeading")}</Heading>
          <Body>{t("storageBody")}</Body>
          <Body>
            {t("storageDeletionPre")}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text underline underline-offset-4 transition-colors hover:text-text-secondary"
            >
              {CONTACT_EMAIL}
            </a>
            {t("storageDeletionPost")}
          </Body>

          <Heading>{t("retentionHeading")}</Heading>
          <Body>{t("retentionBody")}</Body>

          <Heading>{t("childrenHeading")}</Heading>
          <Body>{t("childrenBody")}</Body>

          <Heading>{t("changesHeading")}</Heading>
          <Body>{t("changesBody")}</Body>

          <Heading>{t("contactHeading")}</Heading>
          <Body>
            {t("contactPre")}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text underline underline-offset-4 transition-colors hover:text-text-secondary"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </Body>
        </article>
      </main>
      <Footer />
    </>
  );
}
