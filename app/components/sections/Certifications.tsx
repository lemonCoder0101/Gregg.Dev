"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Download, Award, FileText, AlertCircle } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import PdfViewerModal from "../ui/PdfViewerModal";

interface Certificate {
  filename: string;
  name: string;
  url: string;
}

const colorPalette = [
  {
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    glow: "0 8px 30px rgba(6,182,212,0.3)",
    badge: "badge-cyan",
    accent: "var(--accent-cyan)",
    accentDim: "var(--accent-cyan-dim)",
  },
  {
    gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    glow: "0 8px 30px rgba(59,130,246,0.3)",
    badge: "badge-blue",
    accent: "var(--accent-blue)",
    accentDim: "var(--accent-blue-dim)",
  },
  {
    gradient: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
    glow: "0 8px 30px rgba(139,92,246,0.3)",
    badge: "badge-purple",
    accent: "var(--accent-purple)",
    accentDim: "var(--accent-purple-dim)",
  },
];

/* ── Skeleton loader card ────────────────────────────────── */
function SkeletonCard() {
  return (
    <div
      className="glass cert-skeleton"
      style={{
        borderRadius: "1.25rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid var(--glass-border)",
      }}
    >
      <div className="skeleton-pulse" style={{ width: "4rem", height: "4rem", borderRadius: "1rem" }} />
      <div className="skeleton-pulse" style={{ width: "70%", height: "1rem", borderRadius: "0.5rem" }} />
      <div className="skeleton-pulse" style={{ width: "50%", height: "0.75rem", borderRadius: "0.5rem" }} />
      <div style={{ display: "flex", gap: "0.5rem", width: "100%", marginTop: "0.5rem" }}>
        <div className="skeleton-pulse" style={{ flex: 1, height: "2.2rem", borderRadius: "0.6rem" }} />
        <div className="skeleton-pulse" style={{ flex: 1, height: "2.2rem", borderRadius: "0.6rem" }} />
      </div>
    </div>
  );
}

/* ── Certificate Card ────────────────────────────────────── */
function CertCard({
  cert,
  index,
  onView,
}: {
  cert: Certificate;
  index: number;
  onView: (cert: Certificate) => void;
}) {
  const colors = colorPalette[index % colorPalette.length];

  return (
    <FadeUp delay={index * 0.08}>
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
          height: "100%",
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
          <Award size={28} />
        </motion.div>

        {/* Certificate name */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <h3
            style={{
              fontWeight: "700",
              fontSize: "0.92rem",
              color: "var(--text-primary)",
              lineHeight: "1.4",
            }}
          >
            {cert.name}
          </h3>

          {/* File type badge */}
          <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center" }}>
            <span className={`badge ${colors.badge}`}>
              <FileText size={11} style={{ marginRight: "0.2rem" }} />
              PDF
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
          Verified Certificate
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.5rem", width: "100%", marginTop: "0.25rem" }}>
          <button
            onClick={() => onView(cert)}
            className="btn btn-secondary"
            style={{
              flex: 1,
              justifyContent: "center",
              padding: "0.55rem",
              fontSize: "0.8rem",
            }}
            id={`cert-view-${cert.filename.replace(/\.pdf$/i, "")}`}
          >
            <Eye size={14} />
            View
          </button>
          <a
            href={cert.url}
            download
            className="btn btn-primary"
            style={{
              flex: 1,
              justifyContent: "center",
              padding: "0.55rem",
              fontSize: "0.8rem",
            }}
            id={`cert-download-${cert.filename.replace(/\.pdf$/i, "")}`}
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </motion.div>
    </FadeUp>
  );
}

/* ── Main Section ────────────────────────────────────────── */
export default function Certifications() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewingCert, setViewingCert] = useState<Certificate | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/certificates");
        if (!res.ok) throw new Error("Failed to load certificates");
        const data = await res.json();
        setCertificates(data.certificates);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  return (
    <>
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

          {/* Loading skeleton */}
          {loading && (
            <div className="certs-grid">
              {[...Array(5)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <FadeUp delay={0.1}>
              <div
                className="glass"
                style={{
                  borderRadius: "1.25rem",
                  padding: "2.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: "rgba(239,68,68,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ef4444",
                  }}
                >
                  <AlertCircle size={24} />
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{error}</p>
                <button className="btn btn-ghost" onClick={() => window.location.reload()}>
                  Try Again
                </button>
              </div>
            </FadeUp>
          )}

          {/* Empty state */}
          {!loading && !error && certificates.length === 0 && (
            <FadeUp delay={0.1}>
              <div
                className="glass"
                style={{
                  borderRadius: "1.25rem",
                  padding: "2.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Award size={32} style={{ color: "var(--text-muted)" }} />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  No certificates available yet. Add PDF files to{" "}
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
                    /public/certificates/
                  </code>{" "}
                  and rebuild.
                </p>
              </div>
            </FadeUp>
          )}

          {/* Certificate cards */}
          {!loading && !error && certificates.length > 0 && (
            <div className="certs-grid">
              {certificates.map((cert, i) => (
                <CertCard key={cert.filename} cert={cert} index={i} onView={setViewingCert} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={viewingCert !== null}
        onClose={() => setViewingCert(null)}
        pdfUrl={viewingCert?.url ?? ""}
        title={viewingCert?.name ?? ""}
      />
    </>
  );
}
