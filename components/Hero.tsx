"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Code2, MapPin, GraduationCap, Mail } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Computer Science", sub: "Student @ ESTIN" },
    { label: "Full-Stack", sub: "Developer" },
    { label: "4+ Projects", sub: "Built" },
    { label: "Continuous", sub: "Learner" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8 border-[var(--color-brand-primary)]/30 text-sm font-medium shadow-[0_0_20px_rgba(124,58,237,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ECF8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3ECF8E]"></span>
            </span>
            <span style={{ color: "#9189A8" }}>Available for Internships and Collaborations</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[var(--color-brand-primary)]/80">
              Zakaria Tetbirt
            </h1>
          </motion.div>

          {/* Title & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-white/90 text-sm md:text-base font-medium">
              <Code2 size={16} className="text-[var(--color-brand-primary)]" />
              Full-Stack Developer
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-white/90 text-sm md:text-base font-medium">
              <MapPin size={16} className="text-[var(--color-brand-secondary)]" />
              Algeria
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-white/90 text-sm md:text-base font-medium">
              <GraduationCap size={16} className="text-[var(--color-brand-primary)]" />
              CS Student at ESTIN
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--foreground)]/70 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Developing modern full-stack applications with a focus on performance, scalability, and real-world impact.
          </motion.p>

          {/* Technology Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-2xl mx-auto"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-[var(--foreground)]/90 hover:border-[var(--color-brand-primary)]/40 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <PrimaryButton href="#work">
              View My Work <span className="font-mono tracking-tighter opacity-80 ml-1">{"</>"}</span>
            </PrimaryButton>
            <SecondaryButton href="#contact">
              Contact Me <Mail size={16} className="ml-1 opacity-80" />
            </SecondaryButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-5 glass-card rounded-2xl hover:border-[var(--color-brand-primary)]/30 transition-all duration-300 group"
              >
                <span className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-brand-primary)] transition-colors">{stat.label}</span>
                <span className="text-xs text-[var(--foreground)]/60 uppercase tracking-wider text-center">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blob at the bottom of hero */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-[var(--color-brand-primary)]/20 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SPARKLE ICON — four-pointed star
───────────────────────────────────────────────────────────── */
function SparkleIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"
        fill={muted ? "rgba(124,58,237,0.55)" : "white"}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRIMARY BUTTON — violet 3D glow pill
───────────────────────────────────────────────────────────── */
function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "3px",
        borderRadius: "9999px",
        background: "rgba(0,0,0,0.55)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(124,58,237,0.5), 0 8px 60px 4px rgba(124,58,237,0.65), 0 2px 12px rgba(0,0,0,0.6)"
          : "0 0 0 1px rgba(124,58,237,0.25), 0 6px 40px 2px rgba(124,58,237,0.45), 0 2px 10px rgba(0,0,0,0.5)",
        transition: "box-shadow 0.25s ease",
        maxWidth: "220px",
        width: "100%",
      }}
    >
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "15px 32px",
          borderRadius: "9999px",
          background: hovered
            ? "linear-gradient(135deg, #8B4FF0 0%, #7C3AED 100%)"
            : "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
          color: "white",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "-0.01em",
          border: "1px solid rgba(255,255,255,0.12)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "background 0.25s ease, transform 0.2s ease",
          width: "100%",
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            transition: "transform 0.55s ease",
            transform: hovered ? "rotate(22deg) scale(1.2)" : "rotate(0deg) scale(1)",
          }}
        >
          <SparkleIcon />
        </span>
        {children}
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECONDARY BUTTON — dark 3D pill with subtle violet glow
───────────────────────────────────────────────────────────── */
function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "3px",
        borderRadius: "9999px",
        background: "rgba(0,0,0,0.55)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(124,58,237,0.42), 0 6px 44px 2px rgba(124,58,237,0.3), 0 2px 10px rgba(0,0,0,0.5)"
          : "0 0 0 1px rgba(124,58,237,0.1), 0 4px 18px 0px rgba(124,58,237,0.08), 0 2px 8px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.25s ease",
        maxWidth: "220px",
        width: "100%",
      }}
    >
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "15px 32px",
          borderRadius: "9999px",
          background: hovered ? "rgba(30,27,46,0.95)" : "rgba(14,12,28,0.9)",
          color: "#F0EEF8",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "-0.01em",
          border: hovered
            ? "1px solid rgba(124,58,237,0.55)"
            : "1px solid rgba(124,58,237,0.18)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "background 0.25s ease, transform 0.2s ease, border-color 0.25s ease",
          width: "100%",
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            transition: "transform 0.55s ease",
            transform: hovered ? "rotate(22deg) scale(1.2)" : "rotate(0deg) scale(1)",
          }}
        >
          <SparkleIcon muted={!hovered} />
        </span>
        {children}
      </Link>
    </div>
  );
}
