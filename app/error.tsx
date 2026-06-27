"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  // Next 16 renamed the recovery callback from `reset` to `unstable_retry`.
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Surface the error for any reporting/observability wired up later.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-text-muted">
        Something went wrong
      </p>

      <h1 className="mt-5 font-serif text-6xl tracking-[-0.02em] text-text sm:text-7xl">
        Numbers didn’t add up.
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
        An unexpected error interrupted this page. You can try again, or head
        back home.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-inverse transition-transform duration-200 hover:-translate-y-0.5"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
