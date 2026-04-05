"use client";

import { FileText, Shield, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: FileText,
    title: "Receipts & invoices stored automatically",
    description:
      "Every completed job automatically saves receipts and invoices.",
  },
  {
    icon: Shield,
    title: "Warranties tracked with expiry reminders",
    description:
      "Set expiry dates for warranties. Emma reminds you when they expire.",
  },
  {
    icon: Clock,
    title: "Service history for your entire home",
    description:
      "Every job, every trade, every date \u2014 searchable history of all home work.",
  },
];

export function HomeInsightSection() {
  return (
    <section className="bg-primary-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Your Home, Always Managed"
            subtitle="Emma never forgets \u2014 so you don\u2019t have to."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <Card className="p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-bg flex items-center justify-center mb-4">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-grey-text leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
