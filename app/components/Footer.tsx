const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Help", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
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
              Crafted for the minimalist curator.
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
                    <a
                      href={l.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 text-sm text-text-muted">
          © 2026 Receeva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
