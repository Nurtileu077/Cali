"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pt-16 min-h-screen bg-white flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <h1 className="font-serif text-3xl font-light italic text-center mb-10" style={{ color: "#1B365D" }}>
          Мой аккаунт
        </h1>

        <form className="space-y-0">
          <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
            <input
              type="email"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 text-sm bg-transparent outline-none placeholder-gray-400"
              style={{ color: "#1B365D" }}
            />
          </div>
          <div className="border-b" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 text-sm bg-transparent outline-none placeholder-gray-400"
              style={{ color: "#1B365D" }}
            />
          </div>

          <div className="pt-4 text-center">
            <Link href="#" className="text-sm underline" style={{ color: "#666" }}>
              Забыли пароль?
            </Link>
          </div>

          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full py-4 text-sm tracking-widest uppercase"
              style={{ background: "#1B365D", color: "#D4C5A9" }}
            >
              Войти
            </button>
            <Link
              href="#"
              className="block w-full py-4 text-sm tracking-widest uppercase text-center"
              style={{ background: "#f5f5f3", color: "#1B365D" }}
            >
              Создать аккаунт
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
