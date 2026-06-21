"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 mt-12 border-t" style={{ borderColor: "rgba(124,58,237,0.1)" }}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm font-semibold" style={{ color: "#F0EEF8" }}>
            Zakaria Tetbirt
          </p>
          <p className="text-xs mt-1" style={{ color: "#9189A8" }}>
            Full-Stack Developer • ESTIN Bejaia
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs" style={{ color: "#6B6280" }}>
            © {currentYear} Zakaria Tetbirt. All rights reserved.
          </p>
          <p className="text-[10px] mt-1.5 font-mono uppercase tracking-widest" style={{ color: "#7C3AED" }}>
            Built with Next.js & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
