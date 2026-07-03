import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  const t = useTranslations("trustStrip");
  const items = t.raw("items") as string[];

  return (
    <section aria-label="At a glance" className="bg-surface-low">
      <Reveal variant="fade" className="mx-auto max-w-6xl px-6 py-7 lg:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted">
          {items.map((item) => (
            <li key={item} className="whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
