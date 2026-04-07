import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 6);

  return (
    <section className="py-16 px-5 md:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-8">
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
            className="hidden md:block text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "#1B365D", borderBottom: "1px solid rgba(27,54,93,0.25)", paddingBottom: "2px" }}
          >
            Смотреть все
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} sizes="(max-width:640px) 50vw, 33vw" />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/catalog" className="btn-navy-outline">
            Смотреть все
          </Link>
        </div>
      </div>
    </section>
  );
}
