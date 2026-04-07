import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-navy via-navy-light to-navy-dark" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream/20 hidden lg:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="font-serif text-8xl text-cream/20 italic">cali</span>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-cream-dark mb-4">
              Наша история
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-navy font-light italic mb-8">
              О бренде
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed">
              <p>
                Cali Couturier — это бренд, рожденный из страсти к безупречному
                крою и вниманию к каждой детали. Мы создаём одежду, которая
                подчеркивает индивидуальность и придает уверенность.
              </p>
              <p>
                Каждая коллекция — это история о современной элегантности, где
                классические силуэты встречаются с актуальными тенденциями.
                Мы используем только премиальные ткани и авторские лекала.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 border border-navy/30 text-navy text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-navy hover:text-cream transition-all duration-500"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
