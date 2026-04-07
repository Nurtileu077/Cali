"use client";

import { use, useState, useRef } from "react";
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
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name ?? "");
  const [imgIdx, setImgIdx] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");
  const [added, setAdded] = useState(false);

  // Touch swipe for mobile gallery
  const touchStartX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) setImgIdx((prev) => Math.min(prev + 1, product.images.length - 1));
    if (dx > 40) setImgIdx((prev) => Math.max(prev - 1, 0));
    touchStartX.current = null;
  }

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
      label: "Состав и детали",
      content: (
        <ul className="space-y-2">
          {product.details?.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(27,54,93,0.65)" }}>
              <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "#b8a88a" }} />
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
        <div className="space-y-3 text-sm" style={{ color: "rgba(27,54,93,0.65)" }}>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#b8a88a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <p>Бесплатная доставка по Казахстану. Срок — 2–5 рабочих дней.</p>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#b8a88a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <p>Возврат в течение 14 дней при сохранении товарного вида и бирок.</p>
          </div>
        </div>
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
                  <th key={h} className="text-left py-2 pr-4 font-normal" style={{ color: "#b8a88a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIZE_TABLE.map(([s, ...vals]) => (
                <tr key={s} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td className="py-2.5 pr-4 font-medium" style={{ color: "#1B365D" }}>{s}</td>
                  {vals.map((v, i) => (
                    <td key={i} className="py-2.5 pr-4" style={{ color: "rgba(27,54,93,0.6)" }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-14 md:pt-16 bg-white min-h-screen pb-24 md:pb-0">
      {/* Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-[11px] px-8 py-3" style={{ color: "rgba(27,54,93,0.35)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <Link href="/" className="hover:opacity-70 transition-opacity">Главная</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:opacity-70 transition-opacity">Каталог</Link>
        <span>/</span>
        <span style={{ color: "#1B365D" }}>{product.name}</span>
      </div>

      {/* Main layout */}
      <div className="md:grid md:grid-cols-[260px_1fr_300px]">

        {/* LEFT: info + accordions (desktop only) */}
        <div
          className="hidden md:flex flex-col px-8 py-8"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
          <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#b8a88a" }}>
            {product.category}
          </p>
          <h1 className="font-serif text-2xl font-light italic leading-tight mb-1" style={{ color: "#1B365D" }}>
            {product.name}
          </h1>
          <p className="text-lg mb-6" style={{ color: "#1B365D" }}>{product.price}</p>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(27,54,93,0.55)" }}>
            {product.description}
          </p>

          {/* Accordions */}
          <div className="flex-1">
            {accordions.map((acc) => (
              <div key={acc.key} style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                <button
                  onClick={() => toggleAccordion(acc.key)}
                  className="w-full flex items-center justify-between py-4 text-sm text-left"
                  style={{ color: "#1B365D" }}
                >
                  {acc.label}
                  <svg
                    className="w-3 h-3 transition-transform duration-300 shrink-0"
                    style={{ transform: openAccordion === acc.key ? "rotate(180deg)" : "rotate(0deg)", color: "#b8a88a" }}
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
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} />
          </div>
        </div>

        {/* CENTER: image gallery */}
        <div className="relative" style={{ background: "#f5f5f3" }}>
          {/* Desktop thumbnails strip (left side) */}
          {product.images.length > 1 && (
            <div className="hidden md:flex flex-col gap-2 absolute left-3 top-3 z-10">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className="relative overflow-hidden"
                  style={{
                    width: 52, height: 66,
                    background: "#e8e8e6",
                    outline: i === imgIdx ? "1.5px solid #1B365D" : "1.5px solid transparent",
                    outlineOffset: 1,
                  }}
                >
                  <Image src={src} alt="" fill className="object-cover object-top" sizes="52px" />
                </button>
              ))}
            </div>
          )}

          {/* Main image with touch swipe */}
          <div
            className="relative"
            style={{ aspectRatio: "3/4" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {product.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={product.name}
                fill
                priority={i === 0}
                className="object-cover object-top"
                style={{ opacity: i === imgIdx ? 1 : 0, transition: "opacity 0.2s ease" }}
                sizes="(max-width: 768px) 100vw, calc(100vw - 560px)"
              />
            ))}

            {/* Mobile dot indicator */}
            {product.images.length > 1 && (
              <div className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    style={{
                      height: "2px",
                      borderRadius: "1px",
                      background: i === imgIdx ? "#1B365D" : "rgba(255,255,255,0.5)",
                      transition: "all 0.2s",
                      width: i === imgIdx ? "20px" : "8px",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Mobile nav arrows */}
            {product.images.length > 1 && (
              <>
                {imgIdx > 0 && (
                  <button
                    onClick={() => setImgIdx((p) => p - 1)}
                    className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10"
                    style={{ background: "rgba(255,255,255,0.8)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "#1B365D" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {imgIdx < product.images.length - 1 && (
                  <button
                    onClick={() => setImgIdx((p) => p + 1)}
                    className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-10"
                    style={{ background: "rgba(255,255,255,0.8)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "#1B365D" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* RIGHT: colors, sizes, add to cart */}
        <div
          className="px-5 md:px-7 py-6 md:py-8"
          style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
        >
          {/* Mobile: name + price */}
          <div className="md:hidden mb-7">
            <p className="text-[9px] tracking-[0.3em] uppercase mb-1.5" style={{ color: "#b8a88a" }}>{product.category}</p>
            <h1 className="font-serif text-2xl font-light italic leading-tight mb-2" style={{ color: "#1B365D" }}>{product.name}</h1>
            <p className="text-lg font-light" style={{ color: "#1B365D" }}>{product.price}</p>
          </div>

          {/* Color selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#b8a88a" }}>Цвет</span>
                <span className="text-xs" style={{ color: "rgba(27,54,93,0.6)" }}>{selectedColor}</span>
              </div>
              <div className="flex gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                    className="relative"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c.hex,
                      border: selectedColor === c.name ? "2px solid #1B365D" : "2px solid transparent",
                      outline: selectedColor === c.name ? "1px solid rgba(27,54,93,0.2)" : "none",
                      outlineOffset: 2,
                      transition: "all 0.15s",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size selector — pill grid */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#b8a88a" }}>Размер</span>
              <button className="text-[10px] underline underline-offset-2" style={{ color: "rgba(27,54,93,0.4)" }}>
                Таблица размеров
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {product.sizes?.map((size) => {
                const active = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="py-2.5 text-xs transition-all duration-150 text-center"
                    style={{
                      border: active ? "1px solid #1B365D" : "1px solid rgba(27,54,93,0.15)",
                      color: active ? "#ffffff" : "rgba(27,54,93,0.65)",
                      background: active ? "#1B365D" : "transparent",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className="w-full py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300 mb-3"
            style={{
              background: added
                ? "#2d5a3a"
                : selectedSize
                ? "#1B365D"
                : "rgba(27,54,93,0.15)",
              color: added
                ? "#ffffff"
                : selectedSize
                ? "#D4C5A9"
                : "rgba(27,54,93,0.35)",
              cursor: selectedSize ? "pointer" : "not-allowed",
            }}
          >
            {added ? "✓ Добавлено в корзину" : "Добавить в корзину"}
          </button>

          {!selectedSize && (
            <p className="text-center text-[11px] mb-4" style={{ color: "#b8a88a" }}>
              Пожалуйста, выберите размер
            </p>
          )}

          {/* Trust badges */}
          <div className="mt-6 space-y-2.5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "1.25rem" }}>
            {[
              { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12", label: "Бесплатная доставка по Казахстану" },
              { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99", label: "Возврат в течение 14 дней" },
              { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "Премиальное качество материалов" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "#b8a88a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-[11px]" style={{ color: "rgba(27,54,93,0.5)" }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Mobile accordions */}
          <div className="md:hidden mt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            {accordions.map((acc) => (
              <div key={acc.key} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <button
                  onClick={() => toggleAccordion(acc.key)}
                  className="w-full flex items-center justify-between py-4 text-sm text-left"
                  style={{ color: "#1B365D" }}
                >
                  {acc.label}
                  <svg
                    className="w-3 h-3 transition-transform duration-300 shrink-0"
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

      {/* Mobile sticky bottom bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3"
        style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex-1">
            {selectedSize
              ? <p className="text-xs" style={{ color: "rgba(27,54,93,0.5)" }}>Размер: <strong style={{ color: "#1B365D" }}>{selectedSize}</strong></p>
              : <p className="text-xs" style={{ color: "#b8a88a" }}>Выберите размер выше</p>
            }
            <p className="text-sm font-light" style={{ color: "#1B365D" }}>{product.price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className="px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300"
            style={{
              background: added ? "#2d5a3a" : selectedSize ? "#1B365D" : "rgba(27,54,93,0.2)",
              color: added ? "#fff" : selectedSize ? "#D4C5A9" : "rgba(27,54,93,0.4)",
              cursor: selectedSize ? "pointer" : "not-allowed",
              minWidth: "160px",
            }}
          >
            {added ? "✓ Добавлено" : "В корзину"}
          </button>
        </div>
      </div>

      {/* Recommended */}
      <div className="px-5 md:px-8 py-16" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#b8a88a" }}>Вам может понравиться</p>
        <h2 className="font-serif text-3xl font-light italic mb-8" style={{ color: "#1B365D" }}>
          Похожие товары
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
