import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const platformLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/homeowners", label: "Homeowners" },
  { href: "/trades", label: "Trades" },
  { href: "/partners", label: "Partners" },
  { href: "/pricing", label: "Pricing" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/directory", label: "Trade Directory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold text-primary">Home</span>
              <span className="text-xl font-bold text-white">Sorted</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Your home, sorted. Ireland&apos;s AI-powered home services
              marketplace, built on WhatsApp.
            </p>
            <Button
              variant="whatsapp"
              size="sm"
              href="https://wa.me/353XXXXXXXXX"
              external
            >
              <MessageCircle size={16} />
              Chat with Emma
            </Button>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social placeholders */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-xs text-white/40">Social links coming soon</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} HomeSorted. All rights reserved. Made in Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
}
