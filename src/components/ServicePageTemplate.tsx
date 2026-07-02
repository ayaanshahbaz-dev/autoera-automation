"use client";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";


interface Step {
  title: string;
  desc: string;
}

interface ServicePageProps {
  eyebrow: string;
  h1: string;
  tagline: string;
  problem: string;
  howItWorks: Step[];
  included: string[];
  proofTitle: string;
  proofText: string;
  tech: string[];
  color: string;
  icon: React.ReactNode;
}

export default function ServicePageTemplate({
  eyebrow,
  h1,
  tagline,
  problem,
  howItWorks,
  included,
  proofTitle,
  proofText,
  tech,
  color,
  icon,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section
        style={{ paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
        className="grid-noise"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${color}25 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container-lg" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#525252" }}>
            <Link href="/" style={{ color: "#525252", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = color} onMouseLeave={e => e.currentTarget.style.color = "#525252"}>Home</Link>
            <span>›</span>
            <Link href="/services" style={{ color: "#525252", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = color} onMouseLeave={e => e.currentTarget.style.color = "#525252"}>Services</Link>
            <span>›</span>
            <span style={{ color: color }}>{eyebrow}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
            <span className="eyebrow" style={{ color: color }}>{eyebrow}</span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              maxWidth: 720,
            }}
          >
            {h1}
          </h1>
          <p style={{ color: "#A3A3A3", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 580, marginBottom: "2rem" }}>
            {tagline}
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
            <Calendar size={16} /> Get This For Your Business
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="section-sm" style={{ background: "#0f0f0f" }}>
        <div className="container-lg">
          <div
            style={{
              padding: "2rem",
              background: `${color}08`,
              border: `1px solid ${color}20`,
              borderRadius: 12,
              borderLeft: `4px solid ${color}`,
            }}
          >
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>
              The Problem We're Solving
            </h2>
            <p style={{ color: "#A3A3A3", lineHeight: 1.75 }}>{problem}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container-lg">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "2.5rem",
            }}
          >
            How It Works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {howItWorks.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-number" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4rem" }}>{step.title}</h3>
                  <p style={{ color: "#A3A3A3", lineHeight: 1.65, fontSize: "0.95rem" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-sm" style={{ background: "#0f0f0f" }}>
        <div className="container-lg">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.75rem" }}>
            What's Included
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}
            className="included-grid"
          >
            {included.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  background: "#141414",
                  border: "1px solid rgba(108,99,255,0.1)",
                  borderRadius: 10,
                }}
              >
                <CheckCircle2 size={17} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Point */}
      <section className="section">
        <div className="container-lg">
          <div className="card" style={{ borderLeft: `4px solid ${color}`, padding: "2.5rem" }}>
            <p style={{ color: color, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Proof Point
            </p>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>
              {proofTitle}
            </h3>
            <p style={{ color: "#A3A3A3", lineHeight: 1.75 }}>{proofText}</p>
            <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: color, textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, marginTop: "1.25rem", transition: "gap 0.2s" }}>
              Read the full case study <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-sm" style={{ background: "#0f0f0f" }}>
        <div className="container-lg">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
            Tools & Technology
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{
          background: `linear-gradient(135deg, ${color}0a 0%, transparent 100%)`,
          borderTop: "1px solid rgba(108,99,255,0.1)",
        }}
      >
        <div className="container-lg" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.9rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to Get This Built?
          </h2>
          <p style={{ color: "#A3A3A3", marginBottom: "2rem", maxWidth: 460, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Book a free 30-minute call and we'll scope out exactly how this would work for your business.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`, padding: "0.9rem 2rem" }}>
              <Calendar size={16} /> Book a Free Call
            </Link>
            <Link href="/services" className="btn-ghost" style={{ padding: "0.9rem 2rem" }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .included-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
