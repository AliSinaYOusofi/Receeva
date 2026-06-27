import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Receeva — Track money with anyone, in any currency",
    short_name: "Receeva",
    description:
      "Offline-first, multi-currency personal finance & ledger app. Track money sent and received with anyone, see net balances, and convert with live rates.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
