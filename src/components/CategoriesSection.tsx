import Link from "next/link";
import Image from "next/image";
import { SAMPLE_IMAGE } from "@/lib/products";

const categories = [
  { name: "Платья", slug: "Платья" },
  { name: "Костюмы", slug: "Костюмы" },
  { name: "Верхняя одежда", slug: "Верхняя одежда" },
  { name: "Аксессуары", slug: "Аксессуары" },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-5 md:px-8" style={{ background: "#f5f5f3" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: "#b8a88a" }}>
            Коллекции
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic" style={{ color: "#1B365D" }}>
            Категории
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalog?category=${encodeURIComponent(cat.slug)}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-3 bg-white">
                <Image
                  src={SAMPLE_IMAGE}
                  alt={cat.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: "rgba(27,54,93,0.25)" }}
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm" style={{ color: "#1B365D" }}>{cat.name}</h3>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#b8a88a" }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
