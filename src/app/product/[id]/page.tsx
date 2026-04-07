"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [selectedSize, setSelectedSize] = useState("");
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    { key: "details", label: "Подробнее", content: product.details?.join(", ") || "" },
    { key: "delivery", label: "Доставка и возврат", content: "Бесплатная доставка по Казахстану от 3 дней. Возврат в течение 14 дней." },
    { key: "care", label: "Уход за изделием", content: "Деликатная стирка при 30°C. Не отбеливать. Гладить при низкой температуре." },
    { key: "sizes", label: "Таблица размеров", content: "XS — 40–42, S — 42–44, M — 44–46, L — 46–48, XL — 48–50" },
  ];

  return (
    <div className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-4 hidden md:flex items-center gap-2 text-xs" style={{ color: "#999" }}>
        <Link href="/" className="hover:text-navy transition-colors">Главная</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-navy transition-colors">Каталог</Link>
        <span>/</span>
        <span style={{ color: "#1B365D" }}>{product.name}</span>
      </div>

      {/* 3-column layout — like therlgn */}
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 md:grid md:grid-cols-[280px_1fr_280px] md:gap-0">

        {/* LEFT: Product info */}
        <div className="hidden md:block py-8 pr-8 border-r" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <p className="text-xs mb-1" style={{ color: "#b8a88a" }}>{product.category}</p>
          <h1 className="font-serif text-2xl font-light italic mb-1" style={{ color: "#1B365D" }}>
            {product.name}
          </h1>
          <p className="text-lg mb-6" style={{ color: "#1B365D" }}>{product.price}</p>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(27,54,93,0.65)" }}>
            {product.description}
          </p>

          {/* Accordion sections */}
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {sections.map((s) => (
              <div key={s.key} className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <button
                  onClick={() => setOpenSection(openSection === s.key ? null : s.key)}
                  className="w-full flex items-center justify-between py-4 text-sm text-left"
                  style={{ color: "#1B365D" }}
                >
                  {s.label}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300"
                    style={{ transform: openSection === s.key ? "rotate(180deg)" : "rotate(0)", color: "#b8a88a" }}
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === s.key && (
                  <p className="pb-4 text-sm leading-relaxed" style={{ color: "rgba(27,54,93,0.6)" }}>
                    {s.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: Image */}
        <div className="relative" style={{ background: "#f5f5f3" }}>
          <div className="relative aspect-[3/4] md:h-[calc(100vh-64px)] md:sticky md:top-16">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT: Size + Buy */}
        <div className="py-6 md:py-8 md:pl-8 md:border-l" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          {/* Mobile product info */}
          <div className="md:hidden mb-6">
            <p className="text-xs mb-1" style={{ color: "#b8a88a" }}>{product.category}</p>
            <h1 className="font-serif text-2xl font-light italic mb-1" style={{ color: "#1B365D" }}>{product.name}</h1>
            <p className="text-lg" style={{ color: "#1B365D" }}>{product.price}</p>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs tracking-widest uppercase" style={{ color: "#1B365D" }}>Размер</p>
              <button className="text-xs underline" style={{ color: "#b8a88a" }}>Таблица размеров</button>
            </div>
            <div className="relative">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-3 text-sm appearance-none border cursor-pointer focus:outline-none"
                style={{ borderColor: "rgba(27,54,93,0.2)", color: selectedSize ? "#1B365D" : "#999" }}
              >
                <option value="" disabled>Выберите размер</option>
                {product.sizes?.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#b8a88a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Add to cart */}
          <button
            className="w-full py-4 text-xs tracking-[0.2em] uppercase mb-3 transition-colors duration-300"
            style={{ background: "#1B365D", color: "#D4C5A9" }}
          >
            Добавить в корзину
          </button>
          <button
            className="w-full py-4 text-xs tracking-[0.2em] uppercase border transition-colors duration-300"
            style={{ borderColor: "rgba(27,54,93,0.2)", color: "#1B365D" }}
          >
            Купить сейчас
          </button>

          {/* Mobile accordion */}
          <div className="md:hidden mt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {sections.map((s) => (
              <div key={s.key} className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <button
                  onClick={() => setOpenSection(openSection === s.key ? null : s.key)}
                  className="w-full flex items-center justify-between py-4 text-sm text-left"
                  style={{ color: "#1B365D" }}
                >
                  {s.label}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300"
                    style={{ transform: openSection === s.key ? "rotate(180deg)" : "rotate(0)", color: "#b8a88a" }}
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === s.key && (
                  <p className="pb-4 text-sm" style={{ color: "rgba(27,54,93,0.6)" }}>{s.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
