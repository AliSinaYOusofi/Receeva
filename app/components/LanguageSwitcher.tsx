"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, localeNames, isRtl, type Locale } from "@/i18n/routing";

/** Compact dropdown that swaps locale while staying on the same page. */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, insetInlineEnd: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const rtl = isRtl(locale);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  // The nav bar's own scroll-driven shrink animation moves the button, which
  // would leave the portaled menu floating in the wrong spot — just close it.
  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // The nav bar clips overflow to animate its pill shape, so the dropdown is
  // portaled to <body> and positioned manually instead of relying on
  // `position: absolute` inside the clipped ancestor.
  function toggle() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + 8,
        insetInlineEnd: rtl
          ? rect.left
          : window.innerWidth - rect.right,
      });
    }
    setOpen((v) => !v);
  }

  function selectLocale(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("language")}
        className={`inline-flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-container hover:text-text sm:px-3 ${className}`}
      >
        <Globe size={16} aria-hidden="true" />
        <span className="hidden sm:inline">{localeNames[locale as Locale]}</span>
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ top: menuPos.top, insetInlineEnd: menuPos.insetInlineEnd }}
            className="glass shadow-ambient fixed z-50 min-w-36 overflow-hidden rounded-2xl py-1.5 ring-1 ring-(--separator)"
          >
            {routing.locales.map((l) => (
              <button
                key={l}
                type="button"
                role="menuitem"
                onClick={() => selectLocale(l)}
                className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-sm text-text-secondary transition-colors hover:bg-surface-container hover:text-text"
              >
                <span dir={l === "en" ? "ltr" : "rtl"}>{localeNames[l]}</span>
                {l === locale && <Check size={15} aria-hidden="true" />}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
