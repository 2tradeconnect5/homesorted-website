"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, Phone, Video, ArrowLeft, Camera, Mic, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_EMMA } from "@/lib/constants";

interface ChatMessage {
  id: number;
  sender: "user" | "emma";
  text?: string;
  isPhoto?: boolean;
  isVoiceNote?: boolean;
  time: string;
}

const chatSequence: ChatMessage[] = [
  { id: 1, sender: "user", text: "Hi Emma, my kitchen tap is leaking badly \u{1F4A7}", time: "09:14" },
  { id: 2, sender: "emma", text: "No worries! I\u2019m on it \u{1F527} Can you send a quick photo so our plumbers know what they\u2019re dealing with?", time: "09:14" },
  { id: 3, sender: "user", isPhoto: true, time: "09:15" },
  { id: 4, sender: "user", isVoiceNote: true, time: "09:15" },
  { id: 5, sender: "emma", text: "Great news \u2014 3 verified plumbers in your area are available. First quote incoming! \u26A1", time: "09:16" },
];

function TypingIndicator() {
  return (
    <div className="self-start flex items-center gap-2 pl-2">
      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-2 h-2 rounded-full bg-gray-400"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Message 1: user text
    timers.push(setTimeout(() => setVisibleMessages([1]), 800));
    // Typing before Emma reply
    timers.push(setTimeout(() => setShowTyping(true), 1600));
    // Message 2: Emma
    timers.push(setTimeout(() => { setShowTyping(false); setVisibleMessages([1, 2]); }, 2800));
    // Message 3: user photo
    timers.push(setTimeout(() => setVisibleMessages([1, 2, 3]), 3600));
    // Message 4: user voice note
    timers.push(setTimeout(() => setVisibleMessages([1, 2, 3, 4]), 4200));
    // Typing before Emma reply
    timers.push(setTimeout(() => setShowTyping(true), 5000));
    // Message 5: Emma
    timers.push(setTimeout(() => { setShowTyping(false); setVisibleMessages([1, 2, 3, 4, 5]); }, 6200));

    return () => timers.forEach(clearTimeout);
  }, []);

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
              Ireland&apos;s first AI-powered home services marketplace. Now
              serving the Greater Dublin area. Tell Emma what you need on
              WhatsApp — she&apos;ll find verified trades, get you quotes, and
              handle the rest.
            </motion.p>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                href={WHATSAPP_EMMA}
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

          {/* Hero visual — realistic WhatsApp mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative mx-auto w-72 lg:w-80">
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-elevated">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />

                <div className="bg-[#ECE5DD] rounded-[2rem] overflow-hidden">
                  {/* WhatsApp header */}
                  <div className="bg-[#075E54] px-3 py-2 pt-7 flex items-center gap-2">
                    <ArrowLeft size={18} className="text-white/80" />
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                      <Image
                        src="/images/personas/emma-closeup.jpg"
                        alt="Emma"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium leading-tight">Emma</p>
                      <p className="text-[10px] text-green-300/80 leading-tight">HomeSorted Concierge</p>
                    </div>
                    <Video size={16} className="text-white/40" />
                    <Phone size={16} className="text-white/40" />
                  </div>

                  {/* Chat area */}
                  <div className="px-3 py-3 min-h-[340px] flex flex-col justify-end gap-1.5"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c4b8' fill-opacity='0.15'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='40' cy='30' r='1'/%3E%3Ccircle cx='20' cy='50' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                  >
                    <AnimatePresence>
                      {chatSequence.map((msg) => {
                        if (!visibleMessages.includes(msg.id)) return null;
                        const isUser = msg.sender === "user";
                        return (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className={`max-w-[82%] ${isUser ? "self-end" : "self-start"}`}
                          >
                            <div className={`relative px-3 py-2 rounded-lg shadow-sm ${
                              isUser
                                ? "bg-[#DCF8C6] rounded-tr-none"
                                : "bg-white rounded-tl-none"
                            }`}>
                              {msg.isVoiceNote ? (
                                <div className="flex items-center gap-2 pr-8">
                                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Mic size={14} className="text-primary" />
                                  </div>
                                  <div className="flex-1 flex items-center gap-1">
                                    {[...Array(12)].map((_, j) => (
                                      <div key={j} className="w-1 rounded-full bg-gray-400" style={{ height: `${6 + Math.sin(j * 0.8) * 6}px` }} />
                                    ))}
                                  </div>
                                  <span className="text-[10px] text-gray-500 shrink-0">0:08</span>
                                </div>
                              ) : msg.isPhoto ? (
                                <div className="w-36 h-28 bg-gray-200 rounded flex items-center justify-center">
                                  <Camera size={24} className="text-gray-400" />
                                </div>
                              ) : (
                                <p className="text-[13px] text-gray-800 leading-snug pr-12">
                                  {msg.text}
                                </p>
                              )}
                              <div className="flex items-center justify-end gap-0.5 mt-0.5">
                                <span className="text-[10px] text-gray-500">{msg.time}</span>
                                {isUser && (
                                  <CheckCheck size={14} className="text-blue-500" />
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    {showTyping && <TypingIndicator />}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#f0f0f0] px-2 py-1.5 flex items-center gap-2">
                    <div className="text-gray-500">😊</div>
                    <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[12px] text-gray-400">
                      Type a message
                    </div>
                    <Camera size={18} className="text-gray-500" />
                    <Mic size={18} className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] -z-10 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
