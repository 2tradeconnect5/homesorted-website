"use client";

import {
  Building2,
  Home as HomeIcon,
  Landmark,
  AlertTriangle,
  Wrench,
  Clock,
  QrCode,
  Upload,
  BarChart3,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/home/FinalCTA";
import { DashboardPreview } from "@/components/partners/DashboardPreview";
import { WHATSAPP_EMMA } from "@/lib/constants";

const audiences = [
  {
    id: "developer",
    label: "Developers",
    icon: Building2,
    benefits: [
      "Track defect liability periods across all units",
      "Manage snag lists with severity-based triage",
      "Assign trades with On Price or Quote Required modes",
      "Monitor activation rates and homeowner onboarding",
      "QR code generation for property key handover",
      "Bulk import properties via CSV",
    ],
  },
  {
    id: "landlord",
    label: "Landlords",
    icon: HomeIcon,
    benefits: [
      "Manage tenant turnover with QR regeneration",
      "Track warranty periods for each property",
      "Handle maintenance issues with triage queue",
      "Assign and coordinate with verified trades",
      "Portfolio-level reporting and analytics",
      "Automated terminology (Tenant, Portfolio, Issue)",
    ],
  },
  {
    id: "council",
    label: "Local Authorities",
    icon: Landmark,
    benefits: [
      "Manage dwellings across multiple estates",
      "Handle defect reports with severity prioritisation",
      "Track tenant registration and allocation dates",
      "Coordinate with approved trade panels",
      "Estate-level analytics and compliance reporting",
      "Automated terminology (Tenant, Estate, Defect)",
    ],
  },
];

const features = [
  { icon: AlertTriangle, title: "Snag Triage Queue", description: "Unassigned snags sorted by severity — HIGH_RISK first. Assign trades with one click." },
  { icon: Wrench, title: "Trade Assignment", description: "On Price for agreed-rate work. Quote Required for approval workflow. You choose per snag." },
  { icon: Clock, title: "Defect Period Tracking", description: "12-month countdown from key handover. Progress bar, days remaining, colour-coded status." },
  { icon: QrCode, title: "QR Activation", description: "Generate QR codes for each property. Residents scan to activate and connect with HomeSorted." },
  { icon: Upload, title: "CSV Bulk Import", description: "Import hundreds of properties from a spreadsheet. Auto-creates developments and validates Eircodes." },
  { icon: BarChart3, title: "Reporting Dashboard", description: "Snag resolution rates, trade performance, defect trends, and invoice tracking — all in one view." },
];

const partnerSteps = [
  { step: 1, title: "Onboard Your Organisation", description: "Set up your organisation profile, team members, and preferred terminology." },
  { step: 2, title: "Add Your Properties", description: "Import via CSV or add individually. Group by development, portfolio, or estate." },
  { step: 3, title: "Manage Snags & Trades", description: "Triage incoming snags, assign trades, review quotes, and track progress." },
  { step: 4, title: "Track Everything", description: "Monitor defect periods, invoice status, trade performance, and resolution rates." },
];

export function PartnersContent() {
  const [activeTab, setActiveTab] = useState("developer");
  const activeAudience = audiences.find((a) => a.id === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                Property Management, <span className="text-primary">Simplified</span>
              </h1>
              <p className="mt-6 text-lg text-grey-text leading-relaxed">
                One dashboard for snag management, trade coordination, defect tracking,
                and reporting. Built for developers, landlords, and local authorities.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact">
                  Book a Demo
                  <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg" href={WHATSAPP_EMMA} external>
                  <MessageCircle size={20} />
                  Talk to Us
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Audience Tabs */}
      <section className="bg-page-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Built for Your Organisation" subtitle="Terminology, workflows, and features adapt to your partner type" />
          </ScrollReveal>

          <div className="flex justify-center gap-2 mb-10">
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === aud.id
                    ? "bg-primary text-white shadow-card"
                    : "bg-white text-grey-text hover:text-navy border border-border"
                }`}
              >
                <aud.icon size={16} />
                {aud.label}
              </button>
            ))}
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center">
                <activeAudience.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-navy">
                For {activeAudience.label}
              </h3>
            </div>
            <ul className="space-y-3">
              {activeAudience.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-grey-text">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Dashboard Features" subtitle="Everything you need to manage properties and trades at scale" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <feat.icon size={22} className="text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{feat.title}</h3>
                  <p className="text-sm text-grey-text leading-relaxed">{feat.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-page-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <DashboardPreview />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <SectionHeading title="How It Works for Partners" align="left" className="mb-8" />
              <div className="space-y-6">
                {partnerSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{step.title}</h4>
                      <p className="text-sm text-grey-text">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FinalCTA
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        primaryExternal={false}
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
        secondaryExternal={false}
      />
    </>
  );
}
