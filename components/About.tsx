"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-[var(--color-brand-primary)] rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-[var(--foreground)]/80 text-lg leading-relaxed">
              <p>
                I am a{" "}
                <strong className="text-white">
                  Computer Science Student at ESTIN
                </strong>{" "}
                with a deep passion for building robust software systems.
              </p>
              <p>
                My expertise lies in{" "}
                <strong className="text-white">Full-Stack Web Development</strong>
                , specializing in creating performant applications using React,
                Next.js, TypeScript, and Node.js. On the backend, I design
                reliable data architectures with PostgreSQL and Prisma.
              </p>
              <p>
                Beyond traditional web development, I am focused on{" "}
                <strong className="text-[var(--color-brand-primary)]">
                  Artificial Intelligence
                </strong>{" "}
                — exploring ways to integrate smart, automated solutions into
                real-world software products like StudyNova.
              </p>
            </div>

            <div className="grid gap-6 content-start">
              <div className="flex items-start gap-4 p-6 bg-black/20 rounded-2xl border border-white/5 hover:border-[var(--color-brand-primary)]/30 transition-colors">
                <div className="p-3 bg-[var(--color-brand-primary)]/20 rounded-xl text-[var(--color-brand-primary)] shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">
                    Engineering First
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                    Focusing on clean architecture, scalable databases, and
                    type-safe code that stands the test of time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/20 rounded-2xl border border-white/5 hover:border-[var(--color-brand-primary)]/30 transition-colors">
                <div className="p-3 bg-[var(--color-brand-primary)]/20 rounded-xl text-[var(--color-brand-primary)] shrink-0">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-lg">
                    AI Integration
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                    Building next-generation platforms that leverage artificial
                    intelligence to create smarter user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
