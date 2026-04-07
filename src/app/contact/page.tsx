"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
        <div className="relative z-10 text-center px-6">
          <p className="text-cream/50 text-xs tracking-[0.4em] uppercase mb-6">
            Свяжитесь с нами
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-cream font-light italic">
            Контакты
          </h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl text-navy font-light italic mb-8">
              Мы всегда рады помочь
            </h2>
            <p className="text-navy/60 leading-relaxed mb-12">
              Если у вас есть вопросы о наших коллекциях, размерах или доставке —
              свяжитесь с нами любым удобным способом.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-cream-dark mb-2">
                  Адрес шоурума
                </h3>
                <p className="text-navy">г. Алматы, ул. Абая 150, БЦ «Нурлы Тау», 3 этаж</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-cream-dark mb-2">
                  Телефон
                </h3>
                <p className="text-navy">+7 (777) 123-45-67</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-cream-dark mb-2">
                  Email
                </h3>
                <p className="text-navy">info@calicouturier.com</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-cream-dark mb-2">
                  Часы работы
                </h3>
                <p className="text-navy">Пн — Сб: 10:00 — 20:00</p>
                <p className="text-navy/60 text-sm">Вс: 11:00 — 18:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border border-navy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-navy italic mb-3">
                    Спасибо!
                  </h3>
                  <p className="text-navy/60 text-sm">
                    Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-navy/60 mb-2 block">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-navy/15 px-6 py-4 text-sm text-navy focus:outline-none focus:border-navy/40 transition-colors bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-navy/60 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-navy/15 px-6 py-4 text-sm text-navy focus:outline-none focus:border-navy/40 transition-colors bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-navy/60 mb-2 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-navy/15 px-6 py-4 text-sm text-navy focus:outline-none focus:border-navy/40 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-navy/60 mb-2 block">
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full border border-navy/15 px-6 py-4 text-sm text-navy focus:outline-none focus:border-navy/40 transition-colors bg-transparent resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-cream text-xs tracking-[0.2em] uppercase py-4 hover:bg-navy-dark transition-colors duration-300"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
