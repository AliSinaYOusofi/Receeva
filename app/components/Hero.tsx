"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow, StoreBadges } from "./ui";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduce = useReducedMotion();

  // Per-element entrance on page load. Each call gets its own direction,
  // delay and duration so the hero assembles itself piece by piece. Under
  // reduced motion every element just renders in place.
  const load = (
    from: { x?: number; y?: number; scale?: number },
    delay: number,
    duration = 0.7,
  ) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, ...from },
          animate: { opacity: 1, x: 0, y: 0, scale: 1 },
          transition: { duration, delay, ease: EASE },
        };

  // Floating glass badge gets a springy pop slightly after the phone lands.
  const floatBadge = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 0.6, y: -6 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 260, damping: 18, delay: 0.85 },
      };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:pb-32 lg:pt-24">
        {/* Copy */}
        <div className="max-w-xl">
          {/* Eyebrow drops in from above */}
          <motion.div {...load({ y: -12 }, 0.05, 0.6)}>
            <Eyebrow>Personal Finance · Multi-currency</Eyebrow>
          </motion.div>
          {/* Headline rises up, a touch slower */}
          <motion.h1
            {...load({ y: 32 }, 0.18, 0.8)}
            id="hero-heading"
            className="font-display mt-5 text-[clamp(2.75rem,6.2vw,4.25rem)] leading-[1.02] text-text"
          >
            Every person,
            <br />
            every cent.
          </motion.h1>
          {/* Paragraph simply fades in */}
          <motion.p
            {...load({}, 0.36)}
            className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-text-secondary"
          >
            Track money you send and receive with anyone — in any currency.
            Live exchange rates resolve it all into one balance. Offline-first,
            no ads, your data stays yours.
          </motion.p>
          {/* Store badges scale in */}
          <motion.div
            {...load({ scale: 0.92 }, 0.5, 0.5)}
            id="download"
            className="mt-9 scroll-mt-24"
          >
            <StoreBadges />
          </motion.div>
          {/* Secondary link fades up last */}
          <motion.div {...load({ y: 10 }, 0.62, 0.5)}>
            <a
              href="#features"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text underline-offset-4 hover:underline"
            >
              See features
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Phone mockup — slides in from the right edge */}
        <motion.div
          {...load({ x: 64 }, 0.25, 0.9)}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* floating glass currency badge */}
            {/* <motion.div
              {...floatBadge}
              className="glass shadow-ambient absolute -left-4 top-12 z-10 rounded-full px-4 py-2 text-sm font-medium text-text sm:-left-8"
            >
              150+ currencies
            </motion.div> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/summart_of_all_customers_transactions.png"
              alt="Receeva Ledger screen showing contacts with multi-currency net balances"
              width={320}
              height={654}
              className="relative w-[260px] sm:w-[300px] lg:w-[340px] lg:translate-x-8"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
