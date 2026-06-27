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
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

type Flag = typeof GB;

const languages: { name: string; Flag: Flag }[] = [
  { name: "English", Flag: GB },
  { name: "Spanish", Flag: ES },
  { name: "French", Flag: FR },
  { name: "Portuguese", Flag: PT },
  { name: "Turkish", Flag: TR },
  { name: "Urdu", Flag: PK },
  { name: "Hindi", Flag: IN },
  { name: "Persian", Flag: IR },
  { name: "Arabic", Flag: SA },
  { name: "Pashto", Flag: AF },
];

export function Languages() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <Reveal>
          <Eyebrow className="mx-auto">Speaks your language</Eyebrow>
          <p className="font-display mx-auto mt-5 max-w-2xl text-[clamp(1.5rem,3vw,2rem)] italic leading-snug text-text">
            Available in ten languages — with full right-to-left support.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-9 flex flex-wrap justify-center gap-2.5">
          {languages.map(({ name, Flag }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3.5 py-1.5 text-sm text-text-secondary"
            >
              <Flag
                aria-hidden="true"
                className="h-3.5 w-5 shrink-0 rounded-xs"
              />
              {name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
