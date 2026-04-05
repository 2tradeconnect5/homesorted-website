import Link from "next/link";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { Trade } from "@/types";

const categoryColors: Record<string, string> = {
  Plumber: "bg-blue-500",
  Electrician: "bg-amber-500",
  "Painter & Decorator": "bg-rose-400",
  Carpenter: "bg-orange-600",
  Tiler: "bg-cyan-500",
  Landscaper: "bg-emerald-500",
  "General Builder": "bg-slate-600",
  Locksmith: "bg-violet-500",
  Roofer: "bg-red-600",
  "Heating & Gas": "bg-orange-500",
};

function getAvatarColor(category: string) {
  return categoryColors[category] || "bg-primary";
}

interface TradeCardProps {
  trade: Trade;
}

export function TradeCard({ trade }: TradeCardProps) {
  const initials = trade.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Link href={`/directory/${trade.id}`} className="block group">
      <Card hover className="p-6 h-full">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div
            className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${getAvatarColor(trade.category)}`}
          >
            <span className="text-lg font-bold text-white">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-navy group-hover:text-primary transition-colors truncate">
              {trade.name}
            </h3>
            <p className="text-sm text-grey-text truncate">{trade.businessName}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <Badge variant="primary">{trade.category}</Badge>
          {trade.badges.slice(0, 2).map((badge) => (
            <Badge key={badge} variant={badge === "Verified" ? "success" : "default"}>
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <StarRating rating={Math.round(trade.rating)} size={14} />
          <span className="text-sm font-medium text-navy">{trade.rating}</span>
          <span className="text-xs text-grey-text">({trade.reviewCount} reviews)</span>
        </div>

        <div className="mt-4 space-y-2 text-xs text-grey-text">
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span>{trade.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={12} />
            <span>{trade.jobsCompleted} jobs completed</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} />
            <span>Responds {trade.responseTime.toLowerCase()}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
