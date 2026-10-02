"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in" | "zoom-in" | "zoom-in-left" | "zoom-in-right" | "flip-up";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;

    const animations: Record<string, string> = {
      "fade-up": "translateY(40px)",
      "fade-left": "translateX(-40px)",
      "fade-right": "translateX(40px)",
      "fade-in": "none",
      "zoom-in": "scale(0.9)",
      "zoom-in-left": "scale(0.9) translateX(-30px)",
      "zoom-in-right": "scale(0.9) translateX(30px)",
      "flip-up": "perspective(600px) rotateX(10deg) translateY(30px)",
    };

    el.style.transform = animations[animation] || animations["fade-up"];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
