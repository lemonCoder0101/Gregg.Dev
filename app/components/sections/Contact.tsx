"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FadeUp } from "../ui/FadeUp";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { personal } from "../../data/portfolio";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_rb2sn89";
const EMAILJS_TEMPLATE_ID = "template_73bj9cp";
const EMAILJS_PUBLIC_KEY = "moiU2MiUtHaQ_Z9j7";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "var(--accent-cyan)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: "var(--accent-blue)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/gregg-jimenez",
    href: personal.linkedin,
    color: "var(--accent-cyan)",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/gregg-jimenez",
    href: personal.github,
    color: "var(--accent-purple)",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)" }}
    >
      <div className="container">
        {/* Heading */}
        <FadeUp delay={0} style={{ marginBottom: "3rem", textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Get In Touch
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text-cyan">Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Whether you have a project in mind, a job opportunity, or just want to connect — my inbox is always open.
          </p>
        </FadeUp>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2.5rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FadeUp delay={0.1}>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "0.95rem", marginBottom: "1rem" }}>
                I&apos;m actively seeking full-time roles and freelance projects. Feel free to reach out through any of
                the channels below or send me a message directly.
              </p>
            </FadeUp>

            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <FadeUp key={link.label} delay={0.15 + i * 0.08}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass glass-hover"
                    style={{
                      padding: "1rem 1.25rem",
                      borderRadius: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      textDecoration: "none",
                    }}
                    id={`contact-link-${link.label.toLowerCase()}`}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.6rem",
                        background: `${link.color}20`,
                        border: `1px solid ${link.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: link.color,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          fontWeight: "500",
                          marginBottom: "0.1rem",
                        }}
                      >
                        {link.label}
                      </p>
                      <p style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: "600" }}>
                        {link.value}
                      </p>
                    </div>
                  </a>
                </FadeUp>
              );
            })}
          </div>

          {/* Right: Contact form */}
          <FadeUp delay={0.2}>
            <div className="glass" style={{ padding: "2rem", borderRadius: "1.25rem" }}>
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontWeight: "500",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className="form-field"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        fontWeight: "500",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@example.com"
                      className="form-field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      fontWeight: "500",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration"
                    className="form-field"
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      fontWeight: "500",
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="form-field"
                    style={{ resize: "vertical" }}
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--accent-cyan)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <CheckCircle size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#f87171",
                      fontSize: "0.88rem",
                    }}
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary"
                  style={{ justifyContent: "center", padding: "0.8rem" }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  id="contact-submit"
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
