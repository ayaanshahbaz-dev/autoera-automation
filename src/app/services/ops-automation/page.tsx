import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Settings } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Operations Automation | AutoEra Automation",
  description:
    "Connect your tools and eliminate manual handoffs. AutoEra builds custom operations automation workflows — from invoicing and reporting to team notifications and document generation.",
};

export default function OpsAutomationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Ops Automation"
      h1="Operations Automation — Eliminate the Manual Handoffs That Slow Your Business Down"
      tagline="If someone on your team is copying data between tools, sending the same update every week, or chasing the same approvals on repeat — that's an automation waiting to happen."
      problem="Operations bottlenecks usually aren't obvious at first. They look like 'just how things work': someone exports a report manually every Monday, another person pastes invoice details from the CRM into the accounting software, a manager sends the same team update message every morning. Individually, these tasks seem minor. Collectively, they consume hours every week — and they scale with headcount in a way that automation doesn't."
      howItWorks={[
        {
          title: "Operations Audit",
          desc: "We start by mapping your existing workflows — where data flows between tools, where manual steps happen, what repeating tasks exist. We identify the highest-leverage automations first.",
        },
        {
          title: "Build the Integration Layer",
          desc: "Using n8n, Make, Zapier, or custom code (depending on what's needed), we build the connections between your tools so data flows automatically between systems without manual intervention.",
        },
        {
          title: "Automate the Workflow Logic",
          desc: "Beyond just connecting tools, we add business logic: conditional routing, approval gates, error handling, and notifications. The automation behaves the way a careful employee would — not just a simple if-then rule.",
        },
        {
          title: "Monitor, Test & Iterate",
          desc: "We test every automation thoroughly before handover and set up monitoring so you know immediately if anything breaks. We also revisit the setup after 30 days to identify what can be improved.",
        },
      ]}
      included={[
        "Operations workflow audit and automation roadmap",
        "Multi-tool integration (email, Slack, Drive, invoicing, CRM, etc.)",
        "Automated reporting and scheduled team summaries",
        "Document generation and e-signature workflows",
        "Internal notification and approval routing",
        "Error monitoring and alerts",
        "30-day post-launch review and optimisation",
      ]}
      proofTitle="Removing 10+ Hours of Weekly Admin for a Consulting Firm"
      proofText="A consulting firm was manually generating client reports from three different data sources, sending weekly status updates by hand, and managing project approvals through a chain of emails. We automated the entire reporting pipeline (data pulled, formatted, and emailed to clients every Friday automatically), replaced the approval chain with a structured Slack workflow, and connected their project tool to their invoicing system. The principal recovered over 10 hours per week."
      tech={["n8n", "Make (Integromat)", "Zapier", "Python", "Google Workspace APIs", "Slack API", "Airtable", "Xero / QuickBooks"]}
      color="#34d399"
      icon={<Settings size={26} color="#34d399" />}
    />
  );
}
