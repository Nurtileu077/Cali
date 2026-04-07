export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
        <div className="relative z-10 text-center px-6">
          <p className="text-cream/50 text-xs tracking-[0.4em] uppercase mb-6">
            О бренде
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-cream font-light italic">
            Cali Couturier
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-cream-dark mb-4">
              Наша философия
            </p>
            <h2 className="font-serif text-5xl text-navy font-light italic mb-8">
              Элегантность без компромиссов
            </h2>
          </div>
          <div className="space-y-8 text-navy/70 leading-relaxed text-center">
            <p className="text-lg">
              Cali Couturier — это воплощение утончённого вкуса и безупречного
              качества. Мы верим, что одежда — это не просто вещи, а способ
              выражения вашей индивидуальности.
            </p>
            <p>
              Каждая вещь в нашей коллекции проходит тщательный отбор. Мы
              сотрудничаем с лучшими дизайнерами и используем премиальные ткани
              из Италии и Франции, чтобы создавать одежду, которая служит годами
              и никогда не выходит из моды.
            </p>
            <p>
              Наша миссия — помочь каждой женщине чувствовать себя уверенно
              и элегантно в любой ситуации. Будь то деловая встреча, вечерний
              выход или повседневная прогулка — у нас есть идеальный образ.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl text-navy font-light italic">
              Наши ценности
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Качество",
                desc: "Только премиальные ткани и безупречный крой. Каждая деталь продумана до мелочей.",
              },
              {
                title: "Стиль",
                desc: "Вневременная элегантность с нотками современных тенденций. Одежда, которая вдохновляет.",
              },
              {
                title: "Индивидуальность",
                desc: "Мы создаём не просто одежду — мы помогаем раскрыть вашу уникальность.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-[1px] bg-cream-dark mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-navy italic mb-4">
                  {value.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light italic mb-6">
            Посетите наш бутик
          </h2>
          <p className="text-cream-light/60 text-sm leading-relaxed mb-10">
            Приглашаем вас в наш шоурум, где вы сможете лично оценить качество
            наших коллекций и получить персональную консультацию стилиста.
          </p>
          <a
            href="/contact"
            className="inline-block border border-cream/40 text-cream text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-cream hover:text-navy transition-all duration-500"
          >
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
}
