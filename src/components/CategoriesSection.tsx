"use client";

import Link from "next/link";

const categories = [
  {
    name: "Платья",
    slug: "dresses",
    image: "linear-gradient(135deg, #1B365D 0%, #2a4a7a 100%)",
    count: 24,
  },
  {
    name: "Костюмы",
    slug: "suits",
    image: "linear-gradient(135deg, #2a4a7a 0%, #1B365D 100%)",
    count: 18,
  },
  {
    name: "Блузы",
    slug: "blouses",
    image: "linear-gradient(135deg, #0f2240 0%, #1B365D 100%)",
    count: 32,
  },
  {
    name: "Аксессуары",
    slug: "accessories",
    image: "linear-gradient(135deg, #1B365D 0%, #0f2240 100%)",
    count: 45,
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-cream-dark mb-4">
            Откройте для себя
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-navy font-light italic">
            Категории
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalog?category=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: cat.image }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl text-cream-light italic mb-2">
                  {cat.name}
                </h3>
                <p className="text-cream-light/60 text-xs tracking-[0.2em] uppercase">
                  {cat.count} моделей
                </p>
                <div className="mt-6 w-8 h-[1px] bg-cream/40 group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
