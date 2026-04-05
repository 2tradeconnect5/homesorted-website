import type { Metadata } from "next";
import { BlogIndexContent } from "./BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, updates, and tips for homeowners and tradespeople in Ireland. The latest from HomeSorted.",
};

export default function BlogPage() {
  return <BlogIndexContent />;
}
