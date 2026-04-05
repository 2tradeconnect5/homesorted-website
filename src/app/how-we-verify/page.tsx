import type { Metadata } from "next";
import { HowWeVerifyContent } from "./HowWeVerifyContent";

export const metadata: Metadata = {
  title: "How We Verify Every Trade",
  description:
    "Every tradesperson on HomeSorted goes through a 5-step identity and credentials check. Learn how our Know Your Trade verification keeps homeowners safe.",
};

export default function HowWeVerifyPage() {
  return <HowWeVerifyContent />;
}
