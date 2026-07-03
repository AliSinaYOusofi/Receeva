import {
  Download,
  Cloud,
  LayoutGrid,
  Shield,
  Moon,
  Coins,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

const items: { key: string; Icon: LucideIcon }[] = [
  { key: "export", Icon: Download },
  { key: "sync", Icon: Cloud },
  { key: "widgets", Icon: LayoutGrid },
  { key: "guest", Icon: Shield },
  { key: "theme", Icon: Moon },
  { key: "currencyCount", Icon: Coins },
];

export function FeatureGrid() {
  const t = useTranslations("featureGrid");

  return (
    <section className="bg-surface-low">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-xl">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.06] text-text">
            {t("headline")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, Icon }, i) => (
            <Reveal
              key={key}
              delay={(i % 3) * 60}
              className="shadow-ambient rounded-card bg-surface-lowest p-6"
            >
              <Icon
                size={22}
                strokeWidth={1.5}
                className="text-text"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-base font-semibold text-text">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t(`items.${key}.copy`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
