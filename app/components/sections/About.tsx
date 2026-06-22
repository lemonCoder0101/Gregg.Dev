"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Code, Layers } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import { personal, stats, education, softSkills } from "../../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={20} />,
  graduation: <GraduationCap size={20} />,
  award: <Award size={20} />,
  layers: <Layers size={20} />,
};

function AnimatedCounter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {inView ? target : "0"}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            The Person Behind the <span className="gradient-text-cyan">Code</span>
          </h2>
          <p className="section-subtitle">{personal.summary}</p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="about-grid">
          {/* Left: Story + Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <FadeUp delay={0.1}>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1rem" }}>
                I&apos;m a passionate IT graduate from{" "}
                <strong style={{ color: "var(--text-primary)" }}>Tarlac State University</strong>, specializing in
                Technical Service Management. My journey in tech started with a curiosity for how things work — which
                quickly evolved into a love for building digital products that solve real-world problems.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                During my internship at{" "}
                <strong style={{ color: "var(--accent-cyan)" }}>Wireless Access for Health (WAH)</strong>, I worked on
                enterprise-scale health management systems — from payroll automation to AI-augmented therapy platforms —
                sharpening my full-stack skills in a real production environment.
              </p>
            </FadeUp>

            {/* Education card */}
            {education.map((edu, i) => (
              <FadeUp key={i} delay={0.2}>
                <div className="glass glass-hover" style={{ padding: "1.5rem", borderRadius: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div
                      style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        borderRadius: "0.65rem",
                        background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={18} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                        {edu.degree}
                      </p>
                      <p
                        style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}
                      >
                        {edu.school}
                      </p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "0.5rem" }}>
                        {edu.specialization} · {edu.period}
                      </p>
                      <span className="badge badge-cyan">{edu.honors}</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* Soft Skills */}
            <FadeUp delay={0.3}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Soft Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {softSkills.map((skill) => (
                  <span key={skill} className="badge badge-blue">
                    {skill}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right: Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div
                  className="glass glass-hover"
                  style={{
                    padding: "1.75rem",
                    borderRadius: "1rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "0.75rem",
                      background: i % 2 === 0 ? "var(--accent-cyan-dim)" : "var(--accent-blue-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-blue)",
                    }}
                  >
                    {iconMap[stat.icon]}
                  </div>
                  <div>
                    <p
                      style={{ fontSize: "2rem", fontWeight: "900", lineHeight: 1, marginBottom: "0.35rem" }}
                      className="gradient-text-cyan"
                    >
                      <AnimatedCounter target={stat.value} />
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "500" }}>{stat.label}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
