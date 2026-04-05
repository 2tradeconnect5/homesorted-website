"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    problem: "Paid upfront. Trade ghosted you.",
    solution: "Emma holds payment until you\u2019re satisfied.",
  },
  {
    problem: "Left a bad review. Nothing happened.",
    solution: "Our Snag Flow resolves issues in 3 steps.",
  },
  {
    problem: "Called three plumbers. None showed up.",
    solution: "Verified trades respond in 30 minutes.",
  },
];

export function PainPointCards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-navy mb-12">
            Sound Familiar?
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-white border border-border rounded-[var(--radius-card)] p-6">
                <p className="text-[color:var(--color-grey-text)] opacity-60 font-medium mb-3 text-sm leading-relaxed">
                  {item.problem}
                </p>
                <p className="text-primary font-semibold text-base leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
