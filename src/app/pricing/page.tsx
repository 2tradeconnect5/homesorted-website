import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for trades and partners on HomeSorted. Free to use for homeowners.",
};

export default function PricingPage() {
  return <PricingContent />;
}
