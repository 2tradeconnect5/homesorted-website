import type { Metadata } from "next";
import { HowWeVerifyContent } from "./HowWeVerifyContent";

export const metadata: Metadata = {
  title: "How We Verify Every Trade",
  description:
    "Every tradesperson on HomeSorted goes through a 6-step identity, credentials, and work verification check. Learn how our Know Your Trade process keeps homeowners safe.",
};

export default function HowWeVerifyPage() {
  return <HowWeVerifyContent />;
}
