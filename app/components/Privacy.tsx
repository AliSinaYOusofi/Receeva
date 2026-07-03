import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Chip, Eyebrow } from "./ui";

export function Privacy() {
  const t = useTranslations("privacySection");
  const chips = t.raw("chips") as string[];

  return (
    <section
      id="privacy"
      className="bg-atelier scroll-mt-20 text-white"
      aria-labelledby="privacy-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-36">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-white/55!">{t("eyebrow")}</Eyebrow>
          <h2
            id="privacy-heading"
            className="font-display mt-5 text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05]"
          >
            {t("headline")}
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">
            {t("body")}
          </p>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <Chip key={c} tone="dark">
                {c}
              </Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
