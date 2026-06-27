import Link from "next/link";
import type { Metadata } from "next";

// Next injects <meta name="robots" content="noindex"> for 404 responses, but
// being explicit about the title keeps the tab label clean.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-text-muted">
        Error 404
      </p>

      <h1 className="mt-5 font-serif text-6xl tracking-[-0.02em] text-text sm:text-7xl">
        Off the ledger.
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
        The page you’re looking for doesn’t exist or has moved. Let’s get you
        back to a balance you recognise.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-inverse transition-transform duration-200 hover:-translate-y-0.5"
        >
          Back to home
        </Link>
        <Link
          href="/#features"
          className="rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text"
        >
          Explore features
        </Link>
      </div>
    </main>
  );
}
