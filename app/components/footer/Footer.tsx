"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubscribe() {
    if (!email) return;

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Subscrição realizada com sucesso!");
        setEmail("");
      } else {
        setMessage("Erro ao subscrever. Tente novamente.");
      }
    } catch {
      setMessage("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-[#060B2D] text-gray-300 pt-16 pb-8">
      <div className="max-w-[1640px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">SAMPOOL</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empresa moçambicana especializada em construção,
              reabilitação e manutenção de piscinas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/projetos">Projectos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre">Sobre nós</Link></li>
              <li><Link href="/testemunhos">Testemunho</Link></li>
              <li><Link href="/contacto">Contactar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subscrever-se</h3>
            <p className="text-sm text-gray-400 mb-4">
              Receba novidades do nosso website
            </p>

            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Coloca seu email"
                className="w-full px-4 py-2 rounded-l-md bg-[#0c1445] border border-gray-700 focus:outline-none text-sm"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-white text-black px-4 rounded-r-md text-sm font-medium hover:bg-gray-200 transition disabled:opacity-50">
                {loading ? "Enviando..." : "Entrar"}
              </button>
            </div>

            {message && (
              <p className="text-xs mt-3 text-gray-400">{message}</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026. Todos direitos reservados</p>
          <div className="flex gap-6">
            <Link href="#">Política de privacidade</Link>
            <Link href="#">Termos e condições</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}