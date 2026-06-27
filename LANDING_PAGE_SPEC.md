# Receeva — Landing Page Build Spec

> A complete, self-contained brief for building the **Receeva** marketing landing page.
> Hand this file to Claude Code (or any builder). Every asset referenced is a **placeholder** — swap real images/logos later.

---

## 0. What Receeva Is

**Receeva** is a privacy-first, multi-currency **personal finance & ledger app** for iOS and Android. It is built for people who lend, borrow, split, and track money with other people across currencies — freelancers, small shop owners, travelers, families, and anyone who keeps a running tab with friends or customers.

The product's two pillars:

1. **People-centric ledger** — record every cent sent to or received from a contact, see net balances, and settle across borders.
2. **Multi-currency clarity** — every transaction keeps its own currency; live exchange rates resolve everything into one home currency, no mental math.

It works **offline-first** (local SQLite + a guest mode), with optional **cloud sync**. There are no ads and no selling data.

**One-line positioning:** *Every person, every cent — across every currency.*

**Tagline (used in-app):** *"Crafted for the minimalist curator."*

---

## 1. Goal of the Landing Page

A single-page (with optional anchored sections) marketing site whose job is to:

1. Communicate the value in under 5 seconds (hero).
2. Show the product visually (phone mockups / screenshots — placeholders for now).
3. Explain the core features.
4. Drive to **App Store** and **Google Play** download buttons (placeholder links).
5. Capture interest (optional email waitlist) and link to legal/support pages.

Primary CTA: **Download** (App Store + Google Play badges).
Secondary CTA: **See features** (smooth-scroll anchor).

---

## 2. Tech Stack (recommended)

Pick the simplest thing that ships well. Recommended default:

- **Framework:** Next.js (App Router) + TypeScript, or plain Vite + React if SSR isn't needed.
- **Styling:** Tailwind CSS, configured with the design tokens in §4.
- **Fonts:** `Inter` (via `next/font` or Google Fonts). This matches the app exactly.
- **Animation:** Framer Motion for scroll/fade-in reveals (subtle only — see design rules).
- **Icons:** `lucide-react` (clean, thin line icons that fit the editorial aesthetic).
- **Deployment:** Static export friendly (Vercel / Netlify).

> If the builder prefers a single static `index.html` + CSS, that is acceptable too — but Tailwind + React is preferred for maintainability.

---

## 3. Design Direction — "The Digital Atelier"

The app ships with a defined design system. The landing page **must echo it** so the site and app feel like one product. Treat the page as a *digital monograph*, not a typical SaaS template.

### Core principles
- **Monochrome luxury.** Pure black (`#000000`) and near-white surfaces (`#f8f9fc` / `#ffffff`) dominate. Color is restraint, not decoration.
- **Negative space as a luxury.** Generous whitespace. When in doubt, add space, not elements.
- **No structural borders.** Separate sections with subtle background-tone shifts (e.g. `#ffffff` card on `#f2f4f7` section), never 1px solid divider lines. If a border is unavoidable, use 8–15% opacity black ("ghost border").
- **Tonal depth over shadows.** Avoid hard drop shadows. If a float is required, use an extra-diffused ambient shadow: `0px 20px 40px rgba(25,28,30,0.06)`.
- **Glassmorphism for floating UI.** Sticky nav bar = surface color at ~70% opacity + `backdrop-blur(20px)`.
- **Editorial typography.** Huge display headlines (3–4rem) with tight negative letter-spacing (`-0.02em`), paired with tiny uppercase eyebrow labels (e.g. `01 — CONTACTS & LEDGERS`, letter-spacing wide). High contrast in scale = the signature look.
- **Intentional asymmetry.** Wider left margins than right. Let headlines or mockups bleed off-canvas / overlap section boundaries.
- **Signature gradient.** For hero background or primary CTA, a subtle radial gradient from `#000000` → `#1a1b20` gives the black "soul" instead of a flat fill.

### Don'ts
- ❌ No divider lines between list items — use vertical spacing.
- ❌ No vivid accent colors. No bright success greens for marketing.
- ❌ No crowding. No generic stock-photo SaaS hero.
- ❌ No pure grey `#808080` shadows — always a diluted `on-surface` tint.

### Eyebrow / headline rhythm (reuse from the app's onboarding)
- `01 — Contacts & Ledgers` → **"Every person, every cent."**
- `02 — Currency Conversion` → **"One world, one balance."**
- `03 — Export & Reports` → **"Every balance, on record."**

---

## 4. Design Tokens (pulled from the app)

Use these verbatim in the Tailwind config / CSS variables.

### Light theme (primary for the site)
```
--primary:                #000000
--primary-container:      #1a1b20   /* gradient end / depth */
--secondary:              #46464b   /* secondary text */
--secondary-container:    #e4e2e1   /* chips */
--background:             #f8f9fc   /* base layer */
--surface:                #f8f9fc
--surface-lowest:         #ffffff   /* cards, elevated */
--surface-low:            #f2f4f7   /* alternating sections */
--surface-container:      #eceef1
--surface-high:           #e6e8eb
--surface-highest:        #dde1e6   /* secondary buttons, input focus */
--text:                   #000000   /* primary on-surface */
--text-secondary:         #46464b
--text-muted:             #6e6e73
--text-inverse:           #ffffff
--border-ghost:           rgba(0,0,0,0.15)
--separator:              rgba(0,0,0,0.06)
--shadow-ambient:         rgba(25,28,30,0.06)
--glass-bg:               rgba(248,249,252,0.70)
```

### Semantic (use sparingly, understated)
```
--success: #2d6a4f   --warning: #7d5a00   --error: #ba1a1a
```

### Optional dark section
The app fully supports dark mode (white-on-black "inverted atelier": `--primary:#ffffff`, `--background:#000000`-ish, `--primary-container:#1a1b20`). Consider one dark "feature spotlight" section for contrast, or a global dark-mode toggle. Optional, not required.

### Type scale
- Font family: **Inter** (weights 400/500/600/700).
- `display`: 3.5rem / line-height 1.05 / letter-spacing -0.02em / weight 600–700
- `headline`: 2rem / -0.01em
- `title`: 1.25rem / weight 600
- `body`: 1rem–1.0625rem / weight 400 / color `--text-secondary`
- `eyebrow / label`: 0.6875rem / uppercase / letter-spacing 0.12em / color `--text-muted`

### Radii & spacing
- Radius: cards `1rem` (16px), buttons `1rem`, chips `full`/pill.
- Spacing: lean on an 8px scale with large gaps (64–128px) between major sections.

---

## 5. Page Structure (sections, in order)

> Each section lists: purpose, copy, and the placeholder asset(s) needed.

### 5.1 Sticky Nav (glassmorphic)
- Left: **Receeva** wordmark + logo placeholder.
- Center (desktop): anchor links — `Features` · `Currencies` · `Privacy` · `FAQ`.
- Right: small **Download** button (pill, solid black).
- Background: `--glass-bg` + `backdrop-blur(20px)`, no bottom border (use a faint `--separator` only if needed).
- **Asset:** `assets/logo-placeholder.svg` (text "RECEEVA" inside a square is fine).

### 5.2 Hero
- **Eyebrow:** `PERSONAL FINANCE · MULTI-CURRENCY`
- **Headline (display):** **Every person, every cent.**
- **Sub:** *Track money you send and receive with anyone — in any currency. Live exchange rates resolve it all into one balance. Offline-first, no ads, your data stays yours.*
- **CTAs:** App Store badge + Google Play badge (placeholders), `href="#"`.
- **Visual:** Right/overlapping a phone mockup showing the **Ledger** screen (contact rows with multi-currency net balances). Use a placeholder image that bleeds off the right edge.
- Background: subtle radial gradient `#000000 → #1a1b20` *or* light `#f8f9fc` with a small floating glass "+3 currencies" badge chip echoing the app.
- **Assets:**
  - `assets/hero-phone-placeholder.png` (1080×2160 portrait, label it "Ledger screen")
  - `assets/badge-appstore-placeholder.svg`
  - `assets/badge-googleplay-placeholder.svg`

### 5.3 Trust / At-a-glance strip
A thin row of understated stats/labels (no boxes, just spaced text):
`Offline-first` · `10 languages` · `No ads` · `Your data, your device` · `iOS & Android`

### 5.4 Feature Block 1 — Contacts & Ledgers (asymmetric, image left)
- Eyebrow: `01 — CONTACTS & LEDGERS`
- Headline: **Every person, every cent.**
- Body: *Add a contact — or pull one from your phone book — and record unlimited transactions against them, each in any currency. Split costs, track debts, and settle balances. Currency cards show the net per currency: total received minus total sent.*
- Bullet chips: `Sent / Received` · `Net balances` · `Per-currency cards` · `Contact import`
- **Asset:** `assets/feature-ledger-placeholder.png` (customer detail screen)

### 5.5 Feature Block 2 — Multi-currency & Live Rates (image right)
- Eyebrow: `02 — CURRENCY CONVERSION`
- Headline: **One world, one balance.**
- Body: *USD, EUR, GBP, JPY — every transaction keeps its own currency, then resolves to your home currency in real time with live exchange rates. A built-in converter unifies any set of transactions into a single currency for a clean, consolidated view.*
- Bullet chips: `Live exchange rates` · `Set a default currency` · `Manual rate fallback` · `One unified view`
- **Asset:** `assets/feature-converter-placeholder.png` (currency converter screen)

### 5.6 Feature Block 3 — Insights & Statistics (image left)
- Eyebrow: `03 — INSIGHTS & TRENDS`
- Headline: **See where it flows.**
- Body: *Visualise transaction flow — sent vs received — across the last 6 months, by weekday, by currency, and by top contacts. Spot patterns without spreadsheets.*
- Bullet chips: `6-month trends` · `Activity by weekday` · `By currency` · `Top customers`
- **Asset:** `assets/feature-stats-placeholder.png` (statistics screen)

### 5.7 Feature Grid — Everything else (no-border cards on a tonal section)
Section background `--surface-low` (`#f2f4f7`); cards `--surface-lowest` (`#ffffff`), radius 16px, ambient shadow only. Each card = lucide icon + title + one line.

| Title | Copy | Icon (lucide) |
|---|---|---|
| **Budget Tracking** | Set a monthly budget and watch spending in real time — warned before you overspend. | `wallet` |
| **Expense Logging** | Categorise every expense with custom icons and colours. Filter, sort, and search. | `receipt` |
| **Recurring Payments** | Track subscriptions and bills — daily, weekly, monthly, yearly. | `repeat` |
| **Export & Reports** | Export any contact or month to CSV/Excel — sent, received, net balances. | `download` |
| **Cloud Sync** | Optional sync keeps local and cloud in step. Works fully offline without it. | `cloud` |
| **Home-Screen Widgets** | Top balances, recent transactions, and cash flow — right on your home screen. | `layout-grid` |
| **Guest / Offline Mode** | Start instantly, no account needed. Your data lives on your device. | `shield` |
| **Light & Dark** | A consistent design system in both themes. Personalise your defaults. | `moon` |

### 5.8 Privacy / Trust section (consider a dark "inverted atelier" block)
- Eyebrow: `PRIVACY BY DEFAULT`
- Headline: **Your money. Your device.**
- Body: *Receeva is offline-first. Use it entirely on-device in guest mode, or opt into encrypted cloud sync when you want it. No ads. No data selling. Sign in with Apple or Google only if you choose to.*
- Chips: `Offline-first` · `Apple & Google Sign-In` · `Encrypted sync` · `No ads`

### 5.9 Languages strip
- Eyebrow: `SPEAKS YOUR LANGUAGE`
- Body line: *Available in English, Spanish, French, Portuguese, Turkish, Urdu, Hindi, Persian, Arabic, and Pashto — with full right-to-left support.*
- Render as spaced pill chips (`secondary-container` bg).

### 5.10 FAQ (accordion, no divider lines — spacing only)
Use the app's real FAQ:
1. **How do I add a customer?** — Tap **+** on the Ledger tab. Create one manually or pick from your phone contacts; avatars fill in automatically.
2. **How do I record a transaction?** — Open a customer, tap **Record**, choose Sent or Received, enter the amount, pick a currency, add an optional note.
3. **What do the currency cards show?** — Each card shows the net balance for one currency (received − sent). Swipe to cycle currencies.
4. **Can I use multiple currencies?** — Yes. Each transaction has its own currency; set a default in Settings so new entries pre-fill.
5. **Can I export my data?** — Yes. Export all customers or a single contact to Excel/CSV from the Ledger tab.
6. **Do I need an account?** — No. Guest mode is fully offline. Cloud sync and sign-in are optional.

### 5.11 Final CTA
- Headline (display): **Start keeping the record.**
- Sub: *Free to download. Offline-first. No ads.*
- App Store + Google Play badges again.
- Background: signature `#000000 → #1a1b20` radial gradient, white text.

### 5.12 Footer
- Left: Receeva wordmark + small tagline *"Crafted for the minimalist curator."*
- Columns: **Product** (Features, Download) · **Support** (FAQ, Help, Contact) · **Legal** (Privacy Policy, Terms).
- All links `href="#"` placeholders.
- Bottom line: `© 2026 Receeva. All rights reserved.`
- No top border — separate with a tonal shift only.

---

## 6. Asset Manifest (all placeholders)

Create an `/assets` (or `/public`) folder. Every file is a placeholder to be replaced later — generate simple labeled placeholder images/SVGs (solid `--surface-container` background + centered label text).

```
assets/
  logo-placeholder.svg                 # "RECEEVA" wordmark + mark
  favicon-placeholder.png
  hero-phone-placeholder.png           # Ledger screen mockup (portrait)
  feature-ledger-placeholder.png       # Customer detail
  feature-converter-placeholder.png    # Currency converter
  feature-stats-placeholder.png        # Statistics
  badge-appstore-placeholder.svg       # "Download on the App Store"
  badge-googleplay-placeholder.svg     # "Get it on Google Play"
  og-image-placeholder.png             # 1200×630 social share
```

> For phone mockups, a plain rounded-rect frame with a screenshot label inside is fine. Builder may use a generic device-frame SVG.

---

## 7. SEO / Meta

- `<title>`: **Receeva — Track money with anyone, in any currency**
- `meta description`: *Receeva is an offline-first, multi-currency personal finance & ledger app. Track money sent and received with anyone, see net balances, and convert with live rates. iOS & Android. No ads.*
- Open Graph + Twitter card using `og-image-placeholder.png`.
- `theme-color`: `#000000`.
- Semantic HTML, alt text on every image, `lang` attribute, RTL-aware if a language switcher is added (not required for v1).

---

## 8. Accessibility & Quality Bar

- WCAG AA contrast (the monochrome palette makes this easy — verify text-muted on light surfaces).
- Keyboard-navigable nav, FAQ accordion, and CTAs.
- `prefers-reduced-motion`: disable Framer Motion reveals.
- Responsive: mobile-first; hero stacks vertically on small screens, phone mockup centered.
- Lighthouse target: 95+ on Performance, Accessibility, Best Practices, SEO.
- Animations are **subtle**: short fade-up reveals on scroll, gentle. No bouncy/aggressive motion — it must feel editorial and calm.

---

## 9. Build Checklist

- [ ] Project scaffolded (Next.js + TS + Tailwind), Inter font loaded.
- [ ] Tailwind config maps all §4 tokens to theme colors + custom font sizes.
- [ ] Placeholder assets generated in `/public` (or `/assets`).
- [ ] Sections 5.1–5.12 implemented in order, responsive.
- [ ] Glassmorphic sticky nav; smooth-scroll anchors.
- [ ] Signature radial-gradient hero + final CTA.
- [ ] No structural border lines anywhere (tonal separation only).
- [ ] FAQ accordion, feature grid, language chips.
- [ ] Meta/OG tags + favicon.
- [ ] `prefers-reduced-motion` honored; Lighthouse pass.
- [ ] All external links are `#` placeholders, clearly swappable.

---

### Appendix — Voice & copy notes
Tone: confident, minimal, editorial. Short declarative headlines. Avoid hype words ("revolutionary", "game-changing"). Let whitespace and typography carry the prestige. Reuse the app's own phrasing wherever possible (it's already on-brand): *"Every person, every cent." / "One world, one balance." / "Crafted for the minimalist curator."*
