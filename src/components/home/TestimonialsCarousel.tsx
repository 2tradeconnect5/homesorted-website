"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockTestimonials } from "@/data/mockTestimonials";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % mockTestimonials.length);
  }, []);

  const prev = () => {
    setCurrent(
      (c) => (c - 1 + mockTestimonials.length) % mockTestimonials.length
    );
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const testimonial = mockTestimonials[current];

  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="What People Are Saying"
            subtitle="From homeowners, trades, and property partners across Ireland"
          />
        </ScrollReveal>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[var(--radius-card)] p-8 md:p-12 shadow-card text-center"
            >
              <Quote size={32} className="text-primary/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-navy leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <StarRating
                rating={testimonial.rating}
                className="justify-center mb-4"
              />
              <p className="font-semibold text-navy">{testimonial.name}</p>
              <p className="text-sm text-grey-text">{testimonial.location}</p>
              <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary-bg px-2.5 py-0.5 rounded-full capitalize">
                {testimonial.role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-white transition-colors text-grey-text hover:text-navy"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {mockTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-white transition-colors text-grey-text hover:text-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
