"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, FolderOpen } from "lucide-react";
import { LinkedinIcon } from "../ui/SocialIcons";
import GitHubDropdown from "../ui/GitHubDropdown";

import Image from "next/image";
import { personal } from "../../data/portfolio";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "IT Professional",
  "Problem Solver",
  "React Developer",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span style={{ color: "var(--accent-cyan)", fontWeight: "700" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--accent-cyan)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "pulse-glow 1s ease-in-out infinite",
        }}
      />
    </span>
  );
}

// Animated floating blob
function Blob({ x, y, color, size }: { x: string; y: string; color: string; size: string }) {
  return (
    <motion.div
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 12 + Math.random() * 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(80px)",
        opacity: 0.15,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
      }}
    >
      {/* Background blobs */}
      <Blob x="-10%" y="10%" color="var(--accent-cyan)" size="500px" />
      <Blob x="60%" y="-10%" color="var(--accent-purple)" size="400px" />
      <Blob x="80%" y="60%" color="var(--accent-blue)" size="350px" />

      {/* Grid dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: "99px",
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              fontSize: "0.78rem",
              fontWeight: "500",
              color: "var(--accent-cyan)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent-cyan)",
                boxShadow: "0 0 8px var(--accent-cyan)",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            Open to Opportunities
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="animate-float"
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue), var(--accent-purple))",
              padding: "3px",
              boxShadow: "0 0 40px rgba(6,182,212,0.4), 0 0 80px rgba(6,182,212,0.15)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "var(--bg-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                fontWeight: "900",
                color: "var(--accent-cyan)",
              }}
            >
              <Image
                src={personal.profileImage}
                alt={personal.name}
                width={130}
                height={130}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) parent.innerHTML = "GA";
                }}
              />
            </div>
          </div>

          {/* Orbit dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: "50%",
              border: "1px dashed rgba(6,182,212,0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--accent-cyan)",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 10px var(--accent-cyan)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ maxWidth: "800px" }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.1em",
            }}
          >
            Hi, I&apos;m Gregg 👋
          </p>
          <h1 className="hero-headline" style={{ marginBottom: "0.5rem" }}>
            <span className="gradient-text-full">{personal.name}</span>
          </h1>
          <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: "var(--text-secondary)", marginBottom: "1rem" }}>
            <TypewriterText />
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: "1.75",
            }}
          >
            {personal.tagline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}
        >
          <button onClick={scrollToProjects} className="btn btn-primary" id="hero-view-projects">
            <FolderOpen size={16} />
            View Projects
          </button>
          <a href={personal.resumeUrl} download className="btn btn-secondary" id="hero-download-resume">
            <Download size={16} />
            Download Resume
          </a>
          <button onClick={scrollToContact} className="btn btn-ghost" id="hero-contact">
            <Mail size={16} />
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <GitHubDropdown variant="hero" />
          {[
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
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--accent-cyan)";
                el.style.borderColor = "var(--accent-cyan)";
                el.style.background = "rgba(6,182,212,0.1)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--glass-border)";
                el.style.background = "var(--glass-bg)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
