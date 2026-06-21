"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/data";
import { Sparkles, CheckCircle2, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

/* Spotlight mouse-tracking inside the card */
function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return { ref, handleMouseMove };
}

/* Abstract StudyNova UI mockup — pure CSS/SVG, no image dependency */
function StudyNovaMockup() {
  return (
    <div
      className="relative w-full rounded-[1.25rem] overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0e0b1a 0%, #15112b 100%)",
        border: "1px solid rgba(124,58,237,0.2)",
        aspectRatio: "16/10",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(124,58,237,0.12)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3ECF8E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E879F9" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#7C3AED" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between mb-1">
          <div className="text-[11px] font-bold" style={{ color: "#F0EEF8" }}>My Courses</div>
          <div
            className="px-2 py-0.5 rounded-full text-[8px] font-bold"
            style={{ background: "rgba(62,207,142,0.15)", color: "#3ECF8E", border: "1px solid rgba(62,207,142,0.3)" }}
          >
            2nd Year
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Algorithms", progress: 78, color: "#7C3AED" },
            { name: "Databases", progress: 65, color: "#E879F9" },
            { name: "Networks", progress: 42, color: "#3ECF8E" },
            { name: "OS Theory", progress: 91, color: "#7C3AED" },
          ].map((c) => (
            <div
              key={c.name}
              className="p-2 rounded-lg"
              style={{ background: "rgba(30,27,46,0.8)", border: "1px solid rgba(124,58,237,0.12)" }}
            >
              <div className="text-[9px] font-semibold mb-1.5" style={{ color: "#F0EEF8" }}>{c.name}</div>
              <div className="h-1 rounded-full" style={{ background: "rgba(124,58,237,0.15)" }}>
                <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: c.color }} />
              </div>
              <div className="text-[7px] mt-1" style={{ color: "#6B6280" }}>{c.progress}% complete</div>
            </div>
          ))}
        </div>

        <div
          className="flex-1 p-3 rounded-lg"
          style={{ background: "rgba(30,27,46,0.8)", border: "1px solid rgba(124,58,237,0.12)" }}
        >
          <div className="text-[8px] font-bold mb-1.5" style={{ color: "#9189A8" }}>RECENT UPLOADS</div>
          {["Exam 2023 — Algorithms", "Summary — Chapter 4 OS", "TD5 Solutions — Databases"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 py-0.5">
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#7C3AED" }} />
              <span className="text-[8px]" style={{ color: "#9189A8" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle violet glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)" }}
      />
    </div>
  );
}

export default function FeaturedWork() {
  const project = featuredProjects[0];
  const spotlight = useSpotlight();

  return (
    <section id="work" className="py-28 relative z-10">
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
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Currently Building
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="h-[3px] w-20 rounded-full mt-4 origin-left"
            style={{ background: "#7C3AED" }}
          />
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.7 }}
        >
          <div
            ref={spotlight.ref}
            onMouseMove={spotlight.handleMouseMove}
            className="spotlight-card featured-work-card group rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            style={{
              background: "rgba(30,27,46,0.5)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Aurora inside card (Removed to fix 800px space issue) */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
              {/* ── LEFT COLUMN ── */}
              <div className="lg:col-span-5 space-y-8">
                {/* Status badge */}
                <div>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(62,207,142,0.12)",
                      border: "1px solid rgba(62,207,142,0.3)",
                      color: "#3ECF8E",
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inset-0 rounded-full bg-[#3ECF8E] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3ECF8E]" />
                    </span>
                    Currently Building
                  </span>
                </div>

                {/* Title + tagline */}
                <div>
                  <h3
                    className="text-5xl md:text-6xl font-bold tracking-tight mb-3"
                    style={{ color: "#F0EEF8" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-base font-medium" style={{ color: "#7C3AED" }}>
                    The collaborative academic resource platform
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  {project.description.split("\n\n").slice(0, 2).map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tech stack */}
                <div>
                  <p
                    className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3"
                    style={{ color: "#7C3AED" }}
                  >
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Neon PostgreSQL", "Prisma ORM v6", "NextAuth.js v5", "Cloudinary"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200"
                        style={{
                          background: "rgba(30,27,46,0.9)",
                          border: "1px solid rgba(124,58,237,0.2)",
                          color: "#9189A8",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className="lg:col-span-7 space-y-6">
                {/* Mockup */}
                <StudyNovaMockup />

                {/* Feature grid */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-[1.25rem]"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(124,58,237,0.1)",
                  }}
                >
                  {project.detailedFeatures?.map((group, i) => (
                    <div key={i}>
                      <h4
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-3"
                        style={{ color: "#F0EEF8" }}
                      >
                        <LayoutGrid size={12} style={{ color: "#7C3AED" }} />
                        {group.category}
                      </h4>
                      <ul className="space-y-1.5">
                        {group.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#9189A8" }}>
                            <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: "#3ECF8E" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
