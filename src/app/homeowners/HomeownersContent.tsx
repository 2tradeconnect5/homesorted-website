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
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/home/FinalCTA";

const benefits = [
  { icon: Download, title: "No Apps to Download", description: "Emma lives on WhatsApp — the app you already use every day. No signup forms, no new accounts." },
  { icon: Shield, title: "Verified Trades Only", description: "Every trade is vetted with Know Your Trade checks, insurance verification, and regulatory credentials." },
  { icon: Zap, title: "Instant Quotes", description: "Get quotes from up to 3 trades within minutes. Compare and choose the best fit for your job." },
  { icon: Home, title: "HomeInsight Profile", description: "Build a profile for your home. Seasonal reminders, service history, and smart maintenance tips." },
  { icon: Users, title: "Your Home Team", description: "Save trades you love. Next time you need a plumber, Emma will check your Home Team first." },
  { icon: Euro, title: "Transparent Pricing", description: "See clear quotes with no hidden fees. Amount, timeline, and description — all upfront." },
];

const steps = [
  { step: 1, icon: Smartphone, title: "Message Emma", description: "Open WhatsApp and tell Emma what you need. Text, photo, or voice note — whatever's easiest." },
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
                <Button variant="whatsapp" size="lg" href="https://wa.me/353XXXXXXXXX" external>
                  <MessageCircle size={20} />
                  Chat with Emma
                </Button>
              </div>
            </ScrollReveal>
          </div>
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
                </Card>
              </ScrollReveal>
            ))}
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

      <FinalCTA />
    </>
  );
}
