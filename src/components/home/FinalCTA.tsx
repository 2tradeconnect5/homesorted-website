"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHATSAPP_EMMA, WHATSAPP_CASEY } from "@/lib/constants";

interface FinalCTAProps {
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
}

export function FinalCTA({
  primaryLabel = "Chat with Emma",
  primaryHref = WHATSAPP_EMMA,
  primaryExternal = true,
  secondaryLabel = "Join as a Trade",
  secondaryHref = "/trades",
  secondaryExternal = false,
}: FinalCTAProps) {
  return (
    <section className="bg-navy-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Sorted?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Whether you need a trade or you are one — getting started takes
            less than a minute.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={primaryHref}
              external={primaryExternal}
            >
              <MessageCircle size={20} />
              {primaryLabel}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/20 hover:bg-white/10"
              href={secondaryHref}
              external={secondaryExternal}
            >
              {secondaryLabel}
              <ArrowRight size={18} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
