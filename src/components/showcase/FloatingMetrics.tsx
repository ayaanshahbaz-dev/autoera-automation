"use client";

import { motion } from "framer-motion";
import { Zap, Users, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

function MetricCard({ title, value, suffix = "", icon: Icon, color, delay, top, left, right, bottom }: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = typeof value === "number" ? value : parseInt(value.replace(/,/g, ""));
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const counter = setInterval(() => {
        start += Math.ceil(end / 20);
        if (start >= end) {
          setCurrent(end);
          clearInterval(counter);
        } else {
          setCurrent(start);
        }
      }, stepTime);
      return () => clearInterval(counter);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const displayValue = current.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      className="animate-float"
      style={{
        position: "absolute",
        top, left, right, bottom,
        background: "rgba(20,20,20,0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "0.85rem 1.25rem",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
      }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={18} color={color} />
      </div>
      <div>
        <p style={{ color: "#A3A3A3", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "0.1rem" }}>{title}</p>
        <p style={{ color: "#FFF", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
          {displayValue}{suffix}
        </p>
      </div>
    </motion.div>
  );
}

export function FloatingMetrics() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <MetricCard
        title="Response Time"
        value={3}
        suffix="s"
        icon={Zap}
        color="#F59E0B"
        delay={0.5}
        top="10%"
        left="-10%"
      />
      <MetricCard
        title="Tasks Automated"
        value={2481}
        suffix="+"
        icon={CheckCircle}
        color="#34d399"
        delay={1.2}
        bottom="15%"
        right="-5%"
      />
      <MetricCard
        title="Leads Captured"
        value={147}
        icon={Users}
        color="#3b82f6"
        delay={2.5}
        top="45%"
        left="-20%"
      />
    </div>
  );
}
