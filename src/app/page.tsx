import { HeroSection } from "@/components/home/HeroSection";
import { PainPointCards } from "@/components/home/PainPointCards";
import { HowItWorksStrip } from "@/components/home/HowItWorksStrip";
import { HomeInsightSection } from "@/components/home/HomeInsightSection";
import { HomepageEmailCapture } from "@/components/home/HomepageEmailCapture";
import { EmergencyMode } from "@/components/home/EmergencyMode";
import { AudienceCards } from "@/components/home/AudienceCards";
import { TrustBar } from "@/components/home/TrustBar";
import { EmmaIntro } from "@/components/home/EmmaIntro";
import { ReflectionCards } from "@/components/home/ReflectionCards";
import { FinalCTA } from "@/components/home/FinalCTA";
import Script from "next/script";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HomeSorted",
  description: "AI-powered tradesperson marketplace in Ireland",
  url: "https://homesorted.ie",
  serviceArea: { "@type": "City", name: "Greater Dublin" },
  areaServed: "IE",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IE",
    addressRegion: "Dublin",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HeroSection />
      <PainPointCards />
      <HowItWorksStrip />
      <HomeInsightSection />
      <HomepageEmailCapture />
      <EmergencyMode />
      <AudienceCards />
      <TrustBar />
      <EmmaIntro />
      <ReflectionCards />
      {/* Snag Flow trust callout */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-grey-text text-base leading-relaxed">
            Not happy with the work? HomeSorted has a 3-step resolution process — from minor snags to full escalation.{" "}
            <a href="/homeowners#protection" className="text-primary font-medium hover:underline">
              Learn more &rarr;
            </a>
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
