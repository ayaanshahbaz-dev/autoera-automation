import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Case Studies | AI Automation Results — AutoEra Automation",
  description:
    "See real results from AutoEra's AI automation builds. Dental clinic case study: 40% fewer missed enquiries, system paid back in 6 weeks. More case studies added as new projects ship.",
};

const steps = [
  {
    title: "AI-Powered WhatsApp Receptionist",
    desc: "We built a WhatsApp Business AI agent using OpenAI GPT-4o and n8n. The agent handles incoming patient messages, identifies their intent (new appointment, question, rescheduling), and responds with natural, clinic-appropriate language.",
  },
  {
    title: "FAQ & Service Knowledge Base",
    desc: "The agent was trained on the clinic's full service list, pricing, insurance/NHS status, appointment types, and common patient questions. Patients get accurate answers instantly — without calling during business hours.",
  },
  {
    title: "Appointment Booking Flow",
    desc: "Qualified patients are walked through a booking flow directly in WhatsApp. The agent checks available slots via the Google Calendar API and books the appointment — sending a confirmation to the patient and notifying the clinic team.",
  },
  {
    title: "Escalation & Handover Protocol",
    desc: "Anything outside the agent's scope (complex dental queries, insurance edge cases, complaints) triggers an immediate handover — the clinic's WhatsApp is flagged and the full conversation history is passed to the front desk team.",
  },
];

const results = [
  { stat: "40%", label: "Reduction in missed after-hours enquiries" },
  { stat: "< 10s", label: "Average first response time (was 14+ hours)" },
  { stat: "6 weeks", label: "Time for system to pay for itself" },
  { stat: "~30%", label: "Fewer routine calls to front desk" },
];

const techUsed = [
  "n8n (workflow automation)",
  "OpenAI GPT-4o (AI agent brain)",
  "WhatsApp Business API (via Twilio)",
  "Google Calendar API (booking)",
  "Custom knowledge base (clinic FAQs & services)",
  "Slack (team alert notifications)",
];

export default function CaseStudiesPage() {
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
            <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Case Studies</span>
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
              Real Automation Builds.{" "}
              <span className="gradient-text">Real Business Results.</span>
            </h1>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p style={{ color: "#A3A3A3", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              We document every build so you can see exactly what we build, how it works, and what it achieves. More case studies are added as new projects complete.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>
      </section>

      {/* CASE STUDY: Dental Clinic */}
      <section className="section">
        <div className="container-xl">
          {/* Card header */}
          <FadeIn
            className="card"
            style={{
              padding: "2.5rem",
              borderTop: "4px solid #F59E0B",
              marginBottom: "3rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span className="badge">Healthcare / Dental</span>
                  <span className="badge">Lead Response</span>
                  <span className="badge">Customer Support AI</span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                  }}
                >
                  AI Receptionist for a UK Dental Clinic
                </h2>
              </div>
            </div>

            {/* Stats strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                padding: "1.5rem",
                background: "rgba(245,158,11,0.05)",
                border: "1px solid rgba(245,158,11,0.12)",
                borderRadius: 10,
              }}
              className="stats-grid"
            >
              {results.map((r) => (
                <div key={r.stat} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #F59E0B, #FCD34D)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {r.stat}
                  </div>
                  <div style={{ color: "#A3A3A3", fontSize: "0.8rem", lineHeight: 1.4 }}>{r.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Problem / Solution */}
          <FadeInStagger
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}
            className="ps-grid"
          >
            <FadeInStaggerItem
              style={{
                padding: "1.75rem",
                background: "#141414",
                border: "1px solid rgba(245,158,11,0.1)",
                borderLeft: "4px solid #ef4444",
                borderRadius: 10,
              }}
            >
              <p style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                🔴 The Problem
              </p>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75 }}>
                A mid-size dental clinic in the UK was receiving 40–60 WhatsApp messages per week from patients — asking about appointments, pricing, procedures, and availability. The front desk could only respond during business hours (9am–5pm, Mon–Fri). Anything that came in evenings or weekends sat unanswered until the next morning.
              </p>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75, marginTop: "0.75rem" }}>
                Analysis of their booking data revealed that roughly 35% of enquiries that went unanswered overnight resulted in the patient booking with another clinic by the next day. At their average treatment value, this was significant revenue lost monthly.
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem
              style={{
                padding: "1.75rem",
                background: "#141414",
                border: "1px solid rgba(245,158,11,0.1)",
                borderLeft: "4px solid #F59E0B",
                borderRadius: 10,
              }}
            >
              <p style={{ color: "#F59E0B", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                ⚡ The Solution
              </p>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75 }}>
                We built a custom AI receptionist powered by OpenAI GPT-4o, connected to the clinic's WhatsApp Business account via Twilio and orchestrated through n8n. The agent was trained on the clinic's full knowledge base — services, pricing, procedures, team, NHS status, and frequently asked questions.
              </p>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75, marginTop: "0.75rem" }}>
                The agent responds to every WhatsApp message within seconds, 24 hours a day. It qualifies patient intent, answers questions, and — for appointment requests — walks the patient through a booking flow that creates the appointment directly in the clinic's Google Calendar.
              </p>
            </FadeInStaggerItem>
          </FadeInStagger>

          {/* How It Works */}
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "1.75rem",
              }}
            >
              How We Built It
            </h2>
          </FadeIn>
          <FadeInStagger style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
            {steps.map((s, i) => (
              <FadeInStaggerItem key={i} className="step-card group hover:border-[#F59E0B]/30 transition-colors duration-300">
                <div className="step-number group-hover:bg-[#F59E0B]/20 transition-colors duration-300">{i + 1}</div>
                <div>
                  <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4rem" }}>{s.title}</h3>
                  <p style={{ color: "#A3A3A3", lineHeight: 1.65, fontSize: "0.95rem" }}>{s.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          {/* Tech Used */}
          <FadeIn
            className="card"
            style={{
              padding: "2rem",
              marginBottom: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Tech Stack Used
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {techUsed.map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#A3A3A3", fontSize: "0.875rem" }}>
                    <CheckCircle2 size={14} color="#F59E0B" style={{ flexShrink: 0 }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                ✅ Results (Month 1)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Missed after-hours enquiries dropped 40%",
                  "Average first response time: under 10 seconds",
                  "Front desk routine calls reduced by ~30%",
                  "System cost recovered in 6 weeks from rescued bookings",
                  "Patient satisfaction scores improved (faster responses)",
                ].map((r) => (
                  <div key={r} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#A3A3A3", fontSize: "0.875rem" }}>
                    <span style={{ color: "#34d399", flexShrink: 0 }}>✓</span>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Relevant services */}
          <FadeIn
            style={{
              padding: "1.5rem",
              background: "rgba(245,158,11,0.05)",
              border: "1px solid rgba(245,158,11,0.12)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "0.3rem" }}>Services demonstrated in this build:</p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/services/lead-response" style={{ color: "#F59E0B", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }} className="hover:text-white transition-colors">
                  → AI Lead Response
                </Link>
                <Link href="/services/customer-support" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }} className="hover:text-white transition-colors">
                  → Customer Support AI
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Future Note */}
      <section className="section-sm" style={{ background: "#0f0f0f", borderTop: "1px solid rgba(245,158,11,0.08)" }}>
        <FadeIn className="container-xl" style={{ textAlign: "center" }}>
          <p style={{ color: "#525252", fontSize: "0.875rem", marginBottom: "2rem" }}>
            More case studies are added as new client projects ship. 
          </p>
          <Link href="/contact" className="btn-primary">
            <Calendar size={16} /> Get a Build Like This
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
