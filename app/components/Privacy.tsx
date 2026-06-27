import { Reveal } from "./Reveal";
import { Chip, Eyebrow } from "./ui";

const chips = ["Offline-first", "Sign in with Apple", "Encrypted sync", "No ads"];

export function Privacy() {
  return (
    <section
      id="privacy"
      className="bg-atelier scroll-mt-20 text-inverse"
      aria-labelledby="privacy-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-36">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-white/55!">Privacy by default</Eyebrow>
          <h2
            id="privacy-heading"
            className="font-display mt-5 text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05]"
          >
            Your money. Your device.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">
            Receeva is offline-first. Use it entirely on-device in guest mode, or
            opt into encrypted cloud sync when you want it. No ads. No data
            selling. Sign in with Apple only if you choose to.
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
