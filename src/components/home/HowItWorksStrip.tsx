"use client";

import {
  MessageCircle,
  Shield,
  ShieldCheck,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell Emma what you need",
    description:
      "AI-powered matching through WhatsApp. Voice notes, photos, or text.",
    step: 1,
  },
  {
    icon: Shield,
    title: "Get matched with verified trades",
    description:
      "Every trade is identity-verified and has proven past work. Not random listings.",
    link: "/how-we-verify",
    step: 2,
  },
  {
    icon: ShieldCheck,
    title: "Your work is protected",
    description:
      "If something goes wrong, we have your back. A 3-step resolution process from quick fixes to full escalation \u2014 you\u2019re never left with unfinished work.",
    step: 3,
  },
  {
    icon: Users,
    title: "Your Home Team remembers you",
    description:
      "Verified trades who know your home. Consistent quality every time.",
    step: 4,
  },
  {
    icon: FileText,
    title: "Emma keeps your home running",
    description:
      "Receipts stored, warranties tracked. You\u2019ll never lose a document again.",
    step: 5,
  },
];

export function HowItWorksStrip() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-navy mb-12">
            How It Works
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              {/* Desktop */}
              <div className="hidden md:block text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold mb-4">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary-bg flex items-center justify-center mx-auto mb-4">
                  <step.icon size={26} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-grey-text leading-relaxed">
                  {step.description}
                </p>
                {"link" in step && step.link && (
                  <Link href={step.link} className="text-sm text-primary font-medium hover:underline mt-2 inline-block">
                    Learn about our verification &rarr;
                  </Link>
                )}
              </div>
              {/* Mobile */}
              <div className="md:hidden flex gap-5 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-primary/20 mt-2" />
                  )}
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-bg flex items-center justify-center mb-3">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-grey-text leading-relaxed">
                    {step.description}
                  </p>
                  {"link" in step && step.link && (
                    <Link href={step.link} className="text-sm text-primary font-medium hover:underline mt-1 inline-block">
                      Learn about our verification &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
