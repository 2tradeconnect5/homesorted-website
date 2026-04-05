"use client";

import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  MessageCircle,
  Phone,
  Heart,
  ArrowLeft,
  Shield,
  Award,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TradeCard } from "@/components/directory/TradeCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { formatDate } from "@/lib/utils";
import { Trade } from "@/types";
import { WHATSAPP_EMMA } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Plumber: "bg-blue-500",
  Electrician: "bg-amber-500",
  "Painter & Decorator": "bg-rose-400",
  Carpenter: "bg-orange-600",
  Tiler: "bg-cyan-500",
  Landscaper: "bg-emerald-500",
  "General Builder": "bg-slate-600",
  Locksmith: "bg-violet-500",
  Roofer: "bg-red-600",
  "Heating & Gas": "bg-orange-500",
};

const badgeIcons: Record<string, typeof Shield> = {
  Verified: Shield,
  "Top Rated": Award,
  "Quick Responder": Zap,
  "HomeSorted Pro": Award,
};

interface TradeProfileContentProps {
  trade: Trade;
  relatedTrades: Trade[];
}

export function TradeProfileContent({ trade, relatedTrades }: TradeProfileContentProps) {
  return (
    <section className="bg-page-bg py-8 md:py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/directory"
          className="inline-flex items-center gap-1 text-sm text-grey-text hover:text-navy mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Directory
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <ScrollReveal>
              <Card className="p-8">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className={`shrink-0 w-24 h-24 rounded-full flex items-center justify-center ${categoryColors[trade.category] || "bg-primary"}`}>
                    <span className="text-3xl font-bold text-white">
                      {trade.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-navy">{trade.name}</h1>
                    <p className="text-grey-text">{trade.businessName}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <Badge variant="primary">{trade.category}</Badge>
                      {trade.badges.map((badge) => (
                        <Badge key={badge} variant={badge === "Verified" ? "success" : "default"}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-xl font-bold text-navy">{trade.jobsCompleted}</p>
                    <p className="text-xs text-grey-text">Jobs Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-navy">{trade.reviewCount}</p>
                    <p className="text-xs text-grey-text">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-navy">{trade.yearsExperience}</p>
                    <p className="text-xs text-grey-text">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-navy">{trade.responseTime}</p>
                    <p className="text-xs text-grey-text">Response Time</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Badges */}
            {trade.badges.length > 0 && (
              <ScrollReveal>
                <Card className="p-6">
                  <h2 className="font-semibold text-navy mb-4">Badges</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {trade.badges.map((badge) => {
                      const Icon = badgeIcons[badge] || Shield;
                      return (
                        <div key={badge} className="flex items-center gap-3 p-3 rounded-lg bg-page-bg">
                          <div className="w-8 h-8 rounded-lg bg-primary-bg flex items-center justify-center">
                            <Icon size={16} className="text-primary" />
                          </div>
                          <span className="text-sm font-medium text-navy">{badge}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </ScrollReveal>
            )}

            {/* About */}
            <ScrollReveal>
              <Card className="p-6">
                <h2 className="font-semibold text-navy mb-3">About</h2>
                <p className="text-sm text-grey-text leading-relaxed">{trade.bio}</p>
              </Card>
            </ScrollReveal>

            {/* Service Areas */}
            <ScrollReveal>
              <Card className="p-6">
                <h2 className="font-semibold text-navy mb-3">Service Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {trade.serviceAreas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-page-bg rounded-full text-xs font-medium text-grey-text">
                      {area}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            {/* Reviews */}
            <ScrollReveal>
              <Card className="p-6">
                <h2 className="font-semibold text-navy mb-4">
                  Reviews ({trade.reviews.length})
                </h2>
                <div className="space-y-6">
                  {trade.reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-navy">{review.author}</p>
                          <p className="text-xs text-grey-text">{review.location}</p>
                        </div>
                        <p className="text-xs text-grey-text">{formatDate(review.date)}</p>
                      </div>
                      <p className="text-sm text-grey-text leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal direction="right">
                <Card className="p-6 space-y-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    href={WHATSAPP_EMMA}
                    external
                  >
                    <MessageCircle size={18} />
                    Request a Quote
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone size={18} />
                    Call
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full">
                    <Heart size={18} />
                    Save to Home Team
                  </Button>

                  <div className="pt-4 border-t border-border space-y-3 text-sm text-grey-text">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} /> {trade.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} /> Responds {trade.responseTime.toLowerCase()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} /> {trade.jobsCompleted} jobs completed
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> Member since {formatDate(trade.memberSince)}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Related Trades */}
        {relatedTrades.length > 0 && (
          <div className="mt-12">
            <ScrollReveal>
              <h2 className="text-xl font-bold text-navy mb-6">
                Other {trade.category} Trades
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTrades.map((t) => (
                <TradeCard key={t.id} trade={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
