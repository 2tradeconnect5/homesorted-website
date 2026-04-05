"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Verified Trades" },
  { value: 2000, suffix: "+", label: "Jobs Completed" },
  { value: 4.8, suffix: "", label: "Average Rating", isDecimal: true },
  { value: 100, suffix: "%", label: "WhatsApp Native" },
];

export function TrustBar() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.isDecimal ? (
                    <span>4.8</span>
                  ) : (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                  {!stat.isDecimal ? "" : stat.suffix}
                </div>
                <p className="mt-2 text-sm text-white/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
