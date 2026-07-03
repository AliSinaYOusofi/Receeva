import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("columns.product.title"),
      links: [
        { label: t("columns.product.features"), href: "/#features" },
        { label: t("columns.product.download"), href: "/#download" },
      ],
    },
    {
      title: t("columns.support.title"),
      links: [
        { label: t("columns.support.faq"), href: "/#faq" },
        { label: t("columns.support.help"), href: "#" },
        { label: t("columns.support.contact"), href: "#" },
      ],
    },
    {
      title: t("columns.legal.title"),
      links: [
        { label: t("columns.legal.privacy"), href: "/privacy" },
        { label: t("columns.legal.terms"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-surface-low">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt=""
                width={28}
                height={28}
                className="rounded-md"
                aria-hidden="true"
              />
              <span className="text-lg font-semibold tracking-[-0.02em] text-text">
                Receeva
              </span>
            </div>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-text-muted">
              {t("tagline")}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-text-muted">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 text-sm text-text-muted">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
