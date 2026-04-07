"use client";

import Link from "next/link";

const products = [
  { id: 1, name: "Платье «Элегия»", price: "185 000 ₸", category: "Вечерние платья", tag: "NEW", accent: "#D4C5A9" },
  { id: 2, name: "Костюм «Аврора»", price: "245 000 ₸", category: "Костюмы", tag: "NEW", accent: "#c8b89a" },
  { id: 3, name: "Блуза «Грация»", price: "78 000 ₸", category: "Блузы", tag: "", accent: "#D4C5A9" },
  { id: 4, name: "Платье «Серенада»", price: "210 000 ₸", category: "Коктейльные платья", tag: "NEW", accent: "#c8b89a" },
  { id: 5, name: "Жакет «Виктория»", price: "165 000 ₸", category: "Верхняя одежда", tag: "", accent: "#D4C5A9" },
  { id: 6, name: "Юбка «Кармен»", price: "95 000 ₸", category: "Юбки", tag: "NEW", accent: "#c8b89a" },
];

const cardBgs = [
  "bg-[#1B365D]",
  "bg-[#162e52]",
  "bg-[#1e3d6a]",
  "bg-[#0f2240]",
  "bg-[#1B365D]",
  "bg-[#162e52]",
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8a88a] mb-3">
              Избранное
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1B365D] font-light italic">
              Новинки
            </h2>
          </div>
          <Link
            href="/catalog"
            className="mt-6 md:mt-0 text-xs tracking-[0.2em] uppercase text-[#1B365D] border-b border-[#1B365D]/30 pb-1 hover:border-[#1B365D] transition-colors duration-300"
          >
            Смотреть все →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              {/* Card image area */}
              <div className={`relative aspect-[3/4] overflow-hidden mb-4 ${cardBgs[i]}`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,197,169,0.3) 10px, rgba(212,197,169,0.3) 11px)`,
                  }}
                />
                {/* Center logo mark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className="font-serif text-[120px] leading-none italic select-none"
                    style={{ color: product.accent, opacity: 0.15, fontWeight: 300 }}
                  >
                    C
                  </span>
                </div>
                {/* Silhouette suggestion */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-48 rounded-t-full opacity-10"
                  style={{ background: product.accent }}
                />

                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#D4C5A9] text-[#1B365D] text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-sans font-medium">
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1B365D]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="w-full p-5">
                    <span className="block w-full text-center bg-[#D4C5A9] text-[#1B365D] text-[10px] tracking-[0.2em] uppercase py-3 font-medium hover:bg-[#EDE6D6] transition-colors">
                      Подробнее
                    </span>
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8a88a] mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl text-[#1B365D] mb-1">{product.name}</h3>
                <p className="text-sm text-[#1B365D]/60 font-sans">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
