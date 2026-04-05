"use client";

import { MessageSquare, Users, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Emma",
    description:
      "Describe your job to Emma on WhatsApp \u2014 type it, send a photo, or just record a voice note. Emma understands all three.",
    step: 1,
  },
  {
    icon: Users,
    title: "Get Matched",
    description:
      "Emma finds verified trades in your area and sends you their quotes.",
    step: 2,
  },
  {
    icon: CheckCircle,
    title: "Job Done",
    description:
      "Your trade completes the work. Rate, review, and save them to your Home Team.",
    step: 3,
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

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-bg mb-6">
                  <step.icon size={28} className="text-primary" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-navy">
                    {step.title}
                  </h3>
                </div>
                <p className="text-grey-text leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
