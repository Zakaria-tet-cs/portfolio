"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Layers, Code2, Users, Globe, GraduationCap, TrendingUp,
} from "lucide-react";

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

const cards = [
  {
    icon: Layers,
    value: "3",
    label: "Projects Built",
    description: "Real projects across web and healthcare domains — all production-ready.",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Technologies",
    description: "Actively used across frontend, backend, and database layers.",
  },
  {
    icon: Users,
    value: "Team",
    label: "Distributed Experience",
    description: "Developed and contributed to real-world projects including Saha Event and MedLinkDZ, applying modern software engineering principles, database design, and full-stack development practices. Expanded my experience through practical project collaboration and problem-solving.",
  },
  {
    icon: Globe,
    value: "3",
    label: "Languages",
    description: "Native Arabic speaker with professional proficiency in French and English, enabling effective communication in multicultural and international environments.",
  },
  {
    icon: GraduationCap,
    value: "ESTIN",
    label: "Computer Science",
    description: "Strong academic foundation in algorithms, operating systems, databases, and software engineering.",
  },
  {
    icon: TrendingUp,
    value: "∞",
    label: "Continuous Learner",
    description: "Actively expanding skills in new areas while shipping production applications.",
  },
];

function AchievementCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const spotlight = useSpotlight();
  const Icon = card.icon;

  return (
    <motion.div
      ref={spotlight.ref}
      onMouseMove={spotlight.handleMouseMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="spotlight-card rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-250"
      style={{
        background: "rgba(30,27,46,0.45)",
        border: "1px solid rgba(124,58,237,0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)")}
    >
      {/* Icon + value row */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <Icon size={18} style={{ color: "#7C3AED" }} />
        </div>
        <span
          className="text-3xl font-bold tabular-nums"
          style={{
            background: "linear-gradient(135deg, #7C3AED, #E879F9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {card.value}
        </span>
      </div>

      {/* Label + description */}
      <div>
        <h3 className="text-sm font-bold mb-1.5" style={{ color: "#F0EEF8" }}>
          {card.label}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "#9189A8" }}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
            style={{ color: "#7C3AED" }}
          >
            At a Glance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            What I Bring
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="h-[3px] w-20 rounded-full mt-4 mx-auto"
            style={{ background: "#7C3AED" }}
          />
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <AchievementCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
