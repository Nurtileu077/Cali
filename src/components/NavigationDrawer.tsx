"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "КАТАЛОГ", href: "/catalog" },
  { label: "НОВИНКИ", href: "/catalog?category=new" },
  { label: "ПЛАТЬЯ", href: "/catalog?category=Платья" },
  { label: "КОСТЮМЫ", href: "/catalog?category=Костюмы" },
  { label: "О НАС", href: "/about" },
  { label: "КОНТАКТЫ", href: "/contact" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ open, onClose }: Props) {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 transition-opacity duration-400"
        style={{
          background: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 bottom-0 z-50 flex flex-col"
        style={{
          width: "min(420px, 90vw)",
          background: "#1a1a1a",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-8 pt-6 pb-2">
          <button onClick={onClose} aria-label="Закрыть">
            <svg className="w-5 h-5" style={{ color: "#9a9a9a" }} fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={onClose}
              className="block py-3 text-2xl font-light transition-colors"
              style={{
                fontFamily: "var(--font-sans, Montserrat, sans-serif)",
                color: "#e0e0e0",
                letterSpacing: "0.05em",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom: email + links */}
        <div className="px-8 pb-8">
          <div className="flex items-center border-b mb-6" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите свой e-mail"
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder-gray-500"
              style={{ color: "#e0e0e0", fontFamily: "var(--font-sans, sans-serif)" }}
            />
            <button className="text-xs tracking-widest uppercase" style={{ color: "#9a9a9a" }}>
              Подписаться
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {["Клиентский сервис", "Instagram", "Telegram"].map((t) => (
              <a key={t} href="#" className="text-xs" style={{ color: "#666", fontFamily: "var(--font-sans, sans-serif)" }}>
                {t}
              </a>
            ))}
          </div>

          <p className="text-xs mt-6" style={{ color: "#444" }}>
            © 2024 Cali Couturier
          </p>
        </div>
      </div>
    </>
  );
}
