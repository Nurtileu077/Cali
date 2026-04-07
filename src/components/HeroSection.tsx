"use client";

import Link from "next/link";
import Image from "next/image";
import { SAMPLE_IMAGE } from "@/lib/products";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" style={{ background: "#1B365D" }}>
      {/* Full-bleed image */}
      <Image
        src={SAMPLE_IMAGE}
        alt="Cali Couturier"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,34,64,0.35) 0%, rgba(15,34,64,0.15) 50%, rgba(15,34,64,0.6) 100%)" }} />

      {/* Text content — bottom */}
      <div
        className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
      >
        <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(212,197,169,0.7)" }}>
          Весна — Лето 2025
        </p>
        <h1
          className="font-serif italic font-light leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#EDE6D6" }}
        >
          Новая коллекция
        </h1>
        <Link href="/catalog?category=new" className="btn-cream-outline">
          Смотреть коллекцию
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2">
        <div style={{ width: "1px", height: "48px", background: "rgba(212,197,169,0.3)", position: "relative", overflow: "hidden" }}>
          <style>{`@keyframes sh{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "rgba(212,197,169,0.8)", animation: "sh 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
