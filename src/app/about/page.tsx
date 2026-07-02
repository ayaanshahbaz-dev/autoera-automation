import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "About Ayaan | Founder of AutoEra Automation",
  description:
    "Meet Ayaan — the self-taught developer behind AutoEra Automation. Learn why he built AutoEra, his approach to building AI systems for small businesses, and what makes AutoEra different.",
};

const milestones = [
  { year: "2022", title: "Started in Web Development", desc: "Self-taught React, Next.js, and modern web development through freelance projects." },
  { year: "2023", title: "First Automation Projects", desc: "Started integrating automation into client websites — forms, CRMs, email sequences. Saw how much time businesses lost to manual processes." },
  { year: "2024", title: "Went Deep on AI & Automation", desc: "Shifted full focus to n8n, Make, and OpenAI — building increasingly complex multi-step automation workflows and AI agents." },
  { year: "2025", title: "Founded AutoEra Automation", desc: "Launched AutoEra to offer AI automation systems to small businesses, starting with the dental clinic AI receptionist build." },
];

const tools = [
  { name: "n8n", category: "Workflow" },
  { name: "Make", category: "Workflow" },
  { name: "Zapier", category: "Workflow" },
  { name: "Python", category: "Code" },
  { name: "OpenAI API", category: "AI" },
  { name: "WhatsApp Business API", category: "Messaging" },
  { name: "Twilio", category: "Messaging" },
  { name: "HubSpot", category: "CRM" },
  { name: "GoHighLevel", category: "CRM" },
  { name: "Google APIs", category: "Productivity" },
  { name: "Slack API", category: "Productivity" },
  { name: "Airtable", category: "Data" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{ paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
        className="grid-noise"
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <FadeInStagger className="container-lg" style={{ position: "relative" }}>
          <FadeInStaggerItem>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>About</span>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              The person building your{" "}
              <span className="gradient-text">automation system</span>
            </h1>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p style={{ color: "#A3A3A3", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 540 }}>
              AutoEra isn't a faceless agency. It's me — Ayaan — a self-taught developer who got obsessed with automation and decided to turn it into a proper service.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>
      </section>

      {/* Founder section */}
      <section className="section">
        <div className="container-lg">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}
            className="founder-grid"
          >
            {/* Photo */}
            <FadeIn direction="right">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  maxWidth: 320,
                  borderRadius: 20,
                  border: "1px solid rgba(245,158,11,0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="animate-float"
              >
                <Image 
                  src="/images/owner.jpg" 
                  alt="Ayaan - Founder of AutoEra Automation" 
                  fill 
                  style={{ objectFit: "cover", objectPosition: "center" }} 
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", paddingTop: "4rem", background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0) 100%)" }}>
                  <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>Ayaan</p>
                  <p style={{ color: "#F59E0B", fontSize: "0.85rem", fontWeight: 500 }}>Founder, AutoEra</p>
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { label: "Based in", value: "UK" },
                  { label: "Focus", value: "AI & Automation" },
                  { label: "Clients in", value: "UK, US & AU" },
                ].map((i) => (
                  <div key={i.label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(245,158,11,0.08)", paddingBottom: "0.5rem" }}>
                    <span style={{ color: "#525252", fontSize: "0.8rem" }}>{i.label}</span>
                    <span style={{ color: "#A3A3A3", fontSize: "0.8rem", fontWeight: 500 }}>{i.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Story */}
            <FadeIn direction="left">
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.25rem" }}>
                Why I Built AutoEra
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ color: "#A3A3A3", lineHeight: 1.8 }}>
                  I started out as a freelance web developer — building websites for local businesses, service companies, and startups. I was good at it, but I kept noticing the same pattern: the businesses that struggled weren't struggling because of their website. They were struggling because of the <em>operations behind it</em>.
                </p>
                <p style={{ color: "#A3A3A3", lineHeight: 1.8 }}>
                  A clinic owner manually entering appointment requests into a spreadsheet. A consultant copying data between five different tools every morning. A shop owner responding to the same WhatsApp questions on repeat while trying to serve customers in front of them. These weren't technology problems — they were time problems. And technology could fix them.
                </p>
                <p style={{ color: "#A3A3A3", lineHeight: 1.8 }}>
                  I started building automation workflows alongside web projects — then got obsessed with it. n8n, Make, OpenAI, custom Python scripts — I went deep. The more I built, the clearer it became: there's an enormous gap between what small businesses need and what most agencies offer (which is usually just a Zapier template or a generic chatbot). Real automation needs to understand the business first, then build the system to fit it.
                </p>
                <p style={{ color: "#A3A3A3", lineHeight: 1.8 }}>
                  That's AutoEra. Tool-agnostic, outcome-focused, and built for the specific reality of running a small business — not a venture-backed startup or an enterprise.
                </p>
              </div>

              <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {["Self-Taught", "Tool-Agnostic", "Outcome-Focused", "No Jargon"].map((tag) => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-sm" style={{ background: "#0f0f0f" }}>
        <div className="container-lg">
          <FadeIn>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2rem" }}>
              How AutoEra Approaches Every Build
            </h2>
          </FadeIn>
          <FadeInStagger
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="approach-grid"
          >
            {[
              {
                title: "Tool-Agnostic",
                desc: "We're not tied to any one platform. We use whatever combination — n8n, Make, Python, OpenAI, Zapier — produces the best result for your specific workflow. Not whatever's easiest to resell.",
                icon: "🔧",
              },
              {
                title: "Outcome-Focused",
                desc: "Every build starts with a clear outcome: fewer missed leads, fewer support tickets, fewer hours spent on admin. If the automation doesn't move the needle on a real business metric, we rethink it.",
                icon: "📊",
              },
              {
                title: "Plain Language",
                desc: "You don't need to know what a webhook is to work with AutoEra. We explain every system in plain terms and document everything so you understand what you've got and how it works.",
                icon: "💬",
              },
            ].map((a) => (
              <FadeInStaggerItem key={a.title} className="card group" style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }} className="icon-hover-rotate">{a.icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>{a.title}</h3>
                <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.65 }}>{a.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-lg">
          <FadeIn>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2rem" }}>
              How I Got Here
            </h2>
          </FadeIn>
          <FadeInStagger style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            <div style={{ position: "absolute", left: "1.2rem", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #F59E0B 0%, transparent 100%)" }} />
            {milestones.map((m, i) => (
              <FadeInStaggerItem
                key={m.year}
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingBottom: i < milestones.length - 1 ? "2.5rem" : 0,
                  paddingLeft: "3.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "0.45rem",
                    top: "0.2rem",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #F59E0B, #FCD34D)",
                    border: "3px solid #080808",
                    boxShadow: "0 0 12px rgba(245,158,11,0.5)",
                  }}
                />
                <div className="group">
                  <p style={{ color: "#F59E0B", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{m.year}</p>
                  <h3 style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem", transition: "color 0.3s ease" }} className="group-hover:text-[#F59E0B]">{m.title}</h3>
                  <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.65 }}>{m.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Tools */}
      <section className="section-sm" style={{ background: "#0f0f0f" }}>
        <div className="container-lg">
          <FadeIn>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1.5rem" }}>
              Tools I Work With
            </h2>
          </FadeIn>
          <FadeInStagger style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {tools.map((t) => (
              <FadeInStaggerItem key={t.name} className="tech-badge group hover:border-[#F59E0B]/50 transition-colors duration-300">
                <span style={{ color: "#525252", fontSize: "0.7rem" }} className="group-hover:text-[#A3A3A3] transition-colors">{t.category}</span>
                <span style={{ width: 1, height: 12, background: "rgba(245,158,11,0.2)", display: "inline-block" }} />
                {t.name}
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
        <FadeIn className="container-lg" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.9rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
            Let's Talk About Your Business
          </h2>
          <p style={{ color: "#A3A3A3", maxWidth: 460, margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Book a free 30-minute call. I'll listen to what your business does, where the friction is, and whether automation is the right fit.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: "0.9rem 2rem" }}>
            <Calendar size={16} /> Book a Free Call
          </Link>
        </FadeIn>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
