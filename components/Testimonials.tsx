"use client";

import { motion } from "framer-motion";

/*
 * PLACEHOLDER TESTIMONIALS
 * ─────────────────────────────────────────────────────────────────────────────
 * These are placeholder quotes. To update a testimonial, edit the `quote`,
 * `author`, and `role` fields below. No other changes are needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const testimonials = [
  {
    quote:
      "Zakaria approached every project with real engineering discipline. He asks the right questions, structures his code cleanly, and delivers on time. The kind of junior developer you want on your team from day one.",
    author: "— Professor / Mentor",
    role: "ESTIN, Bejaia",
    // ← Replace with real name, role, and institution when available
  },
  {
    quote:
      "Working with Zakaria across timezones was seamless. He communicated proactively, understood the architecture quickly, and his contributions to the backend were solid and well-tested. A great collaborator.",
    author: "— Teammate",
    role: "Saha Event Project",
    // ← Replace with real name, role, and team context when available
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
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
            Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            What People Say
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative rounded-2xl p-8 group transition-all duration-250"
              style={{
                background: "rgba(30,27,46,0.45)",
                border: "1px solid rgba(124,58,237,0.12)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)")
              }
            >
              {/* Opening quotation mark */}
              <div
                className="text-[72px] leading-none font-serif mb-2 select-none"
                style={{ color: "#7C3AED", opacity: 0.25, lineHeight: 1, marginTop: "-12px" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className="text-[15px] leading-relaxed mb-8 italic"
                style={{ color: "#9189A8" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="w-8 h-[1px] mb-5"
                style={{ background: "rgba(124,58,237,0.3)" }}
              />

              {/* Author */}
              <div>
                <p className="text-sm font-bold" style={{ color: "#F0EEF8" }}>
                  {t.author}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#7C3AED" }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
