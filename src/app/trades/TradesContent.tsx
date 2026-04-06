"use client";

import {
  MessageCircle,
  Briefcase,
  Bot,
  Smartphone,
  Globe,
  Award,
  Clock,
  ChevronDown,
  ArrowRight,
  Users,
  Receipt,
  ShieldCheck,
  Zap,
  Eye,
  FileText,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/home/FinalCTA";
import { TradeAppPreview } from "@/components/trades/TradeAppPreview";
import { WHATSAPP_CASEY, TRADE_APP_URL } from "@/lib/constants";

const benefits = [
  { icon: Briefcase, title: "Real Jobs, Real Budgets", description: "No bidding wars. Homeowners post jobs, you get matched based on your skills, location, and availability." },
  { icon: Bot, title: "Casey, Your AI Partner", description: "Casey sends you job offers, reminds you about deadlines, tracks your earnings, and helps you write quotes." },
  { icon: Smartphone, title: "Trade Companion App", description: "Manage everything in one place \u2014 jobs, quotes, invoices, reviews, and your business analytics." },
  { icon: Globe, title: "Public Trade Profile", description: "Your own page in the HomeSorted directory. Homeowners can find you, see your verified work history, and request quotes." },
  { icon: Award, title: "Proof of Work Badges", description: "Build your reputation with verified past jobs. Earn your Verified badge and stand out from the crowd." },
  { icon: Clock, title: "Flexible Scheduling", description: "Set your working hours, holiday mode, service radius, and capacity. Work on your terms." },
];

const tradeJourney = [
  { step: 1, icon: ShieldCheck, title: "Casey verifies your identity and work", description: "KYT process (identity check) + POW (Proof of Work with 2 verified jobs minimum). Build your verified profile." },
  { step: 2, icon: Zap, title: "Jobs come to you", description: "Demand signals for your area, real-time job offers, response time incentives (30 min window)." },
  { step: 3, icon: Eye, title: "See the job before you price it", description: "Accept-then-Quote flow. You see full job details, photos, and requirements. Decide to accept. THEN provide your quote." },
  { step: 4, icon: FileText, title: "Built-in invoicing", description: "Generate, send, and track invoices through Casey. No more chasing payments. VAT calculations handled." },
  { step: 5, icon: TrendingUp, title: "Your reputation compounds", description: "Every completed job builds your Proof of Work. More verified jobs = more trust = more offers from homeowners." },
  { step: 6, icon: AlertCircle, title: "Emergency premium rates", description: "Available for after-hours emergencies? Earn +40% on emergency callouts. Flexible, optional." },
];

const comparison = [
  { problem: "Lead Waste", oldWay: "Pay for leads that go nowhere", homeSortedWay: "Only respond to real, qualified jobs" },
  { problem: "Invoice Chasing", oldWay: "Chase invoices for weeks", homeSortedWay: "Casey handles invoicing and follow-ups" },
  { problem: "Unverified Competition", oldWay: "Compete with unverified cowboys", homeSortedWay: "Every trade is identity-checked and work-proven" },
  { problem: "Market Blindness", oldWay: "No idea what\u2019s happening in your area", homeSortedWay: "Live demand signals for your trade and postcode" },
];

const faqs = [
  { q: "How do I sign up as a trade?", a: "Three ways: message Casey on WhatsApp, download the Trade Companion App, or fill in the form on this page. Casey will walk you through the Know Your Trade verification process." },
  { q: "What does it cost?", a: "It\u2019s free to join, create your profile, and appear in the directory. You only pay when you win work \u2014 a small platform fee on completed jobs. No subscription required to get started." },
  { q: "What is Know Your Trade (KYT)?", a: "KYT is our verification process. It includes identity verification via selfie, insurance documentation, and relevant regulatory credentials (RGI, Safe Electric, SEAI). Verified trades earn a trust badge on their profile." },
  { q: "What types of trades does HomeSorted support?", a: "Plumbers, electricians, painters, carpenters, tilers, landscapers, general builders, locksmiths, roofers, heating engineers, and more. If you\u2019re a skilled tradesperson in Ireland, there\u2019s a place for you." },
  { q: "How does job matching work?", a: "When a homeowner posts a job, Emma identifies the category and location. Casey then offers the job to up to 3 matching trades based on availability, proximity, and verified status. First to accept, first to quote." },
  { q: "Can I manage my own clients too?", a: "Yes! The Trade Companion App includes an \u2018Own Clients\u2019 feature where you can track jobs for your existing customers alongside HomeSorted jobs." },
];

export function TradesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/personas/casey-closeup.jpg"
                  alt="Casey — Your Trade Business Partner"
                  width={80}
                  height={80}
                  priority
                  className="w-20 h-20 rounded-full object-cover border-4 border-navy/10 bg-navy/5"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                Grow Your Trade <span className="text-primary">Business</span>
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                Get matched to real jobs with real budgets. Now matching trades
                across Greater Dublin. Manage your business with Casey, your AI
                partner. Build your reputation with Proof of Work badges.
              </p>
              <p className="mt-3 text-sm text-grey-text/80">
                Homeowners in Greater Dublin are already posting jobs. Get matched to work in your area.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" href={WHATSAPP_CASEY} external>
                  <MessageCircle size={20} />
                  Chat with Casey
                </Button>
                <Button variant="outline" size="lg" href="/directory">
                  View Trade Directory
                  <ArrowRight size={18} />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Real Jobs. Fair Pricing. No Lead Fees.
          </h2>
          <p className="text-white/70 mb-2">
            Starting at &euro;24.99/month (founding trades: 6 months free).
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-page-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Why Trades Choose HomeSorted" subtitle="Everything you need to win more jobs and grow your business" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-grey-text leading-relaxed">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Trade Journey */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Your Journey with HomeSorted" subtitle="From verification to growing your business — here\u2019s the path" />
          </ScrollReveal>
          <div className="space-y-8">
            {tradeJourney.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon size={20} className="text-primary shrink-0" />
                      <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-grey-text leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs HomeSorted Way */}
      <section className="bg-page-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Old Way vs HomeSorted Way" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparison.map((item, i) => (
              <ScrollReveal key={item.problem} delay={i * 0.1}>
                <div className="bg-white rounded-[var(--radius-card)] border border-border overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-border">
                    <h4 className="font-semibold text-navy text-sm">{item.problem}</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-400 text-xs font-medium mt-0.5 shrink-0 w-16">Old Way</span>
                      <p className="text-sm text-gray-400">{item.oldWay}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary text-xs font-medium mt-0.5 shrink-0 w-16">HomeSorted</span>
                      <p className="text-sm text-navy font-medium">{item.homeSortedWay}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade App Preview */}
      <section className="bg-page-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading title="The Trade Companion App" subtitle="Your business in your pocket" align="left" />
                <ul className="space-y-4 text-sm text-grey-text">
                  {[
                    "View and respond to job offers in seconds",
                    "Submit quotes with stored templates",
                    "Generate professional invoices",
                    "Track earnings and performance analytics",
                    "Manage your availability and service areas",
                    "Build your Proof of Work portfolio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <TradeAppPreview />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Signup Channels */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">Three Ways to Get Started</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: MessageCircle, title: "WhatsApp", description: "Message Casey directly", color: "bg-primary-bg text-primary" },
                { icon: Smartphone, title: "Trade App", description: "Download and sign up", color: "bg-primary-bg text-primary" },
                { icon: Globe, title: "This Website", description: "Contact us below", color: "bg-navy/5 text-navy" },
              ].map((channel) => (
                <Card key={channel.title} className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl ${channel.color} flex items-center justify-center mx-auto mb-3`}>
                    <channel.icon size={22} />
                  </div>
                  <h3 className="font-semibold text-navy">{channel.title}</h3>
                  <p className="text-sm text-grey-text mt-1">{channel.description}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding Trades */}
      <ScrollReveal>
        <section className="bg-[#f4fbe7] py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-4">
              <Award size={36} className="text-navy" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              First 50 founding trades get 6 months free on the Professional plan
            </h2>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              {[
                "Founding Trade badge on your profile",
                "Limited to 50 trades in Greater Dublin. Once filled, this offer closes permanently.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-grey-text">
                  <Award size={18} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base font-bold text-primary mb-6">
              32 of 50 spots remaining
            </p>
            <Button variant="primary" size="lg" href={WHATSAPP_CASEY} external>
              <MessageCircle size={20} />
              Apply to Be a Founding Trade
            </Button>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <section className="bg-page-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Frequently Asked Questions" />
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[var(--radius-card)] border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-page-bg/50 transition-colors"
                >
                  <span className="font-medium text-navy pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-grey-text transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-grey-text leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        primaryLabel="Chat with Casey"
        primaryHref={WHATSAPP_CASEY}
        secondaryLabel="Open the Trade App"
        secondaryHref={TRADE_APP_URL}
        secondaryExternal
      />
    </>
  );
}
