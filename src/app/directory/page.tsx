import type { Metadata } from "next";
import Script from "next/script";
import { DirectoryContent } from "./DirectoryContent";

export const metadata: Metadata = {
  title: "Trade Directory",
  description:
    "Find verified tradespeople in Ireland. Browse painters, plumbers, electricians, carpenters, and more. All identity-checked and insured. Request quotes via WhatsApp.",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Verified Trades Directory",
  description:
    "Browse verified tradespeople in the Greater Dublin area. All identity-checked and work-proven.",
  url: "https://homesorted.ie/directory",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Plumber",
      url: "https://homesorted.ie/directory?category=plumber",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Electrician",
      url: "https://homesorted.ie/directory?category=electrician",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Painter & Decorator",
      url: "https://homesorted.ie/directory?category=painter",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Carpenter",
      url: "https://homesorted.ie/directory?category=carpenter",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Tiler",
      url: "https://homesorted.ie/directory?category=tiler",
    },
  ],
};

export default function DirectoryPage() {
  return (
    <>
      <Script
        id="item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      <DirectoryContent />
    </>
  );
}
