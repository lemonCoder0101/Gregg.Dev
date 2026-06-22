"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import Image from "next/image";
import { FadeUp } from "../ui/FadeUp";
import { GithubIcon } from "../ui/SocialIcons";
import { projects } from "../../data/portfolio";

const badgeColors = ["badge-cyan", "badge-blue", "badge-purple"];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        className="glass"
        style={{
          borderRadius: "1.25rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          border: "1px solid var(--glass-border)",
          height: "100%",
        }}
        whileHover={{
          y: -6,
          boxShadow: "0 12px 50px rgba(6,182,212,0.18), 0 4px 20px rgba(0,0,0,0.3)",
          borderColor: "rgba(6,182,212,0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Project image */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            position: "relative",
            overflow: "hidden",
            background: "var(--bg-tertiary)",
          }}
        >
          {!imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                background: "linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "0.85rem",
                  background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Layers size={22} color="#fff" />
              </div>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {project.id}
              </span>
            </div>
          )}

          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(5,11,24,0.6) 0%, transparent 60%)",
            }}
          />

          {/* Featured badge */}
          {project.featured && (
            <div
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                padding: "0.2rem 0.6rem",
                borderRadius: "99px",
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
                fontSize: "0.68rem",
                fontWeight: "700",
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              ★ Featured
            </div>
          )}

          {/* Category */}
          <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
            <span className="badge badge-cyan" style={{ backdropFilter: "blur(10px)" }}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 }}>
          <div>
            <h3 style={{ fontWeight: "800", fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              {project.title}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.65" }}>
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {project.features.map((f) => (
              <span
                key={f}
                style={{
                  fontSize: "0.72rem",
                  padding: "0.15rem 0.55rem",
                  borderRadius: "99px",
                  background: "var(--bg-tertiary)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.technologies.map((tech, ti) => (
              <span key={tech} className={`${badgeColors[ti % badgeColors.length]} badge`}>
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "auto", paddingTop: "0.5rem" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, justifyContent: "center", padding: "0.55rem", fontSize: "0.82rem" }}
              id={`project-github-${project.id}`}
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: "center", padding: "0.55rem", fontSize: "0.82rem" }}
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.03), transparent)" }}
    >
      <div className="container">
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3rem" }}>
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            Projects That <span className="gradient-text-purple">Matter</span>
          </h2>
          <p className="section-subtitle">
            A showcase of real-world systems built during my internship and academic journey. Replace images anytime in{" "}
            <code
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--accent-cyan)",
                background: "var(--bg-tertiary)",
                padding: "0.1rem 0.4rem",
                borderRadius: "0.3rem",
              }}
            >
              /public/projects/
            </code>
          </p>
        </FadeUp>

        {/* Project grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
