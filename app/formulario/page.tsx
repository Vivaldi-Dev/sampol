"use client";
import React, { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setModal("success");
      } else {
        setModal("error");
      }
    } catch {
      setModal("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4 md:mt-15">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl space-y-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                name="nome"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Apelido</label>
              <input
                name="apelido"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Província</label>
            <select
              name="provincia"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Cidade de Maputo</option>
              <option>Maputo Província</option>
              <option>Gaza</option>
              <option>Matola</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Acabamento</label>
            <select
              name="acabamento"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Alvenaria</option>
              <option>Sacos</option>
              <option>Marbalato</option>
              <option>Mosaico</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tamanho</label>
            <select
              name="tamanho"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>100 m²</option>
              <option>50 m²</option>
              <option>200 m²</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Avaliação técnica
            </label>
            <select
              name="avaliacao"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Já tem projeto?
            </label>
            <select
              name="projeto"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Finalidade
            </label>
            <select
              name="finalidade"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Lazer familiar</option>
              <option>Comercial</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full mt-6 flex items-center justify-center
              bg-cyan-500 hover:bg-cyan-600
              disabled:bg-cyan-300
              text-white font-semibold py-4 rounded-full
            ">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </span>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            {modal === "success" ? (
              <>
                <h3 className="text-lg font-semibold text-green-600">
                  Pedido enviado!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Entraremos em contacto brevemente.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-red-600">
                  Erro ao enviar
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Tente novamente mais tarde.
                </p>
              </>
            )}

            <button
              onClick={() => setModal(null)}
              className="mt-4 px-6 py-2 rounded-full bg-cyan-500 text-white">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}