"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 50,
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(6,182,212,0.4)",
            transition: "box-shadow 0.2s ease",
          }}
          whileHover={{ scale: 1.1, boxShadow: "0 6px 30px rgba(6,182,212,0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
