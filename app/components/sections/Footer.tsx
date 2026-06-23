"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

import { personal, navLinks } from "../../data/portfolio";

export default function Footer() {
  const year = personal.copyrightYear;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--glass-border)",
        background: "var(--bg-secondary)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: "800",
                  color: "#fff",
                }}
              >
                G
              </div>
              <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                Gregg<span style={{ color: "var(--accent-cyan)" }}>.</span>dev
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.7", maxWidth: "26ch" }}>
              IT Graduate & Aspiring Full-Stack Developer based in the Philippines. Building efficient, user-centric solutions.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.65rem", marginTop: "1.25rem" }}>
              {[
                { icon: GithubIcon, href: personal.github, label: "GitHub" },
                { icon: GithubIcon, href: personal.github2, label: "GitHub2" },
                { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--accent-cyan)";
                    el.style.borderColor = "var(--accent-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-muted)";
                    el.style.borderColor = "var(--glass-border)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-primary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Quick Links
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-primary)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              More
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.resumeUrl}
                  download
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {year} {personal.name}. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
            Built with <Heart size={12} style={{ color: "var(--accent-cyan)" }} fill="var(--accent-cyan)" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
