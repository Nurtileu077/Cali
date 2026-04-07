"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["Все", "Платья", "Костюмы", "Блузы", "Верхняя одежда", "Юбки", "Брюки", "Аксессуары"];
const PER_PAGE = 12;

/* ─── Grid toggle icons ─────────────────────────────────── */
function GridIcon2() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor">
      <rect x="0" y="0" width="9" height="16" rx="0.5" />
      <rect x="11" y="0" width="9" height="16" rx="0.5" />
    </svg>
  );
}
function GridIcon4() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor">
      <rect x="0" y="0" width="4" height="7" rx="0.5" />
      <rect x="5.3" y="0" width="4" height="7" rx="0.5" />
      <rect x="10.6" y="0" width="4" height="7" rx="0.5" />
      <rect x="16" y="0" width="4" height="7" rx="0.5" />
      <rect x="0" y="9" width="4" height="7" rx="0.5" />
      <rect x="5.3" y="9" width="4" height="7" rx="0.5" />
      <rect x="10.6" y="9" width="4" height="7" rx="0.5" />
      <rect x="16" y="9" width="4" height="7" rx="0.5" />
    </svg>
  );
}
function GridIcon6() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor">
      {[0, 3.5, 7, 10.5, 14, 17.5].map((x) => (
        <g key={x}>
          <rect x={x} y="0" width="2.5" height="7" rx="0.3" />
          <rect x={x} y="9" width="2.5" height="7" rx="0.3" />
        </g>
      ))}
    </svg>
  );
}

function CatalogContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("category") || "Все";

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(catParam) ? catParam : "Все"
  );
  const [cols, setCols] = useState<2 | 4 | 6>(4);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortDir, setSortDir] = useState<"default" | "asc" | "desc">("default");
  const [page, setPage] = useState(1);

  const filtered = products.filter((p) =>
    activeCategory === "Все" ? true : p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    const n = (s: string) => parseInt(s.replace(/\D/g, ""));
    if (sortDir === "asc") return n(a.price) - n(b.price);
    if (sortDir === "desc") return n(b.price) - n(a.price);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const colsClass = {
    2: "grid-cols-2",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-3 md:grid-cols-6",
  }[cols];

  const iconColor = (n: number) => n === cols ? "#1B365D" : "#ccc";

  return (
    <div className="pt-14 md:pt-16 min-h-screen bg-white">

      {/* Toolbar */}
      <div
        className="sticky top-14 md:top-16 z-30 flex items-center justify-between px-4 md:px-8 py-3 bg-white"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        {/* Grid toggles */}
        <div className="flex items-center gap-3">
          <button onClick={() => setCols(2)} aria-label="2 columns" style={{ color: iconColor(2) }}>
            <GridIcon2 />
          </button>
          <button onClick={() => setCols(4)} aria-label="4 columns" style={{ color: iconColor(4) }}>
            <GridIcon4 />
          </button>
          <button onClick={() => setCols(6)} aria-label="6 columns" style={{ color: iconColor(6) }}>
            <GridIcon6 />
          </button>
        </div>

        {/* Filter button */}
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center gap-1.5 text-xs tracking-widest"
          style={{ color: "#1B365D" }}
        >
          Фильтр
          <span
            className="w-1.5 h-1.5 rounded-full border"
            style={{
              borderColor: "#b8a88a",
              background: activeCategory !== "Все" || sortDir !== "default" ? "#b8a88a" : "transparent",
            }}
          />
        </button>
      </div>

      <div className="flex">
        {/* Products */}
        <div className="flex-1 min-w-0">
          <div className={`grid gap-[1px] ${colsClass}`}>
            {paginated.map((p, i) => (
              <div key={p.id} className="p-2 md:p-3">
                <ProductCard
                  product={p}
                  priority={i < 6}
                  sizes={cols === 6 ? "17vw" : cols === 2 ? "50vw" : "(max-width:768px) 50vw, 25vw"}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 py-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center disabled:opacity-30"
                style={{ color: "#1B365D" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className="text-sm w-8 h-8 flex items-center justify-center transition-colors"
                  style={{
                    color: page === i + 1 ? "#1B365D" : "rgba(27,54,93,0.35)",
                    fontWeight: page === i + 1 ? 600 : 400,
                    borderBottom: page === i + 1 ? "1px solid #1B365D" : "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center disabled:opacity-30"
                style={{ color: "#1B365D" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Filter panel */}
        <div
          className="shrink-0 overflow-hidden transition-all duration-300"
          style={{ width: filterOpen ? "260px" : "0", opacity: filterOpen ? 1 : 0 }}
        >
          <div
            className="w-[260px] py-6 px-6 sticky top-28"
            style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs tracking-widest uppercase" style={{ color: "#1B365D" }}>
                Фильтровать по
              </span>
              <button onClick={() => setFilterOpen(false)} style={{ color: "#aaa" }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sort */}
            <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: "#1B365D" }}>Цена</p>
            {(["default", "desc", "asc"] as const).map((v, i) => (
              <label key={v} className="flex items-center gap-2 mb-3 cursor-pointer">
                <span
                  className="w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: sortDir === v ? "#1B365D" : "#ccc" }}
                >
                  {sortDir === v && <span className="w-2 h-2 rounded-full block" style={{ background: "#1B365D" }} />}
                </span>
                <span className="text-sm" style={{ color: "#444" }}>
                  {["По умолчанию", "По убыванию", "По возрастанию"][i]}
                </span>
              </label>
            ))}

            {/* Categories */}
            <p className="text-[10px] tracking-widest uppercase mb-4 mt-8" style={{ color: "#1B365D" }}>Категории</p>
            {CATEGORIES.slice(1).map((cat) => (
              <label key={cat} className="flex items-center gap-2 mb-3 cursor-pointer">
                <span
                  className="w-3.5 h-3.5 border flex items-center justify-center shrink-0"
                  style={{ borderColor: activeCategory === cat ? "#1B365D" : "#ddd" }}
                  onClick={() => { setActiveCategory(activeCategory === cat ? "Все" : cat); setPage(1); }}
                >
                  {activeCategory === cat && (
                    <svg className="w-2.5 h-2.5" style={{ color: "#1B365D" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-sm" style={{ color: "#444" }}>{cat}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="pt-20 flex items-center justify-center min-h-screen" style={{ color: "#1B365D" }}>Загрузка...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
