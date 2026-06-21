"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import * as LucideIcons from "lucide-react";
import { useRef } from "react";

const newLanguages = [
  {
    name: "Arabic",
    flag: "🇩🇿",
    levelLabel: "Native Proficiency",
    accentColor: "#3ECF8E",
    accentBg: "rgba(62,207,142,0.12)",
    accentBorder: "rgba(62,207,142,0.25)",
    description: "Primary language used in daily communication.",
  },
  {
    name: "French",
    flag: "🇫🇷",
    levelLabel: "Professional Working Proficiency",
    accentColor: "#C4B5FD",
    accentBg: "rgba(124,58,237,0.12)",
    accentBorder: "rgba(124,58,237,0.25)",
    description: "Comfortable reading technical documentation, communicating in academic environments, and collaborating on projects.",
  },
  {
    name: "English",
    flag: "🇬🇧",
    levelLabel: "Professional Working Proficiency",
    accentColor: "#F0ABFC",
    accentBg: "rgba(232,121,249,0.12)",
    accentBorder: "rgba(232,121,249,0.25)",
    description: "Able to read technical documentation, learn new technologies, communicate with developers, and work with modern software development resources.",
  },
];

function LanguageCard({ lang, index }: { lang: typeof newLanguages[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col p-6 rounded-2xl group transition-all duration-300 spotlight-card overflow-hidden"
      style={{
        background: "rgba(30,27,46,0.45)",
        border: "1px solid rgba(124,58,237,0.12)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${lang.accentBorder.replace(/[\d.]+\)$/, "0.6)")}`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${lang.accentBg}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
      }}
    >
      <div className="flex flex-col h-full space-y-4 relative z-10">
        {/* Flag + Name */}
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">{lang.flag}</span>
          <h4 className="text-xl font-bold" style={{ color: "#F0EEF8" }}>{lang.name}</h4>
        </div>

        {/* Level badge */}
        <div>
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: lang.accentBg,
              border: `1px solid ${lang.accentBorder}`,
              color: lang.accentColor,
            }}
          >
            {lang.levelLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm flex-1 leading-relaxed" style={{ color: "#9189A8" }}>
          {lang.description}
        </p>

        {/* Decorative accent line at bottom */}
        <div
          className="h-[2px] w-8 rounded-full mt-2 opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all duration-300"
          style={{ background: lang.accentColor }}
        />
      </div>
    </motion.div>
  );
}

/* Category accent colors */
const categoryAccents: Record<string, string> = {
  Frontend: "#7C3AED",
  Backend: "#E879F9",
  Databases: "#3ECF8E",
  "Programming Languages": "#7C3AED",
  "Computer Science": "#E879F9",
};



export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative z-10">
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
            Skills & Technologies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Technical Stack
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

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {techStack.map((category, index) => {
            const accent = categoryAccents[category.category] ?? "#7C3AED";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-2xl p-6 group transition-all duration-250"
                style={{
                  background: "rgba(30,27,46,0.45)",
                  border: "1px solid rgba(124,58,237,0.12)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `rgba(${accent === "#7C3AED" ? "124,58,237" : accent === "#E879F9" ? "232,121,249" : "62,207,142"},0.3)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)";
                }}
              >
                {/* Accent top rule */}
                <div
                  className="h-[3px] w-10 rounded-full mb-5"
                  style={{ background: accent }}
                />
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-5"
                  style={{ color: accent }}
                >
                  {category.category}
                </h3>

                {/* Tech pills — every item shown, never collapsed */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => {
                    const IconKey = item.icon as keyof typeof LucideIcons;
                    const Icon = (LucideIcons[IconKey] as React.ElementType) ?? LucideIcons.Code2;
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 group/pill"
                        style={{
                          background: "rgba(0,0,0,0.25)",
                          border: "1px solid rgba(124,58,237,0.12)",
                          color: "#9189A8",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = `${accent}50`;
                          (e.currentTarget as HTMLElement).style.color = "#F0EEF8";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)";
                          (e.currentTarget as HTMLElement).style.color = "#9189A8";
                        }}
                      >
                        <Icon size={12} style={{ color: accent, flexShrink: 0 }} />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div 
          className="w-full h-px my-16 mx-auto" 
          style={{ background: "rgba(124,58,237,0.15)" }} 
        />

        {/* Language fluency section */}
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-widest mb-3 text-center md:text-left"
            style={{ color: "#7C3AED" }}
          >
            Languages
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-sm mb-8 text-center md:text-left"
            style={{ color: "#9189A8" }}
          >
            Communicating effectively across multiple languages in academic, professional, and technical environments.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newLanguages.map((lang, i) => (
              <LanguageCard key={lang.name} lang={lang} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
