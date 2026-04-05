"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { WHATSAPP_EMMA, WHATSAPP_CASEY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const categoryOptions = [
  { value: "homeowner", label: "Homeowner" },
  { value: "trade", label: "Trade" },
  { value: "partner", label: "Partner" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "homeowner",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // In production, this would send to an API endpoint
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-page-bg to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-grey-text max-w-2xl mx-auto">
              Have a question, a suggestion, or just want to say hello? We would
              love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {submitted ? (
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-2">
                      Thanks!
                    </h2>
                    <p className="text-grey-text">
                      We will get back to you within 24 hours.
                    </p>
                  </Card>
                ) : (
                  <Card className="p-8">
                    <h2 className="text-xl font-bold text-navy mb-6">
                      Send us a message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <Input
                        id="name"
                        label="Name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        error={errors.name}
                      />
                      <Input
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        error={errors.email}
                      />
                      <Input
                        id="phone"
                        label="Phone (optional)"
                        type="tel"
                        placeholder="+353 ..."
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                      <Select
                        id="category"
                        label="I am a..."
                        options={categoryOptions}
                        value={form.category}
                        onChange={(e) =>
                          setForm({ ...form, category: e.target.value })
                        }
                      />
                      <Textarea
                        id="message"
                        label="Message"
                        placeholder="Tell us what's on your mind..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />
                      <Button type="submit" variant="primary" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </Card>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <Card className="p-6">
                  <h3 className="font-bold text-navy mb-4">Contact Info</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a
                          href="mailto:hello@homesorted.ie"
                          className="text-sm text-grey-text hover:text-primary transition-colors"
                        >
                          hello@homesorted.ie
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-navy">Phone</p>
                        <p className="text-sm text-grey-text">
                          +353 1 XXX XXXX
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-navy">Office</p>
                        <p className="text-sm text-grey-text">
                          Dublin, Ireland
                        </p>
                      </div>
                    </li>
                  </ul>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <Card className="p-6 border-t-4 border-t-navy">
                  <h3 className="font-bold text-navy mb-2">For Trades</h3>
                  <p className="text-sm text-grey-text mb-4">
                    Prefer WhatsApp? Chat with Casey directly.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    href={WHATSAPP_CASEY}
                    external
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with Casey
                  </Button>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="p-6 border-t-4 border-t-primary">
                  <h3 className="font-bold text-navy mb-2">For Homeowners</h3>
                  <p className="text-sm text-grey-text mb-4">
                    Need a trade right now? Chat with Emma.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    href={WHATSAPP_EMMA}
                    external
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with Emma
                  </Button>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
