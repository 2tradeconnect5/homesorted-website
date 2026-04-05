"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const faqs = [
  {
    q: "Is HomeSorted really free for homeowners?",
    a: "Yes, 100%. Homeowners never pay HomeSorted anything. You pay the trade directly for completed work, but our matching, communication, and support services are completely free.",
  },
  {
    q: "What does the Starter plan include for trades?",
    a: "The Starter plan gives you a profile in our directory, the ability to receive job matches from Casey, and basic analytics showing your profile views and job requests.",
  },
  {
    q: "Can I cancel my Pro subscription at any time?",
    a: "Absolutely. Pro is billed monthly with no lock-in. Cancel any time from your dashboard or by messaging Casey on WhatsApp.",
  },
  {
    q: "Are there any transaction fees on completed jobs?",
    a: "No. HomeSorted does not charge commission or transaction fees on jobs. Homeowners pay trades directly. Our revenue comes from Pro subscriptions and partner plans.",
  },
  {
    q: "What counts as a 'Partner' plan?",
    a: "Partner plans are designed for property managers, landlords, and letting agents who manage multiple properties. Pricing is based on portfolio size and includes dedicated account support.",
  },
];

const starterFeatures = [
  "Create a verified profile",
  "Appear in the directory",
  "Get matched to jobs by Casey",
  "Basic analytics dashboard",
];

const proFeatures = [
  "Everything in Starter",
  "Priority job matching",
  "Advanced analytics and insights",
  "Featured profile badge",
  "Stored quote templates",
  "Monthly business report",
];

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-page-bg to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-grey-text max-w-2xl mx-auto">
              No hidden fees, no surprises. Just clear pricing that makes sense.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Homeowners */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="For Homeowners"
              subtitle="HomeSorted is free for homeowners. Always."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Card className="max-w-xl mx-auto p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Free Forever
              </h3>
              <p className="text-grey-text">
                Message Emma on WhatsApp, get matched with verified trades,
                compare quotes, and get the job done — all at no cost to you.
                You only pay the trade directly for completed work.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* For Trades */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="For Trades"
              subtitle="Choose the plan that fits your business."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Starter */}
            <ScrollReveal delay={0.1}>
              <Card className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-navy">Starter</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-navy">Free</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {starterFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-grey-text text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="lg"
                  href="/trades"
                  className="mt-8 w-full"
                >
                  Get Started
                </Button>
              </Card>
            </ScrollReveal>

            {/* Pro */}
            <ScrollReveal delay={0.2}>
              <Card className="p-8 h-full flex flex-col border-primary/40 relative">
                <Badge
                  variant="primary"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  Popular
                </Badge>
                <h3 className="text-xl font-bold text-navy">Pro</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-navy">&euro;24.99</span>
                  <span className="text-grey-text text-sm">/month</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-grey-text text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/trades"
                  className="mt-8 w-full"
                >
                  Go Pro
                </Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="For Partners"
              subtitle="Custom pricing based on portfolio size. Ideal for property managers, landlords, and letting agents."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button variant="secondary" size="lg" href="/contact">
              Book a Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              badge="FAQ"
            />
          </ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Card className="overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-navy pr-4">
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-grey-text shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-grey-text shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-grey-text text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
