"use client";

import { motion } from "framer-motion";

const sidebarItems = ["Dashboard", "Properties", "Developments", "Snags", "Trades"];

const kpis = [
  { label: "Total Properties", value: "247", change: "+12" },
  { label: "Active Snags", value: "38", change: "-5" },
  { label: "Activation Rate", value: "73%", change: "+8%" },
  { label: "Trades Assigned", value: "15", change: "+3" },
];

const snags = [
  { id: "SNG-041", unit: "Block A, Unit 12", issue: "Cracked tile — bathroom", severity: "HIGH", severityColor: "bg-red-100 text-red-700" },
  { id: "SNG-039", unit: "Block B, Unit 5", issue: "Paint defect — hallway", severity: "MEDIUM", severityColor: "bg-amber-100 text-amber-700" },
  { id: "SNG-037", unit: "Block A, Unit 8", issue: "Squeaky door hinge", severity: "LOW", severityColor: "bg-blue-100 text-blue-700" },
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
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {/* Address bar */}
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-2">
          <span className="text-[10px] text-gray-400">partners.homesorted.ie</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="bg-gray-50 rounded-b-xl border border-t-0 border-gray-200 overflow-hidden flex min-h-[280px]">
        {/* Sidebar */}
        <div className="w-36 bg-navy shrink-0 py-3 hidden sm:block">
          <div className="px-3 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">HS</span>
              </div>
              <span className="text-white text-[10px] font-semibold">HomeSorted</span>
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
          {/* KPI cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {kpis.map((kpi) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-2 border border-gray-100"
              >
                <p className="text-[9px] text-gray-500">{kpi.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-navy">{kpi.value}</span>
                  <span className="text-[9px] text-green-600">{kpi.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Snag triage table */}
          <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div className="px-2.5 py-1.5 border-b border-gray-100">
              <span className="text-[10px] font-semibold text-navy">Snag Triage Queue</span>
            </div>
            <div className="divide-y divide-gray-50">
              {snags.map((snag) => (
                <div key={snag.id} className="px-2.5 py-1.5 flex items-center gap-2 text-[10px]">
                  <span className="text-navy font-medium w-14 shrink-0">{snag.id}</span>
                  <span className="text-gray-500 flex-1 truncate">{snag.unit}</span>
                  <span className="text-gray-600 flex-1 truncate hidden sm:block">{snag.issue}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${snag.severityColor}`}>
                    {snag.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
