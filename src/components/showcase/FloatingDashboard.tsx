"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UserPlus, Send, Database } from "lucide-react";
import { useEffect, useState } from "react";

const notifications = [
  { id: 1, icon: UserPlus, text: "New Lead: John Doe", time: "Just now", color: "#F59E0B" },
  { id: 2, icon: CheckCircle2, text: "Appointment Booked", time: "2m ago", color: "#34d399" },
  { id: 3, icon: Send, text: "Follow-up Sent", time: "5m ago", color: "#3b82f6" },
  { id: 4, icon: Database, text: "CRM Updated", time: "12m ago", color: "#8b5cf6" },
];

export function FloatingDashboard() {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItems((prev) => {
        if (prev.length >= notifications.length) return [];
        return [...prev, notifications[prev.length].id];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: 350, perspective: 1000 }}>
      <motion.div
        initial={{ rotateY: -15, rotateX: 5 }}
        animate={{ rotateY: [-15, -5, -15], rotateX: [5, 10, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(20,20,20,0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(245,158,11,0.1)"
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "-0.5rem -1.5rem 0.5rem" }} />
        
        {notifications.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={activeItems.includes(n.id) ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "0.85rem 1rem",
              borderRadius: 12,
            }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${n.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <n.icon size={16} color={n.color} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "#FFF", fontSize: "0.85rem", fontWeight: 600 }}>{n.text}</p>
              <p style={{ color: "#737373", fontSize: "0.75rem" }}>{n.time}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
