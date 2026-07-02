import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://autoera.site";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/lead-response`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/customer-support`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/crm-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/ops-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/how-ai-automation-works-small-business`, lastModified: new Date("2025-01-15"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/missed-leads-costing-business`, lastModified: new Date("2025-02-01"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog/n8n-vs-zapier-vs-make`, lastModified: new Date("2025-02-20"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
