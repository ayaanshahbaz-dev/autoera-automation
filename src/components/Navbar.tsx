"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticElement } from "@/components/ui/animations";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Inline bolt SVG matching the actual AutoEra logo */
function BoltIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 2L4.5 13.5H11L10 22L20 9.5H13.5L13 2Z"
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Logo wordmark — Auto⚡Era matching the brand logo */
function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0", textDecoration: "none" }}>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        Auto
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          margin: "0 1px",
          lineHeight: 1,
          transform: "translateY(-1px)",
        }}
      >
        <BoltIcon size={22} />
      </span>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        Era
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8, 8, 8, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245, 158, 11, 0.10)"
          : "1px solid transparent",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.5rem",
        }}
      >
        <Logo />

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem", position: "relative" }}
          className="desktop-nav"
        >
          {navLinks.map((l) => {
            const isActive = pathname.startsWith(l.href);
            return (
              <MagneticElement key={l.href} strength={0.3}>
                <Link
                  href={l.href}
                  className="nav-link interactive"
                  style={{ position: "relative", padding: "0.5rem 0", color: isActive ? "#FFFFFF" : undefined }}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "#F59E0B",
                        borderRadius: 2
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </MagneticElement>
            );
          })}
          <MagneticElement strength={0.2}>
            <Link
              href="/contact"
              className="btn-primary interactive"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}
            >
              Book a Call
            </Link>
          </MagneticElement>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "rgba(8, 8, 8, 0.98)",
              borderTop: "1px solid rgba(245, 158, 11, 0.1)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            className="mobile-menu"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: "#A3A3A3",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              onClick={() => setOpen(false)}
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
