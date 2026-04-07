"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-cream-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/catalog" className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors duration-300">
            Каталог
          </Link>
          <Link href="/catalog?category=new" className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors duration-300">
            Новинки
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-3xl italic text-cream tracking-wide" style={{ fontWeight: 300 }}>
            cali
          </span>
          <span className="text-cream-light text-[10px] tracking-[0.35em] uppercase mt-[-2px]">
            couturier
          </span>
        </Link>

        {/* Right nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors duration-300">
            О нас
          </Link>
          <Link href="/contact" className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors duration-300">
            Контакты
          </Link>
        </nav>

        {/* Cart icon */}
        <button className="lg:hidden text-cream-light" aria-label="Cart">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-navy transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors">
            Каталог
          </Link>
          <Link href="/catalog?category=new" onClick={() => setIsMobileMenuOpen(false)} className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors">
            Новинки
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors">
            О нас
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-cream-light text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
