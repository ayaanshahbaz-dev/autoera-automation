import Link from "next/link";
import { ArrowRight, Zap, Bot, Database, Settings } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "AI Automation Services | AutoEra Automation",
  description:
    "Explore AutoEra's four AI automation services: Lead Response, Customer Support, CRM Automation, and Ops Automation — built for growing businesses.",
};

const services = [
  {
    icon: Zap,
    title: "AI Lead Response",
    tagline: "Never lose a lead to slow follow-up",
    desc: "Every unanswered enquiry is potential revenue walking out the door. Our AI lead response systems engage new enquiries within seconds — 24 hours a day, 7 days a week. We qualify prospects, answer their first questions, and route hot leads to your team in real time, so you never miss a conversion opportunity.",
    features: [
      "Instant multi-channel response (WhatsApp, email, SMS, web chat)",
      "AI qualification questions tailored to your business",
      "Automatic calendar booking for qualified leads",
      "Real-time team notifications for hot prospects",
      "Lead data synced to your CRM automatically",
    ],
    href: "/services/lead-response",
    color: "#F59E0B",
  },
  {
    icon: Bot,
    title: "Customer Support AI",
    tagline: "24/7 support without the overhead",
    desc: "Your customers want answers now — not during business hours. Our AI support agents handle FAQs, booking requests, appointment changes, complaints, and routine queries around the clock. Complex issues are escalated to your team with full context already captured, so your staff spend time on what actually needs a human.",
    features: [
      "Trained on your business — products, policies, and processes",
      "Handles booking, rescheduling, and cancellation flows",
      "Intelligent escalation to human agents with full chat history",
      "Multi-platform: website chat, WhatsApp, Instagram DMs",
      "Feedback loops to improve responses over time",
    ],
    href: "/services/customer-support",
    color: "#38bdf8",
  },
  {
    icon: Database,
    title: "CRM Automation",
    tagline: "Your CRM updates itself — no manual entry",
    desc: "Manual data entry is one of the biggest drains on sales team productivity. Our CRM automation systems capture contacts, update deal stages, log interactions, and send follow-up reminders automatically. Whether you use HubSpot, GoHighLevel, Pipedrive, or a custom setup, we can automate the repetitive parts.",
    features: [
      "Auto-create and update contacts from any lead source",
      "Stage updates triggered by customer behaviour (email opens, form fills)",
      "Automated follow-up sequences with personalised messaging",
      "Deal pipeline reporting and alerts sent to your team",
      "Integration with existing sales tools — no rip-and-replace",
    ],
    href: "/services/crm-automation",
    color: "#FCD34D",
  },
  {
    icon: Settings,
    title: "Ops Automation",
    tagline: "Connect your tools. Eliminate the gaps.",
    desc: "Most business operations involve the same manual handoffs every day — someone copies data from one system to another, sends the same update to the same people, or chases the same approvals. We identify your most time-consuming workflows and build automated systems that handle them end-to-end, without you having to touch them.",
    features: [
      "Multi-tool workflow integration (email, Slack, Drive, invoicing, etc.)",
      "Automated reporting and scheduled summaries",
      "Document generation and e-signature workflows",
      "Internal notifications and approval routing",
      "Custom business logic — we build for your specific process",
    ],
    href: "/services/ops-automation",
    color: "#34d399",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
        className="grid-noise"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <FadeInStagger className="container-xl" style={{ position: "relative", textAlign: "center" }}>
          <FadeInStaggerItem>
            <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>
              Our Services
            </span>
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
              AI Automation Built for Your Business,{" "}
              <span className="gradient-text">Not a Generic Template</span>
            </h1>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p
              style={{
                color: "#A3A3A3",
                fontSize: "1.1rem",
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              We're not a WhatsApp-bot shop or a single-tool agency. AutoEra builds end-to-end automation systems using whatever combination of tools best fits your business — from AI models to workflow engines to custom code.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-xl">
          <FadeInStagger style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {services.map((s, i) => (
              <FadeInStaggerItem
                key={s.title}
                className="card group hover:border-[#F59E0B]/30 transition-colors duration-300"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  padding: "2.25rem",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  className="icon-hover-rotate group-hover:bg-[#F59E0B]/20 transition-colors duration-300"
                >
                  <s.icon size={26} color={s.color} />
                </div>

                <div>
                  <p style={{ color: s.color, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                    {s.tagline}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {s.title}
                  </h2>
                  <p style={{ color: "#A3A3A3", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: 620, fontSize: "0.95rem" }}>
                    {s.desc}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#A3A3A3", fontSize: "0.875rem" }}>
                        <span style={{ color: s.color, marginTop: 2, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ flexShrink: 0, paddingTop: "0.25rem" }}>
                  <Link
                    href={s.href}
                    className="btn-primary"
                    style={{ whiteSpace: "nowrap", background: `linear-gradient(135deg, ${s.color} 0%, ${s.color}cc 100%)` }}
                  >
                    Learn More <ArrowRight size={15} />
                  </Link>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section-sm"
        style={{
          background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 100%)",
          borderTop: "1px solid rgba(245,158,11,0.12)",
        }}
      >
        <FadeIn className="container-xl" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Not sure which service fits?
          </h2>
          <p style={{ color: "#A3A3A3", marginBottom: "2rem", fontSize: "1rem", maxWidth: 480, margin: "0 auto 2rem" }}>
            Book a free call — we'll map out which automation would have the biggest impact on your specific business.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
