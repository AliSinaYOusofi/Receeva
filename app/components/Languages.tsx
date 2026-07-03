import GB from "country-flag-icons/react/3x2/GB";
import ES from "country-flag-icons/react/3x2/ES";
import FR from "country-flag-icons/react/3x2/FR";
import PT from "country-flag-icons/react/3x2/PT";
import TR from "country-flag-icons/react/3x2/TR";
import PK from "country-flag-icons/react/3x2/PK";
import IN from "country-flag-icons/react/3x2/IN";
import IR from "country-flag-icons/react/3x2/IR";
import SA from "country-flag-icons/react/3x2/SA";
import AF from "country-flag-icons/react/3x2/AF";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

type Flag = typeof GB;

const languages: { key: string; Flag: Flag }[] = [
  { key: "english", Flag: GB },
  { key: "spanish", Flag: ES },
  { key: "french", Flag: FR },
  { key: "portuguese", Flag: PT },
  { key: "turkish", Flag: TR },
  { key: "urdu", Flag: PK },
  { key: "hindi", Flag: IN },
  { key: "persian", Flag: IR },
  { key: "arabic", Flag: SA },
  { key: "pashto", Flag: AF },
];

export function Languages() {
  const t = useTranslations("languages");

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <Reveal>
          <Eyebrow className="mx-auto">{t("eyebrow")}</Eyebrow>
          <p className="font-display mx-auto mt-5 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] italic leading-snug text-text">
            {t("statement")}
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-9 flex flex-wrap justify-center gap-2.5">
          {languages.map(({ key, Flag }) => (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3.5 py-1.5 text-sm text-text-secondary"
            >
              <Flag
                aria-hidden="true"
                className="h-3.5 w-5 shrink-0 rounded-xs"
              />
              {t(`names.${key}`)}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
