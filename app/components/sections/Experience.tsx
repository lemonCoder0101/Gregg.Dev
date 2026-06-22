"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import { experience } from "../../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Work Experience</p>
          <h2 className="section-title">
            Professional <span className="gradient-text-cyan">Journey</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience building enterprise systems in a professional healthcare tech environment.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "0.95rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent)",
              transformOrigin: "top",
            }}
          />

          {experience.map((exp, idx) => (
            <FadeUp key={idx} delay={0.2 + idx * 0.1}>
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  style={{
                    position: "absolute",
                    left: "-2.05rem",
                    top: "1.5rem",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--accent-cyan)",
                    boxShadow: "0 0 15px rgba(6,182,212,0.6)",
                    border: "2px solid var(--bg-primary)",
                    zIndex: 1,
                  }}
                />

                {/* Experience card */}
                <div className="glass glass-hover" style={{ padding: "2rem", borderRadius: "1.25rem" }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div>
                      <div
                        style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}
                      >
                        <div
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "0.6rem",
                            background: "var(--accent-cyan-dim)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--accent-cyan)",
                          }}
                        >
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <h3 style={{ fontWeight: "800", fontSize: "1.1rem", color: "var(--text-primary)" }}>
                            {exp.role}
                          </h3>
                          <p style={{ fontWeight: "600", color: "var(--accent-cyan)", fontSize: "0.9rem" }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            fontSize: "0.82rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          <MapPin size={13} /> {exp.location}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            fontSize: "0.82rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          <Calendar size={13} /> {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-cyan" style={{ alignSelf: "flex-start" }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.75",
                      marginBottom: "1.25rem",
                      fontSize: "0.92rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Key Responsibilities
                    </p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {exp.responsibilities.map((resp, ri) => (
                        <li
                          key={ri}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.6rem",
                            fontSize: "0.88rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <CheckCircle
                            size={14}
                            style={{ color: "var(--accent-cyan)", marginTop: "2px", flexShrink: 0 }}
                          />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.6rem",
                      }}
                    >
                      Technologies Used
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="badge badge-blue">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
