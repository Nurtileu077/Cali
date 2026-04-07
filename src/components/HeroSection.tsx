"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Новая коллекция",
    subtitle: "Весна — Лето 2025",
    description: "Элегантность в каждой детали",
    cta: "Смотреть коллекцию",
    href: "/catalog?category=new",
  },
  {
    title: "Вечерние образы",
    subtitle: "Exclusive Collection",
    description: "Будьте неотразимы на любом мероприятии",
    cta: "Подробнее",
    href: "/catalog?category=evening",
  },
  {
    title: "Базовый гардероб",
    subtitle: "Timeless Essentials",
    description: "Основа безупречного стиля",
    cta: "Выбрать",
    href: "/catalog?category=basics",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#1B365D" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 50%, #2a4a7a 0%, #1B365D 40%, #0f2240 100%)" }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full" style={{ background: "rgba(212,197,169,0.08)" }} />
      <div className="absolute top-0 right-[38%] w-[1px] h-full" style={{ background: "rgba(212,197,169,0.04)" }} />

      {/* Large background letter */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 overflow-hidden pointer-events-none">
        <span
          className="font-serif italic select-none leading-none"
          style={{ fontSize: "45vw", color: "#D4C5A9", opacity: 0.04, fontWeight: 300 }}
        >
          C
        </span>
      </div>

      {/* Slide content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p
          className="text-[10px] tracking-[0.55em] uppercase mb-8"
          style={{ color: "#D4C5A9", opacity: 0.5 }}
        >
          {slide.subtitle}
        </p>
        <h1
          className="font-serif italic font-light leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "#D4C5A9" }}
        >
          {slide.title}
        </h1>
        <div className="w-10 h-[1px] mx-auto mb-8" style={{ background: "rgba(212,197,169,0.35)" }} />
        <p
          className="text-sm tracking-widest mb-12 font-light"
          style={{ color: "#EDE6D6", opacity: 0.6 }}
        >
          {slide.description}
        </p>
        <Link href={slide.href} className="btn-cream-outline">
          {slide.cta}
        </Link>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setVisible(false);
              setTimeout(() => { setCurrent(i); setVisible(true); }, 600);
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "2.5rem" : "0.75rem",
              height: "1px",
              background: "#D4C5A9",
              opacity: i === current ? 0.85 : 0.3,
              transition: "all 0.5s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3">
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ writingMode: "vertical-rl", color: "#D4C5A9", opacity: 0.3 }}
        >
          Scroll
        </span>
        <div style={{ width: "1px", height: "48px", background: "rgba(212,197,169,0.15)", position: "relative", overflow: "hidden" }}>
          <style>{`@keyframes sh{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "50%", background: "rgba(212,197,169,0.6)", animation: "sh 2s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
