import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1B365D" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-serif italic block" style={{ fontSize: "1.8rem", fontWeight: 300, color: "#D4C5A9", lineHeight: 1 }}>
                cali
              </span>
              <span className="font-sans text-[8px] tracking-[0.45em] uppercase" style={{ color: "#D4C5A9", opacity: 0.6 }}>
                couturier
              </span>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "#D4C5A9", opacity: 0.55 }}>
              Изысканная одежда для тех, кто ценит стиль, качество и внимание к деталям.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Магазин",
              links: [
                { label: "Каталог", href: "/catalog" },
                { label: "Новинки", href: "/catalog?category=new" },
                { label: "Бестселлеры", href: "/catalog?category=bestsellers" },
                { label: "Sale", href: "/catalog?category=sale" },
              ],
            },
            {
              title: "Информация",
              links: [
                { label: "О бренде", href: "/about" },
                { label: "Контакты", href: "/contact" },
                { label: "Доставка и оплата", href: "#" },
                { label: "Возврат", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "#D4C5A9" }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-xs transition-opacity" style={{ color: "#D4C5A9", opacity: 0.55 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "#D4C5A9" }}>
              Связаться
            </h4>
            <ul className="space-y-2">
              <li className="text-xs" style={{ color: "#D4C5A9", opacity: 0.55 }}>info@calicouturier.com</li>
              <li className="text-xs" style={{ color: "#D4C5A9", opacity: 0.55 }}>+7 (777) 123-45-67</li>
            </ul>
            <div className="flex gap-4 mt-5">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "Telegram", path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
              ].map((soc) => (
                <a key={soc.label} href="#" aria-label={soc.label} style={{ color: "#D4C5A9", opacity: 0.5 }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={soc.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(212,197,169,0.1)" }}>
          <p className="text-[10px]" style={{ color: "#D4C5A9", opacity: 0.4 }}>
            &copy; 2024 Cali Couturier. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Оферта"].map((t) => (
              <Link key={t} href="#" className="text-[10px]" style={{ color: "#D4C5A9", opacity: 0.4 }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
