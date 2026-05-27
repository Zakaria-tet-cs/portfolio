"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ArrowDown } from "lucide-react";

const Github = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 grid-bg"
    >
      {/* Grid Dot Overlay */}
      <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />

      {/* Decorative Glow Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent-blue/10 blur-[100px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-900/60 border border-navy-800/80 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-cyan-950/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent-blue via-sky-400 to-accent-cyan bg-clip-text text-transparent drop-shadow-sm">
              Zakaria Tetbirt
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl font-semibold text-slate-300 mb-4 tracking-wide max-w-3xl"
          >
            Computer Science Student &bull; Full-Stack Developer &bull; AI Enthusiast
          </motion.p>

          {/* Bio sentence */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl font-normal leading-relaxed"
          >
            Building clean, scalable, and premium web experiences. Specializing in next-gen software systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-accent-blue/90 hover:to-accent-cyan/90 text-white font-semibold shadow-md shadow-accent-blue/15 hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/Zakaria-tet-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-navy-900/60 border border-navy-800/80 hover:border-accent-blue/40 text-slate-300 hover:text-white hover:bg-navy-850/80 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-transparent border border-navy-800 hover:border-accent-cyan/40 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
