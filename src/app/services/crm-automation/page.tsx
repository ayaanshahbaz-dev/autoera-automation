import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Automation for Small Businesses | AutoEra Automation",
  description:
    "Eliminate manual CRM data entry. AutoEra automates contact creation, deal stage updates, follow-up sequences, and pipeline reporting — so your sales team focuses on selling, not admin.",
};

export default function CRMAutomationPage() {
  return (
    <ServicePageTemplate
      eyebrow="CRM Automation"
      h1="CRM Automation — Your Pipeline Updates Itself, No Manual Entry Required"
      tagline="Manual CRM data entry kills sales momentum. We automate the repetitive admin — contact creation, stage updates, follow-up triggers — so your team spends time on conversations, not copy-pasting."
      problem="Most small business sales teams spend 20–30% of their time on CRM admin rather than selling. Contacts manually entered, deal stages updated by hand, follow-up reminders set individually. It's not just inefficient — it leads to gaps. Leads fall through the cracks because no one updated the record, or a follow-up reminder wasn't set, or the wrong stage was entered. CRM automation removes the human error and the time cost at once."
      howItWorks={[
        {
          title: "Connect Your Lead Sources",
          desc: "We connect every place leads come from — web forms, WhatsApp, LinkedIn, cold email campaigns, referrals — to your CRM. New leads create new contacts automatically, tagged with their source.",
        },
        {
          title: "Behaviour Triggers Stage Updates",
          desc: "When a prospect opens an email, books a call, or fills in a form, their CRM stage updates automatically. No one needs to remember to move the deal — it happens based on real actions.",
        },
        {
          title: "Automated Follow-Up Sequences",
          desc: "Personalised follow-up emails and messages go out at the right time without manual scheduling. Prospects who go quiet get a re-engagement sequence. Prospects who engage get moved forward.",
        },
        {
          title: "Reporting & Alerts on Autopilot",
          desc: "Weekly pipeline summaries, stale deal alerts, and team performance reports are generated and delivered automatically — to your inbox, Slack, or wherever your team works.",
        },
      ]}
      included={[
        "Auto-contact creation from all lead sources",
        "Behaviour-triggered deal stage updates",
        "Automated follow-up email/message sequences",
        "Stale deal alerts and re-engagement triggers",
        "Pipeline reporting delivered automatically",
        "CRM integration: HubSpot, GoHighLevel, Pipedrive, or custom",
        "Data deduplication and cleanup workflows",
      ]}
      proofTitle="CRM Automation for a Multi-Location Service Business"
      proofText="A service business with three locations was manually entering leads from three different sources (web form, Google Ads, and a referral form) into HubSpot daily. We automated all three sources to create CRM contacts, tag them by source and location, and trigger a 5-step follow-up sequence. The team recovered roughly 8 hours per week — and their lead-to-meeting conversion improved because follow-ups now go out within minutes, not days."
      tech={["HubSpot API", "GoHighLevel", "Pipedrive", "n8n", "Make (Integromat)", "OpenAI (personalisation)", "Zapier"]}
      color="#FCD34D"
      icon={<Database size={26} color="#FCD34D" />}
    />
  );
}
