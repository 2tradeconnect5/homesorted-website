"use client";

import { motion } from "framer-motion";

const jobs = [
  { title: "Kitchen Tap Repair", client: "Aoife B.", area: "Lucan", status: "QUOTED", statusColor: "bg-amber-100 text-amber-700" },
  { title: "Full House Repaint", client: "Ciarán K.", area: "Maynooth", status: "ARRANGED", statusColor: "bg-blue-100 text-blue-700" },
  { title: "Bathroom Refit", client: "Sinéad O.", area: "Blackrock", status: "IN_PROGRESS", statusColor: "bg-green-100 text-green-700" },
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

        <div className="bg-white rounded-[2rem] overflow-hidden">
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
          <div className="flex border-b border-gray-100">
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
                key={job.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-1.5">
                  <h4 className="text-sm font-semibold text-navy">{job.title}</h4>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${job.statusColor}`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span>{job.client}</span>
                  <span className="text-gray-300">|</span>
                  <span>{job.area}</span>
                </div>
              </motion.div>
            ))}

            {/* Stats mini row */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { label: "This Month", value: "\u20AC2,840" },
                { label: "Jobs Won", value: "12" },
                { label: "Rating", value: "4.9\u2605" },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary/5 rounded-lg p-2 text-center">
                  <p className="text-xs font-bold text-navy">{stat.value}</p>
                  <p className="text-[9px] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
    </motion.div>
  );
}
