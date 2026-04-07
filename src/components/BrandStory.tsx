import Link from "next/link";
import { SAMPLE_IMAGE } from "@/lib/products";

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden order-2 md:order-1" style={{ aspectRatio: "3/4", background: "#f5f5f3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SAMPLE_IMAGE}
              alt="Cali Couturier"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "#b8a88a" }}>
              Наша история
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic mb-6" style={{ color: "#1B365D" }}>
              О бренде
            </h2>
            <div className="w-10 h-[1px] mb-7" style={{ background: "#D4C5A9" }} />
            <div className="space-y-4 text-sm leading-relaxed mb-10" style={{ color: "rgba(27,54,93,0.6)" }}>
              <p>
                Cali Couturier — бренд, рождённый из страсти к безупречному крою
                и вниманию к каждой детали. Мы создаём одежду, которая подчёркивает
                индивидуальность и дарит уверенность.
              </p>
              <p>
                Каждая коллекция — история о современной элегантности, где
                классические силуэты встречаются с актуальными тенденциями.
                Только премиальные ткани и авторские лекала.
              </p>
            </div>
            <Link href="/about" className="btn-navy-outline">
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
