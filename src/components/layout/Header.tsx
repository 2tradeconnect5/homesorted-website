"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, ChevronDown, LogIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { WHATSAPP_EMMA, TRADE_APP_URL, PARTNER_DASHBOARD_URL } from "@/lib/constants";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/homeowners", label: "For Homeowners" },
  { href: "/trades", label: "For Trades" },
  { href: "/partners", label: "For Partners" },
  { href: "/directory", label: "Directory" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/homesorted-logo.png"
                alt="HomeSorted"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-grey-text hover:text-navy transition-colors rounded-lg hover:bg-page-bg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* Login dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLoginOpen(true)}
                onMouseLeave={() => setLoginOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-grey-text hover:text-navy transition-colors rounded-lg hover:bg-page-bg">
                  <LogIn size={16} />
                  Sign In
                  <ChevronDown size={14} />
                </button>
                {loginOpen && (
                  <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-border rounded-xl shadow-card py-2 z-50">
                    <a
                      href={TRADE_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-page-bg transition-colors"
                    >
                      Trade Login
                    </a>
                    <a
                      href={PARTNER_DASHBOARD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-page-bg transition-colors"
                    >
                      Partner Login
                    </a>
                  </div>
                )}
              </div>
              <Button
                variant="primary"
                size="sm"
                href={WHATSAPP_EMMA}
                external
              >
                <MessageCircle size={16} />
                Chat with Emma
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-navy hover:bg-page-bg rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
