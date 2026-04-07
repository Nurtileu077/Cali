"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavigationDrawer from "./NavigationDrawer";
import { useCart } from "@/lib/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const dark = !scrolled && !drawerOpen;
  const fg = dark ? "#D4C5A9" : "#1B365D";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "#ffffff" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(27,54,93,0.1)" : "none",
        }}
      >
        {/* 3-col grid — eliminates logo absolute-positioning bug */}
        <div
          className="max-w-screen-xl mx-auto px-5 md:px-8 grid items-center"
          style={{ gridTemplateColumns: "1fr auto 1fr", height: "56px" }}
        >
          {/* Left: hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Меню"
            className="flex flex-col justify-center gap-[5px] w-8"
          >
            <span className="block h-[1px] w-5 transition-colors duration-300" style={{ background: fg }} />
            <span className="block h-[1px] w-5 transition-colors duration-300" style={{ background: fg }} />
          </button>

          {/* Center: logo — always perfectly centered */}
          <Link href="/" className="flex flex-col items-center">
            <span
              className="font-serif italic leading-none"
              style={{ fontSize: "1.45rem", fontWeight: 300, color: fg, letterSpacing: "0.02em", transition: "color 0.3s" }}
            >
              cali
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans, Montserrat, sans-serif)",
                fontSize: "7px",
                letterSpacing: "0.42em",
                textTransform: "uppercase",
                color: dark ? "rgba(212,197,169,0.6)" : "rgba(27,54,93,0.5)",
                marginTop: "-1px",
                transition: "color 0.3s",
              }}
            >
              couturier
            </span>
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4">
            <Link href="/login" aria-label="Аккаунт">
              <svg
                className="w-[18px] h-[18px]"
                style={{ color: fg, transition: "color 0.3s" }}
                fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </Link>
            <Link href="/cart" aria-label="Корзина" className="relative">
              <svg
                className="w-[18px] h-[18px]"
                style={{ color: fg, transition: "color 0.3s" }}
                fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.63.63-.18 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {count > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-medium"
                  style={{ background: "#1B365D", color: "#D4C5A9" }}
                >
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
