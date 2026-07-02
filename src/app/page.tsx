import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Bot,
  Settings,
  Database,
  TrendingDown,
  Clock,
  MessageSquareX,
  Unplug,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "AutoEra Automation | AI Automation Systems for Growing Businesses",
  description:
    "Stop losing leads to slow follow-up and drowning in manual admin. AutoEra builds AI automation systems that run your repetitive work 24/7 — so you can focus on growing.",
};

const painPoints = [
  { icon: TrendingDown, title: "Missed Leads", desc: "Prospects reach out after hours or get a slow reply — and go with your competitor instead." },
  { icon: Clock, title: "Manual Admin", desc: "Hours lost every week on repetitive tasks that could be handled automatically." },
  { icon: MessageSquareX, title: "Slow Support", desc: "Customers wait hours for answers to questions your AI could resolve in seconds." },
  { icon: Unplug, title: "Disconnected Tools", desc: "Your CRM, email, booking system, and WhatsApp don't talk to each other — causing gaps." },
];

const services = [
  { icon: Zap, title: "AI Lead Response", desc: "Instant, intelligent follow-up on every inquiry — even at 2am. Qualify, capture, and route leads before they go cold.", href: "/services/lead-response", color: "#F59E0B" },
  { icon: Bot, title: "Customer Support AI", desc: "A 24/7 AI agent that answers FAQs, handles bookings, and escalates complex issues to you — without the overhead.", href: "/services/customer-support", color: "#FB923C" },
  { icon: Database, title: "CRM Automation", desc: "Your CRM stays updated automatically. New contacts, deal stages, follow-up reminders — no manual data entry.", href: "/services/crm-automation", color: "#FBBF24" },
  { icon: Settings, title: "Ops Automation", desc: "Connect your tools. Automate your workflows. From invoice generation to team notifications — we streamline it all.", href: "/services/ops-automation", color: "#34d399" },
];

const techStack = [
  { name: "n8n", color: "#ea4b71" },
  { name: "Make", color: "#F59E0B" },
  { name: "Zapier", color: "#ff6b35" },
  { name: "Python", color: "#3776ab" },
  { name: "OpenAI", color: "#10a37f" },
  { name: "WhatsApp API", color: "#25d366" },
  { name: "Twilio", color: "#f22f46" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}
        className="grid-noise"
      >
        {/* Gradient backdrop */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Floating orbs */}
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} className="animate-float" />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ position: "relative" }}>
          <FadeInStagger className="max-w-3xl" delay={0.15}>
            <FadeInStaggerItem>
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="eyebrow">AI Automation Agency</span>
              </div>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                AI Automation Systems for{" "}
                <span className="gradient-text">Growing Businesses</span>
              </h1>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <p style={{ fontSize: "1.1rem", color: "#A3A3A3", lineHeight: 1.75, maxWidth: 560, marginBottom: "2.5rem" }}>
                Stop losing leads and drowning in manual admin. We build intelligent automation systems that capture every inquiry, support your customers, and handle the repetitive work — 24/7, while you focus on growth.
              </p>
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" id="hero-cta-primary" style={{ padding: "0.85rem 2rem", fontSize: "0.9rem" }}>
                  Book a Free Call <ArrowRight size={16} />
                </Link>
                <Link href="/case-studies" className="btn-ghost" id="hero-cta-secondary" style={{ padding: "0.85rem 2rem", fontSize: "0.9rem" }}>
                  See Case Studies
                </Link>
              </div>
            </FadeInStaggerItem>

            {/* Social proof mini */}
            <FadeInStaggerItem>
              <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, hsl(${30 + i * 15}, 85%, 55%) 0%, hsl(${20 + i * 10}, 90%, 45%) 100%)`, border: "2px solid #080808", marginLeft: i > 0 ? -8 : 0 }} />
                  ))}
                </div>
                <span style={{ color: "#737373", fontSize: "0.83rem" }}>Trusted by service businesses in UK, US & AU</span>
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ── CASE STUDY PREVIEW ───────────────────────────── */}
      <section className="section-sm" style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-xl">
          <FadeIn direction="up">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>Client Result</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#FFFFFF" }}>
                Dental Clinic → 40% Fewer Missed Enquiries
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              { label: "Problem", icon: "🔴", text: "Clinic was missing 30–40% of after-hours appointment enquiries — patients were calling once, getting no answer, and booking elsewhere." },
              { label: "Solution", icon: "⚡", text: "We built an AI receptionist (WhatsApp + phone) that qualifies enquiries, answers FAQs, and books appointments directly into the clinic's calendar 24/7." },
              { label: "Result", icon: "✅", text: "Missed enquiries dropped 40% in the first month. The clinic recovered the cost of the build within 6 weeks through bookings that would have otherwise been lost." },
            ].map((item) => (
              <FadeInStaggerItem key={item.label} className="card">
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }} className="icon-hover-rotate">{item.icon}</div>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F59E0B", marginBottom: "0.5rem" }}>{item.label}</p>
                <p style={{ color: "#A3A3A3", fontSize: "0.88rem", lineHeight: 1.65 }}>{item.text}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <div style={{ textAlign: "center" }}>
            <Link href="/case-studies" className="btn-ghost">Read the Full Case Study <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ──────────────────────────────── */}
      <section className="section">
        <div className="container-xl">
          <FadeIn direction="up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>The Problem</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Is This Costing Your Business Every Day?
              </h2>
              <p style={{ color: "#A3A3A3", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                Most growing businesses lose time and revenue to the same handful of problems — and they don't require more staff to fix.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="pain-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {painPoints.map((p) => (
              <FadeInStaggerItem key={p.title} className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                  <p.icon size={20} color="#F59E0B" className="icon-hover-rotate" />
                </div>
                <div>
                  <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "0.4rem", fontSize: "1rem" }}>{p.title}</h3>
                  <p style={{ color: "#A3A3A3", fontSize: "0.88rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────── */}
      <section className="section" style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-xl">
          <FadeIn direction="up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>What We Build</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                Four Systems. One Goal: Less Work, More Revenue.
              </h2>
              <p style={{ color: "#A3A3A3", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                We don't sell software subscriptions — we build custom automation systems tuned to your business.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {services.map((s) => (
              <FadeInStaggerItem key={s.title}>
                <Link href={s.href} style={{ textDecoration: "none" }}>
                  <div className="card group" style={{ height: "100%" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 11, background: `${s.color}12`, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }} className="icon-hover-rotate">
                      <s.icon size={22} color={s.color} />
                    </div>
                    <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem", fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                    <p style={{ color: "#A3A3A3", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{s.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: s.color, fontSize: "0.83rem", fontWeight: 600 }}>
                      Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" style={{ transition: 'transform 0.3s ease' }} />
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── TECH STACK STRIP ─────────────────────────────── */}
      <section className="section-sm">
        <div className="container-xl">
          <p style={{ textAlign: "center", color: "#404040", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>
            Built with industry-leading tools
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            {techStack.map((t) => (
              <div key={t.name} className="tech-badge">
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.color, display: "inline-block", flexShrink: 0 }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────── */}
      <section className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
            {/* Avatar image */}
            <FadeIn direction="right" style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{ width: "100%", maxWidth: 280, aspectRatio: "3/4", borderRadius: 20, border: "1px solid rgba(245,158,11,0.3)", position: "relative", overflow: "hidden" }}
                className="animate-float"
              >
                <Image 
                  src="/images/owner.jpg" 
                  alt="Ayaan - Founder of AutoEra Automation" 
                  fill 
                  style={{ objectFit: "cover", objectPosition: "center" }} 
                  sizes="(max-width: 768px) 100vw, 280px"
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem", paddingTop: "3rem", background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0) 100%)" }}>
                  <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>Ayaan</p>
                  <p style={{ color: "#F59E0B", fontSize: "0.8rem", fontWeight: 500 }}>Founder, AutoEra</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.75rem" }}>About the Founder</span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.25 }}>
                Built by someone who actually understands your workflow
              </h2>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75, marginBottom: "1rem" }}>
                I'm Ayaan — a self-taught developer who started in freelance web development before going all-in on AI automation. I built AutoEra because I kept seeing the same problem: small business owners drowning in work that software should be handling.
              </p>
              <p style={{ color: "#A3A3A3", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                AutoEra is tool-agnostic and outcome-focused. I use whatever combination of n8n, Make, Python, or custom AI agents produces the best result for your specific business — not whatever's easiest to resell.
              </p>
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                {["Self-Taught Builder", "Tool-Agnostic", "Outcome-Focused"].map((tag) => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              <Link href="/about" className="btn-ghost">Read My Story <ArrowRight size={15} /></Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="section" style={{ background: "#0f0f0f", borderTop: "1px solid rgba(245,158,11,0.1)", position: "relative", overflow: "hidden" }}>
        {/* Subtle glow */}
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: 400, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div className="container-xl" style={{ textAlign: "center", position: "relative" }}>
          <FadeIn direction="up">
            <div className="glow-dot" style={{ margin: "0 auto 1.5rem" }} />
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Ready to Automate Your Business?
            </h2>
            <p style={{ color: "#A3A3A3", fontSize: "1.05rem", maxWidth: 460, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              Book a free 30-minute call. We'll map out exactly which automation would have the biggest impact on your business — no commitment required.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" id="final-cta-btn" style={{ padding: "0.9rem 2rem", fontSize: "0.92rem" }}>
                <Calendar size={17} /> Book a Free Call
              </Link>
              <Link href="/services" className="btn-ghost" style={{ padding: "0.9rem 2rem", fontSize: "0.92rem" }}>
                Explore Services
              </Link>
            </div>
            <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
              {["Free 30-min strategy call", "No long-term contracts", "Results in weeks, not months"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#737373", fontSize: "0.83rem" }}>
                  <CheckCircle2 size={13} color="#F59E0B" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr !important; }
          .pain-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
