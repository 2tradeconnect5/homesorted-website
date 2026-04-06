"use client";

import { MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats: {
  value?: number;
  suffix?: string;
  label: string;
  isIcon?: boolean;
}[] = [
  { value: 50, suffix: "+", label: "Verified Trades" },
  { value: 200, suffix: "+", label: "Jobs Completed Across Greater Dublin" },
  { label: "Serving Greater Dublin", isIcon: true },
];

export function TrustBar() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.isIcon ? (
                    <MapPin size={36} className="mx-auto" />
                  ) : (
                    <AnimatedCounter
                      target={stat.value!}
                      suffix={stat.suffix}
                    />
                  )}
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
