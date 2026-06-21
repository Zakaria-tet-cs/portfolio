"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">

        {/* Section header */}
        <div className="mb-14 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#7C3AED" }}
          >
             about.me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Who I Am
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="h-[2px] w-12 mt-4 mx-auto md:mx-0 origin-left"
            style={{ background: "linear-gradient(90deg, #7C3AED, #E879F9)" }}
          />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-stretch">

          {/* LEFT COLUMN - Biographical Content (55% on desktop, 50% on tablet) */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-5 text-[15px] md:text-base leading-relaxed"
              style={{ color: "#9189A8" }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm Zakaria Tetbirt, a Computer Science student at ESTIN and a Full-Stack Developer passionate about building modern web applications and digital experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I enjoy transforming ideas into scalable software solutions using modern technologies across the frontend, backend, and database layers. My focus is on writing clean code, building practical solutions, and continuously expanding my knowledge through real-world projects and software engineering principles.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Alongside web development, I enjoy exploring emerging technologies and continuously learning new concepts that help me grow as a developer.
              </motion.p>
            </motion.div>

            {/* Strength Cards */}
            <div className="mt-10 space-y-4">
              
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-colors duration-300 group"
                style={{
                  background: "rgba(30,27,46,0.5)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <Code2 size={22} style={{ color: "#7C3AED" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "#F0EEF8" }}>Full-Stack Development</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    Building modern web applications using React, Next.js, Node.js, PostgreSQL, Prisma, and MongoDB.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-colors duration-300 group"
                style={{
                  background: "rgba(30,27,46,0.5)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <Cpu size={22} style={{ color: "#7C3AED" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "#F0EEF8" }}>Software Engineering</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    Applying algorithms, data structures, database design, and software engineering principles to create reliable applications.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-4 p-5 rounded-2xl transition-colors duration-300 group"
                style={{
                  background: "rgba(30,27,46,0.5)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <Sparkles size={22} style={{ color: "#7C3AED" }} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "#F0EEF8" }}>Continuous Learning</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    Always learning new technologies, improving development skills, and exploring emerging fields such as Artificial Intelligence.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN - Code Editor Card (45% on desktop, 50% on tablet) */}
          <div className="w-full md:w-1/2 lg:w-[45%] flex">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full relative flex flex-col group h-full"
            >
              {/* Soft violet ambient glow behind the card */}
              <div 
                className="absolute inset-0 bg-[#7C3AED] blur-[80px] opacity-[0.15] rounded-[24px] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.25]"
              />

              {/* The Editor Card */}
              <div 
                className="relative flex flex-col w-full h-full rounded-[20px] overflow-hidden transition-colors duration-300"
                style={{
                  background: "#1E1B2E",
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow: "0 20px 60px -15px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(20px)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
              >
                {/* macOS style header */}
                <div 
                  className="flex items-center px-4 py-3 shrink-0"
                  style={{
                    background: "rgba(22,20,35,0.95)",
                    borderBottom: "1px solid rgba(124,58,237,0.1)"
                  }}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[11px] font-mono" style={{ color: "#6B6280" }}>profile.ts</span>
                  </div>
                  {/* Empty div for balancing flex layout */}
                  <div className="w-11"></div> 
                </div>

                {/* Editor Content area with custom scrollbar */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 relative custom-scrollbar">
                  
                  <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: rgba(0,0,0,0.1);
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: rgba(124,58,237,0.3);
                      border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: rgba(124,58,237,0.5);
                    }
                    @keyframes blink {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0; }
                    }
                    .animate-blink {
                      animation: blink 0.8s step-end infinite;
                    }
                  `}</style>

                  <div className="flex text-[13px] sm:text-sm font-mono leading-[1.6]">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-right pr-4 select-none" style={{ color: "#6B6280", opacity: 0.5 }}>
                      {Array.from({ length: 22 }).map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>

                    {/* Code Container */}
                    <div className="flex-1 whitespace-pre overflow-x-auto text-[#F0EEF8]">
                      <div>
                        <span style={{ color: "#7C3AED" }}>const</span> <span style={{ color: "#F0EEF8" }}>developer</span> <span style={{ color: "#F0EEF8" }}>=</span> <span style={{ color: "#9189A8" }}>{"{"}</span>
                      </div>
                      
                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>name</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"Zakaria Tetbirt"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>
                      
                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>role</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"Full-Stack Developer"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>
                      
                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>education</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"CS Student @ ESTIN"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>
                      
                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>location</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"Algeria"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>frontend</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#9189A8" }}>{"["}</span><span style={{ color: "#3ECF8E" }}>"React"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Next.js"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"TypeScript"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Tailwind"</span><span style={{ color: "#9189A8" }}>{"]"}</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>backend</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#9189A8" }}>{"["}</span><span style={{ color: "#3ECF8E" }}>"Node.js"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Express.js"</span><span style={{ color: "#9189A8" }}>{"]"}</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>databases</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#9189A8" }}>{"["}</span><span style={{ color: "#3ECF8E" }}>"PostgreSQL"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Prisma ORM"</span><span style={{ color: "#9189A8" }}>{"]"}</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>languages</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#9189A8" }}>{"["}</span><span style={{ color: "#3ECF8E" }}>"JavaScript"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"TypeScript"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Python"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"Java"</span><span style={{ color: "#6B6280" }}>,</span> <span style={{ color: "#3ECF8E" }}>"C"</span><span style={{ color: "#9189A8" }}>{"]"}</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>currentlyLearning</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#9189A8" }}>{"["}</span>
                      </div>
                      <div className="pl-8">
                        <span style={{ color: "#3ECF8E" }}>"Software Architecture"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>
                      <div className="pl-8">
                        <span style={{ color: "#3ECF8E" }}>"System Design"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>
                      <div className="pl-8">
                        <span style={{ color: "#3ECF8E" }}>"AI Fundamentals"</span>
                      </div>
                      <div className="pl-4">
                        <span style={{ color: "#9189A8" }}>{"]"}</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4 mt-2">
                        <span style={{ color: "#E879F9" }}>goal</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"Build impactful software and grow into a world-class engineer"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>openTo</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"Internships and collaborations"</span><span style={{ color: "#6B6280" }}>,</span>
                      </div>

                      <div className="pl-4">
                        <span style={{ color: "#E879F9" }}>status</span><span style={{ color: "#6B6280" }}>:</span> <span style={{ color: "#3ECF8E" }}>"available"</span>
                      </div>

                      <div>
                        <span style={{ color: "#9189A8" }}>{"}"}</span>
                        {mounted && (
                          <span className="inline-block w-[2px] h-[15px] bg-[#7C3AED] ml-[2px] align-middle animate-blink" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
