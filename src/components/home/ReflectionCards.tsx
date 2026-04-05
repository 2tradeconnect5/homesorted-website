"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FeedbackCategory {
  label: string;
  comment: string;
}

interface ReflectionCard {
  categories: FeedbackCategory[];
  quote: string;
  name: string;
  area: string;
}

const cards: ReflectionCard[] = [
  {
    categories: [
      { label: "Promptness", comment: "Arrived on time" },
      { label: "Quality", comment: "Excellent finish" },
      { label: "Communication", comment: "Kept us updated throughout" },
      { label: "Cleanliness", comment: "Left the place spotless" },
    ],
    quote:
      "The plumber was professional and got the job done right. Highly recommend!",
    name: "Sarah",
    area: "Drumcondra",
  },
  {
    categories: [
      { label: "Promptness", comment: "Within 30 minutes" },
      { label: "Quality", comment: "Perfect colour match" },
      { label: "Communication", comment: "Explained every step" },
      { label: "Cleanliness", comment: "Covered all furniture" },
    ],
    quote:
      "Found a painter through Emma in minutes. The whole experience was seamless from quote to completion.",
    name: "Ciar\u00e1n",
    area: "Maynooth",
  },
  {
    categories: [
      { label: "Promptness", comment: "Emergency response" },
      { label: "Quality", comment: "Fixed first time" },
      { label: "Communication", comment: "Called ahead with ETA" },
      { label: "Cleanliness", comment: "No mess at all" },
    ],
    quote:
      "Our heating broke on a Sunday night. Emma had a verified engineer at our door within the hour.",
    name: "Sin\u00e9ad",
    area: "Blackrock",
  },
  {
    categories: [
      { label: "Promptness", comment: "Right on schedule" },
      { label: "Quality", comment: "Brilliant craftsmanship" },
      { label: "Communication", comment: "Sent progress photos" },
      { label: "Cleanliness", comment: "Tidied up completely" },
    ],
    quote:
      "Had shelving and a wardrobe fitted. The carpenter was detail-oriented and a pleasure to deal with.",
    name: "Aoife",
    area: "Lucan",
  },
];

export function ReflectionCards() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="What People Are Saying"
            subtitle="Structured feedback from real homeowners across Dublin"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white border border-border rounded-[var(--radius-card)] p-6 h-full flex flex-col">
                {/* Categories */}
                <div className="space-y-2 mb-4">
                  {card.categories.map((cat) => (
                    <div key={cat.label} className="flex items-start gap-2">
                      <span className="text-primary font-bold text-base leading-none mt-0.5">
                        &#x2713;
                      </span>
                      <span className="text-sm font-medium text-navy">
                        {cat.label}:{" "}
                        <span className="font-normal text-grey-text">
                          {cat.comment}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-2 border-primary pl-3 mt-auto">
                  <p className="text-base text-dark-text leading-relaxed">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution */}
                <p className="text-sm text-grey-text mt-3">
                  &mdash; {card.name}, {card.area}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
