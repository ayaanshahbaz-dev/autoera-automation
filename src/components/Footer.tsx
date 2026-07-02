"use client";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "AI Lead Response", href: "/services/lead-response" },
  { label: "Customer Support AI", href: "/services/customer-support" },
  { label: "CRM Automation", href: "/services/crm-automation" },
  { label: "Ops Automation", href: "/services/ops-automation" },
];

/** Orange bolt wordmark matching the actual AutoEra logo */
function FooterLogo() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 0, textDecoration: "none", marginBottom: "1rem" }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
        Auto
      </span>
      <span style={{ display: "inline-flex", alignItems: "center", margin: "0 1px", transform: "translateY(-1px)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L4.5 13.5H11L10 22L20 9.5H13.5L13 2Z" fill="#F59E0B" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
        Era
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(245, 158, 11, 0.08)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <FadeInStagger
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <FadeInStaggerItem>
          <FooterLogo />
          <p style={{ color: "#737373", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
            AI automation systems for growing businesses. We handle the repetitive work so you can focus on what matters.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="mailto:hello.autoera@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#737373", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#737373")}
            >
              <Mail size={14} />
              hello.autoera@gmail.com
            </a>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AutoEra on LinkedIn"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, color: "#737373", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F59E0B"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#737373"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </FadeInStaggerItem>

        {/* Navigation */}
        <FadeInStaggerItem>
          <p style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "1rem", fontSize: "0.85rem" }}>Navigation</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ width: "fit-content" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </FadeInStaggerItem>

        {/* Services */}
        <FadeInStaggerItem>
          <p style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "1rem", fontSize: "0.85rem" }}>Services</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ width: "fit-content" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </FadeInStaggerItem>
      </FadeInStagger>

      {/* Bottom bar */}
      <FadeIn direction="up">
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#404040", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} AutoEra Automation. All rights reserved.
          </p>
          <p style={{ color: "#404040", fontSize: "0.78rem" }}>autoera.site</p>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
