"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SCROLL_THRESHOLD = 150;

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Show after a brief delay so it doesn't compete with the loading screen
    const showTimer = setTimeout(() => setVisible(true), 1500);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= SCROLL_THRESHOLD) {
        setOpacity(0);
      } else {
        // Gradually fade as user scrolls toward threshold
        setOpacity(1 - scrollY / SCROLL_THRESHOLD);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHidden = opacity <= 0;

  return (
    <AnimatePresence>
      {visible && !isHidden && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: opacity, y: 0 }}
          exit={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 40,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.35rem",
          }}
          aria-hidden="true"
        >
          {/* Pill container */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.5rem 1.1rem 0.4rem",
              borderRadius: "99px",
              background: "rgba(6, 182, 212, 0.08)",
              border: "1px solid rgba(6, 182, 212, 0.2)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: "600",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
                color: "var(--accent-cyan)",
              }}
            >
              Scroll
            </span>

            {/* Animated chevrons */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, lineHeight: 0 }}>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown
                  size={14}
                  style={{ color: "var(--accent-cyan)" }}
                  strokeWidth={2.5}
                />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.15, 0.6, 0.15] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                style={{ marginTop: "-6px" }}
              >
                <ChevronDown
                  size={14}
                  style={{ color: "var(--accent-cyan)" }}
                  strokeWidth={2}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Subtle glow underneath */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "60px",
              height: "4px",
              borderRadius: "99px",
              background: "var(--accent-cyan)",
              filter: "blur(8px)",
              marginTop: "-2px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
