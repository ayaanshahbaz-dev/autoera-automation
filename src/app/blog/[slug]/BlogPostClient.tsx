"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostClientProps {
  color: string;
  content: React.ReactNode[];
  postTitle: string;
}

export default function BlogPostClient({ color, content, postTitle: _ }: BlogPostClientProps) {
  return (
    <>
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "#525252",
          textDecoration: "none",
          fontSize: "0.85rem",
          marginBottom: "1.5rem",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#525252")}
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <div style={{ maxWidth: 720, fontSize: "1rem", marginTop: "1rem" }}>
        {content}
      </div>

      {/* End CTA */}
      <div
        style={{
          maxWidth: 720,
          marginTop: "3rem",
          padding: "2rem",
          background: "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(167,139,250,0.04) 100%)",
          border: "1px solid rgba(108,99,255,0.15)",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>
          Need this for your business?
        </h3>
        <p style={{ color: "#A3A3A3", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
          Book a free 30-minute call and we'll map out the right automation approach for your specific business.
        </p>
        <Link href="/contact" className="btn-primary">
          Book a Free Call <ArrowRight size={15} />
        </Link>
      </div>

      {/* Back */}
      <div style={{ maxWidth: 720, marginTop: "2rem" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#525252",
            textDecoration: "none",
            fontSize: "0.875rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#525252")}
        >
          <ArrowLeft size={14} /> All posts
        </Link>
      </div>
    </>
  );
}
