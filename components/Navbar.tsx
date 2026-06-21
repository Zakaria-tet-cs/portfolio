"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);

    // Reliable scroll spy using rootMargin
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" } // Triggers when section hits the top 20% of viewport
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        {/* Floating Pill Container */}
        <div
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[680px] h-[52px] rounded-full px-[6px] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_0.5px_rgba(124,58,237,0.1)] backdrop-blur-[16px] ${isScrolled
              ? "bg-[rgba(30,27,46,0.95)] border-[0.5px] border-[rgba(124,58,237,0.4)]"
              : "bg-[rgba(30,27,46,0.8)] border-[0.5px] border-[rgba(124,58,237,0.25)]"
            }`}
        >
          {/* Left Side — Logo */}
          <Link
            href="#hero"
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.3)] shrink-0 transition-colors hover:bg-[rgba(124,58,237,0.25)]"
          >
            <span className="font-mono font-bold text-[13px] text-[#7C3AED]">ZT</span>
          </Link>

          {/* Center — Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center h-full relative px-2">

            {/* Gooey Blobs Layer (Z-index 0) */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-[8px] pointer-events-none"
              style={{ filter: "url(#gooey)" }}
            >
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActiveOrHovered = activeSection === sectionId || hoveredSection === sectionId;

                // Using an invisible placeholder with exact same padding to size the blob perfectly
                return (
                  <div key={`blob-${link.name}`} className="relative px-[1rem] py-[0.4rem] flex-shrink-0">
                    <span className="opacity-0 text-[13px] font-medium pointer-events-none">{link.name}</span>
                    <div
                      className="absolute inset-0 rounded-[16px] bg-[#7C3AED] transition-all duration-300"
                      style={{
                        opacity: isActiveOrHovered ? 1 : 0,
                        transform: isActiveOrHovered ? "scale(1)" : "scale(0.6)",
                        animation: isActiveOrHovered ? "blob-morph 5s ease-in-out infinite alternate" : "none",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Interactive Text Layer (Z-index 10) */}
            <div className="relative z-10 flex items-center justify-center gap-[8px]">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={`text-${link.name}`}
                    href={link.href}
                    onMouseEnter={() => setHoveredSection(sectionId)}
                    onMouseLeave={() => setHoveredSection("")}
                    className={`relative px-[1rem] py-[0.4rem] text-[13px] font-sans font-medium transition-colors select-none ${isActive ? "text-[#F0EEF8]" : "text-[#9189A8] hover:text-[#F0EEF8]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Side — CTA (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center shrink-0">
            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden md:flex items-center justify-center px-5 h-[40px] rounded-full bg-[#7C3AED] text-white text-[13px] font-medium transition-all duration-300 hover:bg-[#6D28D9] hover:scale-[1.02]"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-[40px] h-[40px] rounded-full text-[var(--foreground)] hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#1E1B2E] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-semibold text-[#9189A8] hover:text-[#F0EEF8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-8">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-10 py-4 rounded-full text-lg font-medium bg-[#7C3AED] text-white inline-block hover:bg-[#6D28D9] transition-colors"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
