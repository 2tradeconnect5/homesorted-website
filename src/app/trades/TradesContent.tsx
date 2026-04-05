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
  Star,
  Receipt,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/home/FinalCTA";

const benefits = [
  { icon: Briefcase, title: "Real Jobs, Real Budgets", description: "No bidding wars. Homeowners post jobs, you get matched based on your skills, location, and availability." },
  { icon: Bot, title: "Casey, Your AI Partner", description: "Casey sends you job offers, reminds you about deadlines, tracks your earnings, and helps you write quotes." },
  { icon: Smartphone, title: "Trade Companion App", description: "Manage everything in one place — jobs, quotes, invoices, reviews, and your business analytics." },
  { icon: Globe, title: "Public Trade Profile", description: "Your own page in the HomeSorted directory. Homeowners can find you, read your reviews, and request quotes." },
  { icon: Award, title: "Proof of Work Badges", description: "Build your reputation with verified past jobs. Earn your Verified badge and stand out from the crowd." },
  { icon: Clock, title: "Flexible Scheduling", description: "Set your working hours, holiday mode, service radius, and capacity. Work on your terms." },
];

const caseySteps = [
  { step: 1, icon: MessageCircle, title: "Casey Sends You an Offer", description: "New job in your area matching your skills? Casey sends it straight to your WhatsApp with all the details." },
  { step: 2, icon: Users, title: "Accept and Arrange", description: "Accept the job, arrange a site visit if needed, and submit your quote — all through Casey or the Trade App." },
  { step: 3, icon: Star, title: "Win the Job", description: "The homeowner reviews up to 3 quotes and chooses. You're introduced directly via WhatsApp to get started." },
  { step: 4, icon: Receipt, title: "Get Paid, Get Reviewed", description: "Complete the work, upload photos, and generate a professional invoice. The homeowner leaves a verified review." },
];

const faqs = [
  { q: "How do I sign up as a trade?", a: "Three ways: message Casey on WhatsApp, download the Trade Companion App, or fill in the form on this page. Casey will walk you through the Know Your Trade verification process." },
  { q: "What does it cost?", a: "It's free to join, create your profile, and appear in the directory. You only pay when you win work — a small platform fee on completed jobs. No subscription required to get started." },
  { q: "What is Know Your Trade (KYT)?", a: "KYT is our verification process. It includes identity verification via selfie, insurance documentation, and relevant regulatory credentials (RGI, Safe Electric, SEAI). Verified trades earn a trust badge on their profile." },
  { q: "What types of trades does HomeSorted support?", a: "Plumbers, electricians, painters, carpenters, tilers, landscapers, general builders, locksmiths, roofers, heating engineers, and more. If you're a skilled tradesperson in Ireland, there's a place for you." },
  { q: "How does job matching work?", a: "When a homeowner posts a job, Emma identifies the category and location. Casey then offers the job to up to 3 matching trades based on availability, proximity, and rating. First to accept, first to quote." },
  { q: "Can I manage my own clients too?", a: "Yes! The Trade Companion App includes an 'Own Clients' feature where you can track jobs for your existing customers alongside HomeSorted jobs." },
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
              <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                Grow Your Trade <span className="text-primary">Business</span>
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                Get matched to real jobs with real budgets. Manage your business
                with Casey, your AI partner. Build your reputation with verified
                reviews and badges.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="whatsapp" size="lg" href="https://wa.me/353XXXXXXXXX" external>
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

      {/* How Casey Works */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="How Casey Works for You" subtitle="From job offer to payment — Casey handles the admin" />
          </ScrollReveal>
          <div className="space-y-8">
            {caseySteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-white font-bold">
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
              <div className="bg-navy-dark rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <Smartphone size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-white/60 text-sm">Trade Companion App Preview</p>
                </div>
              </div>
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
                { icon: MessageCircle, title: "WhatsApp", description: "Message Casey directly", color: "bg-[#25D366]/10 text-[#25D366]" },
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

      <FinalCTA />
    </>
  );
}
