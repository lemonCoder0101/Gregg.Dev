"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "1rem",
                background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-blue), var(--accent-purple))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                fontWeight: "900",
                color: "#fff",
                boxShadow: "0 0 40px rgba(6,182,212,0.5)",
              }}
            >
              G
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
              }}
            >
              Gregg Anthony Jimenez
            </motion.p>

            {/* Progress bar */}
            <motion.div
              style={{
                width: "12rem",
                height: "2px",
                background: "var(--border)",
                borderRadius: "99px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))",
                  transformOrigin: "left",
                  borderRadius: "99px",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
