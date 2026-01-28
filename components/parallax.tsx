"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  from: number;
  to: number;
  className?: string;
}

export function Parallax({ children, from, to, className }: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // Larger range so effect is noticeable across typical page scroll lengths
  const y = useTransform(scrollY, [0, 2400], [from, to]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function ParallaxOrbs() {
  // Decorative, lightweight parallax background similar in feel to experiencewelcome.com
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Parallax
        from={0}
        to={-60}
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      >
        <span />
      </Parallax>
      <Parallax
        from={0}
        to={90}
        className="absolute top-10 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      >
        <span />
      </Parallax>
      <Parallax
        from={0}
        to={-120}
        className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      >
        <span />
      </Parallax>
    </div>
  );
}

