import type { Metadata } from "next";
import { PartnersContent } from "./PartnersContent";

export const metadata: Metadata = {
  title: "For Property Partners",
  description:
    "Manage snags, assign trades, and track defect periods from one dashboard. Built for developers, landlords, and local authorities in Ireland.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
