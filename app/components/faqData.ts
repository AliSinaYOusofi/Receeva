/**
 * Shared FAQ content. Rendered visibly by `Faq.tsx` and emitted as
 * FAQPage JSON-LD in `StructuredData.tsx` — keep them sourced from here so
 * the rich-result markup can never drift from what users actually see.
 */
export const faqs = [
  {
    q: "How do I add a customer?",
    a: "Tap + on the Ledger tab. Create one manually or pick from your phone contacts; avatars fill in automatically.",
  },
  {
    q: "How do I record a transaction?",
    a: "Open a customer, tap Record, choose Sent or Received, enter the amount, pick a currency, add an optional note.",
  },
  {
    q: "What do the currency cards show?",
    a: "Each card shows the net balance for one currency (received − sent). Swipe to cycle currencies.",
  },
  {
    q: "Can I use multiple currencies?",
    a: "Yes. Each transaction has its own currency; set a default in Settings so new entries pre-fill.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Export all customers or a single contact to Excel/CSV from the Ledger tab.",
  },
  {
    q: "Do I need an account?",
    a: "No. Guest mode is fully offline. Cloud sync and sign-in are optional.",
  },
] as const;
