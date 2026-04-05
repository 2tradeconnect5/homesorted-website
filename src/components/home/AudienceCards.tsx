"use client";

import Link from "next/link";
import { Home, Wrench, Building2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

const audiences = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Post a job in 60 seconds via WhatsApp. Build your Home Team of trusted trades and get seasonal reminders from HomeInsight. Emma handles everything.",
    href: "/homeowners",
    color: "text-primary",
    bg: "bg-primary-bg",
  },
  {
    icon: Wrench,
    title: "Trades",
    description:
      "Get matched to real jobs with real budgets. Manage your business with Casey, your AI partner, and the Trade Companion App.",
    href: "/trades",
    color: "text-navy",
    bg: "bg-navy/5",
  },
  {
    icon: Building2,
    title: "Partners",
    description:
      "Manage snags, assign trades, and track defect periods from one dashboard. Built for developers, landlords, and councils.",
    href: "/partners",
    color: "text-navy-light",
    bg: "bg-page-bg",
  },
];

export function AudienceCards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-navy mb-4">
            Built for Everyone in Home Services
          </h2>
          <p className="text-center text-grey-text text-lg mb-12 max-w-2xl mx-auto">
            Whether you need a trade, you are a trade, or you manage
            properties — HomeSorted has you covered.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <Link href={item.href} className="block group">
                <Card
                  hover
                  className="p-8 h-full flex flex-col group-hover:border-primary/20"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.bg} mb-6`}
                  >
                    <item.icon size={26} className={item.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-grey-text leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
