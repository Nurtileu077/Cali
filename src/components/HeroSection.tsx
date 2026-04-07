"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SAMPLE_IMAGE } from "@/lib/products";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px", background: "#1B365D" }}
    >
      {/* Background image — plain img tag for reliable loading */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SAMPLE_IMAGE}
        alt="Cali Couturier"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(15,34,64,0.2) 0%, rgba(15,34,64,0.05) 40%, rgba(15,34,64,0.55) 100%)" }}
      />

      {/* Text */}
      <div
        className="absolute bottom-14 left-6 md:left-14 right-6 md:right-14 transition-all duration-700"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
      >
        <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(212,197,169,0.65)" }}>
          Весна — Лето 2025
        </p>
        <h1
          className="font-serif italic font-light leading-[0.9] mb-7"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", color: "#EDE6D6" }}
        >
          Новая коллекция
        </h1>
        <Link href="/catalog?category=new" className="btn-cream-outline">
          Смотреть коллекцию
        </Link>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 right-8 hidden md:block">
        <style>{`@keyframes sh{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
        <div style={{ width: "1px", height: "44px", background: "rgba(212,197,169,0.2)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, width: "100%", height: "50%", background: "rgba(212,197,169,0.7)", animation: "sh 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
