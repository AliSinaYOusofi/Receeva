import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Eyebrow } from "../components/ui";

const EFFECTIVE_DATE = "2026-04-30";
const CONTACT_EMAIL = "senayousofiali@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Receeva app collects, uses, stores, and protects your data. No tracking, no ads, no data selling.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · Receeva",
    description:
      "How the Receeva app collects, uses, stores, and protects your data. No tracking, no ads, no data selling.",
    url: "/privacy",
    type: "article",
  },
};

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

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <article className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-display mt-5 text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.03] text-text">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-text-muted">
            Effective as of{" "}
            <time dateTime={EFFECTIVE_DATE}>{EFFECTIVE_DATE}</time>
          </p>

          <Body>
            This privacy policy applies to the Receeva app (hereby referred to
            as &ldquo;Application&rdquo;) for mobile devices, created by
            Habibullah Yousofi (hereby referred to as &ldquo;Service
            Provider&rdquo;) as a free service.
          </Body>

          <Heading>What We Collect</Heading>
          <Body>The Application collects only the information you actively provide:</Body>
          <ul className="mt-5 flex list-disc flex-col gap-3 pl-6 text-[1.0625rem] leading-relaxed text-text-secondary marker:text-text-muted">
            <li>
              <span className="font-medium text-text">Contact information</span>{" "}
              — name, phone number, and email address (used to create and manage
              your account)
            </li>
            <li>
              <span className="font-medium text-text">Financial entries</span> —
              expenses, budgets, recurring payments, and transaction records
              that you enter manually
            </li>
          </ul>
          <Body>
            We do not collect your location, device identifiers, browsing
            behaviour, or any other passive data.
          </Body>

          <Heading>How We Use Your Data</Heading>
          <Body>
            Your data is used exclusively to provide the Application&rsquo;s core
            functionality:
          </Body>
          <ul className="mt-5 flex list-disc flex-col gap-3 pl-6 text-[1.0625rem] leading-relaxed text-text-secondary marker:text-text-muted">
            <li>
              Storing and syncing your financial entries across your devices
              when you choose to sync
            </li>
            <li>
              Associating your data with your account so you can recover it if
              needed
            </li>
          </ul>
          <Body>
            We do not use your data for advertising, analytics, profiling, or any
            purpose beyond operating the Application.
          </Body>

          <Heading>No Tracking. No Ads.</Heading>
          <Body>
            Receeva does not track you. There are no advertising SDKs, no
            behavioural analytics, and no third-party data brokers involved. Your
            financial data is yours — we have no interest in monetising it.
          </Body>

          <Heading>Third-Party Sharing</Heading>
          <Body>
            We do not sell, rent, or share your personal information with third
            parties for their own purposes.
          </Body>
          <Body>
            The Application uses Expo as a development platform. Expo may process
            minimal technical data (such as crash reports) under its own privacy
            policy:{" "}
            <a
              href="https://expo.io/privacy"
              className="text-text underline underline-offset-4 transition-colors hover:text-text-secondary"
            >
              expo.io/privacy
            </a>
            .
          </Body>
          <Body>
            We may disclose information only if required by law (e.g. a valid
            legal order), and solely to the extent required.
          </Body>

          <Heading>Data Storage &amp; Security</Heading>
          <Body>
            Your data is stored on your device first. If you create an account
            and choose to sync, your data is stored securely on our servers and
            tied to your account. We apply appropriate technical and
            organisational safeguards to protect it.
          </Body>
          <Body>
            You can request deletion of all your account data at any time by
            contacting us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text underline underline-offset-4 transition-colors hover:text-text-secondary"
            >
              {CONTACT_EMAIL}
            </a>
            . We will action your request promptly.
          </Body>

          <Heading>Data Retention</Heading>
          <Body>
            We retain your data for as long as your account is active. If you
            delete your account, all associated data is permanently removed from
            our servers.
          </Body>

          <Heading>Children</Heading>
          <Body>
            The Application is not directed at children under 13. We do not
            knowingly collect information from anyone under 13. If you believe a
            child has provided us with personal data, please contact us and we
            will delete it immediately.
          </Body>

          <Heading>Changes to This Policy</Heading>
          <Body>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated effective date. Continued use of
            the Application after changes constitutes acceptance of the updated
            policy.
          </Body>

          <Heading>Contact Us</Heading>
          <Body>
            Questions about this privacy policy? Reach us at{" "}
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
