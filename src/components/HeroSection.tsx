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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cream/3 rounded-full blur-2xl" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-500 ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="text-cream/60 text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in">
          {slide.subtitle}
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream font-light italic leading-tight mb-6">
          {slide.title}
        </h1>
        <p className="text-cream-light/70 text-lg md:text-xl font-light tracking-wide mb-10">
          {slide.description}
        </p>
        <Link
          href={slide.href}
          className="inline-block border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-cream hover:text-navy transition-all duration-500"
        >
          {slide.cta}
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrent(i);
                setIsAnimating(false);
              }, 500);
            }}
            className={`w-8 h-[2px] transition-all duration-300 ${
              i === current ? "bg-cream" : "bg-cream/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-cream/40 text-[10px] tracking-[0.2em] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-cream/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cream/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
