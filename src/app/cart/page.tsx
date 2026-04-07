"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const { items, remove, setQty } = useCart();
  const recent = products.slice(0, 4);

  const total = items.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/\D/g, ""));
    return sum + num * item.quantity;
  }, 0);

  return (
    <div className="pt-14 md:pt-16 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <h1 className="font-serif text-3xl font-light italic mb-10" style={{ color: "#1B365D" }}>
          Корзина
        </h1>

        {items.length === 0 ? (
          <div className="py-16 text-center" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            <p className="text-sm mb-6" style={{ color: "#999" }}>Ваша корзина пуста</p>
            <Link href="/catalog" className="btn-navy-outline">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-4 py-5"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                >
                  {/* Image */}
                  <Link href={`/product/${item.productId}`} className="shrink-0">
                    <div className="relative w-20 h-24 md:w-24 md:h-32 overflow-hidden" style={{ background: "#f5f5f3" }}>
                      <Image src={item.image} alt={item.name} fill className="object-cover object-top" sizes="96px" />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.productId}`}>
                        <p className="text-sm font-medium" style={{ color: "#1B365D" }}>{item.name}</p>
                      </Link>
                      <p className="text-xs mt-0.5" style={{ color: "#b8a88a" }}>Размер: {item.size}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      {/* Qty */}
                      <div className="flex items-center border" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
                        <button
                          onClick={() => setQty(item.productId, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-lg transition-colors hover:bg-gray-50"
                          style={{ color: "#1B365D" }}
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm" style={{ color: "#1B365D" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => setQty(item.productId, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-lg transition-colors hover:bg-gray-50"
                          style={{ color: "#1B365D" }}
                        >
                          +
                        </button>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => remove(item.productId, item.size)}
                        className="text-xs underline"
                        style={{ color: "#aaa" }}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="shrink-0 text-right">
                    <p className="text-sm" style={{ color: "#1B365D" }}>
                      {(parseInt(item.price.replace(/\D/g, "")) * item.quantity).toLocaleString("ru")} ₸
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total + checkout */}
            <div className="mt-6 flex flex-col items-end gap-4">
              <div className="flex items-center gap-6">
                <span className="text-sm" style={{ color: "rgba(27,54,93,0.6)" }}>Итого:</span>
                <span className="text-lg font-medium" style={{ color: "#1B365D" }}>
                  {total.toLocaleString("ru")} ₸
                </span>
              </div>
              <button
                className="px-12 py-4 text-xs tracking-widest uppercase"
                style={{ background: "#1B365D", color: "#D4C5A9" }}
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}

        {/* Recently viewed */}
        <div className="mt-20">
          <h2 className="text-sm tracking-widest uppercase mb-6" style={{ color: "#1B365D" }}>
            Недавно просмотренные
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recent.map((p) => (
              <ProductCard key={p.id} product={p} sizes="25vw" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
