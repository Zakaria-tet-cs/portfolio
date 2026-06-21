"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { allProjects } from "@/lib/data";
import { ExternalLink, CheckCircle2, BookOpen, Database, Layout, Lock } from "lucide-react";
import Link from "next/link";

function GithubIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return { ref, handleMouseMove, handleMouseLeave, isHovering };
}

function ProjectCard({ project, index, scrollYProgress }: { project: typeof allProjects[0]; index: number, scrollYProgress: any }) {
  const spotlight = useSpotlight();
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Parallax offsets (-0px, -8px, -15px max travel over scroll)
  const maxTravel = index === 0 ? 0 : index === 1 ? -8 : -15;
  const rawY = useTransform(scrollYProgress, [0, 1], [0, maxTravel * 3]); // multiply to make travel visible during viewport intersect
  const y = useSpring(rawY, { stiffness: 400, damping: 90 });
  const finalY = isMobile || prefersReducedMotion ? 0 : y;

  const cardVariants: import("framer-motion").Variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : (
      isMobile ? { opacity: 0, y: 40 } : { opacity: 0, y: 60, scale: 0.92, rotate: -2 }
    ),
    visible: prefersReducedMotion ? { opacity: 1, transition: { duration: 0.4 } } : (
      isMobile ? { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } } : { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.4, duration: 0.65 } }
    ),
  };

  const techBadgeContainerVariants = {
    rest: {},
    hover: {
      transition: { staggerChildren: 0.04 }
    }
  };

  const techBadgeVariants = {
    rest: { scale: 1, backgroundColor: "rgba(0,0,0,0.3)" },
    hover: { scale: isMobile || prefersReducedMotion ? 1 : 1.05, backgroundColor: "rgba(0,0,0,0.5)", transition: { duration: 0.2 } }
  };

  return (
    <motion.div style={{ y: finalY }} className={`h-full w-full ${index === 2 ? 'md:col-span-2 md:max-w-2xl md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0' : ''}`}>
      <motion.div
        ref={spotlight.ref}
        onMouseMove={spotlight.handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          spotlight.handleMouseLeave();
        }}
        variants={cardVariants}
        whileHover={prefersReducedMotion ? {} : (isMobile ? { y: -4, scale: 1 } : { y: -8, scale: 1.02 })}
        className="group relative rounded-2xl p-7 flex flex-col gap-6 h-full w-full transition-all duration-250 ease-out"
        style={{
          background: "rgba(30,27,46,0.45)",
          border: isHovered && !prefersReducedMotion ? "1px solid rgba(124,58,237,0.6)" : "1px solid rgba(124,58,237,0.12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: isHovered && !prefersReducedMotion ? "0 0 30px rgba(124,58,237,0.15)" : "0 4px 28px rgba(0,0,0,0.35)",
        }}
      >
        {/* Spotlight Overlay */}
        {!isMobile && !prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300 ease-in-out"
            style={{
              opacity: spotlight.isHovering ? 1 : 0,
              background: "radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), rgba(124, 58, 237, 0.08), transparent 100%)",
            }}
          />
        )}

        {/* Content (z-10 to stay above spotlight) */}
        <div className="relative z-10 flex flex-col h-full gap-6">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <motion.div
                animate={prefersReducedMotion ? {} : { opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              >
                {project.role === "Frontend Developer" ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(232,121,249,0.12)",
                      border: "1px solid rgba(232,121,249,0.28)",
                      color: "#E879F9",
                    }}
                  >
                    <Layout size={10} />
                    Frontend Contribution
                  </span>
                ) : project.role ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.28)",
                      color: "#60A5FA",
                    }}
                  >
                    <Database size={10} />
                    Database Contribution
                  </span>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(62,207,142,0.12)",
                      border: "1px solid rgba(62,207,142,0.28)",
                      color: "#3ECF8E",
                    }}
                  >
                    <CheckCircle2 size={10} />
                    Completed
                  </span>
                )}
              </motion.div>
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: "#6B6280" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#7C3AED")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6B6280")}
                >
                  <ExternalLink size={16} />
                </Link>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-1" style={{ color: "#F0EEF8" }}>
              {project.title}
            </h3>
            <p className="text-sm font-medium mb-4" style={{ color: "#7C3AED" }}>
              {project.description}
            </p>

            <div className="space-y-3">
              {project.problem && (
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: "#6B6280" }}>
                    Problem
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: "#6B6280" }}>
                    Solution
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    {project.solution}
                  </p>
                </div>
              )}
              {project.role && (
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: "#6B6280" }}>
                    Role
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    {project.role}
                  </p>
                </div>
              )}
              {project.contribution && (
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1" style={{ color: "#6B6280" }}>
                    Contribution
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#9189A8" }}>
                    {project.contribution}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-auto">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-2.5" style={{ color: "#7C3AED" }}>
              Tech Stack
            </span>
            <motion.ul
              className="flex flex-wrap gap-1.5"
              variants={techBadgeContainerVariants}
              initial="rest"
              animate={isHovered && !prefersReducedMotion ? "hover" : "rest"}
            >
              {project.techStack.map((tech, i) => (
                <motion.li
                  key={i}
                  variants={techBadgeVariants}
                  className="tech-badge text-xs font-medium px-2.5 py-1 rounded-md cursor-default border"
                  style={{
                    borderColor: "rgba(124,58,237,0.15)",
                    color: "#9189A8",
                  }}
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Key features */}
          {project.features && project.features.length > 0 && (
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-2.5" style={{ color: "#7C3AED" }}>
                Key Features
              </span>
              <ul className="grid grid-cols-1 gap-1.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "#9189A8" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#7C3AED" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(124,58,237,0.08)" }}
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1.5" style={{ color: "#6B6280" }}>
                Architecture
              </span>
              <p className="text-xs leading-relaxed" style={{ color: "#9189A8" }}>{project.architecture}</p>
            </div>
          )}

          {/* Lessons */}
          {project.lessons && project.lessons.length > 0 && (
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-2.5 flex items-center gap-1" style={{ color: "#7C3AED" }}>
                <BookOpen size={10} />
                {" "}Lessons Learned
              </span>
              <ul className="space-y-1">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="text-xs flex items-start gap-2" style={{ color: "#9189A8" }}>
                    <span style={{ color: "#7C3AED", marginTop: "2px" }}>—</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2 border-t" style={{ borderColor: "rgba(124,58,237,0.1)" }}>
            {project.isPrivateRepo ? (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  background: "rgba(30,27,46,0.4)",
                  border: "1px dashed rgba(124,58,237,0.3)",
                  color: "#9189A8",
                }}
              >
                <Lock size={14} />
                Private Repository
              </div>
            ) : project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  background: isHovered && !prefersReducedMotion ? "rgba(45,35,75,0.8)" : "rgba(30,27,46,0.8)",
                  border: isHovered && !prefersReducedMotion ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(124,58,237,0.18)",
                  color: isHovered && !prefersReducedMotion ? "#F0EEF8" : "#9189A8",
                }}
              >
                <GithubIcon size={14} className="transition-transform duration-250 ease-out group-hover:translate-x-[3px]" />
                Source Code
              </Link>
            ) : null}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 text-white"
                style={{ background: isHovered && !prefersReducedMotion ? "#8B5CF6" : "#7C3AED" }}
              >
                <ExternalLink size={14} className="transition-transform duration-250 ease-out group-hover:translate-x-[3px]" />
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" ref={containerRef} className="py-24 relative z-10">
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
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Completed Work
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.20 }}
            className="h-[3px] w-20 rounded-full mt-4 origin-left"
            style={{ background: "#7C3AED" }}
          />
        </div>

        {/* Three-column project grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.35, // After heading
                staggerChildren: 0.15
              }
            }
          }}
        >
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
