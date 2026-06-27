import {
  Download,
  Cloud,
  LayoutGrid,
  Shield,
  Moon,
  Coins,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

type Feature = {
  title: string;
  copy: string;
  Icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Export & Reports",
    copy: "Export any contact or month to CSV/Excel — sent, received, net balances.",
    Icon: Download,
  },
  {
    title: "Cloud Sync",
    copy: "Optional sync keeps local and cloud in step. Works fully offline without it.",
    Icon: Cloud,
  },
  {
    title: "Home-Screen Widgets",
    copy: "Top balances, recent transactions, and cash flow — right on your home screen.",
    Icon: LayoutGrid,
  },
  {
    title: "Guest / Offline Mode",
    copy: "Start instantly, no account needed. Your data lives on your device.",
    Icon: Shield,
  },
  {
    title: "Light & Dark",
    copy: "A consistent design system in both themes. Personalise your defaults.",
    Icon: Moon,
  },
  {
    title: "150+ Currencies",
    copy: "Track money in over 150 currencies. Live exchange rates resolve it all into one balance.",
    Icon: Coins,
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-surface-low">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-xl">
          <Eyebrow>Everything else</Eyebrow>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.5rem)] leading-[1.06] text-text">
            A complete ledger in your pocket.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, copy, Icon }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 60}
              className="shadow-ambient rounded-card bg-surface-lowest p-6"
            >
              <Icon
                size={22}
                strokeWidth={1.5}
                className="text-text"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-base font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
