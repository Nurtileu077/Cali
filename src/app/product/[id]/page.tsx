"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import ProductCard from "@/components/ProductCard";

const SIZE_TABLE = [
  ["XS", "80", "60", "42"],
  ["S",  "84", "62", "44"],
  ["M",  "88", "66", "46"],
  ["L",  "94", "70", "48"],
  ["XL", "100","74", "50"],
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const { add } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [imgIdx, setImgIdx] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    if (!selectedSize) return;
    add({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const toggleAccordion = (key: string) => setOpenAccordion(openAccordion === key ? null : key);

  const accordions = [
    {
      key: "details",
      label: "Подробнее",
      content: (
        <ul className="space-y-1.5">
          {product.details?.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm" style={{ color: "rgba(27,54,93,0.65)" }}>
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#b8a88a" }} />
              {d}
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "delivery",
      label: "Доставка и возврат",
      content: (
        <p className="text-sm leading-relaxed" style={{ color: "rgba(27,54,93,0.65)" }}>
          Бесплатная доставка по Казахстану от 2–5 рабочих дней. Возврат в течение 14 дней при сохранении
          товарного вида и бирок.
        </p>
      ),
    },
    {
      key: "sizes",
      label: "Таблица размеров",
      content: (
        <div>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                {["Размер", "Грудь", "Талия", "Бёдра"].map((h) => (
                  <th key={h} className="text-left py-2 pr-3 font-normal" style={{ color: "#b8a88a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZE_TABLE.map(([s, ...vals]) => (
                <tr key={s} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td className="py-2 pr-3 text-sm" style={{ color: "#1B365D" }}>{s}</td>
                  {vals.map((v, i) => (
                    <td key={i} className="py-2 pr-3 text-sm" style={{ color: "rgba(27,54,93,0.6)" }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="text-xs underline mt-3" style={{ color: "#b8a88a" }}>
            Как произвести замеры
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-14 md:pt-16 bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-xs px-8 py-4" style={{ color: "#bbb" }}>
        <Link href="/" className="hover:text-navy">Главная</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-navy">Каталог</Link>
        <span>/</span>
        <span style={{ color: "#1B365D" }}>{product.name}</span>
      </div>

      {/* 3-column layout */}
      <div className="md:grid md:grid-cols-[280px_1fr_280px]">

        {/* LEFT: info + accordions */}
        <div
          className="hidden md:block px-8 py-6"
          style={{ borderRight: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#b8a88a" }}>
            {product.category}
          </p>
          <h1 className="font-serif text-2xl font-light italic mb-1" style={{ color: "#1B365D" }}>
            {product.name}
          </h1>
          <p className="text-xl mb-6" style={{ color: "#1B365D" }}>{product.price}</p>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(27,54,93,0.6)" }}>
            {product.description}
          </p>

          {/* Accordions */}
          {accordions.map((acc) => (
            <div key={acc.key} style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <button
                onClick={() => toggleAccordion(acc.key)}
                className="w-full flex items-center justify-between py-4 text-sm text-left"
                style={{ color: "#1B365D" }}
              >
                {acc.label}
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 shrink-0"
                  style={{
                    transform: openAccordion === acc.key ? "rotate(180deg)" : "rotate(0deg)",
                    color: "#b8a88a",
                  }}
                  fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === acc.key && (
                <div className="pb-5">{acc.content}</div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
        </div>

        {/* CENTER: images */}
        <div style={{ background: "#f5f5f3" }}>
          {/* Thumbnail strip */}
          {product.images.length > 1 && (
            <div className="hidden md:flex gap-1.5 p-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className="relative overflow-hidden shrink-0"
                  style={{
                    width: 48, height: 60,
                    background: "#eee",
                    outline: i === imgIdx ? "2px solid #1B365D" : "none",
                    outlineOffset: 1,
                  }}
                >
                  <Image src={src} alt="" fill className="object-cover object-top" sizes="48px" />
                </button>
              ))}
            </div>
          )}

          {/* Main image */}
          <div
            className="relative"
            style={{ aspectRatio: "3/4" }}
          >
            {product.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={product.name}
                fill
                priority={i === 0}
                className="object-cover object-top"
                style={{ opacity: i === imgIdx ? 1 : 0, transition: "opacity 0.2s" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: sizes + buy */}
        <div
          className="px-5 md:px-6 py-6 md:py-8"
          style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}
        >
          {/* Mobile: name + price */}
          <div className="md:hidden mb-6">
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#b8a88a" }}>{product.category}</p>
            <h1 className="font-serif text-2xl font-light italic mb-1" style={{ color: "#1B365D" }}>{product.name}</h1>
            <p className="text-xl" style={{ color: "#1B365D" }}>{product.price}</p>
          </div>

          {/* Size rows — therlgn style */}
          <div className="mb-1">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className="w-full flex items-center justify-between px-1 py-3.5 text-sm text-left transition-colors"
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  color: selectedSize === size ? "#1B365D" : "rgba(27,54,93,0.55)",
                  fontWeight: selectedSize === size ? 500 : 400,
                  background: selectedSize === size ? "rgba(27,54,93,0.03)" : "transparent",
                }}
              >
                {size}
                {selectedSize === size && (
                  <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "#1B365D" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Selected summary row */}
          <div
            className="flex items-center justify-between px-1 py-3.5 mb-5 text-sm"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", color: "rgba(27,54,93,0.45)" }}
          >
            <span>{selectedSize || "Выберите размер"}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className="w-full py-4 text-sm tracking-widest transition-all duration-300 mb-3 disabled:cursor-not-allowed"
            style={{
              background: added ? "#2a4a7a" : selectedSize ? "#1B365D" : "#ccc",
              color: "#D4C5A9",
            }}
          >
            {added ? "Добавлено ✓" : "Добавить в корзину"}
          </button>

          {!selectedSize && (
            <p className="text-center text-xs mb-3" style={{ color: "#b8a88a" }}>
              Выберите размер
            </p>
          )}

          {/* Shipping info */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(27,54,93,0.5)" }}>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
              </svg>
              Бесплатная доставка по Казахстану
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(27,54,93,0.5)" }}>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Возврат 14 дней
            </div>
          </div>

          {/* Mobile accordions */}
          <div className="md:hidden mt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {accordions.map((acc) => (
              <div key={acc.key} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <button
                  onClick={() => toggleAccordion(acc.key)}
                  className="w-full flex items-center justify-between py-4 text-sm text-left"
                  style={{ color: "#1B365D" }}
                >
                  {acc.label}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 shrink-0"
                    style={{ transform: openAccordion === acc.key ? "rotate(180deg)" : "rotate(0deg)", color: "#b8a88a" }}
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === acc.key && <div className="pb-5">{acc.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div className="px-5 md:px-8 py-16" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
        <h2 className="font-serif text-2xl font-light italic mb-8" style={{ color: "#1B365D" }}>
          Рекомендуемые
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} sizes="(max-width:768px) 50vw, 25vw" />
          ))}
        </div>
      </div>
    </div>
  );
}
