import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the HomeSorted team. Whether you're a homeowner, trade, or partner, we'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactContent />;
}
