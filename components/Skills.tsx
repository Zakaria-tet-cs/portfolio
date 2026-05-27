"use client";

import { motion } from "framer-motion";
import { Languages, Database, Wrench, Globe, Layout, Cpu, Server } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Categories restructured into 4 main pillars
  const categories = [
    {
      title: "Programming Languages",
      icon: <Cpu className="h-5 w-5 text-accent-cyan" />,
      skills: [
        { name: "C", color: "from-blue-600/10 to-blue-400/10 border-blue-500/30 text-blue-300" },
        { name: "Java", color: "from-orange-600/10 to-orange-400/10 border-orange-500/30 text-orange-300" },
        { name: "Python", color: "from-yellow-600/10 to-yellow-400/10 border-yellow-500/30 text-yellow-300" },
        { name: "Assembly (NASM)", color: "from-purple-500/10 to-pink-400/10 border-purple-400/30 text-purple-300" },
      ],
    },
    {
      title: "Web Development",
      icon: <Layout className="h-5 w-5 text-accent-blue" />,
      skills: [
        { name: "HTML", color: "from-orange-500/10 to-red-400/10 border-orange-400/30 text-orange-300" },
        { name: "CSS", color: "from-blue-500/10 to-indigo-400/10 border-blue-400/30 text-indigo-300" },
        { name: "JavaScript", color: "from-yellow-500/10 to-yellow-300/10 border-yellow-400/30 text-yellow-200" },
        { name: "TypeScript", color: "from-blue-500/10 to-sky-400/10 border-blue-400/30 text-sky-300" },
        { name: "React", color: "from-cyan-500/10 to-cyan-400/10 border-cyan-400/30 text-cyan-300" },
        { name: "Next.js", color: "from-slate-500/10 to-slate-300/10 border-slate-400/30 text-slate-200" },
        { name: "Node.js", color: "from-green-500/10 to-emerald-400/10 border-green-400/30 text-emerald-300" },
        { name: "Express.js", color: "from-slate-400/10 to-zinc-500/10 border-zinc-400/30 text-zinc-300" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-indigo-400" />,
      skills: [
        { name: "PostgreSQL", color: "from-blue-500/10 to-blue-400/10 border-blue-400/30 text-blue-300" },
        { name: "MongoDB", color: "from-green-600/10 to-green-450/10 border-green-500/30 text-green-400" },
        { name: "MySQL", color: "from-sky-600/10 to-sky-400/10 border-sky-500/30 text-sky-300" },
        { name: "Supabase", color: "from-emerald-500/10 to-teal-400/10 border-emerald-400/30 text-emerald-300" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "Git", color: "from-red-500/10 to-red-400/10 border-red-400/30 text-red-300" },
        { name: "GitHub", color: "from-slate-400/10 to-slate-200/10 border-slate-300/30 text-slate-200" },
        { name: "Linux", color: "from-amber-500/10 to-amber-400/10 border-amber-400/30 text-amber-300" },
        { name: "VS Code", color: "from-blue-600/10 to-sky-500/10 border-blue-500/30 text-sky-400" },
        { name: "Vercel", color: "from-slate-500/10 to-slate-200/10 border-slate-400/30 text-slate-100" },
      ],
    },
  ];

  // Bilingual levels
  const spokenLanguages = [
    { name: "Arabic", level: "Native Speaker", percent: 100 },
    { name: "English", level: "Professional Working / Fluent", percent: 90 },
    { name: "French", level: "Professional Working / Fluent", percent: 85 },
  ];

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-navy-950/20">
      {/* Soft Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase mb-2">02. Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Tech Stack</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan mt-4 rounded-full" />
        </motion.div>

        {/* Tech Stack Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-xl border border-navy-800/60 bg-navy-900/40 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-navy-950 border border-navy-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold bg-gradient-to-br transition-all duration-300 hover:scale-[1.03] hover:shadow-md cursor-default ${skill.color}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages & Communication (Bilingual section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-xl border border-navy-800/60 bg-navy-900/40 backdrop-blur-sm shadow-sm"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-lg bg-navy-950 border border-navy-800">
              <Globe className="h-5 w-5 text-accent-cyan" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">Bilingual & Communication Fluency</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spokenLanguages.map((lang, lIdx) => (
              <div
                key={lIdx}
                className="p-4 rounded-lg bg-navy-950/60 border border-navy-850 hover:border-navy-700/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{lang.name}</span>
                  <span className="text-xs text-accent-cyan font-mono">{lang.level}</span>
                </div>
                {/* Visual indicator bar */}
                <div className="w-full bg-navy-900 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
