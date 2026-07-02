"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, Database, Calendar, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const nodes = [
  { id: 1, icon: MessageSquare, label: "Customer Message", color: "#3b82f6" },
  { id: 2, icon: Bot, label: "AI Qualifies", color: "#F59E0B" },
  { id: 3, icon: Database, label: "CRM Updated", color: "#8b5cf6" },
  { id: 4, icon: Calendar, label: "Calendar Booked", color: "#10b981" },
  { id: 5, icon: CheckCircle2, label: "Confirmed", color: "#22c55e" },
];

export function WorkflowVisualizer() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {nodes.map((node, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex || (activeIndex === 0 && index === nodes.length - 1);
        
        return (
          <div key={node.id} style={{ display: "flex", alignItems: "center", gap: "1rem", position: "relative" }}>
            {index !== nodes.length - 1 && (
              <div style={{ position: "absolute", left: 19, top: 40, width: 2, height: 24, background: "rgba(255,255,255,0.05)" }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isPast ? "100%" : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "100%", background: node.color, boxShadow: `0 0 10px ${node.color}` }}
                />
              </div>
            )}
            <motion.div
              animate={{
                scale: isActive ? 1.1 : 1,
                borderColor: isActive ? node.color : "rgba(255,255,255,0.1)",
                boxShadow: isActive ? `0 0 20px ${node.color}40` : "none"
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <node.icon size={18} color={isActive || isPast ? node.color : "#737373"} />
            </motion.div>
            <motion.p
              animate={{
                color: isActive ? "#FFF" : "#737373",
                x: isActive ? 5 : 0
              }}
              style={{ fontSize: "0.85rem", fontWeight: isActive ? 600 : 500 }}
            >
              {node.label}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
