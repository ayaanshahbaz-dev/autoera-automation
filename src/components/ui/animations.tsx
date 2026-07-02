"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  duration?: number;
  style?: React.CSSProperties;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", duration = 0.6, style }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, ...directionOffset[direction] };
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className = "", delay = 0.1, style }: { children: ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const prefersReducedMotion = useReducedMotion();

  const item = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <motion.div variants={item} className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function ImageZoomIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 };
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        originX: 0,
        background: "var(--brand-primary)",
        zIndex: 1000,
      }}
    />
  );
}

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 60%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />
      <motion.div
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(251,146,60,0.02) 0%, transparent 60%)",
          filter: "blur(60px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");
  
  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
        hidden: {},
      }}
      style={{ display: "inline" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function AnimatedGradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.span
      className={`gradient-text ${className}`}
      initial={prefersReducedMotion ? {} : { backgroundPosition: "0% 50%" }}
      animate={prefersReducedMotion ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      style={{ backgroundSize: "200% 200%", display: "inline" }}
    >
      {children}
    </motion.span>
  );
}


export function MagneticElement({ children, className = "", strength = 0.5 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

export function RippleButton({ children, onClick, className = "", style, type = "button", disabled }: any) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      type={type}
      className={`${className} relative overflow-hidden`}
      style={style}
      onClick={handleClick}
      whileHover={{ scale: 1.02, y: -2, boxShadow: "0px 10px 20px rgba(245,158,11,0.2)" }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
    >
      {isRippling ? (
        <span
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: coords.x,
            top: coords.y,
            width: 20,
            height: 20,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
          }}
        />
      ) : null}
      {children}
    </motion.button>
  );
}

export function TiltCard({ children, className = "", style }: any) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
