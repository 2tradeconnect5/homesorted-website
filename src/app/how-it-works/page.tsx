import type { Metadata } from "next";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how HomeSorted connects homeowners with verified trades via WhatsApp AI. Step-by-step guides for homeowners, tradespeople, and property partners.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
