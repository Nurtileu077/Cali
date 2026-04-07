"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavigationDrawer from "./NavigationDrawer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !scrolled && !drawerOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "#fff" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">

          {/* Left: hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Меню"
            className="flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className="block h-[1px] w-5 transition-colors" style={{ background: isDark ? "#D4C5A9" : "#1B365D" }} />
            <span className="block h-[1px] w-5 transition-colors" style={{ background: isDark ? "#D4C5A9" : "#1B365D" }} />
          </button>

          {/* Center: logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span
              className="font-serif italic leading-none"
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                color: isDark ? "#D4C5A9" : "#1B365D",
                letterSpacing: "0.02em",
                transition: "color 0.3s",
              }}
            >
              cali
            </span>
            <span
              className="text-[7px] tracking-[0.45em] uppercase"
              style={{
                fontFamily: "var(--font-sans, Montserrat, sans-serif)",
                color: isDark ? "rgba(212,197,169,0.65)" : "rgba(27,54,93,0.6)",
                marginTop: "-1px",
                transition: "color 0.3s",
              }}
            >
              couturier
            </span>
          </Link>

          {/* Right: account + cart */}
          <div className="flex items-center gap-4">
            <Link href="/login" aria-label="Аккаунт">
              <svg
                className="w-5 h-5 transition-colors"
                style={{ color: isDark ? "#D4C5A9" : "#1B365D" }}
                fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </Link>
            <Link href="/cart" aria-label="Корзина">
              <svg
                className="w-5 h-5 transition-colors"
                style={{ color: isDark ? "#D4C5A9" : "#1B365D" }}
                fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
