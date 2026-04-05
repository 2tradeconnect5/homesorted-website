"use client";

import { useState } from "react";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categories = ["All", "Company News", "Tips & Guides", "Industry Insights"];

export function BlogIndexContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const allPosts = getAllPosts();
  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-page-bg py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Blog"
            subtitle="Insights, updates, and tips for homeowners and trades"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-card"
                  : "bg-white text-grey-text hover:text-navy border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-grey-text">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
