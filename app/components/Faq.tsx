"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";
import { faqKeys } from "./faqData";

export function Faq() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Reveal className="mb-12">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.06] text-text">
            {t("headline")}
          </h2>
        </Reveal>

        <Reveal as="ul" className="flex flex-col gap-2">
          {faqKeys.map((key, i) => {
            const isOpen = open === i;
            return (
              <li key={key} className="rounded-card bg-surface-lowest">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                  >
                    <span className="text-base font-medium text-text">
                      {t(`items.${key}.q`)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-text-muted"
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-text-secondary">
                      {t(`items.${key}.a`)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
