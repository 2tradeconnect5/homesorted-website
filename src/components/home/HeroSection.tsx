"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-tight"
            >
              Your Home,{" "}
              <span className="text-primary">Sorted.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg text-grey-text leading-relaxed max-w-lg"
            >
              Ireland&apos;s first AI-powered home services marketplace. Tell
              Emma what you need on WhatsApp — she&apos;ll find verified trades,
              get you quotes, and handle the rest.
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                variant="whatsapp"
                size="lg"
                href="https://wa.me/353XXXXXXXXX"
                external
              >
                <MessageCircle size={20} />
                Chat with Emma
              </Button>
              <Button variant="outline" size="lg" href="/trades">
                I&apos;m a Tradesperson
                <ArrowRight size={18} />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-sm text-grey-text/70"
            >
              No app downloads. No signup forms. Just WhatsApp.
            </motion.p>
          </div>

          {/* Hero visual — phone mockup with chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative mx-auto w-72 lg:w-80">
              {/* Phone frame */}
              <div className="bg-navy-dark rounded-[2rem] p-3 shadow-elevated">
                <div className="bg-[#ECE5DD] rounded-[1.5rem] p-4 min-h-[420px] flex flex-col justify-end gap-3">
                  {/* Chat bubbles */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="self-end bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] shadow-sm"
                  >
                    <p className="text-sm text-navy">
                      Hi Emma, my kitchen tap is leaking badly
                    </p>
                    <p className="text-[10px] text-grey-text/60 text-right mt-1">
                      09:14
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm"
                  >
                    <p className="text-sm text-navy">
                      We&apos;re on it! We&apos;re finding plumbing trades near
                      you now. Can you send a quick photo so they know what
                      to expect?
                    </p>
                    <p className="text-[10px] text-grey-text/60 text-right mt-1">
                      09:14
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.3 }}
                    className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm"
                  >
                    <p className="text-sm text-navy">
                      Great news — 3 verified plumbers in your area are
                      available. First quote incoming!
                    </p>
                    <p className="text-[10px] text-grey-text/60 text-right mt-1">
                      09:16
                    </p>
                  </motion.div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -z-10 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
