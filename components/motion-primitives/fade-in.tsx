"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

/**
 * Client-side animation wrapper for fade-in effects
 * Use this to add motion to server components without making them client components
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Client-side animation wrapper for fade-in on scroll
 */
export function FadeInView({
  children,
  delay = 0,
  duration = 0.8,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
