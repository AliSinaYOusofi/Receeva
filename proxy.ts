import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// Next.js 16 renamed the `middleware` file convention to `proxy`; next-intl's
// handler is a plain (request) => NextResponse function, so it works either
// way — only the export name changed.
export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Match every path except Next internals, API routes, and files with an
  // extension (images, icons, the manifest, etc.) so locale routing only
  // ever runs against actual pages.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
