import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // The root layout lives at app/[locale]/layout.tsx, so there's no single
  // static layout to compose a 404 page from for truly unmatched URLs —
  // this lets app/global-not-found.tsx handle that case directly.
  experimental: {
    globalNotFound: true,
  },
};

export default withNextIntl(nextConfig);
