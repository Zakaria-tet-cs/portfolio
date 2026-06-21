"use client";

import { motion } from "framer-motion";
import { Check, Loader2, Circle } from "lucide-react";

const phases = [
  {
    id: "current",
    label: "Phase 01",
    title: "Current Focus",
    status: "done" as const,
    items: [
      "Full-Stack Development",
      "Software Engineering",
      "Modern Web Technologies",
      "Production Applications",
    ],
  },
  {
    id: "learning",
    label: "Phase 02",
    title: "Currently Learning",
    status: "active" as const,
    items: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Concepts",
      "Software Architecture",
      "System Design",
    ],
  },
  {
    id: "future",
    label: "Phase 03",
    title: "Future Goals",
    status: "upcoming" as const,
    items: [
      "Advanced Software Engineering",
      "Intelligent Systems",
      "Scalable Application Architecture",
      "Contributing to Large Codebases",
    ],
  },
];

const statusConfig = {
  done: {
    icon: Check,
    iconBg: "#7C3AED",
    iconColor: "white",
    lineColor: "#7C3AED",
    lineDash: false,
    labelColor: "#3ECF8E",
    labelBg: "rgba(62,207,142,0.1)",
    labelBorder: "rgba(62,207,142,0.28)",
    itemIcon: "filled",
  },
  active: {
    icon: Loader2,
    iconBg: "transparent",
    iconColor: "#7C3AED",
    lineColor: "#7C3AED",
    lineDash: true,
    labelColor: "#7C3AED",
    labelBg: "rgba(124,58,237,0.1)",
    labelBorder: "rgba(124,58,237,0.3)",
    itemIcon: "pulse",
  },
  upcoming: {
    icon: Circle,
    iconBg: "transparent",
    iconColor: "#6B6280",
    lineColor: "#6B6280",
    lineDash: true,
    labelColor: "#6B6280",
    labelBg: "rgba(107,98,128,0.08)",
    labelBorder: "rgba(107,98,128,0.2)",
    itemIcon: "empty",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
            style={{ color: "#7C3AED" }}
          >
            Continuous Growth
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Learning Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base mt-3 max-w-lg"
            style={{ color: "#9189A8" }}
          >
            Where I am, where I&apos;m heading — honest and grounded.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="h-[3px] w-20 rounded-full mt-4 origin-left"
            style={{ background: "#7C3AED" }}
          />
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-start">

          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-4 left-[16.66%] right-[16.66%] h-[2px]"
            style={{
              background: "linear-gradient(90deg, #7C3AED 0%, #7C3AED 33%, rgba(124,58,237,0.3) 33%, rgba(107,98,128,0.2) 100%)",
            }}
          />

          {phases.map((phase, index) => {
            const cfg = statusConfig[phase.status];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Phase dot on connecting line */}
                <div className="flex justify-center md:justify-start mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: phase.status === "done" ? "#7C3AED" : "rgba(30,27,46,0.9)",
                      border: `2px solid ${phase.status === "done" ? "#7C3AED" : phase.status === "active" ? "#7C3AED" : "#6B6280"}`,
                      boxShadow: phase.status === "active" ? "0 0 0 4px rgba(124,58,237,0.15), 0 0 12px rgba(124,58,237,0.4)" : phase.status === "done" ? "0 0 12px rgba(124,58,237,0.5)" : "none",
                      animation: phase.status === "active" ? "pulse-violet-ring 2s ease-out infinite" : "none",
                    }}
                  >
                    <Icon
                      size={14}
                      style={{
                        color: phase.status === "done" ? "white" : phase.status === "active" ? "#7C3AED" : "#6B6280",
                        animation: phase.status === "active" ? "spin 3s linear infinite" : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(30,27,46,0.45)",
                    border: `1px solid ${phase.status === "done" ? "rgba(124,58,237,0.25)" : phase.status === "active" ? "rgba(124,58,237,0.2)" : "rgba(107,98,128,0.15)"}`,
                    borderTop: `3px solid ${phase.status === "done" ? "#7C3AED" : phase.status === "active" ? "#7C3AED" : "#6B6280"}`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Status badge */}
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-4"
                    style={{
                      background: cfg.labelBg,
                      border: `1px solid ${cfg.labelBorder}`,
                      color: cfg.labelColor,
                    }}
                  >
                    {phase.label}
                  </span>

                  <h3 className="text-lg font-bold mb-5" style={{ color: "#F0EEF8" }}>
                    {phase.title}
                  </h3>

                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm" style={{ color: phase.status === "upcoming" ? "#6B6280" : "#9189A8" }}>
                        {phase.status === "done" && (
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: "#7C3AED" }}
                          >
                            <Check size={9} color="white" />
                          </span>
                        )}
                        {phase.status === "active" && (
                          <span
                            className="w-4 h-4 rounded-full shrink-0"
                            style={{
                              border: "2px solid #7C3AED",
                              boxShadow: "0 0 6px rgba(124,58,237,0.4)",
                              animation: "pulse-violet-ring 2s ease-out infinite",
                            }}
                          />
                        )}
                        {phase.status === "upcoming" && (
                          <span
                            className="w-4 h-4 rounded-full shrink-0"
                            style={{ border: "2px solid #6B6280" }}
                          />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Honest note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs mt-12 pb-2 italic"
          style={{ color: "#6B6280" }}
        >
          This roadmap reflects where I genuinely am — a developer who knows what he has built and where he is going.
        </motion.p>
      </div>
    </section>
  );
}
