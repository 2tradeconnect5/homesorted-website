"use client";

import {
  Camera,
  MapPin,
  Shield,
  UserCheck,
  Award,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_EMMA } from "@/lib/constants";

const verificationSteps = [
  {
    step: 1,
    icon: Camera,
    title: "Photo ID Check",
    description:
      "Government-issued photo ID verified against a live selfie. We confirm the person behind the profile is real.",
  },
  {
    step: 2,
    icon: MapPin,
    title: "Address Verification",
    description:
      "Confirmed Irish business or residential address. We know where every trade operates from.",
  },
  {
    step: 3,
    icon: Shield,
    title: "Insurance Verification",
    description:
      "Public liability insurance confirmed and valid. Every verified trade carries insurance that protects you.",
  },
  {
    step: 4,
    icon: UserCheck,
    title: "Background Screening",
    description:
      "Background check completed. We screen for issues so you don\u2019t have to worry.",
  },
  {
    step: 5,
    icon: Award,
    title: "Certification Check",
    description:
      "Trade-specific credentials verified \u2014 RGI for gas, RECI for electrical, Safe Electric, SEAI for energy, and more.",
  },
];

export function HowWeVerifyContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-16 h-16 rounded-full bg-primary-bg flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                How We Verify <span className="text-primary">Every Trade</span>
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                Trust isn&apos;t optional. Every tradesperson on HomeSorted goes
                through our 5-step identity and credentials check before they
                can accept a single job.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5-Step Flowchart */}
      <section className="bg-page-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="The 5-Step Verification Process"
              subtitle="Our Know Your Trade (KYT) process covers identity, insurance, and credentials"
            />
          </ScrollReveal>
          <div className="space-y-6">
            {verificationSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <Card className="p-6">
                  <div className="flex gap-5 items-start">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary bg-primary-bg px-2 py-0.5 rounded-full">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-navy mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-grey-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Timeline callout */}
          <ScrollReveal delay={0.5}>
            <div className="mt-8 bg-primary-bg border border-[#d6eeb3] rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={20} className="text-primary" />
                <span className="text-lg font-bold text-navy">
                  Verified in 24\u201348 hours
                </span>
              </div>
              <p className="text-sm text-grey-text">
                Most trades complete verification within one business day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What does Verified mean */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title='What Does "Verified" Mean on HomeSorted?'
              subtitle="When you see the green Verified badge, it means:"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Real identity confirmed with photo ID + selfie",
                "Valid public liability insurance on file",
                "Irish address verified",
                "Background check completed",
                "Trade-specific certifications confirmed",
                "Profile reviewed and approved by our team",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-grey-text">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Reviews Can Be Faked. Identity Checks Can&apos;t.
            </h2>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
              Unlike platforms that rely only on star ratings, HomeSorted
              verifies identity upfront. Every trade is checked before they
              appear in the directory \u2014 not after something goes wrong.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Find Verified Trades Near You
            </h2>
            <p className="text-grey-text mb-8">
              Every trade you see on HomeSorted has passed our 5-step
              verification. Message Emma to get matched with trusted
              tradespeople in your area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href={WHATSAPP_EMMA} external>
                <MessageCircle size={20} />
                Chat with Emma
              </Button>
              <Button variant="outline" size="lg" href="/directory">
                Browse the Directory
                <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
