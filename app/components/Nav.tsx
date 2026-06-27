"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Currencies", href: "/#currencies" },
  { label: "Privacy", href: "/#privacy" },
  { label: "FAQ", href: "/#faq" },
];

/** Past this many px scrolled, the bar collapses into a floating pill. */
const SHRINK_AT = 24;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHRINK_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // One spring shared by every animated property keeps the morph cohesive.
  const spring: Transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 32, mass: 0.9 };

  const state = scrolled ? "shrunk" : "top";

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={false}
      animate={state}
      variants={{
        top: { paddingTop: 0, paddingLeft: 0, paddingRight: 0 },
        shrunk: { paddingTop: 12, paddingLeft: 16, paddingRight: 16 },
      }}
      transition={spring}
    >
      <motion.div
        className="glass mx-auto overflow-hidden"
        initial={false}
        animate={open ? "open" : state}
        variants={{
          top: {
            maxWidth: "72rem",
            borderRadius: 0,
            boxShadow: "0 0 0 0 rgba(0,0,0,0), 0 0.5px 0 0 var(--separator)",
          },
          shrunk: {
            maxWidth: "46rem",
            borderRadius: 999,
            boxShadow:
              "0 18px 40px var(--shadow-ambient), inset 0 0 0 1px var(--separator)",
          },
          // While the mobile menu is open, soften (not full pill) so the
          // dropdown has square-ish corners to live in.
          open: {
            maxWidth: scrolled ? "46rem" : "72rem",
            borderRadius: scrolled ? 24 : 0,
            boxShadow:
              "0 18px 40px var(--shadow-ambient), inset 0 0 0 1px var(--separator)",
          },
        }}
        transition={spring}
      >
        <motion.nav
          aria-label="Primary"
          className="flex items-center justify-between px-6 lg:px-8"
          initial={false}
          animate={state}
          variants={{ top: { height: 64 }, shrunk: { height: 56 } }}
          transition={spring}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Receeva home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt=""
              width={28}
              height={28}
              className="rounded-md"
              aria-hidden="true"
            />
            <span className="text-lg font-semibold tracking-[-0.02em] text-text">
              Receeva
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary transition-colors hover:text-text"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#download"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-inverse transition-transform duration-200 hover:-translate-y-0.5 sm:inline-block"
            >
              Download
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              className="border-t border-(--separator) md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={spring}
              style={{ overflow: "hidden" }}
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 text-base text-text-secondary transition-colors hover:bg-surface-container hover:text-text"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/#download"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-inverse"
                >
                  Download
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
