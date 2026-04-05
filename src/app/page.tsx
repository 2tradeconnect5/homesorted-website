import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksStrip } from "@/components/home/HowItWorksStrip";
import { EmergencyMode } from "@/components/home/EmergencyMode";
import { AudienceCards } from "@/components/home/AudienceCards";
import { TrustBar } from "@/components/home/TrustBar";
import { EmmaIntro } from "@/components/home/EmmaIntro";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksStrip />
      <EmergencyMode />
      <AudienceCards />
      <TrustBar />
      <EmmaIntro />
      <TestimonialsCarousel />
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
