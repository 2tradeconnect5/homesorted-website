"use client";

import Image from "next/image";
import {
  Shield,
  Zap,
  MapPin,
  Heart,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_EMMA } from "@/lib/constants";

const values = [
  {
    icon: Shield,
    title: "Trust First",
    description: "Every trade is verified. Every review is real.",
  },
  {
    icon: Zap,
    title: "Radically Simple",
    description: "No app downloads. No forms. Just WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Built for Ireland",
    description: "Eircodes, euro, Irish credentials. Made here.",
  },
  {
    icon: Heart,
    title: "People Over Process",
    description: "We acknowledge emotions before prescribing solutions.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-page-bg to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              About HomeSorted
            </h1>
            <p className="mt-4 text-lg text-grey-text max-w-2xl mx-auto">
              We are fixing home services in Ireland, one WhatsApp message at a
              time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our Story" align="left" />
          </ScrollReveal>
          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
              <p className="text-grey-text leading-relaxed mb-4">
                HomeSorted was founded in Ireland with a simple belief: finding a
                reliable tradesperson should not be this hard. We have all been
                there — asking friends for recommendations, scrolling through
                outdated directories, waiting days for a callback that never
                comes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-grey-text leading-relaxed mb-4">
                We built HomeSorted to solve this problem for good. Our solution
                is a WhatsApp-native AI marketplace that connects homeowners with
                verified local trades in minutes, not days. No apps to download,
                no forms to fill out, no account to create. Just message Emma,
                describe your job, and let our AI do the rest.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-grey-text leading-relaxed">
                For trades, we built Casey — an AI business partner who sends
                real jobs, helps with quoting, and keeps the admin to a minimum.
                Because tradespeople should be doing great work, not chasing
                leads.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why HomeSorted Exists */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Why HomeSorted Exists" align="left" />
          </ScrollReveal>
          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
              <p className="text-grey-text leading-relaxed mb-4">
                Finding a trustworthy tradesperson in Ireland shouldn&apos;t be this hard. Too many homeowners get ghosted, overcharged, or left with bad work. HomeSorted connects homeowners with verified trades through AI matching. Simple, fair, transparent.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="The HomeSorted Flywheel"
              subtitle="A three-sided marketplace that gets better with every job"
            />
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-primary-bg rounded-[var(--radius-card)] p-8 text-center">
                <p className="text-navy leading-relaxed">
                  Jobs + Demand &rarr; Verified work + data &rarr; Growth &rarr; Better matching &rarr; Happier homeowners &rarr; cycle repeats
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three-Sided Marketplace */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Three-Sided Marketplace"
              subtitle="Everyone wins when the system works together"
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Card hover className="p-6 text-center h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">Homeowners</h3>
                <p className="text-grey-text text-sm">Find verified trades via Emma. Get matched, quoted, and protected &mdash; all through WhatsApp.</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card hover className="p-6 text-center h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">Trades</h3>
                <p className="text-grey-text text-sm">Accept jobs, build reputation with Proof of Work, and grow your business with Casey.</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card hover className="p-6 text-center h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">Partners</h3>
                <p className="text-grey-text text-sm">Onboard residents, manage snags, and coordinate trades from one dashboard.</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meet Emma & Casey */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Image
                src="/images/personas/emma-casey-together.jpg"
                alt="Emma and Casey"
                width={200}
                height={120}
                className="w-48 h-auto rounded-xl mx-auto mb-4 shadow-card"
              />
              <SectionHeading
                title="Meet Emma & Casey"
                subtitle="Our AI personas, designed to feel human."
              />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Card className="p-8 h-full border-t-4 border-t-primary">
                <Image
                  src="/images/personas/emma-closeup.jpg"
                  alt="Emma — Your Personal Home Concierge"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/10"
                />
                <h3 className="text-xl font-bold text-navy mb-3">Emma</h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Your Personal Home Concierge
                </p>
                <p className="text-grey-text text-sm leading-relaxed">
                  Emma is your personal home concierge — warm, calm, practical.
                  She lives on WhatsApp and handles everything from finding
                  trades to resolving issues. She is the organised, capable
                  friend who happens to know every good tradesperson in your
                  area.
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="p-8 h-full border-t-4 border-t-navy">
                <Image
                  src="/images/personas/casey-closeup.jpg"
                  alt="Casey — Your Trade Business Partner"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-navy/10"
                />
                <h3 className="text-xl font-bold text-navy mb-3">Casey</h3>
                <p className="text-sm text-navy font-medium mb-3">
                  Your Trade Business Partner
                </p>
                <p className="text-grey-text text-sm leading-relaxed">
                  Casey is your trade business partner — direct, efficient,
                  encouraging. She sends you real jobs, helps you quote, and
                  keeps your business running. No fluff, no time-wasting — just
                  the information you need to grow.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our Values" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <Card hover className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-grey-text text-sm">{value.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 md:py-20 bg-page-bg">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading title="The Team" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-grey-text max-w-xl mx-auto mb-8">
              The HomeSorted team is based in Dublin. We are hiring — get in
              touch.
            </p>
            <Button variant="outline" href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <SectionHeading
              title="Join the HomeSorted Community"
              subtitle="Whether you need a trade or you are one, we are here to help."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_EMMA}
                external
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Emma
              </Button>
              <Button variant="outline" size="lg" href="/trades">
                Join as a Trade
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
