"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  sizes?: string;
  priority?: boolean;
}

export default function ProductCard({ product, sizes, priority }: Props) {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || product.images.length <= 1) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - left) / width));
    setIdx(Math.min(Math.floor(pct * product.images.length), product.images.length - 1));
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || product.images.length <= 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) setIdx((prev) => Math.min(prev + 1, product.images.length - 1));
    if (dx > 40) setIdx((prev) => Math.max(prev - 1, 0));
    touchStartX.current = null;
  }

  return (
    <Link href={`/product/${product.id}`} className="group block">
      {/* Image area */}
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setIdx(0)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative overflow-hidden"
        style={{ background: "#f5f5f3", aspectRatio: "3/4", touchAction: "pan-y" }}
      >
        {product.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={product.name}
            fill
            priority={priority && i === 0}
            className="object-cover object-top"
            style={{ opacity: i === idx ? 1 : 0, transition: "opacity 0.12s ease" }}
            sizes={sizes || "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
          />
        ))}

        {/* Image position indicator */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {product.images.map((_, i) => (
              <div
                key={i}
                style={{
                  height: "2px",
                  borderRadius: "1px",
                  background: i === idx ? "#1B365D" : "rgba(27,54,93,0.2)",
                  transition: "all 0.15s",
                  width: i === idx ? "16px" : "6px",
                }}
              />
            ))}
          </div>
        )}

        {product.tag && (
          <span
            className="absolute top-2 left-2 text-[9px] tracking-[0.12em] uppercase px-2 py-0.5 z-10"
            style={{ background: "#1B365D", color: "#D4C5A9" }}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex justify-between items-start gap-2 mt-2">
        <span className="text-xs md:text-sm leading-snug" style={{ color: "#1B365D" }}>
          {product.name}
        </span>
        <span className="text-xs shrink-0 leading-snug" style={{ color: "rgba(27,54,93,0.5)" }}>
          {product.price}
        </span>
      </div>
    </Link>
  );
}
