import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Blog | AI Automation Insights — AutoEra Automation",
  description:
    "Practical guides on AI automation for small businesses — how it works, what it costs, and where to start. New posts added regularly.",
};

// Seed blog posts
const posts = [
  {
    slug: "how-ai-automation-works-small-business",
    title: "How AI Automation Actually Works for Small Businesses",
    excerpt:
      "Cut through the hype. Here's a plain-language explanation of what AI automation is, what it can realistically do for a small business, and where to start.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Education",
  },
  {
    slug: "missed-leads-costing-business",
    title: "Why Missed Leads Are Costing Your Business More Than You Think",
    excerpt:
      "Most businesses track their marketing spend. Almost none of them track how much revenue they lose from leads they fail to follow up quickly enough.",
    date: "2025-02-01",
    readTime: "5 min read",
    category: "Strategy",
  },
  {
    slug: "n8n-vs-zapier-vs-make",
    title: "n8n vs Zapier vs Make: Which Automation Tool Is Right for Your Business?",
    excerpt:
      "Three of the most popular automation platforms — but they're not interchangeable. Here's an honest breakdown of when to use each one.",
    date: "2025-02-20",
    readTime: "8 min read",
    category: "Tools",
  },
];

const categoryColors: Record<string, string> = {
  Education: "#F59E0B",
  Strategy: "#38bdf8",
  Tools: "#34d399",
  "Case Study": "#f59e0b",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
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
            <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>Blog</span>
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
              AI Automation Insights for{" "}
              <span className="gradient-text">Growing Businesses</span>
            </h1>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <p style={{ color: "#A3A3A3", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Practical, jargon-free guides on AI automation — what it is, how it works, and where it delivers the biggest ROI for small businesses.
            </p>
          </FadeInStaggerItem>
        </FadeInStagger>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-xl">
          <FadeInStagger
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            className="blog-grid"
          >
            {posts.map((post) => (
              <FadeInStaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <article
                    className="card group hover:border-[#F59E0B]/30 transition-colors duration-300"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  >
                    {/* Category */}
                    <div style={{ marginBottom: "1rem" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "0.25rem 0.6rem",
                          borderRadius: 100,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          color: categoryColors[post.category] || "#F59E0B",
                          background: `${categoryColors[post.category] || "#F59E0B"}15`,
                          border: `1px solid ${categoryColors[post.category] || "#F59E0B"}25`,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "0.75rem",
                        lineHeight: 1.35,
                        flex: 1,
                      }}
                    >
                      {post.title}
                    </h2>

                    <p style={{ color: "#A3A3A3", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(245,158,11,0.1)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#525252", fontSize: "0.75rem" }}>
                          <Calendar size={12} />
                          {formatDate(post.date)}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#525252", fontSize: "0.75rem" }}>
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight size={15} color="#F59E0B" className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          {/* More posts note */}
          <FadeIn
            style={{
              marginTop: "3rem",
              textAlign: "center",
              padding: "2rem",
              background: "rgba(245,158,11,0.05)",
              border: "1px dashed rgba(245,158,11,0.2)",
              borderRadius: 12,
            }}
          >
            <p style={{ color: "#525252", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              📝 More posts coming regularly as new client builds and automation guides are published.
            </p>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
