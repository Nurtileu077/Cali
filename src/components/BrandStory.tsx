import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div
              className="aspect-[3/4] relative overflow-hidden"
              style={{ background: "linear-gradient(160deg, #1B365D 0%, #0f2240 100%)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(212,197,169,0.03) 30px, rgba(212,197,169,0.03) 31px)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="font-serif italic select-none"
                  style={{ fontSize: "9rem", color: "#D4C5A9", opacity: 0.12, fontWeight: 300, lineHeight: 1 }}
                >
                  cali
                </span>
                <span
                  className="text-[10px] tracking-[0.5em] uppercase mt-2"
                  style={{ fontFamily: "var(--font-sans)", color: "#D4C5A9", opacity: 0.15 }}
                >
                  couturier
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{ background: "#D4C5A9", opacity: 0.3 }}
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 hidden lg:block"
              style={{ border: "1px solid rgba(27,54,93,0.12)" }}
            />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#b8a88a" }}>
              Наша история
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light italic mb-8" style={{ color: "#1B365D" }}>
              О бренде
            </h2>
            <div className="w-12 h-[1px] mb-8" style={{ background: "#D4C5A9" }} />
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: "rgba(27,54,93,0.65)" }}>
              <p>
                Cali Couturier — бренд, рождённый из страсти к безупречному
                крою и вниманию к каждой детали. Мы создаём одежду, которая
                подчёркивает индивидуальность и дарит уверенность.
              </p>
              <p>
                Каждая коллекция — история о современной элегантности, где
                классические силуэты встречаются с актуальными тенденциями.
                Только премиальные ткани и авторские лекала.
              </p>
            </div>
            <Link href="/about" className="btn-navy-outline mt-10">
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
