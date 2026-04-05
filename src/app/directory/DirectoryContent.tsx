"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { mockTrades } from "@/data/mockTrades";
import { serviceCategories } from "@/data/serviceCategories";
import { TradeCard } from "@/components/directory/TradeCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DirectoryContent() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "jobs" | "response">("rating");
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(mockTrades.map((t) => t.category));
    return Array.from(cats).sort();
  }, []);

  const filtered = useMemo(() => {
    let result = [...mockTrades];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.businessName.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((t) => t.category === selectedCategory);
    }

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "jobs":
        result.sort((a, b) => b.jobsCompleted - a.jobsCompleted);
        break;
      case "response":
        result.sort((a, b) => a.responseTime.localeCompare(b.responseTime));
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  return (
    <section className="bg-page-bg py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Trade Directory"
            subtitle="Browse verified tradespeople across Ireland"
          />
        </ScrollReveal>

        {/* Search + Filter bar */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-text"
              />
              <input
                type="text"
                placeholder="Search by name, trade, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-[var(--radius-input)] border border-border bg-white text-navy text-sm placeholder:text-grey-text/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-[var(--radius-button)] text-sm font-medium text-navy hover:bg-page-bg transition-colors md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>

          {/* Filters */}
          <div className={`flex flex-wrap gap-3 ${showFilters ? "block" : "hidden md:flex"}`}>
            {/* Category */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory("")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-grey-text hover:text-navy"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat ? "" : cat)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-grey-text hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-1.5 rounded-[var(--radius-input)] border border-border bg-white text-xs font-medium text-navy cursor-pointer"
            >
              <option value="rating">Sort: Rating</option>
              <option value="jobs">Sort: Jobs Completed</option>
              <option value="response">Sort: Response Time</option>
            </select>
          </div>

          {/* Active filters */}
          {(search || selectedCategory) && (
            <div className="flex items-center gap-2 text-sm text-grey-text">
              <span>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
              <button
                onClick={() => { setSearch(""); setSelectedCategory(""); }}
                className="flex items-center gap-1 text-error hover:underline"
              >
                <X size={14} /> Clear
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((trade) => (
              <TradeCard key={trade.id} trade={trade} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-grey-text mb-2">No trades found</p>
            <p className="text-sm text-grey-text/70">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
}
