"use client";

import { motion } from "framer-motion";

const jobs = [
  { ref: "HS-2026-0401", desc: "Kitchen Tap Repair", area: "D12, Crumlin", status: "OFFERED", statusColor: "bg-[#EEF8E0] text-[#5A8A2A]", emoji: "🔧", competing: 3 },
  { ref: "HS-2026-0398", desc: "Full House Repaint", area: "D06, Ranelagh", status: "QUOTED", statusColor: "bg-purple-100 text-purple-700", emoji: "🎨", competing: 2 },
  { ref: "HS-2026-0392", desc: "Bathroom Refit", area: "D18, Blackrock", status: "IN_PROGRESS", statusColor: "bg-orange-100 text-orange-700", emoji: "🔧", competing: 0 },
];

export function TradeAppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-72 lg:w-80"
    >
      {/* Phone frame */}
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-elevated">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />

        <div className="bg-[#F3F4F6] rounded-[2rem] overflow-hidden">
          {/* App header */}
          <div className="bg-navy px-4 py-3 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white text-xs font-bold">HS</span>
                </div>
                <span className="text-white font-semibold text-sm">Trade App</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-green-300 text-[10px]">Online</span>
              </div>
            </div>
          </div>

          {/* Nav tabs */}
          <div className="flex border-b border-gray-200 bg-white">
            {["My Jobs", "Offers", "Earnings"].map((tab, i) => (
              <div
                key={tab}
                className={`flex-1 py-2.5 text-center text-xs font-medium ${
                  i === 0
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Job list */}
          <div className="p-3 space-y-2.5 min-h-[280px]">
            {jobs.map((job, i) => (
              <motion.div
                key={job.ref}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{job.emoji}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${job.statusColor}`}>
                      {job.status}
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400">{job.ref}</span>
                </div>
                <h4 className="text-sm font-semibold text-[#1F2937] mb-1">{job.desc}</h4>
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">📍 {job.area}</span>
                  {job.competing > 0 && <span>{job.competing} trades</span>}
                </div>
              </motion.div>
            ))}

            {/* Stats mini row */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { label: "This Month", value: "€2,840" },
                { label: "Jobs Won", value: "12" },
                { label: "Status", value: "POW ✓" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-2 text-center border border-gray-100">
                  <p className="text-xs font-bold text-[#1F2937]">{stat.value}</p>
                  <p className="text-[9px] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
            {["🏠", "💼", "💬", "👤"].map((icon, i) => (
              <div key={i} className={`text-base ${i === 1 ? "opacity-100" : "opacity-40"}`}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
    </motion.div>
  );
}
