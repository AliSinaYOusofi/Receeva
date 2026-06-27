import { Reveal } from "./Reveal";
import { Chip, Eyebrow } from "./ui";

const highlights = [
  "Full right-to-left layout",
  "Switch instantly, no restart",
  "Localised numbers & dates",
];

export function LanguageShowcase() {
  return (
    <section
      id="languages"
      className="bg-surface scroll-mt-20"
      aria-labelledby="languages-showcase-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
        {/* Screenshot — slides in from the left */}
        <Reveal variant="left" className="flex justify-center lg:justify-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/language_selection_modal.png"
            alt="Receeva language picker showing English, Arabic, Dari, Pashto, Urdu and more"
            width={320}
            height={654}
            loading="lazy"
            className="w-[260px] sm:w-[300px]"
          />
        </Reveal>

        {/* Copy — rises up */}
        <Reveal variant="up" delay={100} className="max-w-md">
          <Eyebrow>Speaks your language</Eyebrow>
          <h2
            id="languages-showcase-heading"
            className="font-display mt-4 text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.06] text-text"
          >
            Ten languages, right to left.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-secondary">
            Pick from ten languages — English, Arabic, Dari, Pashto, Urdu, Hindi,
            Spanish, French, Portuguese and Turkish. Right-to-left scripts are
            fully mirrored, so the whole app feels native, not translated.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {highlights.map((h) => (
              <Chip key={h}>{h}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
