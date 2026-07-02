"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bot, User } from "lucide-react";

const messages = [
  { id: 1, type: "user", text: "Hi, I'd like to book a consultation." },
  { id: 2, type: "ai", text: "Absolutely. What day works best for you?" },
  { id: 3, type: "user", text: "Tuesday afternoon." },
  { id: 4, type: "ai", text: "Perfect. I've booked you for Tuesday at 2 PM. A confirmation has been sent." },
];

export function LiveChatPreview() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let step = 0;
    
    const showNext = () => {
      if (step >= messages.length) return;
      
      const msg = messages[step];
      if (msg.type === "ai") {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
          step++;
          setTimeout(showNext, 1500);
        }, 1200);
      } else {
        setVisibleMessages((prev) => [...prev, msg.id]);
        step++;
        setTimeout(showNext, 1000);
      }
    };
    
    const timer = setTimeout(showNext, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: 320, background: "rgba(15,15,15,0.8)", backdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
      {/* Header */}
      <div style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Bot size={18} color="#F59E0B" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: "absolute", bottom: 0, right: 0, width: 10, height: 10, borderRadius: "50%", background: "#22c55e", border: "2px solid #0f0f0f" }}
          />
        </div>
        <div>
          <p style={{ color: "#FFF", fontSize: "0.85rem", fontWeight: 600 }}>AutoEra AI</p>
          <p style={{ color: "#22c55e", fontSize: "0.7rem" }}>Online</p>
        </div>
      </div>
      
      {/* Chat Body */}
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", height: 260, overflowY: "auto" }}>
        <AnimatePresence>
          {visibleMessages.map((id) => {
            const msg = messages.find(m => m.id === id)!;
            const isUser = msg.type === "user";
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                style={{
                  display: "flex",
                  alignSelf: isUser ? "flex-end" : "flex-start",
                  maxWidth: "85%"
                }}
              >
                <div style={{
                  padding: "0.75rem 1rem",
                  borderRadius: 16,
                  borderBottomRightRadius: isUser ? 4 : 16,
                  borderBottomLeftRadius: !isUser ? 4 : 16,
                  background: isUser ? "#F59E0B" : "rgba(255,255,255,0.05)",
                  color: isUser ? "#000" : "#E5E5E5",
                  fontSize: "0.82rem",
                  lineHeight: 1.4,
                  fontWeight: isUser ? 500 : 400
                }}>
                  {msg.text}
                </div>
              </motion.div>
            );
          })}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ alignSelf: "flex-start", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: 16, borderBottomLeftRadius: 4 }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    style={{ width: 6, height: 6, borderRadius: "50%", background: "#A3A3A3" }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
