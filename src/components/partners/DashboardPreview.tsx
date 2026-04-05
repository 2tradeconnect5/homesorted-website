"use client";

import { motion } from "framer-motion";

const sidebarItems = ["Dashboard", "Properties", "Developments", "Snags", "Trades", "Invoices", "Reports"];

const kpis = [
  { label: "Total Properties", value: "247", sub: "4 pending activation" },
  { label: "Activation Rate", value: "73%", sub: "+8% this month", color: "text-[#27AE60]" },
  { label: "Open Snags", value: "38", sub: "12 need triage", color: "text-[#F39C12]" },
  { label: "Outstanding", value: "€4,280", sub: "3 unpaid invoices" },
];

const snags = [
  { id: "SNG-041", eircode: "D04 V2R8", issue: "Cracked tile — bathroom", severity: "HIGH", severityColor: "bg-red-100 text-red-700", time: "2h ago" },
  { id: "SNG-039", eircode: "D06 A1B2", issue: "Paint defect — hallway", severity: "MAJOR", severityColor: "bg-amber-100 text-amber-700", time: "5h ago" },
  { id: "SNG-037", eircode: "D08 C3D4", issue: "Squeaky door hinge", severity: "MINOR", severityColor: "bg-blue-100 text-blue-700", time: "1d ago" },
];

const snagSummary = [
  { label: "Needs Triage", count: 12, color: "bg-blue-500" },
  { label: "In Progress", count: 18, color: "bg-[#F39C12]" },
  { label: "Quotes Pending", count: 5, color: "bg-purple-500" },
  { label: "Escalated", count: 3, color: "bg-[#E74C3C]" },
  { label: "Resolved", count: 142, color: "bg-[#27AE60]" },
];

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Browser chrome */}
      <div className="bg-gray-800 rounded-t-xl px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-2">
          <span className="text-[10px] text-gray-400">partners.homesorted.ie</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="bg-[#F3F4F6] rounded-b-xl border border-t-0 border-gray-200 overflow-hidden flex min-h-[300px]">
        {/* Sidebar */}
        <div className="w-36 bg-navy shrink-0 py-3 hidden sm:block">
          <div className="px-3 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">HS</span>
              </div>
              <span className="text-white text-[10px] font-semibold">Partners</span>
            </div>
          </div>
          {sidebarItems.map((item, i) => (
            <div
              key={item}
              className={`px-3 py-1.5 text-[11px] mx-1.5 rounded ${
                i === 0
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/50"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3">
          {/* Page title */}
          <div className="mb-2">
            <h3 className="text-sm font-bold text-[#1F2937]">Dashboard</h3>
            <p className="text-[9px] text-gray-500">Overview of your property portfolio</p>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {kpis.map((kpi) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-2 border border-[#E5E8E8]"
              >
                <p className="text-[9px] text-gray-500">{kpi.label}</p>
                <span className={`text-sm font-bold ${kpi.color || "text-[#2C4459]"}`}>{kpi.value}</span>
                <p className="text-[8px] text-gray-400 mt-0.5">{kpi.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Two column: Triage + Snag Summary */}
          <div className="grid sm:grid-cols-3 gap-2">
            {/* Snag triage table */}
            <div className="sm:col-span-2 bg-white rounded-lg border border-[#E5E8E8] overflow-hidden">
              <div className="px-2.5 py-1.5 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#2C4459]">Snag Triage Queue</span>
                <span className="text-[9px] text-primary font-medium">View all →</span>
              </div>
              <div className="divide-y divide-gray-50">
                {snags.map((snag) => (
                  <div key={snag.id} className="px-2.5 py-1.5 flex items-center gap-2 text-[10px]">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${snag.severityColor}`}>
                      {snag.severity}
                    </span>
                    <span className="text-gray-500 shrink-0">{snag.eircode}</span>
                    <span className="text-[#1F2937] flex-1 truncate">{snag.issue}</span>
                    <span className="text-gray-400 shrink-0">{snag.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Snag summary */}
            <div className="bg-white rounded-lg border border-[#E5E8E8] p-2.5">
              <span className="text-[10px] font-semibold text-[#2C4459] block mb-2">Snag Summary</span>
              <div className="space-y-1.5">
                {snagSummary.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                    <span className="text-[10px] text-gray-600 flex-1">{item.label}</span>
                    <span className="text-[10px] font-semibold text-[#1F2937]">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
