import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksStrip } from "@/components/home/HowItWorksStrip";
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
      <AudienceCards />
      <TrustBar />
      <EmmaIntro />
      <TestimonialsCarousel />
      <FinalCTA />
    </>
  );
}
