import Link from "next/link";

const categories = [
  { name: "Платья", slug: "dresses", count: 24, rotate: "-1deg" },
  { name: "Костюмы", slug: "suits", count: 18, rotate: "0.5deg" },
  { name: "Блузы", slug: "blouses", count: 32, rotate: "-0.5deg" },
  { name: "Аксессуары", slug: "accessories", count: 45, rotate: "1deg" },
];

const patterns = [
  { bg: "#1B365D", accent: "#2a4a7a" },
  { bg: "#0f2240", accent: "#1B365D" },
  { bg: "#162e52", accent: "#243f6b" },
  { bg: "#1a3660", accent: "#0f2240" },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#b8a88a" }}>
            Откройте для себя
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic" style={{ color: "#1B365D" }}>
            Категории
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/catalog?category=${cat.slug}`}
              className="group relative aspect-[2/3] overflow-hidden"
            >
              {/* Base bg */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: `linear-gradient(160deg, ${patterns[i].accent} 0%, ${patterns[i].bg} 100%)` }}
              />

              {/* Texture pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(212,197,169,0.04) 20px, rgba(212,197,169,0.04) 21px)`,
                }}
              />

              {/* Large faded letter */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <span
                  className="font-serif italic select-none"
                  style={{ fontSize: "8rem", color: "#D4C5A9", opacity: 0.08, fontWeight: 300 }}
                >
                  {cat.name[0]}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                <h3 className="font-serif text-2xl md:text-3xl italic mb-2" style={{ color: "#D4C5A9" }}>
                  {cat.name}
                </h3>
                <p className="text-[9px] tracking-[0.25em] uppercase mb-4" style={{ color: "#D4C5A9", opacity: 0.55 }}>
                  {cat.count} моделей
                </p>
                <div
                  className="transition-all duration-500"
                  style={{
                    height: "1px",
                    background: "#D4C5A9",
                    opacity: 0.35,
                    width: "2rem",
                  }}
                />
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: "1px solid rgba(212,197,169,0.3)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
