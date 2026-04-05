"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, User, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { formatDate } from "@/lib/utils";
import { WHATSAPP_EMMA } from "@/lib/constants";
import { BlogPost } from "@/types";

interface BlogPostContentProps {
  post: BlogPost & { content: string };
  relatedPosts: BlogPost[];
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  return (
    <article className="bg-white">
      {/* Header */}
      <div className="bg-page-bg py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-grey-text hover:text-navy mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <ScrollReveal>
            <Badge variant="primary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-grey-text">
              <div className="flex items-center gap-1">
                <User size={14} />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div
            className="prose prose-navy max-w-none
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-grey-text [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-grey-text [&_ul]:leading-relaxed
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-grey-text [&_ol]:leading-relaxed
              [&_li]:mb-2
              [&_strong]:text-navy [&_strong]:font-semibold
              [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary-dark
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-grey-text
            "
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/^- (.*$)/gm, "<li>$1</li>")
                .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
                .replace(/\n\n/g, "</p><p>")
                .replace(/^(?!<[hulo])/gm, (match) =>
                  match ? `<p>${match}` : match
                ),
            }}
          />
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <Card className="p-8 mt-12 text-center bg-primary-bg border-primary/20">
            <Image
              src="/images/personas/emma-closeup.jpg"
              alt="Emma"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-4 border-primary/10"
            />
            <h3 className="text-xl font-bold text-navy mb-2">
              Got a home maintenance question?
            </h3>
            <p className="text-grey-text mb-4">
              Ask Emma on WhatsApp — she&apos;ll find the right trade for you.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              href={WHATSAPP_EMMA}
              external
            >
              <MessageCircle size={18} />
              Chat with Emma
            </Button>
          </Card>
        </ScrollReveal>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-navy mb-6">Related Posts</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
