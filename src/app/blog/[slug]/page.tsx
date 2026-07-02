import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Static blog post content
const posts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    excerpt: string;
    content: string;
  }
> = {
  "how-ai-automation-works-small-business": {
    title: "How AI Automation Actually Works for Small Businesses",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Education",
    excerpt:
      "Cut through the hype. Here's a plain-language explanation of what AI automation is, what it can realistically do for a small business, and where to start.",
    content: `## The Problem With Most AI Automation Content

If you search "AI automation for small business," you'll find two types of content: breathless hype pieces about how AI will replace everything, and technical tutorials aimed at developers who already know what they're doing.

Neither is useful if you run a dental clinic, a salon, a consulting firm, or a trades business and you're just trying to figure out if this stuff can actually help you.

So here's a plain-language breakdown.

## What "AI Automation" Actually Means

"AI automation" is a broad phrase that covers two distinct things:

**1. Automation:** Getting software to do repetitive tasks automatically, without a human pressing buttons. This has existed for decades. A scheduled email is automation. A form that adds a contact to your CRM is automation.

**2. AI:** Software that can understand and generate natural language, make decisions based on context, and handle situations that aren't perfectly predictable. OpenAI's GPT-4 is AI. A chatbot that actually understands what someone is asking — rather than matching keywords — is AI.

When you put them together, you get systems that handle unpredictable workflows at scale — not just "when form filled → add to spreadsheet" but "when someone messages via WhatsApp → understand intent → respond naturally → book the appointment."

## What It Can Realistically Do

AI automation isn't magic, and it's not the right solution for every problem.

Where it works well: high-volume repetitive communication, multi-step data workflows between tools, and after-hours coverage where instant response matters.

Where it doesn't: situations requiring nuanced human judgment, highly irregular processes with no predictable pattern, or businesses where volume is too low to justify the build cost.

## Where Most Small Businesses Should Start

The highest-ROI automation for most small service businesses is almost always lead response. The gap between when someone expresses interest and when they get a reply is where most revenue is lost.

Second is routine support queries. Third is internal admin — the manual data entry, weekly reporting, and status updates that eat hours every week without anyone noticing.

## The Bottom Line

AI automation for small businesses isn't about replacing your team. It's about removing the repetitive, time-consuming work that gets in the way of running and growing the business. Done right, it frees up time, reduces missed opportunities, and scales in a way that hiring can't.

If you're not sure where to start, [book a free strategy call](/contact) with AutoEra — that's exactly what the call is for.`,
  },
  "missed-leads-costing-business": {
    title: "Why Missed Leads Are Costing Your Business More Than You Think",
    date: "2025-02-01",
    readTime: "5 min read",
    category: "Strategy",
    excerpt:
      "Most businesses track their marketing spend. Almost none of them track how much revenue they lose from leads they fail to follow up quickly enough.",
    content: `## The Hidden Revenue Leak in Most Small Businesses

Businesses track a lot of numbers. Marketing spend, cost per acquisition, conversion rates. What almost no small business tracks is lead response time — and the revenue loss that comes from being too slow.

## The Data on Response Time

Multiple studies across industries show the same pattern: contacting a lead within 5 minutes makes you 100x more likely to make contact than waiting 30 minutes. The probability of qualifying a lead drops 21x after the first 5 minutes. Most small businesses take hours — sometimes more than 24 — to respond.

The businesses winning on lead conversion often aren't better at sales. They're just faster to respond.

## What a Missed Lead Actually Costs

Let's put rough numbers on this. A local service business receiving 50 enquiries per month at £500 average job value — if 30% go unanswered for 12+ hours and conversion drops from 40% to 15% for those leads, that's roughly 45 lost clients per year.

At £500 each: £22,500 in annual revenue lost to slow follow-up alone. No marketing changes. Just faster responses.

## Why It Happens

It's not because businesses don't care. Staff are busy during peak hours. Enquiries come in after hours. Multiple channels — WhatsApp, web form, email, Instagram DMs — are hard to monitor simultaneously.

The result: leads sit there until someone gets to them. By then, the prospect has moved on.

## The Fix

The fix is systematic, not cultural. You need a system that responds on behalf of your team — instantly, every time, regardless of the hour.

This is exactly what AI lead response systems do. An enquiry comes in at 9pm → the AI responds within seconds → asks qualification questions → books the call if qualified → notifies your team with full context.

Your team walks in the next morning with qualified prospects already in their calendar.

If this sounds relevant, [book a free call](/contact) and we'll model out the impact for your specific business.`,
  },
  "n8n-vs-zapier-vs-make": {
    title: "n8n vs Zapier vs Make: Which Automation Tool Is Right for Your Business?",
    date: "2025-02-20",
    readTime: "8 min read",
    category: "Tools",
    excerpt:
      "Three of the most popular automation platforms — but they're not interchangeable. Here's an honest breakdown of when to use each one.",
    content: `## Why There Isn't One "Best" Automation Tool

Zapier, Make (formerly Integromat), and n8n are all automation platforms — but they serve different use cases and have genuinely different capabilities. The right choice depends entirely on what you're building.

## Zapier: The Simplest Starting Point

**Best for:** Simple, single-step integrations between popular apps. Two-or-three-step workflows. Non-technical teams who need a quick solution.

Zapier is the most widely used automation tool for a reason: it's the easiest. "When someone fills in this Typeform → create a HubSpot contact → send a Slack notification" can be done in 10 minutes with no technical knowledge.

**The limitations:** Gets expensive quickly (task-based pricing). Limited logic for complex multi-branch workflows. Harder to customise at a code level. Black box — you can't see exactly what's happening inside.

**When to use Zapier:** Quick, simple integrations where you're not planning to scale into something complex.

## Make (Integromat): More Power, More Complexity

**Best for:** Complex workflows with multiple branches, loops, data transformation, and conditional logic.

Make's visual flow builder lets you see exactly what's happening at each step, and it handles branching logic and multi-step transformations much more cleanly than Zapier.

**The limitations:** Steeper learning curve. Pricing can still get significant at volume. Hosted — data flows through Make's servers.

**When to use Make:** For mid-to-high complexity workflows with multiple conditions and data transformations.

## n8n: The Developer's Choice

**Best for:** Complex, custom automation workflows. Self-hosting. Workflows needing custom code, AI integration, or non-standard logic.

n8n is the most powerful of the three. It's open-source, self-hostable, and supports custom JavaScript/Python nodes — enabling automation systems that would be impossible in Zapier or Make. For AI-powered workflows specifically, n8n often wins — it has native nodes for OpenAI, Anthropic, and its code nodes handle complex agent logic.

**The limitations:** Steep learning curve. Requires setup and maintenance if self-hosted. Not the right choice if you need quick deployment without technical knowledge.

**When to use n8n:** Complex, AI-powered, or high-volume projects where you need fine-grained control and long-term cost efficiency.

## How We Choose at AutoEra

We're tool-agnostic. Simple two-tool integration → usually Zapier or Make. Complex, AI-powered, or high-volume workflows → usually n8n. Custom logic no tool can handle natively → Python + custom API calls.

The goal is always the outcome — not the tool. If you're unsure which fits your workflow, [book a free call](/contact) for an honest recommendation.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | AutoEra Automation Blog`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "2.5rem 0 1rem",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.includes(":**")) {
      const colonIdx = line.indexOf(":**");
      const boldPart = line.slice(2, colonIdx);
      const rest = line.slice(colonIdx + 3);
      elements.push(
        <p key={i} style={{ color: "#A3A3A3", lineHeight: 1.8, marginBottom: "0.75rem" }}>
          <strong style={{ color: "#FFFFFF" }}>{boldPart}:</strong>
          {rest}
        </p>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Replace [text](url) markdown links with HTML
      const parts = line.split(/\[([^\]]+)\]\(([^)]+)\)/g);
      const children: React.ReactNode[] = [];
      for (let j = 0; j < parts.length; j++) {
        if (j % 3 === 0) {
          children.push(parts[j]);
        } else if (j % 3 === 1) {
          const text = parts[j];
          const href = parts[j + 1];
          children.push(
            <a
              key={j}
              href={href}
              style={{
                color: "#FCD34D",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {text}
            </a>
          );
          j++; // skip href
        }
      }
      elements.push(
        <p key={i} style={{ color: "#A3A3A3", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          {children}
        </p>
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const categoryColors: Record<string, string> = {
    Education: "#F59E0B",
    Strategy: "#38bdf8",
    Tools: "#34d399",
  };
  const color = categoryColors[post.category] || "#F59E0B";
  const renderedContent = renderContent(post.content);

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
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${color}20 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container-lg" style={{ position: "relative" }}>
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
            }}
          >
            ← Back to Blog
          </Link>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                padding: "0.25rem 0.6rem",
                borderRadius: 100,
                fontSize: "0.7rem",
                fontWeight: 600,
                color: color,
                background: `${color}15`,
                border: `1px solid ${color}25`,
              }}
            >
              {post.category}
            </span>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  color: "#525252",
                  fontSize: "0.8rem",
                }}
              >
                <Calendar size={13} />
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  color: "#525252",
                  fontSize: "0.8rem",
                }}
              >
                <Clock size={13} />
                {post.readTime}
              </div>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: "4rem" }}>
        <div className="container-lg">
          <div style={{ maxWidth: 720, fontSize: "1rem" }}>
            {renderedContent}
          </div>

          {/* End CTA */}
          <div
            style={{
              maxWidth: 720,
              marginTop: "3rem",
              padding: "2rem",
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(167,139,250,0.04) 100%)",
              border: "1px solid rgba(108,99,255,0.15)",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "0.75rem",
              }}
            >
              Need this for your business?
            </h3>
            <p
              style={{
                color: "#A3A3A3",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              Book a free 30-minute call and we&apos;ll map out the right
              automation approach for your specific business.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Call →
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
              }}
            >
              ← All posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
