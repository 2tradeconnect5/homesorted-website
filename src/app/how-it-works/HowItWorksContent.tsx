"use client";

import { useState } from "react";
import { WHATSAPP_EMMA } from "@/lib/constants";
import {
  MessageSquare,
  Search,
  CheckCircle,
  Briefcase,
  FileText,
  Award,
  Receipt,
  Upload,
  AlertTriangle,
  Wrench,
  BarChart3,
  Home,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const tabs = [
  { id: "homeowners", label: "Homeowners", icon: Home },
  { id: "trades", label: "Trades", icon: Users },
  { id: "partners", label: "Partners", icon: Building2 },
];

const flows: Record<string, { icon: typeof Home; title: string; description: string }[]> = {
  homeowners: [
    { icon: MessageSquare, title: "Message Emma on WhatsApp", description: "Describe your job in plain English. Send a photo or voice note if it helps — Emma understands all formats." },
    { icon: Search, title: "Emma Finds Verified Trades", description: "Emma identifies the right category, searches verified trades near you, and invites up to 3 to quote. This usually takes minutes." },
    { icon: FileText, title: "Review and Choose", description: "Compare quotes with clear pricing and timelines. Ask follow-up questions through Emma. Choose the trade that fits." },
    { icon: CheckCircle, title: "Job Done", description: "Your trade completes the work. Confirm it's all good, leave a Reflection Note, and save them to your Home Team for next time." },
  ],
  trades: [
    { icon: Briefcase, title: "Receive Job Offers via Casey", description: "Casey sends you matching jobs on WhatsApp with all the details — category, location, budget. Accept or decline in one tap." },
    { icon: FileText, title: "Arrange a View and Quote", description: "Book a site visit if needed, then submit your quote with amount, timeline, and description. Use stored quote templates to save time." },
    { icon: Award, title: "Win the Job", description: "The homeowner selects from up to 3 quotes. You're introduced directly via WhatsApp to coordinate the work." },
    { icon: Receipt, title: "Complete and Get Paid", description: "Mark the job complete, upload photos, add warranty details, and generate a professional invoice. The homeowner leaves a Reflection Note." },
  ],
  partners: [
    { icon: Upload, title: "Onboard Properties", description: "Import properties via CSV or add them individually. Group by development, portfolio, or estate. Generate QR codes for each unit." },
    { icon: AlertTriangle, title: "Triage Incoming Snags", description: "Snags arrive in a priority queue sorted by severity — HIGH_RISK, then MAJOR, then MINOR. Assign trades in one click." },
    { icon: Wrench, title: "Coordinate Trades", description: "Choose On Price (agreed rates) or Quote Required (approval workflow). Review quotes, approve or reject, track progress." },
    { icon: BarChart3, title: "Track and Report", description: "Monitor defect periods, resolution rates, invoice status, and trade performance. Export reports for stakeholders." },
  ],
};

export function HowItWorksContent() {
  const [activeTab, setActiveTab] = useState("homeowners");

  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="How HomeSorted Works"
              subtitle="Step-by-step guides for every user — homeowners, trades, and property partners"
            />
          </ScrollReveal>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-card"
                    : "bg-page-bg text-grey-text hover:text-navy"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto space-y-6">
            {flows[activeTab].map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <Card className="p-6">
                  <div className="flex gap-5 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon size={18} className="text-primary" />
                        <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                      </div>
                      <p className="text-grey-text leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA per audience */}
          <div className="mt-12 text-center">
            <ScrollReveal>
              {activeTab === "homeowners" && (
                <Button variant="primary" size="lg" href={WHATSAPP_EMMA} external>
                  <MessageSquare size={20} />
                  Chat with Emma
                </Button>
              )}
              {activeTab === "trades" && (
                <Button variant="primary" size="lg" href="/trades">
                  Join as a Trade
                  <ArrowRight size={18} />
                </Button>
              )}
              {activeTab === "partners" && (
                <Button variant="primary" size="lg" href="/partners">
                  Learn More for Partners
                  <ArrowRight size={18} />
                </Button>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Platform Connection Visual */}
      <section className="bg-page-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="One Platform, Connected"
              subtitle="Everything flows through HomeSorted's AI-powered backend"
            />
          </ScrollReveal>
          <ScrollReveal>
            <Card className="p-8">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center text-sm">
                {[
                  { label: "Website", sub: "Discovery" },
                  { label: "Emma", sub: "Homeowners" },
                  { label: "Backend", sub: "Matching" },
                  { label: "Casey", sub: "Trades" },
                  { label: "Dashboard", sub: "Partners" },
                ].map((node, i) => (
                  <div key={node.label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-primary-bg flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="font-semibold text-navy">{node.label}</p>
                    <p className="text-xs text-grey-text">{node.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="h-0.5 w-full max-w-lg bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded" />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
