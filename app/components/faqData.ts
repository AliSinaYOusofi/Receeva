/**
 * FAQ item keys, in display order. The actual question/answer copy lives in
 * `messages/*.json` under `faq.items.<key>` — rendered visibly by `Faq.tsx`
 * and emitted as FAQPage JSON-LD in `StructuredData.tsx` so the rich-result
 * markup can never drift from what users actually see.
 */
export const faqKeys = [
  "addCustomer",
  "recordTransaction",
  "currencyCards",
  "multipleCurrencies",
  "exportData",
  "needAccount",
] as const;
