"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: "2.25rem",
        height: "2.25rem",
        borderRadius: "0.5rem",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-secondary)",
        transition: "all var(--transition-smooth)",
        backdropFilter: "blur(10px)",
      }}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
          >
            <div style={{
              width: "2rem", height: "2rem", borderRadius: "0.5rem",
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.85rem", fontWeight: "800", color: "#fff",
            }}>G</div>
            <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--text-primary)" }}>
              Gregg<span style={{ color: "var(--accent-cyan)" }}>.</span>dev
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    padding: "0.4rem 0.8rem",
                    borderRadius: "0.4rem",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? "600" : "500",
                    color: isActive ? "var(--accent-cyan)" : "var(--text-secondary)",
                    textDecoration: "none",
                    background: isActive ? "rgba(6,182,212,0.1)" : "transparent",
                    transition: "all var(--transition-base)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>

          {/* Right Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <ThemeToggle />
            <a
              href={personal.resumeUrl}
              download
              className="btn btn-primary"
              style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", gap: "0.4rem" }}
              aria-label="Download Resume"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="mobile-menu-btn"
              style={{
                display: "none",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "0.5rem",
                padding: "0.4rem",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: "60px",
              left: "1rem",
              right: "1rem",
              zIndex: 99,
              background: "rgba(8, 15, 32, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "1rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: "0.7rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "background var(--transition-base)",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
