"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { personal } from "../../data/portfolio";

const githubAccounts = [
  {
    label: "lemonCoder0101",
    href: personal.github,
  },
  {
    label: "greggJmnz",
    href: personal.github2,
  },
];

interface GitHubDropdownProps {
  /** Icon size in px */
  iconSize?: number;
  /** Button size in rem */
  buttonSize?: string;
  /** Border radius in rem */
  borderRadius?: string;
  /** Variant controls idle color/bg styling */
  variant?: "hero" | "footer";
}

interface DropdownPos {
  top: number;
  left: number;
  openUpward: boolean;
}

export default function GitHubDropdown({
  iconSize = 17,
  buttonSize = "2.5rem",
  borderRadius = "0.6rem",
  variant = "hero",
}: GitHubDropdownProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<DropdownPos>({ top: 0, left: 0, openUpward: false });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Compute position from trigger button's bounding rect
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const DROPDOWN_HEIGHT = 120; // approximate height of dropdown
    const GAP = 8;

    // Check if there's enough room below; otherwise open upward
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < DROPDOWN_HEIGHT + GAP;

    // Use viewport coordinates directly (for position: fixed)
    const top = openUpward
      ? rect.top - GAP
      : rect.bottom + GAP;

    // Center horizontally on the trigger, but clamp to viewport
    let left = rect.left + rect.width / 2;
    const DROPDOWN_WIDTH = 210;
    const halfWidth = DROPDOWN_WIDTH / 2;
    const minLeft = halfWidth + 8;
    const maxLeft = window.innerWidth - halfWidth - 8;
    left = Math.max(minLeft, Math.min(maxLeft, left));

    setPos({ top, left, openUpward });
  }, []);

  // Recalculate on open, scroll, and resize
  useEffect(() => {
    if (!open) return;
    updatePosition();

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, updatePosition]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const isFooter = variant === "footer";

  const dropdownMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: pos.openUpward ? -8 : 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: pos.openUpward ? -8 : 8, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="menu"
          style={{
            position: "fixed",
            top: pos.openUpward ? undefined : pos.top,
            bottom: pos.openUpward
              ? `${window.innerHeight - pos.top}px`
              : undefined,
            left: pos.left,
            transform: "translateX(-50%)",
            minWidth: "210px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--glass-border)",
            borderRadius: "0.85rem",
            boxShadow:
              "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset",
            backdropFilter: "blur(20px)",
            overflow: "hidden",
            zIndex: 99999,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "0.65rem 0.85rem 0.45rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: "600",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: 0,
              }}
            >
              GitHub Profiles
            </p>
          </div>

          {/* Account links */}
          {githubAccounts.map((account) => (
            <a
              key={account.label}
              href={account.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.6rem 0.85rem",
                textDecoration: "none",
                color: "var(--text-primary)",
                fontSize: "0.85rem",
                fontWeight: "500",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(6,182,212,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span style={{ color: "var(--text-muted)", flexShrink: 0, display: "inline-flex" }}>
                <GithubIcon size={15} />
              </span>
              <span style={{ flex: 1 }}>{account.label}</span>
              <ExternalLink
                size={12}
                style={{ color: "var(--text-muted)", opacity: 0.6, flexShrink: 0 }}
              />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      {/* Trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="GitHub profiles"
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          width: buttonSize,
          height: buttonSize,
          borderRadius,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: open
            ? "rgba(6,182,212,0.1)"
            : "var(--glass-bg)",
          border: `1px solid ${open ? "var(--accent-cyan)" : "var(--glass-border)"}`,
          color: open
            ? "var(--accent-cyan)"
            : isFooter
              ? "var(--text-muted)"
              : "var(--text-secondary)",
          cursor: "pointer",
          transition: "all var(--transition-smooth)",
          padding: 0,
          position: "relative",
          zIndex: open ? 99999 : "auto",
        }}
        onMouseEnter={(e) => {
          if (!open) {
            const el = e.currentTarget;
            el.style.color = "var(--accent-cyan)";
            el.style.borderColor = "var(--accent-cyan)";
            el.style.background = "rgba(6,182,212,0.1)";
            el.style.transform = "translateY(-3px)";
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            const el = e.currentTarget;
            el.style.color = isFooter ? "var(--text-muted)" : "var(--text-secondary)";
            el.style.borderColor = "var(--glass-border)";
            el.style.background = "var(--glass-bg)";
            el.style.transform = "translateY(0)";
          }
        }}
      >
        <GithubIcon size={iconSize} />
      </button>

      {/* Portal the dropdown to document.body so it's never clipped */}
      {typeof window !== "undefined" && createPortal(dropdownMenu, document.body)}
    </div>
  );
}
