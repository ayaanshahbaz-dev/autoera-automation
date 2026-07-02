import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress, AnimatedBackground } from "@/components/ui/animations";
import { MagneticCursor } from "@/components/ui/MagneticCursor";

export const metadata: Metadata = {
  title: "AutoEra Automation | AI Automation Systems for Growing Businesses",
  description:
    "AutoEra Automation builds AI-powered systems that capture leads, handle support, and eliminate manual admin — so growing businesses can scale without hiring. Book a free call.",
  metadataBase: new URL("https://autoera.site"),
  openGraph: {
    type: "website",
    siteName: "AutoEra Automation",
    title: "AutoEra Automation | AI Automation Systems for Growing Businesses",
    description:
      "AI automation systems that capture leads, handle customer support, and eliminate manual admin for growing businesses.",
    url: "https://autoera.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoEra Automation | AI Automation Systems for Growing Businesses",
    description: "AI automation systems for growing businesses. Book a free call.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
