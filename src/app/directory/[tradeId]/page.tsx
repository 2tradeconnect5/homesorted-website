import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockTrades } from "@/data/mockTrades";
import { TradeProfileContent } from "./TradeProfileContent";

export async function generateStaticParams() {
  return mockTrades.map((trade) => ({ tradeId: trade.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tradeId: string }>;
}): Promise<Metadata> {
  const { tradeId } = await params;
  const trade = mockTrades.find((t) => t.id === tradeId);
  if (!trade) return { title: "Trade Not Found" };

  return {
    title: `${trade.name} — ${trade.category} in ${trade.location}`,
    description: `${trade.businessName}. ${trade.bio.slice(0, 150)}...`,
  };
}

export default async function TradeProfilePage({
  params,
}: {
  params: Promise<{ tradeId: string }>;
}) {
  const { tradeId } = await params;
  const trade = mockTrades.find((t) => t.id === tradeId);

  if (!trade) notFound();

  const related = mockTrades
    .filter((t) => t.category === trade.category && t.id !== trade.id)
    .slice(0, 3);

  return <TradeProfileContent trade={trade} relatedTrades={related} />;
}
