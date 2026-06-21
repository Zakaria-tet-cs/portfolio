"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    period: "2023 – 2024",
    title: "Scientific Baccalaureate & Web Development Foundations",
    description:
      "Completed my Scientific Baccalaureate, building a strong foundation in mathematics and analytical thinking. During this period, I began learning web development fundamentals — HTML and CSS — gaining a clear understanding of how modern websites are structured and styled.",
    tags: ["HTML", "CSS", "Mathematics"],
    active: false,
    done: true,
  },
  {
    period: "2024 – 2025",
    title: "Computer Science at ESTIN",
    description:
      "Enrolled at ESTIN (École Supérieure d'Informatique et des Technologies du Numérique) and built a rigorous foundation in computer science through C programming, algorithms, data structures, operating systems, and discrete mathematics. Simultaneously expanded my web development skills by learning JavaScript, TypeScript, and React.",
    tags: ["C", "Algorithms", "Data Structures", "JavaScript", "TypeScript", "React"],
    active: false,
    done: true,
  },
  {
    period: "2025 – 2026",
    title: "Backend Development & First Real-World Projects",
    description:
      "Expanded into backend development by learning Node.js, REST APIs, database design, and modern software architecture. Contributed to real-world projects — including Saha Event, the database design of MedLinkDZ, and the frontend of Giftoria — gaining practical experience in full-stack development workflows.",
    tags: ["Node.js", "REST APIs", "PostgreSQL", "React", "Express.js"],
    active: false,
    done: true,
  },
  {
    period: "2026 – Present",
    title: "Building StudyNova & Exploring Artificial Intelligence",
    description:
      "Currently developing StudyNova, an educational productivity platform designed to help students organise resources, share knowledge, and improve their learning experience. Alongside this, I am exploring Artificial Intelligence fundamentals and continuously deepening my understanding of modern software engineering practices.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AI", "TypeScript"],
    active: true,
    done: false,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
            style={{ color: "#7C3AED" }}
          >
            My Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Journey Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base mt-3 max-w-md mx-auto"
            style={{ color: "#9189A8" }}
          >
            From high school mathematics to building real-world software — step by step.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="h-[3px] w-20 rounded-full mt-5 mx-auto origin-center"
            style={{ background: "linear-gradient(90deg, #7C3AED, #A78BFA)" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto" ref={containerRef}>

          {/* Static faint track */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
            style={{ background: "rgba(124,58,237,0.1)" }}
          />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 origin-top"
            style={{
              height: lineHeight,
              background: "linear-gradient(to bottom, #7C3AED, rgba(124,58,237,0.3))",
              boxShadow: "0 0 8px rgba(124,58,237,0.5)",
            }}
          />

          <div className="space-y-0">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-start">

                  {/* Desktop — left-side card slot (always order 0) */}
                  <div
                    className="hidden md:block w-[calc(50%-36px)]"
                    style={{ order: 0 }}
                  >
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: index * 0.08 }}
                        className="pr-10 pb-16"
                      >
                        <EventCard event={event} align="right" />
                      </motion.div>
                    )}
                  </div>

                  {/* Node */}
                  <div
                    className="shrink-0 relative z-10 flex items-center justify-center"
                    style={{ order: 1, width: "72px", paddingTop: "18px" }}
                  >
                    <motion.div
                      initial={{ scale: 0.4, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.1, type: "spring", stiffness: 200 }}
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{
                        background: event.active
                          ? "transparent"
                          : event.done
                          ? "#7C3AED"
                          : "rgba(30,27,46,0.9)",
                        border: `2px solid ${event.active ? "#7C3AED" : event.done ? "#5B21B6" : "#6B6280"}`,
                        boxShadow: event.active
                          ? "0 0 0 4px rgba(124,58,237,0.2), 0 0 16px rgba(124,58,237,0.5)"
                          : event.done
                          ? "0 0 12px rgba(124,58,237,0.55)"
                          : "none",
                        animation: event.active ? "pulse-violet-ring 2s ease-out infinite" : "none",
                      }}
                    >
                      {event.active && (
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: "#7C3AED" }}
                        />
                      )}
                      {event.done && (
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </motion.div>
                  </div>

                  {/* Desktop — right-side card slot (always order 2) */}
                  <div
                    className="hidden md:block w-[calc(50%-36px)]"
                    style={{ order: 2 }}
                  >
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: index * 0.08 }}
                        className="pl-10 pb-16"
                      >
                        <EventCard event={event} align="left" />
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="md:hidden flex-1 pb-12"
                    style={{ order: 3 }}
                  >
                    <EventCard event={event} align="left" />
                  </motion.div>

                </div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute bottom-0 left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 translate-y-1"
            style={{
              background: "rgba(124,58,237,0.4)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({
  event,
  align,
}: {
  event: (typeof events)[0];
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}
    >
      {/* Period badge */}
      <span
        className="inline-block font-mono text-[10px] font-bold px-2.5 py-1 rounded-md mb-3"
        style={{
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.22)",
          color: "#7C3AED",
        }}
      >
        {event.period}
      </span>

      {/* Card */}
      <div
        className="rounded-2xl p-5 w-full transition-all duration-300"
        style={{
          background: "rgba(30,27,46,0.5)",
          border: event.active
            ? "1px solid rgba(124,58,237,0.35)"
            : "1px solid rgba(124,58,237,0.1)",
          backdropFilter: "blur(14px)",
          boxShadow: event.active
            ? "0 4px 32px rgba(124,58,237,0.12), inset 0 0 0 1px rgba(124,58,237,0.08)"
            : "0 2px 16px rgba(0,0,0,0.2)",
        }}
      >
        {/* Title row */}
        <div className={`flex items-center gap-2 mb-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
          <h3 className="text-sm font-bold leading-snug" style={{ color: "#F0EEF8" }}>
            {event.title}
          </h3>
          {event.active && (
            <span
              className="shrink-0 inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-mono font-bold"
              style={{
                background: "rgba(62,207,142,0.15)",
                color: "#3ECF8E",
                border: "1px solid rgba(62,207,142,0.3)",
              }}
            >
              NOW
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-4" style={{ color: "#9189A8" }}>
          {event.description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-1.5 ${align === "right" ? "justify-end" : "justify-start"}`}>
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.16)",
                color: "#A78BFA",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
