import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function CartPage() {
  const recent = products.slice(0, 4);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12">
        <h1 className="font-serif text-3xl font-light italic mb-8" style={{ color: "#1B365D" }}>
          Корзина
        </h1>

        {/* Empty cart */}
        <div className="text-center py-16 border-t border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <p className="text-sm mb-6" style={{ color: "#999" }}>Ваша корзина пуста</p>
          <Link href="/catalog" className="btn-navy-outline">
            Перейти в каталог
          </Link>
        </div>

        {/* Recently viewed */}
        <div className="mt-16">
          <h2 className="text-sm tracking-widest uppercase mb-6" style={{ color: "#1B365D" }}>
            Недавно просмотренные
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recent.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-2" style={{ background: "#f5f5f3" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-xs" style={{ color: "#1B365D" }}>{p.name}</span>
                  <span className="text-xs" style={{ color: "#999" }}>{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
