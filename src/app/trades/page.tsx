import type { Metadata } from "next";
import { TradesContent } from "./TradesContent";

export const metadata: Metadata = {
  title: "For Trades",
  description:
    "Grow your trade business with HomeSorted. Get matched to real jobs, manage everything with Casey AI, and build your reputation with Proof of Work badges.",
};

export default function TradesPage() {
  return <TradesContent />;
}
