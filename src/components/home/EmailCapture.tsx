"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EmailCapture() {
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

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-primary">
        <CheckCircle size={18} />
        <span className="text-sm font-medium">You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}

export function BlogEmailCapture() {
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

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary-bg border border-[#d6eeb3] rounded-xl p-6 text-center">
        <CheckCircle size={24} className="text-primary mx-auto mb-2" />
        <p className="text-sm font-medium text-navy">You&apos;re on the list!</p>
      </div>
    );
  }

  return (
    <div className="bg-page-bg border border-border rounded-xl p-6">
      <h3 className="font-semibold text-navy mb-1">Stay Updated</h3>
      <p className="text-sm text-grey-text mb-4">
        Get new articles and HomeSorted news delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {error && <p className="text-xs text-error mt-1">{error}</p>}
        <button
          type="submit"
          className="w-full px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
