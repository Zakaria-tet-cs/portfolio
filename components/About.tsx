"use client";

import { motion } from "framer-motion";
import { Code, Brain, Users, Compass } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const cards = [
    {
      icon: <Code className="h-6 w-6 text-accent-cyan" />,
      title: "Full-Stack Dev",
      description: "Building production-grade web systems using Next.js, Supabase, and TypeScript.",
    },
    {
      icon: <Brain className="h-6 w-6 text-accent-blue" />,
      title: "AI Engineering",
      description: "Designing intelligent models and integrating machine learning tools in web apps.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: "Team Leadership",
      description: "Leading collaborative, distributed teams to deliver high-quality, structured solutions.",
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-navy-950/40">
      {/* Soft Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase mb-2">01. Biography</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">About Me</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan mt-4 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed font-normal"
            >
              I&apos;m a second-year Computer Science student at{" "}
              <span className="text-white font-semibold underline decoration-accent-blue/50 underline-offset-4">
                ESTIN
              </span>{" "}
              and an active full-stack web developer. I specialize in building clean, scalable applications combining academic computer science foundations with modern development methodologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-slate-400 leading-relaxed font-normal"
            >
              My goal is to specialize in Artificial Intelligence and construct impactful machine learning systems in an international tech environment. Currently, I lead collaborative development projects with distributed teams, focusing on delivering elegant code alongside premium UI/UX designs.
            </motion.p>

            {/* Sub-cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-xl bg-navy-900/40 border border-navy-800/60 hover:border-navy-700/50 hover:bg-navy-850/50 transition-all duration-300 shadow-sm"
                >
                  <div className="mb-4 p-2 rounded-lg bg-navy-950/80 w-fit border border-navy-850 transition-transform group-hover:scale-105 duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Code Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 w-full font-mono text-xs sm:text-sm"
          >
            {/* Editor Window Container */}
            <div className="relative rounded-xl border border-navy-800/80 bg-navy-900/60 overflow-hidden shadow-xl shadow-black/35 backdrop-blur-sm">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-navy-950/90 border-b border-navy-800/60">
                {/* Window buttons */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#eab308]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                </div>
                {/* Active Tab tab-name */}
                <div className="text-slate-400 text-xs px-3 py-1 rounded bg-navy-900 border border-navy-800/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  zakaria.ts
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Code Editor Body */}
              <div className="p-5 sm:p-6 overflow-x-auto text-slate-300 leading-relaxed bg-gradient-to-br from-navy-900/20 to-navy-950/40">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-green-300">&apos;Zakaria Tetbirt&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{" "}
                  <span className="text-green-300">&apos;ESTIN Student (Algeria)&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">specialization:</span>{" "}
                  <span className="text-green-300">&apos;AI & Web Development&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">skills:</span>{" "}
                  <span className="text-yellow-300">{"["}</span>
                  <span className="text-green-300">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-green-300">&apos;Supabase&apos;</span>,{" "}
                  <span className="text-green-300">&apos;Python&apos;</span>
                  <span className="text-yellow-300">{"]"}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">currentFocus:</span>{" "}
                  <span className="text-green-300">&apos;Artificial Intelligence Systems&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">approach:</span>{" "}
                  <span className="text-green-300">&apos;Scalable code with premium UI/UX&apos;</span>
                </div>
                <div>
                  <span className="text-yellow-400">{"};"}</span>
                </div>

                <div className="mt-4 text-slate-500 font-normal">
                  {"// Click contact to build together..."}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
