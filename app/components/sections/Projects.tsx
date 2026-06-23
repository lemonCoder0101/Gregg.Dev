"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Lock, ZoomIn, X } from "lucide-react";
import Image from "next/image";
import { FadeUp } from "../ui/FadeUp";
import { GithubIcon } from "../ui/SocialIcons";
import { projects } from "../../data/portfolio";

import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiLaravel,
  SiPhp,
  SiVuedotjs,
  SiTypescript,
  SiExpress,
  SiVite,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Map name to react-icon and dynamic color for visual styling
const techConfig: Record<string, { icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express": { icon: SiExpress, color: "#FFFFFF" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "PHP": { icon: SiPhp, color: "#777BB4" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Java": { icon: FaJava, color: "#007396" },
};

function TechBadge({ name }: { name: string }) {
  const config = techConfig[name];
  const Icon = config ? config.icon : null;
  const iconColor = config ? config.color : undefined;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        padding: "0.2rem 0.6rem",
        borderRadius: "99px",
        fontSize: "0.7rem",
        fontWeight: "500",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {Icon && <Icon size={11} style={{ color: iconColor }} />}
      <span>{name}</span>
    </span>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [];

  useEffect(() => {
    if (!isModalOpen || slides.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, slides.length]);

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
        {/* Project image (static SVG thumbnail) */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            position: "relative",
            overflow: "hidden",
            background: "var(--bg-tertiary)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={index < 2}
          />

          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(5,11,24,0.6) 0%, transparent 60%)",
              pointerEvents: "none",
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
                zIndex: 5,
              }}
            >
              ★ Featured
            </div>
          )}

          {/* Category */}
          <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", zIndex: 5 }}>
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

          {/* Tech stack badges with icons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "auto", paddingTop: "0.5rem" }}>
            {slides.length > 0 && (
              <button
                onClick={() => {
                  setCurrentSlide(0);
                  setIsModalOpen(true);
                }}
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.55rem",
                  fontSize: "0.82rem",
                  borderColor: "rgba(6, 182, 212, 0.25)",
                  color: "var(--accent-cyan)",
                  cursor: "pointer"
                }}
              >
                <ZoomIn size={14} style={{ marginRight: "0.2rem" }} />
                View Screenshots ({slides.length})
              </button>
            )}

            <div style={{ display: "flex", gap: "0.6rem" }}>
              {project.githubStatus === "public" ? (
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
              ) : (
                <button
                  disabled
                  className="btn btn-secondary"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: "0.55rem",
                    fontSize: "0.82rem",
                    opacity: 0.5,
                    cursor: "not-allowed",
                    borderColor: "var(--border)",
                    background: "rgba(255,255,255,0.01)",
                    color: "var(--text-muted)"
                  }}
                  id={`project-github-${project.id}`}
                >
                  <Lock size={13} style={{ marginRight: "0.2rem" }} />
                  Private Repo
                </button>
              )}

              {project.demoStatus === "public" ? (
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
              ) : project.demoStatus === "restricted" ? (
                <button
                  disabled
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: "0.55rem",
                    fontSize: "0.82rem",
                    opacity: 0.6,
                    cursor: "not-allowed",
                    background: "linear-gradient(135deg, var(--bg-tertiary), var(--border))",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    boxShadow: "none",
                  }}
                  id={`project-demo-${project.id}`}
                >
                  <Lock size={13} style={{ marginRight: "0.2rem" }} />
                  Restricted
                </button>
              ) : null}
            </div>
          </div>

          {/* Status Notices */}
          {(project.githubStatus === "private" || project.demoStatus === "restricted") && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.5rem" }}>
              {project.githubStatus === "private" && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    alignItems: "flex-start",
                    background: "rgba(239, 68, 68, 0.02)",
                    border: "1px solid rgba(239, 68, 68, 0.08)",
                    padding: "0.5rem 0.65rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Lock size={11} color="#ef4444" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: "1.3" }}>
                    Private repository due to security and ownership considerations.
                  </span>
                </div>
              )}
              {project.demoStatus === "restricted" && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    alignItems: "flex-start",
                    background: "rgba(139, 92, 246, 0.02)",
                    border: "1px solid rgba(139, 92, 246, 0.08)",
                    padding: "0.5rem 0.65rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Lock size={11} color="var(--accent-purple)" style={{ marginTop: "0.15rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: "1.3" }}>
                    This application is currently deployed and in active use. Access is restricted to authorized users to ensure the security and privacy of system data.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && slides.length > 0 && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(5, 11, 24, 0.95)",
              backdropFilter: "blur(12px)",
              padding: "2rem",
            }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                zIndex: 10000,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text-primary)",
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <X size={20} />
            </button>

            {/* Left/Right controls inside modal */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                  }}
                  style={{
                    position: "absolute",
                    left: "2rem",
                    zIndex: 10000,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) => (prev + 1) % slides.length);
                  }}
                  style={{
                    position: "absolute",
                    right: "2rem",
                    zIndex: 10000,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "1200px",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={slides[currentSlide]}
                  alt={`${project.title} screenshot ${currentSlide + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              {/* Title & slide number at the bottom */}
              <div
                style={{
                  marginTop: "1.5rem",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "#fff", fontWeight: "700", marginBottom: "0.25rem" }}>
                  {project.title}
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
                  Screenshot {currentSlide + 1} of {slides.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
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
            A showcase of real-world systems built during my internship and academic journey. Click the &quot;View Screenshots&quot; button on any project to view its interfaces.
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
