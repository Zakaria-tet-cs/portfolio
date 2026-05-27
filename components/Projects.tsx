"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Calendar, ShieldCheck } from "lucide-react";
import Image from "next/image";

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

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-navy-950/40">
      {/* Soft Glow Ambient */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase mb-2">03. Portfolios</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid / Layout */}
        <div className="grid grid-cols-1 gap-12">
          {/* Main Project: Saha-Event */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-2xl border border-navy-800/80 bg-navy-900/35 backdrop-blur-md transition-all duration-300 hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
          >
            {/* Left side: Project details */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-mono text-accent-cyan font-semibold uppercase tracking-wider">
                  Featured Web Application
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 group-hover:text-accent-cyan transition-colors">
                  Saha-Event
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A full-stack event venue management platform with authentication, real-time booking workflows, and a premium responsive UI. Built for production with a scalable architecture, delivering seamless reservations for luxury spaces.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-navy-950 border border-navy-800 text-slate-400 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://saha-event-8dgv.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold shadow-md shadow-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/Zakaria-tet-cs/saha-event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-navy-950 border border-navy-850 hover:border-accent-blue/40 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right side: Saha-Event Screenshot */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full relative rounded-xl border border-navy-800 bg-navy-950 overflow-hidden shadow-lg group-hover:border-accent-blue/40 transition-colors">
                <Image 
                  src="/saha-event.png" 
                  alt="Saha-Event Platform Screenshot" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
