import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 md:py-44">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-navy tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-grey-text leading-relaxed mb-10">
          Oops! Emma couldn&apos;t find that page. It might have moved, or the
          link might be outdated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="/">
            <Home className="w-5 h-5" />
            Home
          </Button>
          <Button variant="ghost" size="lg" href="/contact">
            <ArrowLeft className="w-5 h-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
