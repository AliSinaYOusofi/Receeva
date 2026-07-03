import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { StoreBadges } from "./ui";

export function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section className="bg-atelier text-white" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
        <Reveal variant="scale">
          <h2
            id="cta-heading"
            className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.04]"
          >
            {t("headline")}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[1.0625rem] text-white/70">
            {t("body")}
          </p>
          <div className="mt-10 flex justify-center">
            <StoreBadges />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
