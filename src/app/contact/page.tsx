import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact AutoEra | Book a Free AI Automation Strategy Call",
  description:
    "Book a free 30-minute call with AutoEra Automation. Tell us about your business and we'll identify the highest-ROI automations — no commitment required.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
