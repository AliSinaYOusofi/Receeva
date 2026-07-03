import { Reveal } from "./Reveal";
import { Chip, Eyebrow } from "./ui";

type FeatureBlockProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  body: string;
  chips: string[];
  image: string;
  imageAlt: string;
  /** Which side the mockup sits on (desktop). */
  side?: "left" | "right";
};

export function FeatureBlock({
  id,
  eyebrow,
  headline,
  body,
  chips,
  image,
  imageAlt,
  side = "left",
}: FeatureBlockProps) {
  const imageFirst = side === "left";

  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mockup — slides in from whichever side it sits on */}
        <Reveal
          variant={imageFirst ? "start" : "end"}
          className={`flex justify-center ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            width={320}
            height={654}
            loading="lazy"
            className="w-[260px] sm:w-[300px]"
          />
        </Reveal>

        {/* Copy */}
        <Reveal
          delay={100}
          className={`max-w-md ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.06] text-text">
            {headline}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-secondary">
            {body}
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
