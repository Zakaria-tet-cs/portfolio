"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Github = ({ className = "h-5 w-5" }: { className?: string }) => (
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

const Linkedin = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const contactCards = [
    {
      name: "GitHub",
      title: "Follow & Fork",
      value: "github.com/Zakaria-tet-cs",
      icon: <Github className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors" />,
      href: "https://github.com/Zakaria-tet-cs",
      actionText: "View Profile",
      disabled: false,
    },
    {
      name: "Email",
      title: "Write an Email",
      value: "zakariatetbirt2@gmail.com",
      icon: <Mail className="h-6 w-6 text-accent-cyan group-hover:text-cyan-200 transition-colors" />,
      href: "mailto:zakariatetbirt2@gmail.com",
      actionText: "Send Message",
      disabled: false,
    },
    {
      name: "LinkedIn",
      title: "Professional Network",
      value: "Coming Soon",
      icon: <Linkedin className="h-6 w-6 text-accent-blue group-hover:text-blue-300 transition-colors" />,
      href: "#",
      actionText: "Coming Soon",
      disabled: true,
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-navy-950/20">
      {/* Soft Glow */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase mb-2">04. Connection</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Get In Touch</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan mt-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
            I am currently open to internships, collaborative web projects, and exciting artificial intelligence engineering opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {contactCards.map((card, idx) => {
            const isClickable = !card.disabled;
            const CardElement = isClickable ? "a" : "div";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <CardElement
                  href={isClickable ? card.href : undefined}
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noopener noreferrer" : undefined}
                  className={`group w-full p-6 rounded-2xl border border-navy-800/60 bg-navy-900/40 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isClickable
                      ? "hover:border-accent-blue/30 hover:bg-navy-850/50 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 hover:scale-[1.02]"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  {/* Hover decoration glow */}
                  {isClickable && (
                    <div className="absolute -inset-px bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                  )}

                  <div className="flex flex-col space-y-4">
                    {/* Icon container */}
                    <div className="p-3 rounded-full bg-navy-950 border border-navy-850 w-fit">
                      {card.icon}
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 font-medium tracking-wider uppercase block">
                        {card.title}
                      </span>
                      <span className="text-sm font-bold text-white mt-1 block">
                        {card.name}
                      </span>
                    </div>

                    <p className={`font-mono text-xs ${card.disabled ? "text-slate-500" : "text-slate-300"}`}>
                      {card.value}
                    </p>
                  </div>

                  {/* Bottom link helper */}
                  <div className="mt-8 flex items-center space-x-1.5 text-xs font-bold text-slate-400 group-hover:text-accent-cyan transition-colors pt-2 border-t border-navy-850/40">
                    <span>{card.actionText}</span>
                    {isClickable && (
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                </CardElement>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
