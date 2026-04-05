import Link from "next/link";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card hover className="overflow-hidden h-full flex flex-col">
        {/* Cover placeholder */}
        <div className="h-48 bg-gradient-to-br from-primary/10 via-navy/5 to-primary/5 flex items-center justify-center">
          <span className="text-4xl opacity-20">
            {post.category === "Company News" ? "📣" : "📝"}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <Badge variant="primary" className="self-start mb-3">
            {post.category}
          </Badge>
          <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-grey-text leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border text-xs text-grey-text">
            <span>{formatDate(post.date)}</span>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
