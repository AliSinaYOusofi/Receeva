import { ImageResponse } from "next/og";

// Route segment config + image metadata
export const alt = "Receeva — Track money with anyone, in any currency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates the social-share / SERP preview image as a real PNG. Replaces the
 * SVG placeholder, which most social crawlers (Facebook, X, LinkedIn) and
 * Google refuse to render. Next also wires the resulting URL into both
 * og:image and twitter:image automatically.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          Receeva
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Track money with anyone, in any currency.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 34,
            color: "#d1d5db",
            maxWidth: 880,
          }}
        >
          Offline-first multi-currency ledger. Net balances, live rates, no ads.
        </div>
      </div>
    ),
    { ...size },
  );
}
