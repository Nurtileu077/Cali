"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { Suspense } from "react";

const categories = ["Все", "Платья", "Костюмы", "Блузы", "Верхняя одежда", "Юбки", "Брюки", "Аксессуары"];

const sortOptions = [
  { label: "По умолчанию", value: "default" },
  { label: "По убыванию цены", value: "desc" },
  { label: "По возрастанию цены", value: "asc" },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "Все";

  const [activeCategory, setActiveCategory] = useState(
    categories.includes(categoryParam) ? categoryParam : "Все"
  );
  const [sort, setSort] = useState("default");
  const [filterOpen, setFilterOpen] = useState(false);
  const [gridCols, setGridCols] = useState<2 | 4>(4);

  const filtered = products.filter((p) =>
    activeCategory === "Все" ? true : p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\D/g, ""));
    const priceB = parseInt(b.price.replace(/\D/g, ""));
    if (sort === "asc") return priceA - priceB;
    if (sort === "desc") return priceB - priceA;
    return 0;
  });

  return (
    <div className="pt-14 md:pt-16 min-h-screen bg-white">
      {/* Page header */}
      <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl md:text-3xl font-light italic" style={{ color: "#1B365D" }}>
            Каталог
          </h1>
          <div className="flex items-center gap-4">
            {/* Grid toggle */}
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => setGridCols(2)} aria-label="2 columns">
                <svg className="w-5 h-5" style={{ color: gridCols === 2 ? "#1B365D" : "#ccc" }} fill="currentColor" viewBox="0 0 20 20">
                  <rect x="1" y="1" width="8" height="8" /><rect x="11" y="1" width="8" height="8" /><rect x="1" y="11" width="8" height="8" /><rect x="11" y="11" width="8" height="8" />
                </svg>
              </button>
              <button onClick={() => setGridCols(4)} aria-label="4 columns">
                <svg className="w-5 h-5" style={{ color: gridCols === 4 ? "#1B365D" : "#ccc" }} fill="currentColor" viewBox="0 0 20 20">
                  <rect x="0" y="1" width="4" height="8" /><rect x="5.3" y="1" width="4" height="8" /><rect x="10.6" y="1" width="4" height="8" /><rect x="16" y="1" width="4" height="8" />
                  <rect x="0" y="11" width="4" height="8" /><rect x="5.3" y="11" width="4" height="8" /><rect x="10.6" y="11" width="4" height="8" /><rect x="16" y="11" width="4" height="8" />
                </svg>
              </button>
            </div>
            {/* Filter toggle */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-1.5 text-xs tracking-[0.1em]"
              style={{ color: "#1B365D" }}
            >
              Фильтр
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: activeCategory !== "Все" ? "#b8a88a" : "transparent", border: "1px solid #b8a88a" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-8 flex gap-8">
        {/* Products grid */}
        <div className="flex-1 py-8">
          <div
            className="grid gap-3 md:gap-5"
            style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0,1fr))` }}
          >
            {sorted.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-2" style={{ background: "#f5f5f3" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {p.tag && (
                    <span
                      className="absolute top-2 left-2 text-[9px] tracking-[0.15em] uppercase px-2 py-0.5"
                      style={{ background: "#1B365D", color: "#D4C5A9" }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-xs md:text-sm" style={{ color: "#1B365D" }}>{p.name}</span>
                  <span className="text-xs ml-1 shrink-0" style={{ color: "rgba(27,54,93,0.55)" }}>{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter panel */}
        <div
          className="shrink-0 py-8 transition-all duration-300 overflow-hidden"
          style={{ width: filterOpen ? "260px" : "0", opacity: filterOpen ? 1 : 0 }}
        >
          <div style={{ width: "260px" }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-widest uppercase" style={{ color: "#1B365D" }}>Фильтровать по</h3>
              <button onClick={() => setFilterOpen(false)}>
                <svg className="w-4 h-4" style={{ color: "#999" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sort */}
            <div className="mb-8">
              <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#1B365D" }}>Цена</h4>
              {sortOptions.map((o) => (
                <label key={o.value} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    checked={sort === o.value}
                    onChange={() => setSort(o.value)}
                    className="accent-[#1B365D]"
                  />
                  <span className="text-sm" style={{ color: "#444" }}>{o.label}</span>
                </label>
              ))}
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#1B365D" }}>Категории</h4>
              {categories.slice(1).map((cat) => (
                <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeCategory === cat}
                    onChange={() => setActiveCategory(activeCategory === cat ? "Все" : cat)}
                    className="accent-[#1B365D]"
                  />
                  <span className="text-sm" style={{ color: "#444" }}>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="pt-20 text-center">Загрузка...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
