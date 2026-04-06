"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, MessageCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WHATSAPP_CASEY } from "@/lib/constants";

const faqs = [
  {
    q: "Is HomeSorted really free for homeowners?",
    a: "Posting jobs and getting matched is completely free. We also offer HomeInsight Pro (\u20ac4.99/month) for proactive home management features like seasonal reminders and maintenance alerts.",
  },
  {
    q: "Does HomeSorted take a commission on jobs?",
    a: "No. Trades keep 100% of what they earn. Unlike other platforms that take 10\u201320% of every job, HomeSorted uses a simple subscription model instead.",
  },
  {
    q: "What happens after the trial period?",
    a: "After your trial ends, you can continue on Professional, upgrade to Premium, or downgrade to Starter. No credit card is required to start, and you\u2019re never locked in.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Absolutely. All plans are billed monthly with no lock-in. Cancel any time from your dashboard or by messaging Casey on WhatsApp.",
  },
  {
    q: "What counts as a \u2018job match\u2019?",
    a: "A job match is when Casey sends you a new job offer that matches your skills, location, and availability. On Starter you receive up to 10 per month; Professional and Premium are unlimited.",
  },
  {
    q: "What\u2019s included in the Partner plan?",
    a: "Partner plans are designed for property developers, landlords, and local authorities who manage multiple properties. Pricing is based on portfolio size and includes the full dashboard, snag triage, trade assignment, and dedicated account support.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "\u20AC24.99",
    period: "/month",
    description: "For trades getting started on the platform",
    features: [
      "Verified trade profile in directory",
      "Up to 10 job matches per month",
      "Basic analytics",
      "Casey AI assistant (standard)",
      "WhatsApp job notifications",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Professional",
    price: "\u20AC39.99",
    period: "/month",
    description: "For trades ready to grow their business",
    features: [
      "Everything in Starter",
      "Unlimited job matches",
      "Detailed demand insights for your area",
      "Advanced business analytics",
      "Quote templates",
      "Featured profile badge",
    ],
    cta: "Start Free Trial",
    variant: "primary" as const,
    highlighted: true,
  },
  {
    name: "Premium",
    price: "\u20AC69.99",
    period: "/month",
    description: "For established trades who want maximum visibility",
    features: [
      "Everything in Professional",
      "Multi-area analytics dashboard",
      "Dedicated account support",
      "Multi-area coverage (2+ service zones)",
      "Monthly performance report",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    variant: "outline" as const,
    highlighted: false,
  },
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
              No hidden fees, no commission, no surprises. Just clear pricing
              that makes sense.
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
              subtitle="Post jobs, get matched with verified trades, and manage your home \u2014 all free. Optional HomeInsight Pro available for \u20ac4.99/month."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Card className="max-w-xl mx-auto p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Free to Use
              </h3>
              <p className="text-grey-text">
                Message Emma on WhatsApp, get matched with verified trades,
                compare quotes, and get the job done \u2014 all at no cost to
                you. You only pay the trade directly for completed work.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding trades + trial callout */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-primary-bg border border-[#d6eeb3] rounded-xl p-6 text-center mb-4">
              <h3 className="text-lg font-bold text-navy mb-1">
                \ud83d\ude80 Founding trades: 6 months free on Professional
              </h3>
              <p className="text-sm text-grey-text">
                First 50 founding trades in Greater Dublin get 6 months free on the Professional plan.{" "}
                <a href="/trades" className="text-primary font-medium hover:underline">See /trades for details &rarr;</a>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto bg-white border border-border rounded-xl p-4 text-center mb-8">
              <p className="text-sm text-grey-text">
                6 months free for founding trades, 30-day trial for all others. No credit card required.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* For Trades — 3 tier cards */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="For Trades"
              subtitle="Choose the plan that fits your business. You keep 100% of your job earnings."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <Card
                  className={`p-8 h-full flex flex-col relative ${
                    tier.highlighted
                      ? "border-2 border-primary shadow-elevated"
                      : ""
                  }`}
                >
                  {tier.highlighted && (
                    <Badge
                      variant="primary"
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                  <p className="text-sm text-grey-text mt-1 mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-navy">
                      {tier.price}
                    </span>
                    <span className="text-grey-text text-sm">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-grey-text text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.variant}
                    size="lg"
                    href="/trades"
                    className="mt-8 w-full"
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-sm text-grey-text mt-8 max-w-xl mx-auto">
              Simple subscription pricing. You keep 100% of what you earn on every job.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Partners */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="For Partners"
              subtitle="Property partners \u2014 contact us for custom pricing based on portfolio size."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button variant="secondary" size="lg" href="/contact">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Frequently Asked Questions" badge="FAQ" />
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
