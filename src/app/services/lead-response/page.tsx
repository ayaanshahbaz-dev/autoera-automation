import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Response Systems | AutoEra Automation",
  description:
    "Never lose a lead to slow follow-up again. AutoEra builds AI lead response systems that engage enquiries in seconds, 24/7 — qualifying, capturing, and routing leads before they go cold.",
};

export default function LeadResponsePage() {
  return (
    <ServicePageTemplate
      eyebrow="AI Lead Response"
      h1="AI Lead Response Systems — Never Lose a Lead to Slow Follow-Up"
      tagline="Every minute a lead goes without a response, the chance of conversion drops. Our AI systems respond in seconds — every time, 24/7, across every channel your prospects use."
      problem="Most small businesses lose 30–50% of their inbound leads not because the offer is bad, but because response times are slow. A prospect reaches out at 9pm, gets no reply until the next morning, and by then they've already booked with someone else. The issue isn't capacity — it's the gap between when someone expresses interest and when they get a response. We close that gap."
      howItWorks={[
        {
          title: "Enquiry Captured Across All Channels",
          desc: "Whether a prospect messages via WhatsApp, fills in a web form, sends an email, or calls and leaves a voicemail — we capture it and trigger the response flow immediately.",
        },
        {
          title: "AI Responds & Qualifies",
          desc: "Our AI agent sends a personalised, natural-sounding reply within seconds. It asks your key qualification questions (budget, timeline, service needed) and captures the answers automatically.",
        },
        {
          title: "Hot Leads Booked or Routed",
          desc: "Qualified leads are offered a booking link directly in the conversation. If they book, it goes straight to your calendar. If they need a call, your team is notified instantly with full lead context.",
        },
        {
          title: "All Data Synced to Your CRM",
          desc: "Every lead, every conversation, every answer to your qualification questions — synced to your CRM automatically. No manual data entry, no leads falling through the cracks.",
        },
      ]}
      included={[
        "24/7 multi-channel response (WhatsApp, email, web chat, SMS)",
        "AI qualification flow tailored to your business",
        "Automatic calendar booking for qualified leads",
        "Real-time Slack/email alerts for your team",
        "CRM sync for every lead and conversation",
        "Handover logic so human team takes over at the right moment",
        "Weekly performance report (leads captured, conversion rate)",
      ]}
      proofTitle="Dental Clinic Case Study: 40% Fewer Missed Enquiries"
      proofText="A dental clinic in the UK was losing roughly 35% of after-hours appointment enquiries. We built an AI receptionist that responds to WhatsApp and phone enquiries 24/7, qualifies the patient, and books them directly into the clinic's calendar. In the first month, missed enquiries dropped 40% — and the system paid for itself within 6 weeks through recovered bookings."
      tech={["n8n", "WhatsApp Business API", "OpenAI GPT-4o", "Twilio", "Google Calendar API", "HubSpot / GoHighLevel"]}
      color="#F59E0B"
      icon={<Zap size={26} color="#F59E0B" />}
    />
  );
}
