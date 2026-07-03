"use client";

import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { createPortal } from "react-dom";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { isRtl } from "@/i18n/routing";

const OPTIONS = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
] as const;

/** Compact dropdown that swaps color scheme, mirroring LanguageSwitcher. */
export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const rtl = isRtl(locale);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, insetInlineEnd: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Theme isn't known on the server, so defer rendering the active icon
  // until after mount to avoid a hydration mismatch.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // The nav bar's own scroll-driven shrink animation moves the button, which
  // would leave the portaled menu floating in the wrong spot — just close it.
  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const active = OPTIONS.find((o) => o.value === theme) ?? OPTIONS[2];
  const ActiveIcon = active.icon;

  // The nav bar clips overflow to animate its pill shape, so the dropdown is
  // portaled to <body> and positioned manually instead of relying on
  // `position: absolute` inside the clipped ancestor.
  function toggle() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + 8,
        insetInlineEnd: rtl ? rect.left : window.innerWidth - rect.right,
      });
    }
    setOpen((v) => !v);
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("theme")}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-container hover:text-text ${className}`}
      >
        {mounted ? <ActiveIcon size={16} aria-hidden="true" /> : null}
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ top: menuPos.top, insetInlineEnd: menuPos.insetInlineEnd }}
            className="glass shadow-ambient fixed z-50 min-w-36 overflow-hidden rounded-2xl py-1.5 ring-1 ring-(--separator)"
          >
            {OPTIONS.map(({ value, icon: Icon }) => (
              <button
                key={value}
                type="button"
                role="menuitem"
                onClick={() => {
                  setTheme(value);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-sm text-text-secondary transition-colors hover:bg-surface-container hover:text-text"
              >
                <span className="flex items-center gap-2.5">
                  <Icon size={15} aria-hidden="true" />
                  {t(value)}
                </span>
                {theme === value && <Check size={15} aria-hidden="true" />}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
