"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLocale } from "next-intl";
import { isRtl } from "@/i18n/routing";

/** Direction the element travels from as it reveals. `start`/`end` are
 * logical (start = leading edge, end = trailing edge) and flip automatically
 * in RTL locales; `left`/`right` are physical and never flip. */
export type RevealVariant = "up" | "start" | "end" | "left" | "right" | "scale" | "fade";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  id?: string;
  /** Which direction the element animates from. Defaults to "up". */
  variant?: RevealVariant;
};

/**
 * Editorial reveal-on-scroll, powered by framer-motion. Each instance can
 * pick a `variant` so neighbouring sections animate differently. Honors
 * prefers-reduced-motion (renders immediately, no transform) via
 * `useReducedMotion`.
 */
export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  id,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -8% 0px",
  });
  const reduce = useReducedMotion();
  const rtl = isRtl(useLocale());

  // The type is forced to "div" so motion's props/ref typing resolves, but the
  // runtime value is the real tag string — so motion.ul etc. still render.
  const tag = (typeof as === "string" ? as : "div") as "div";
  const MotionTag = motion[tag];

  const hiddenOffset: Record<RevealVariant, { x?: number; y?: number; scale?: number }> = {
    up: { y: 28 },
    start: { x: rtl ? 48 : -48 },
    end: { x: rtl ? -48 : 48 },
    left: { x: -48 },
    right: { x: 48 },
    scale: { scale: 0.92 },
    fade: {},
  };

  const hidden = { opacity: 0, ...hiddenOffset[variant] };
  const shown = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <MotionTag
      ref={ref}
      id={id}
      className={className}
      initial={reduce ? false : hidden}
      animate={reduce ? shown : inView ? shown : hidden}
      transition={{ duration: 0.7, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </MotionTag>
  );
}
