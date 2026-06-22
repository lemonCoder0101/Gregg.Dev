"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Database, Network, Palette } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import { skillCategories } from "../../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  network: <Network size={18} />,
  palette: <Palette size={18} />,
};

const colorMap: Record<string, { bar: string; icon: string; border: string }> = {
  cyan: {
    bar: "linear-gradient(90deg, #06b6d4, #3b82f6)",
    icon: "var(--accent-cyan)",
    border: "rgba(6,182,212,0.2)",
  },
  blue: {
    bar: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    icon: "var(--accent-blue)",
    border: "rgba(59,130,246,0.2)",
  },
  purple: {
    bar: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
    icon: "var(--accent-purple)",
    border: "rgba(139,92,246,0.2)",
  },
};

function SkillBar({ name, level, bar, delay }: { name: string; level: number; bar: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: "0.85rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--text-primary)" }}>{name}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: "99px", background: bar }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)" }}
    >
      <div className="container">
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            Tools & <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A curated set of skills built through coursework, projects, and hands-on internship experience.
          </p>
        </FadeUp>

        {/* Skill category cards */}
        <div className="skills-grid">
          {skillCategories.map((cat, i) => {
            const colors = colorMap[cat.color] || colorMap.cyan;
            return (
              <FadeUp key={cat.category} delay={i * 0.08}>
                <div className="glass glass-hover" style={{ padding: "1.5rem", borderRadius: "1rem" }}>
                  {/* Card header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.6rem",
                        background: `${colors.border.replace("0.2", "0.15")}`,
                        border: `1px solid ${colors.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.icon,
                      }}
                    >
                      {iconMap[cat.icon]}
                    </div>
                    <h3 style={{ fontWeight: "700", fontSize: "1rem", color: "var(--text-primary)" }}>
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill bars */}
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      bar={colors.bar}
                      delay={0.2 + si * 0.1}
                    />
                  ))}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
