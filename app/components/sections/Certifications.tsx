"use client";

import { motion } from "framer-motion";
import { Network, Shield, Brain, Headphones, Router } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import { certifications } from "../../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  network: <Network size={28} />,
  router: <Router size={28} />,
  shield: <Shield size={28} />,
  brain: <Brain size={28} />,
  headset: <Headphones size={28} />,
};

const colorStyles: Record<string, { gradient: string; glow: string; badge: string }> = {
  cyan: {
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    glow: "0 8px 30px rgba(6,182,212,0.3)",
    badge: "badge-cyan",
  },
  blue: {
    gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    glow: "0 8px 30px rgba(59,130,246,0.3)",
    badge: "badge-blue",
  },
  purple: {
    gradient: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
    glow: "0 8px 30px rgba(139,92,246,0.3)",
    badge: "badge-purple",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            Certifications & <span className="gradient-text-cyan">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications that validate my technical knowledge and commitment to growth.
          </p>
        </FadeUp>

        {/* Cert cards */}
        <div className="certs-grid">
          {certifications.map((cert, i) => {
            const colors = colorStyles[cert.color] || colorStyles.cyan;
            return (
              <FadeUp key={cert.name} delay={i * 0.08}>
                <motion.div
                  className="glass"
                  style={{
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                    border: "1px solid var(--glass-border)",
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(6,182,212,0.35)",
                    boxShadow: colors.glow,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "1rem",
                      background: colors.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      boxShadow: colors.glow,
                    }}
                  >
                    {iconMap[cert.icon] || <Shield size={28} />}
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3
                      style={{
                        fontWeight: "700",
                        fontSize: "0.92rem",
                        color: "var(--text-primary)",
                        lineHeight: "1.4",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {cert.name}
                    </h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.6rem" }}>
                      {cert.issuer}
                    </p>
                    <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center" }}>
                      <span className={`badge ${colors.badge}`}>{cert.issuer.split(" ")[0]}</span>
                      <span
                        className="badge"
                        style={{
                          background: "var(--bg-tertiary)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Verified check */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.73rem",
                      color: "var(--accent-cyan)",
                      fontWeight: "600",
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
