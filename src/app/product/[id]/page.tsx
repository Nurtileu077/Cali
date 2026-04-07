"use client";

import Link from "next/link";
import { useState } from "react";
import { use } from "react";

const productData: Record<string, { name: string; price: string; category: string; description: string; details: string[]; sizes: string[] }> = {
  "1": { name: "Платье «Элегия»", price: "185 000 ₸", category: "Вечерние платья", description: "Изысканное вечернее платье из итальянского шёлка с драпировкой ручной работы. Утончённый силуэт подчёркивает фигуру, создавая образ настоящей королевы.", details: ["100% итальянский шёлк", "Ручная драпировка", "Потайная молния", "Подкладка из натурального шёлка"], sizes: ["XS", "S", "M", "L"] },
  "2": { name: "Костюм «Аврора»", price: "245 000 ₸", category: "Костюмы", description: "Элегантный костюм-двойка из японской шерсти. Приталенный жакет с атласной подкладкой и прямые брюки с высокой посадкой.", details: ["Японская шерсть премиум", "Атласная подкладка", "Пуговицы ручной работы", "Итальянская фурнитура"], sizes: ["XS", "S", "M", "L", "XL"] },
  "3": { name: "Блуза «Грация»", price: "78 000 ₸", category: "Блузы", description: "Воздушная блуза из французского шифона с изящными рукавами-буфами и перламутровыми пуговицами.", details: ["Французский шифон", "Перламутровые пуговицы", "Свободный крой", "Подходит для офиса и выхода"], sizes: ["XS", "S", "M", "L"] },
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productData[id] || productData["1"];
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-navy/50">
          <Link href="/" className="hover:text-navy transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-navy transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product image */}
          <div className="aspect-[3/4] bg-gradient-to-br from-navy via-navy-light to-navy-dark relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[12rem] text-cream/10 italic">C</span>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-cream-dark mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-navy font-light italic mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-navy mb-8">{product.price}</p>

            <p className="text-navy/60 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-navy/60 mb-4">
                Размер
              </p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-navy text-cream border-navy"
                        : "border-navy/20 text-navy hover:border-navy/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button className="w-full bg-navy text-cream text-xs tracking-[0.2em] uppercase py-5 hover:bg-navy-dark transition-colors duration-300 mb-4">
              Добавить в корзину
            </button>

            {/* Details */}
            <div className="mt-8 pt-8 border-t border-navy/10">
              <p className="text-xs tracking-[0.2em] uppercase text-navy/60 mb-4">
                Детали
              </p>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="text-sm text-navy/70 flex items-center gap-2">
                    <span className="w-1 h-1 bg-cream-dark rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping */}
            <div className="mt-8 pt-8 border-t border-navy/10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-navy/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                </svg>
                Бесплатная доставка по Казахстану
              </div>
              <div className="flex items-center gap-3 text-sm text-navy/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Возврат в течение 14 дней
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
