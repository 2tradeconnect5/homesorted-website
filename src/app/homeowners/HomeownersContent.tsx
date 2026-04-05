"use client";

import {
  MessageCircle,
  Download,
  Shield,
  Zap,
  Home,
  Users,
  Euro,
  ChevronDown,
  Smartphone,
  Search,
  Star,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/home/FinalCTA";
import { WHATSAPP_EMMA } from "@/lib/constants";
import Link from "next/link";

const benefits = [
  { icon: Download, title: "No Apps to Download", description: "Emma lives on WhatsApp — the app you already use every day. No signup forms, no new accounts." },
  { icon: Shield, title: "Verified Trades Only", description: "Every trade is vetted with Know Your Trade checks, insurance verification, and regulatory credentials." },
  { icon: Zap, title: "Instant Quotes", description: "Get quotes from up to 3 trades within minutes. Compare and choose the best fit for your job." },
  { icon: Home, title: "HomeInsight Profile", description: "Build a profile for your home. Seasonal reminders, service history, and smart maintenance tips." },
  { icon: Users, title: "Your Home Team", description: "Save trades you love. Next time you need a plumber, Emma will check your Home Team first." },
  { icon: Euro, title: "Transparent Pricing", description: "See clear quotes with no hidden fees. Amount, timeline, and description — all upfront." },
  { icon: AlertTriangle, title: "24/7 Emergency Mode", description: "Burst pipe at midnight? Say 'emergency' to Emma and she'll find available trades immediately — with live progress updates and confirmed ETAs." },
];

const steps = [
  { step: 1, icon: Smartphone, title: "Message Emma", description: "Open WhatsApp and tell Emma what you need. Type a message, snap a photo, or just hit record and describe it in your own words. Emma's AI understands voice notes just like text." },
  { step: 2, icon: Search, title: "Emma Finds Trades", description: "Emma searches verified trades in your area and invites up to 3 to quote on your job." },
  { step: 3, icon: Star, title: "Compare Quotes", description: "Review quotes with clear pricing and timelines. Ask questions through Emma if you need to." },
  { step: 4, icon: CheckCircle, title: "Job Done", description: "Your chosen trade completes the work. Rate them, review them, and save them to your Home Team." },
];

const faqs = [
  { q: "How does HomeSorted work?", a: "Just message Emma on WhatsApp and describe your job. She'll find verified trades in your area, get you quotes, and help you choose the right tradesperson. It's that simple." },
  { q: "Is HomeSorted free for homeowners?", a: "Yes, completely free. Homeowners never pay a fee to use HomeSorted. You only pay the trade directly for the work they do." },
  { q: "How are trades verified?", a: "Every trade goes through our Know Your Trade (KYT) process — identity verification, insurance checks, and relevant regulatory credentials (RGI for gas, Safe Electric for electrical, SEAI for energy). They also build a Proof of Work portfolio with verified past jobs." },
  { q: "What if I'm not happy with the work?", a: "Emma will guide you through our resolution process. For minor issues, we'll arrange a fix with the trade. For major concerns, our team investigates within 48 hours. Your satisfaction matters." },
  { q: "What's HomeInsight?", a: "HomeInsight is your home's profile on HomeSorted. It tracks your service history, sends seasonal maintenance reminders, and helps you stay on top of your home's needs — like a MOT for your house." },
  { q: "Can I choose my own trade?", a: "Absolutely. If you've used a trade before and want them again, save them to your Home Team. Next time you post a job in their category, Emma will check if they're available first." },
];

export function HomeownersContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                Home Maintenance, <span className="text-primary">Handled</span>
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                Need a plumber? Painter? Electrician? Just message Emma on WhatsApp.
                She&apos;ll find verified trades, get you quotes, and make sure the
                job gets done right.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="whatsapp" size="lg" href={WHATSAPP_EMMA} external>
                  <MessageCircle size={20} />
                  Chat with Emma
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Neighbourhood Stats */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-grey-text text-base">
              Homeowners in your neighbourhood are already using HomeSorted.{" "}
              <Link href="/directory" className="text-primary font-medium hover:underline">
                See verified trades near you &rarr;
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-page-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Everything You Need" subtitle="HomeSorted takes the hassle out of finding and managing tradespeople" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-bg flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-grey-text leading-relaxed">{item.description}</p>
                  {item.title === "Verified Trades Only" && (
                    <Link href="/how-we-verify" className="inline-block mt-3 text-sm text-primary font-medium hover:underline">
                      Learn how we verify trades &rarr;
                    </Link>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HomeInsight + Home Team Section */}
      <section className="bg-[#f4fbe7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Your Home Builds a Profile Over Time"
              subtitle="Every job, every trade, every season — HomeSorted remembers so you don't have to."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="p-8 h-full">
                <h3 className="text-xl font-semibold text-navy mb-4">Your Home Team</h3>
                <p className="text-grey-text leading-relaxed mb-4">
                  Build a trusted roster of trades for every category. Emma always checks your favourites first.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Save your favourite trades per category — plumber, electrician, painter, and more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">When you post a job, Emma checks your Home Team first before searching wider.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Found someone better? Swap trades in or out of your Home Team after any job.</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="p-8 h-full">
                <h3 className="text-xl font-semibold text-navy mb-4">HomeInsight</h3>
                <p className="text-grey-text leading-relaxed mb-4">
                  Your home&apos;s memory — tracking everything so you always know what&apos;s been done and what&apos;s due next.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Full job history — who did what, when, and how much it cost.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Seasonal reminders for boiler servicing, gutter cleaning, and more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Service anniversaries — Emma nudges you when it&apos;s time to rebook.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-grey-text leading-relaxed">Add past jobs manually so your home profile is complete from day one.</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How Emma Works */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="How Emma Works" subtitle="From first message to job complete — here's what to expect" />
          </ScrollReveal>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">{step.title}</h3>
                    <p className="text-grey-text leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Snag Flow Trust Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What If Something Goes Wrong?"
              subtitle="HomeSorted has a built-in protection process so you're never left with unfinished work."
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">1. Minor Snags</h3>
                <p className="text-sm text-grey-text leading-relaxed">
                  Not quite right? Tell Emma the specifics and she&apos;ll get your trade back to fix it.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">2. Major Issues</h3>
                <p className="text-sm text-grey-text leading-relaxed">
                  Something seriously wrong? Emma captures evidence and contacts the trade with a resolution deadline.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">3. Automatic Escalation</h3>
                <p className="text-sm text-grey-text leading-relaxed">
                  If the trade doesn&apos;t respond, HomeSorted steps in directly to review and resolve.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.4}>
            <p className="text-center mt-10 text-grey-text font-medium">
              We&apos;re on your side. Every step is tracked, documented, and escalated if needed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-page-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Frequently Asked Questions" />
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-[var(--radius-card)] border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-page-bg/50 transition-colors"
                  >
                    <span className="font-medium text-navy pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-grey-text transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-grey-text leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        primaryLabel="Chat with Emma"
        primaryHref={WHATSAPP_EMMA}
        secondaryLabel="How It Works"
        secondaryHref="/how-it-works"
        secondaryExternal={false}
      />
    </>
  );
}
