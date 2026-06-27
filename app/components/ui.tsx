import type { ReactNode } from "react";

/** Tiny uppercase editorial eyebrow label. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-eyebrow font-medium uppercase tracking-[0.12em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}

/** Pill chip — secondary-container background, no border. */
export function Chip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const styles =
    tone === "dark"
      ? "bg-white/10 text-white/90"
      : "bg-secondary-container text-text-secondary";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm ${styles}`}
    >
      {children}
    </span>
  );
}

/** App Store + Google Play placeholder badges. */
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        aria-label="Download on the App Store (placeholder link)"
        className="inline-block rounded-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/badge-appstore-placeholder.svg"
          alt="Download on the App Store"
          width={170}
          height={56}
        />
      </a>
      <div className="relative inline-block">
        <span
          role="img"
          aria-label="Get it on Google Play — coming soon"
          className="inline-block cursor-default rounded-xl opacity-60 select-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/badge-googleplay-placeholder.svg"
            alt=""
            width={170}
            height={56}
          />
        </span>
        <span className="pointer-events-none absolute -top-2 -right-2 rounded-full bg-surface-lowest px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.08em] text-text uppercase shadow-ambient ring-1 ring-(--separator)">
          Coming soon
        </span>
      </div>
    </div>
  );
}
