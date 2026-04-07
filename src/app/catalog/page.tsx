"use client";

import Link from "next/link";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Платье «Элегия»", price: "185 000 ₸", category: "dresses", tag: "new" },
  { id: 2, name: "Костюм «Аврора»", price: "245 000 ₸", category: "suits", tag: "new" },
  { id: 3, name: "Блуза «Грация»", price: "78 000 ₸", category: "blouses", tag: "bestsellers" },
  { id: 4, name: "Платье «Серенада»", price: "210 000 ₸", category: "dresses", tag: "new" },
  { id: 5, name: "Жакет «Виктория»", price: "165 000 ₸", category: "suits", tag: "bestsellers" },
  { id: 6, name: "Юбка «Кармен»", price: "95 000 ₸", category: "skirts", tag: "new" },
  { id: 7, name: "Платье «Ноктюрн»", price: "198 000 ₸", category: "dresses", tag: "evening" },
  { id: 8, name: "Брюки «Софи»", price: "89 000 ₸", category: "pants", tag: "basics" },
  { id: 9, name: "Топ «Аделина»", price: "62 000 ₸", category: "blouses", tag: "new" },
  { id: 10, name: "Пальто «Монако»", price: "320 000 ₸", category: "outerwear", tag: "bestsellers" },
  { id: 11, name: "Платье «Луна»", price: "175 000 ₸", category: "dresses", tag: "evening" },
  { id: 12, name: "Шарф «Кашемир»", price: "45 000 ₸", category: "accessories", tag: "basics" },
];

const filters = [
  { label: "Все", value: "all" },
  { label: "Платья", value: "dresses" },
  { label: "Костюмы", value: "suits" },
  { label: "Блузы", value: "blouses" },
  { label: "Аксессуары", value: "accessories" },
];

const gradients = [
  "linear-gradient(145deg, #1B365D, #2a4a7a)",
  "linear-gradient(145deg, #2a4a7a, #1B365D)",
  "linear-gradient(145deg, #0f2240, #1B365D)",
  "linear-gradient(145deg, #1B365D, #0f2240)",
];

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="text-center px-6 mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-cream-dark mb-4">
          Коллекция
        </p>
        <h1 className="font-serif text-6xl md:text-7xl text-navy font-light italic">
          Каталог
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-16 px-6 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`text-xs tracking-[0.2em] uppercase pb-2 border-b-2 transition-all duration-300 ${
              activeFilter === f.value
                ? "text-navy border-navy"
                : "text-gray border-transparent hover:text-navy"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: gradients[i % gradients.length] }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-cream/10 italic">C</span>
                </div>
                {product.tag === "new" && (
                  <span className="absolute top-4 left-4 bg-cream text-navy text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                    New
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-cream text-navy text-xs tracking-[0.2em] uppercase py-3 hover:bg-cream-light transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-navy">{product.name}</h3>
                <p className="text-sm text-navy/70">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
