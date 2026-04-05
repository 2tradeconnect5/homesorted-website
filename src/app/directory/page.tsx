import type { Metadata } from "next";
import { DirectoryContent } from "./DirectoryContent";

export const metadata: Metadata = {
  title: "Trade Directory",
  description:
    "Find verified tradespeople in Ireland. Browse painters, plumbers, electricians, carpenters, and more. All identity-checked and insured. Request quotes via WhatsApp.",
};

export default function DirectoryPage() {
  return <DirectoryContent />;
}
