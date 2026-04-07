"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLeft = [
  { label: "Каталог", href: "/catalog" },
  { label: "Новинки", href: "/catalog?category=new" },
];
const navRight = [
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "#1B365D" : "transparent",
        boxShadow: scrolled ? "0 1px 20px rgba(15,34,64,0.3)" : "none",
        paddingTop: scrolled ? "12px" : "24px",
        paddingBottom: scrolled ? "12px" : "24px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Desktop left nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLeft.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:opacity-100"
              style={{ color: "#D4C5A9", opacity: 0.7, fontFamily: "var(--font-sans)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo — always centered */}
        <Link href="/" className="flex flex-col items-center mx-auto lg:mx-0">
          <span
            className="font-serif italic leading-none"
            style={{ fontSize: "1.75rem", fontWeight: 300, color: "#D4C5A9", letterSpacing: "0.02em" }}
          >
            cali
          </span>
          <span
            className="font-sans text-[8px] tracking-[0.45em] uppercase"
            style={{ color: "#D4C5A9", opacity: 0.7, marginTop: "-1px" }}
          >
            couturier
          </span>
        </Link>

        {/* Desktop right nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navRight.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: "#D4C5A9", opacity: 0.7, fontFamily: "var(--font-sans)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{ color: "#D4C5A9" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "320px" : "0",
          background: "#1B365D",
        }}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {[...navLeft, ...navRight].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "#D4C5A9", opacity: 0.75 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
