import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HomeSorted's mission to fix home services in Ireland. Meet our AI personas Emma and Casey, and discover our values.",
};

export default function AboutPage() {
  return <AboutContent />;
}
