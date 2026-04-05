import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homesorted.ie"),
  title: {
    default: "HomeSorted — Ireland's AI-Powered Home Services Marketplace",
    template: "%s | HomeSorted",
  },
  description:
    "Find verified tradespeople in Ireland instantly. Message Emma on WhatsApp, get matched with trusted trades, and get the job done. No apps, no forms — just results.",
  keywords: [
    "home services Ireland",
    "find tradespeople Ireland",
    "plumber Dublin",
    "electrician Dublin",
    "painter Dublin",
    "home maintenance Ireland",
    "WhatsApp home services",
  ],
  authors: [{ name: "HomeSorted" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://homesorted.ie",
    siteName: "HomeSorted",
    title: "HomeSorted — Ireland's AI-Powered Home Services Marketplace",
    description:
      "Find verified tradespeople in Ireland instantly via WhatsApp. No apps, no forms — just results.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeSorted — Ireland's AI-Powered Home Services Marketplace",
    description:
      "Find verified tradespeople in Ireland instantly via WhatsApp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="font-sans antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppCTA />
        {/* Analytics placeholder — uncomment and add your GA4 or Plausible ID */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
