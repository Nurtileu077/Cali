import Link from "next/link";
import { products } from "@/lib/products";

const CATS = [
  { name: "Платья",          slug: "Платья" },
  { name: "Костюмы",         slug: "Костюмы" },
  { name: "Верхняя одежда",  slug: "Верхняя одежда" },
  { name: "Аксессуары",      slug: "Аксессуары" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-5 md:px-8" style={{ background: "#f5f5f3" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#b8a88a" }}>Коллекции</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic" style={{ color: "#1B365D" }}>Категории</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {CATS.map((cat) => {
            const sample = products.find((p) => p.category === cat.slug)?.images[0];
            return (
              <Link
                key={cat.slug}
                href={`/catalog?category=${encodeURIComponent(cat.slug)}`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden mb-3"
                  style={{ aspectRatio: "3/4", background: "#e8e8e6" }}
                >
                  {sample && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={sample}
                      alt={cat.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "rgba(27,54,93,0.2)" }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "#1B365D" }}>{cat.name}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#b8a88a" }}
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
