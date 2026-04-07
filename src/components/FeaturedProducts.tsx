"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Платье «Элегия»",
    price: "185 000 ₸",
    category: "Вечерние платья",
    color: "#1B365D",
  },
  {
    id: 2,
    name: "Костюм «Аврора»",
    price: "245 000 ₸",
    category: "Костюмы",
    color: "#2a4a7a",
  },
  {
    id: 3,
    name: "Блуза «Грация»",
    price: "78 000 ₸",
    category: "Блузы",
    color: "#0f2240",
  },
  {
    id: 4,
    name: "Платье «Серенада»",
    price: "210 000 ₸",
    category: "Коктейльные платья",
    color: "#1B365D",
  },
  {
    id: 5,
    name: "Жакет «Виктория»",
    price: "165 000 ₸",
    category: "Верхняя одежда",
    color: "#2a4a7a",
  },
  {
    id: 6,
    name: "Юбка «Кармен»",
    price: "95 000 ₸",
    category: "Юбки",
    color: "#0f2240",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-cream-dark mb-4">
              Избранное
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-navy font-light italic">
              Новинки
            </h2>
          </div>
          <Link
            href="/catalog"
            className="mt-6 md:mt-0 text-xs tracking-[0.2em] uppercase text-navy border-b border-navy/30 pb-1 hover:border-navy transition-colors duration-300"
          >
            Смотреть все
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(145deg, ${product.color} 0%, ${product.color}ee 50%, ${product.color}cc 100%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl text-cream/10 italic">
                    C
                  </span>
                </div>
                {/* Quick view */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-cream text-navy text-xs tracking-[0.2em] uppercase py-3 hover:bg-cream-light transition-colors">
                    Быстрый просмотр
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl text-navy">{product.name}</h3>
                <p className="text-sm text-navy/70">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
