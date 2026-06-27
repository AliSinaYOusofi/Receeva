import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/StructuredData";

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

const description =
  "Receeva is an offline-first, multi-currency personal finance & ledger app. Track money sent and received with anyone, see net balances, and convert with live rates. iOS & Android. No ads.";

export const metadata: Metadata = {
  metadataBase: new URL("https://receeva.app"),
  title: {
    default: "Receeva — Track money with anyone, in any currency",
    // Future sub-pages get "<Page> · Receeva" — keeps the brand in every title.
    template: "%s · Receeva",
  },
  description,
  applicationName: "Receeva",
  // Canonical URL — consolidates ranking signals onto the apex domain and
  // prevents duplicate-content dilution from query strings or trailing slashes.
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Receeva",
    "Receeva app",
    "personal finance",
    "ledger app",
    "multi-currency",
    "send and receive money",
    "offline-first",
    "money tracker",
  ],
  // Explicitly invite indexing and rich snippets (defaults are permissive, but
  // being explicit avoids surprises and maximises preview size in results).
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
    title: "Receeva — Track money with anyone, in any currency",
    description,
    url: "/",
    siteName: "Receeva",
    type: "website",
    locale: "en_US",
    // og:image / twitter:image are supplied by app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: "Receeva — Track money with anyone, in any currency",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Without JS, framer-motion can't animate from its initial hidden
            state — force the inline-styled motion elements visible. */}
        <noscript>
          <style>{`main [style]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
