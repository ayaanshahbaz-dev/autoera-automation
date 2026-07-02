"use client";
import { useState } from "react";
import Link from "next/link";
import { Send, Mail, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Using Formspree endpoint — replace with actual form ID
      const res = await fetch("https://formspree.io/f/xpwrdnvo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", businessType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section
        style={{ paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
        className="grid-noise"
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <FadeInStagger className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <FadeInStaggerItem>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Contact</span>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Let's Automate Your Business
            </h1>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p style={{ color: "#A3A3A3", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Book a free 30-minute call or send a message. We'll figure out if automation is the right fit — and if it is, exactly where to start.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container-xl">
          <div
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}
            className="contact-grid"
          >
            {/* Form */}
            <FadeIn direction="right">
              <div
                className="card"
                style={{ padding: "2.5rem" }}
              >
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                  Send a Message
                </h2>
                <p style={{ color: "#A3A3A3", fontSize: "0.875rem", marginBottom: "2rem" }}>
                  Tell us about your business and what you're looking to automate.
                </p>

                <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{
                      textAlign: "center",
                      padding: "3rem 2rem",
                      background: "rgba(52,211,153,0.08)",
                      border: "1px solid rgba(52,211,153,0.2)",
                      borderRadius: 10,
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    >
                      <CheckCircle2 size={48} color="#34d399" style={{ margin: "0 auto 1rem" }} />
                    </motion.div>
                    <h3 style={{ color: "#FFFFFF", fontWeight: 700, marginBottom: "0.5rem" }}>Message Sent!</h3>
                    <p style={{ color: "#A3A3A3", fontSize: "0.9rem" }}>
                      Thanks for reaching out. We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="jane@yourbusiness.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="businessType">Business Type *</label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        className="form-input"
                        value={formData.businessType}
                        onChange={handleChange}
                        style={{ appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
                      >
                        <option value="" disabled>Select your business type</option>
                        <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                        <option value="Salon / Beauty">Salon / Beauty</option>
                        <option value="Legal / Professional Services">Legal / Professional Services</option>
                        <option value="Trades / Home Services">Trades / Home Services</option>
                        <option value="Consulting / Agency">Consulting / Agency</option>
                        <option value="Retail / E-commerce">Retail / E-commerce</option>
                        <option value="Restaurant / Hospitality">Restaurant / Hospitality</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">What are you looking to automate? *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="form-input"
                        placeholder="Tell us about your business, current pain points, and what you'd like to improve..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {status === "error" && (
                      <p style={{ color: "#ef4444", fontSize: "0.85rem" }}>
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary"
                      style={{ justifyContent: "center", padding: "0.9rem", width: "100%", gap: "0.5rem", display: "flex", alignItems: "center" }}
                      id="contact-form-submit"
                      whileHover={status !== "sending" ? { scale: 1.02, y: -2, boxShadow: "0px 10px 25px rgba(245,158,11,0.25)" } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === "sending" ? (
                        <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </motion.button>
                  </form>
                )}
                </AnimatePresence>
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeInStagger style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Book a call */}
              <FadeInStaggerItem
                className="card"
                style={{
                  padding: "2rem",
                  background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(251,146,60,0.05) 100%)",
                  borderColor: "rgba(245,158,11,0.25)",
                }}
              >
                <Calendar size={28} color="#F59E0B" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Prefer to Book Directly?
                </h3>
                <p style={{ color: "#A3A3A3", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  Skip the form — book a free 30-minute strategy call directly into the calendar. No commitment required.
                </p>
                <a
                  href="https://calendly.com/autoera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Book on Calendly <Calendar size={15} />
                </a>
              </FadeInStaggerItem>

              {/* Direct contact */}
              <FadeInStaggerItem className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1rem", marginBottom: "1.25rem" }}>
                  Direct Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a
                    href="mailto:hello.autoera@gmail.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#A3A3A3",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      padding: "0.75rem",
                      background: "#141414",
                      borderRadius: 8,
                      border: "1px solid rgba(245,158,11,0.1)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.1)"; e.currentTarget.style.color = "#A3A3A3"; }}
                  >
                    <Mail size={16} color="#F59E0B" />
                    hello.autoera@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#A3A3A3",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      padding: "0.75rem",
                      background: "#141414",
                      borderRadius: 8,
                      border: "1px solid rgba(245,158,11,0.1)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.1)"; e.currentTarget.style.color = "#A3A3A3"; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    AutoEra on LinkedIn
                  </a>
                </div>
              </FadeInStaggerItem>

              {/* What to expect */}
              <FadeInStaggerItem className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "1rem", marginBottom: "1rem" }}>
                  What happens on the call?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    "We listen to how your business works and where the friction is",
                    "We identify which automations would have the biggest ROI",
                    "We give you an honest assessment — including if it's not the right fit",
                    "If it is a fit, we scope a build and quote within 48 hours",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #F59E0B, #FCD34D)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#fff",
                          marginTop: 2,
                        }}
                      >
                        {i + 1}
                      </div>
                      <p style={{ color: "#A3A3A3", fontSize: "0.85rem", lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
