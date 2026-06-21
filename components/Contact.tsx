"use client";

import { motion } from "framer-motion";
import { Mail, Check, ArrowUpRight, Clock, MapPin, Languages, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/* ─── SVG Icons ─────────────────────────────────────────── */

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */

const EMAIL = "zakariatetbirt2@gmail.com";
const GITHUB_URL = "https://github.com/Zakaria-tet-cs";
const LINKEDIN_URL = "https://linkedin.com/in/zakaria-tetbirt";
const WHATSAPP_URL = "https://wa.me/213658247107"; // placeholder — update with real number

const availability = [
  "Internship Opportunities",
  "Freelance Web Development",
  "Full-Stack Development Projects",
  "Startup Collaborations",
  "Open Source Contributions",
  "Software Engineering Opportunities",
];

const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: EMAIL,
    description: "Best for professional inquiries, internships, collaborations, and project discussions.",
    actionLabel: "Send Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
    gradient: "from-violet-600/20 to-purple-900/10",
    accentColor: "#7C3AED",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/zakaria-tetbirt-",
    description: "Connect with me professionally and follow my software engineering journey.",
    actionLabel: "View Profile",
    href: LINKEDIN_URL,
    icon: LinkedinIcon,
    gradient: "from-blue-600/20 to-blue-900/10",
    accentColor: "#0A66C2",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Zakaria-tet-cs",
    description: "Explore my open projects, code repositories, and development work.",
    actionLabel: "View GitHub",
    href: GITHUB_URL,
    icon: GithubIcon,
    gradient: "from-slate-600/20 to-slate-900/10",
    accentColor: "#E879F9",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+213 658 24 71 07",
    description: "Quick and direct communication for discussions and project opportunities.",
    actionLabel: "Chat Now",
    href: WHATSAPP_URL,
    icon: WhatsAppIcon,
    gradient: "from-green-600/20 to-emerald-900/10",
    accentColor: "#25D366",
  },
];

const trustItems = [
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: MapPin, label: "Location", value: "Algeria" },
  { icon: Languages, label: "Languages", value: "Arabic · French · English" },
];

/* ─── Sub-components ─────────────────────────────────────── */

function ContactCard({
  method,
  index,
}: {
  method: (typeof contactMethods)[0];
  index: number;
}) {
  const Icon = method.icon;
  const isExternal = true; // Open all contact links in a new tab

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-pointer overflow-hidden"
      style={{
        background: "rgba(30,27,46,0.55)",
        border: "1px solid rgba(124,58,237,0.12)",
        backdropFilter: "blur(16px)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(124,58,237,0.18)`;
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.12)";
      }}
    >
      {/* Gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Icon + label */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: "rgba(124,58,237,0.12)", color: method.accentColor }}
        >
          <Icon size={20} />
        </div>
        <span className="text-sm font-bold" style={{ color: "#F0EEF8" }}>
          {method.label}
        </span>
      </div>

      {/* Value */}
      <p
        className="text-xs font-mono relative z-10 break-all"
        style={{ color: "#7C3AED" }}
      >
        {method.value}
      </p>

      {/* Description */}
      <p className="text-xs leading-relaxed relative z-10 flex-grow" style={{ color: "#9189A8" }}>
        {method.description}
      </p>

      {/* Action button */}
      <Link
        href={method.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 relative z-10"
        style={{
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.25)",
          color: "#A78BFA",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.28)";
          (e.currentTarget as HTMLElement).style.color = "#F0EEF8";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
          (e.currentTarget as HTMLElement).style.color = "#A78BFA";
        }}
      >
        {method.actionLabel}
        <ArrowUpRight size={12} />
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
            style={{ color: "#7C3AED" }}
          >
            Contact & Opportunities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: "#F0EEF8" }}
          >
            Ready to Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #E879F9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Great Together?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#9189A8" }}
          >
            Whether you&apos;re looking for a Full-Stack Developer, a motivated Computer Science student,
            or a collaborator for an exciting project — I&apos;d love to hear from you.
            Let&apos;s discuss ideas, opportunities, and meaningful software solutions.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="h-[3px] w-20 rounded-full mt-5 mx-auto"
            style={{ background: "linear-gradient(90deg, #7C3AED, #E879F9)", transformOrigin: "center" }}
          />
        </div>

        {/* ── Availability + Trust columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

          {/* Availability card — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 rounded-2xl p-7 relative overflow-hidden"
            style={{
              background: "rgba(30,27,46,0.55)",
              border: "1px solid rgba(124,58,237,0.2)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 0 60px rgba(124,58,237,0.07)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#3ECF8E", boxShadow: "0 0 8px #3ECF8E" }}
                />
                <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: "#3ECF8E" }}>
                  Currently Open To
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availability.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)" }}
                    >
                      <Check size={10} color="#A78BFA" strokeWidth={3} />
                    </span>
                    <span className="text-sm" style={{ color: "#D4CDE8" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust / info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl p-7 flex flex-col gap-6"
            style={{
              background: "rgba(30,27,46,0.55)",
              border: "1px solid rgba(124,58,237,0.12)",
              backdropFilter: "blur(16px)",
            }}
          >
            <p className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: "#6B6280" }}>
              About Me
            </p>
            {trustItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(124,58,237,0.1)" }}
                >
                  <Icon size={15} color="#7C3AED" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "#6B6280" }}>
                    {label}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "#D4CDE8" }}>{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Contact method grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contactMethods.map((method, i) => (
            <ContactCard key={method.id} method={method} index={i} />
          ))}
        </div>

        {/* ── Final CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            background: "rgba(30,27,46,0.6)",
            border: "1px solid rgba(124,58,237,0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 100px rgba(124,58,237,0.1), 0 8px 40px rgba(0,0,0,0.35)",
          }}
        >
          {/* Aurora */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 70%)",
            }}
          />
          {/* Border gradient overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 50%, rgba(232,121,249,0.06) 100%)",
            }}
          />

          <div className="relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#A78BFA",
              }}
            >
              <MessageCircle size={11} />
              Have an Idea or Opportunity?
            </span>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#F0EEF8" }}
            >
              Let&apos;s Create Something Meaningful Together
            </h3>

            <p
              className="text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10"
              style={{ color: "#9189A8" }}
            >
              I&apos;m always interested in discussing innovative projects, software development opportunities,
              and collaborations. Whether you have a specific project in mind or just want to connect,
              reach out — I&apos;m happy to talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <Link
                href={`mailto:${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                  color: "white",
                  boxShadow: "0 4px 24px rgba(124,58,237,0.45)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(124,58,237,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(124,58,237,0.45)";
                }}
              >
                <Mail size={17} />
                Get In Touch
              </Link>

              {/* Copy email */}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
                style={{
                  background: "rgba(30,27,46,0.8)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  color: copied ? "#3ECF8E" : "#D4CDE8",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.45)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.22)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(30,27,46,0.8)";
                }}
              >
                {copied ? <Check size={17} /> : <Mail size={17} />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>

              {/* GitHub */}
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
                style={{
                  background: "rgba(30,27,46,0.8)",
                  border: "1px solid rgba(124,58,237,0.22)",
                  color: "#D4CDE8",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,121,249,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232,121,249,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.22)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(30,27,46,0.8)";
                }}
              >
                <GithubIcon size={17} />
                View GitHub
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
