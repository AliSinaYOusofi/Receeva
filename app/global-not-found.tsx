import type { Metadata } from "next";
import "./globals.css";

// Handles URLs that don't match any route at all (e.g. a malformed locale
// segment), bypassing the [locale] layout entirely — so it must bring its
// own <html>/<body> and can't rely on next-intl's request-scoped context.
export const metadata: Metadata = {
  metadataBase: new URL("https://receeva.app"),
  title: "Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-text-muted">
            Error 404
          </p>
          <h1 className="mt-5 text-6xl tracking-[-0.02em] text-text sm:text-7xl">
            Off the ledger.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <a
            href="/en"
            className="mt-9 rounded-full bg-primary px-6 py-3 text-sm font-medium text-inverse"
          >
            Back to home
          </a>
        </main>
      </body>
    </html>
  );
}
