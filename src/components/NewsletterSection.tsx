"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-cream/50 mb-4">
          Будьте в курсе
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream font-light italic mb-6">
          Подпишитесь на новости
        </h2>
        <p className="text-cream-light/60 text-sm leading-relaxed mb-10">
          Получайте первыми информацию о новых коллекциях, эксклюзивных
          предложениях и событиях бренда.
        </p>

        {isSubmitted ? (
          <p className="text-cream text-sm tracking-wide">
            Спасибо за подписку! Мы отправим вам письмо с подтверждением.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш email"
              className="flex-1 bg-transparent border border-cream/30 text-cream text-sm px-6 py-4 placeholder-cream/30 focus:outline-none focus:border-cream/60 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-cream text-navy text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-cream-light transition-colors duration-300"
            >
              Подписаться
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
