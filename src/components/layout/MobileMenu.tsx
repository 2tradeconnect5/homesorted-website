"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_EMMA, TRADE_APP_URL, PARTNER_DASHBOARD_URL } from "@/lib/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-elevated flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link href="/" onClick={onClose}>
                <Image
                  src="/images/homesorted-logo.png"
                  alt="HomeSorted"
                  width={130}
                  height={33}
                  className="h-7 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-grey-text hover:text-navy rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-navy hover:bg-page-bg rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/pricing"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-navy hover:bg-page-bg rounded-lg transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="block px-4 py-3 text-base font-medium text-navy hover:bg-page-bg rounded-lg transition-colors"
              >
                About
              </Link>

              <div className="pt-4 mt-4 border-t border-border">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-grey-text/60">
                  Sign In
                </p>
                <a
                  href={TRADE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-navy hover:bg-page-bg rounded-lg transition-colors"
                >
                  Trade Login
                </a>
                <a
                  href={PARTNER_DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-navy hover:bg-page-bg rounded-lg transition-colors"
                >
                  Partner Login
                </a>
              </div>
            </nav>

            <div className="p-4 border-t border-border space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                href={WHATSAPP_EMMA}
                external
              >
                <MessageCircle size={18} />
                Chat with Emma
              </Button>
              <Button variant="outline" size="lg" className="w-full" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
