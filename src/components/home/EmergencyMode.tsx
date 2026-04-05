"use client";

import { Zap, Radio, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHATSAPP_EMMA } from "@/lib/constants";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      'Say "emergency" or "urgent" and Emma switches to Emergency Mode automatically.',
  },
  {
    icon: Radio,
    title: "Parallel Trade Search",
    description:
      "Emma contacts multiple emergency-enabled trades simultaneously, not one at a time.",
  },
  {
    icon: Clock,
    title: "Live Progress Updates",
    description:
      "Get updates every 2 minutes so you\u2019re never left in the dark.",
  },
  {
    icon: MapPin,
    title: "ETA Guaranteed",
    description:
      "Your trade confirms their arrival time before they even leave.",
  },
];

export function EmergencyMode() {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      {/* Subtle amber accent glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              3am Burst Pipe? Emma&apos;s Got You Covered.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              HomeSorted Emergency Mode activates instantly for urgent home
              issues.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                  <feat.icon size={20} className="text-amber-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg" href={WHATSAPP_EMMA} external>
              <MessageCircle size={20} />
              Chat with Emma
            </Button>
            <p className="mt-4 text-xs text-white/40">
              Emergency Mode is available 24/7, including outside normal working
              hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
