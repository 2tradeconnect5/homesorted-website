import type { Metadata } from "next";
import { HomeownersContent } from "./HomeownersContent";

export const metadata: Metadata = {
  title: "For Homeowners",
  description:
    "Find verified tradespeople in Ireland in minutes. Message Emma on WhatsApp — no apps, no forms, no hassle. Get quotes, choose your trade, job done.",
};

export default function HomeownersPage() {
  return <HomeownersContent />;
}
