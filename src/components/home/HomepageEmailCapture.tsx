"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trackEmailSignup } from "@/lib/analytics";

export function HomepageEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    trackEmailSignup();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-grey-text text-base mb-6">
            Stay in the loop &mdash; new trades, seasonal tips, and launch
            updates.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle size={20} />
              <span className="font-medium">Check your email</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 text-base border border-border rounded-[var(--radius-input)] text-navy placeholder:text-grey-text/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                {error && (
                  <p className="text-xs text-error mt-1 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-base font-semibold bg-primary text-white rounded-[var(--radius-button)] hover:bg-primary-dark transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
