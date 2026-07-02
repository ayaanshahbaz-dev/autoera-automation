import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Bot } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Customer Support Agent | AutoEra Automation",
  description:
    "Give your customers instant answers 24/7 without expanding your team. AutoEra builds AI customer support agents that handle FAQs, bookings, and routine queries — so your staff handle only what needs a human.",
};

export default function CustomerSupportPage() {
  return (
    <ServicePageTemplate
      eyebrow="AI Customer Support"
      h1="AI Customer Support Agents — 24/7 Support Without the Overhead"
      tagline="Your customers want answers now. An AI support agent trained on your business can handle the majority of enquiries instantly — leaving your team to focus only on issues that genuinely need a person."
      problem="Hiring staff to cover evening and weekend enquiries is expensive. But leaving customers without support outside business hours costs you bookings, reviews, and retention. Most support queries — FAQs, appointment changes, pricing questions, basic troubleshooting — don't need a human to answer them. They just need a fast, accurate response. That's what we build."
      howItWorks={[
        {
          title: "We Train the Agent on Your Business",
          desc: "We gather your FAQs, product/service details, policies, and processes — then train an AI agent to answer questions the way you would. This isn't a generic chatbot; it knows your business.",
        },
        {
          title: "Agent Deploys Across Your Channels",
          desc: "We connect the agent to your website live chat, WhatsApp Business account, and/or Instagram DMs — wherever your customers actually reach out. One agent, multiple touchpoints.",
        },
        {
          title: "Routine Queries Handled Instantly",
          desc: "FAQs, booking requests, appointment changes, cancellations, pricing — handled instantly at any hour. No wait times, no queues, no dropped conversations.",
        },
        {
          title: "Smart Escalation to Your Team",
          desc: "For anything that genuinely needs a human, the agent escalates — passing the full conversation history so your team picks up without the customer having to repeat themselves.",
        },
      ]}
      included={[
        "Custom AI agent trained on your business knowledge",
        "Live chat widget integration for your website",
        "WhatsApp Business API connection",
        "FAQ handling and booking/rescheduling flows",
        "Smart escalation with full conversation context",
        "Continuous learning — agent improves as new FAQs emerge",
        "Monthly review of agent performance and gaps",
      ]}
      proofTitle="AI Receptionist for a UK Dental Clinic"
      proofText="The same dental clinic case study that demonstrates our lead response capability also shows our customer support build in action. The AI agent answers patient questions (what does the procedure involve, how much does it cost, do you accept NHS patients), handles appointment booking, and manages rescheduling — all via WhatsApp. The clinic's front desk now handles 40% fewer routine calls."
      tech={["OpenAI GPT-4o", "n8n", "WhatsApp Business API", "Crisp / Intercom", "Make (Integromat)", "Custom knowledge base"]}
      color="#38bdf8"
      icon={<Bot size={26} color="#38bdf8" />}
    />
  );
}
