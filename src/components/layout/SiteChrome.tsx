"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGate = pathname === "/gate";

  if (isGate) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
