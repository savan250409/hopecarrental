"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Fades/slides children into view once, and becomes a
 * no-op (instant, no transform) when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className = "",
  once = true,
  amount = 0.25,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
