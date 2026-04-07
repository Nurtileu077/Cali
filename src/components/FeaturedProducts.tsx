import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const featured = products.slice(0, 6);

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-5 md:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: "#b8a88a" }}>
              Избранное
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic" style={{ color: "#1B365D" }}>
              Новинки
            </h2>
          </div>
          <Link
            href="/catalog"
            className="hidden md:block text-[10px] tracking-[0.2em] uppercase pb-[2px]"
            style={{ color: "#1B365D", borderBottom: "1px solid rgba(27,54,93,0.3)" }}
          >
            Смотреть все
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {featured.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="group block">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-3" style={{ background: "#f5f5f3" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2 py-1"
                    style={{ background: "#1B365D", color: "#D4C5A9" }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>
              {/* Info */}
              <div className="flex justify-between items-baseline">
                <span className="text-sm" style={{ color: "#1B365D" }}>{p.name}</span>
                <span className="text-xs ml-2 shrink-0" style={{ color: "rgba(27,54,93,0.6)" }}>{p.price}</span>
              </div>
              <p className="text-[10px] mt-0.5" style={{ color: "#b8a88a" }}>{p.category}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/catalog" className="btn-navy-outline text-[10px]">
            Смотреть все
          </Link>
        </div>
      </div>
    </section>
  );
}
