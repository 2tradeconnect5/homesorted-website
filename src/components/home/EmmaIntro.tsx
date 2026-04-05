"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHATSAPP_EMMA } from "@/lib/constants";

const features = [
  { icon: Sparkles, text: "AI-powered job matching" },
  { icon: Shield, text: "Verified trades only" },
  { icon: Clock, text: "Quotes in minutes, not days" },
];

export function EmmaIntro() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chat animation */}
          <ScrollReveal direction="left">
            <div className="relative max-w-sm mx-auto md:mx-0">
              {/* Emma avatar */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/personas/emma-closeup.jpg"
                  alt="Emma"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-sm font-semibold text-navy">Emma</p>
                  <p className="text-xs text-grey-text">
                    Your AI Home Concierge
                  </p>
                </div>
              </div>

              {/* Message bubbles */}
              <div className="space-y-3">
                {[
                  {
                    text: "Hi! I\u2019m Emma, your personal home concierge. What do you need help with today?",
                    delay: 0,
                  },
                  {
                    text: "Just tell me what\u2019s going on \u2014 a photo helps too. I\u2019ll find the right trade for you.",
                    delay: 0.3,
                  },
                  {
                    text: "We\u2019ve found 3 verified plumbers near you. Here\u2019s the first quote...",
                    delay: 0.6,
                  },
                ].map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: msg.delay + 0.3, duration: 0.3 }}
                    className="bg-page-bg rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]"
                  >
                    <p className="text-sm text-navy">{msg.text}</p>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-1 px-4 py-3"
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 rounded-full bg-grey-text/30"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Meet Emma, Your AI Home Concierge
              </h2>
              <p className="text-lg text-grey-text leading-relaxed mb-8">
                Emma lives on WhatsApp — the app you already use every day.
                Describe your job in plain English, send a photo or voice note,
                and she&apos;ll match you with verified trades in minutes. No
                forms. No app downloads. No waiting.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feat) => (
                  <div key={feat.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-bg flex items-center justify-center">
                      <feat.icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-navy">
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_EMMA}
                external
              >
                <MessageCircle size={20} />
                Chat with Emma
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
