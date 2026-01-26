import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form className="w-full max-w-xl space-y-6 py-30">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Emanuela"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Apelido
            </label>
            <input
              type="text"
              placeholder="Faraca"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Somopool@gmail.com"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Província */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Em que província deseja construir a sua piscina?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Cidade de Maputo</option>
            <option>Maputo Província</option>
            <option>Gaza</option>
            <option>Matola</option>
          </select>
        </div>

        {/* Acabamento */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Qual acabamento deseja para a sua piscina?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Alvenaria</option>
            <option>Sacos</option>
            <option>Marbalato</option>
            <option>Mosaico</option>
          </select>
        </div>

        {/* Tamanho */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Qual tamanho?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>100 m²</option>
            <option>50 m²</option>
            <option>200 m²</option>
          </select>
        </div>

        {/* Avaliação técnica */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Deseja ter uma avaliação da equipe técnica?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        {/* Projeto */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Já tem um projecto ou modelo de piscina?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        {/* Finalidade */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Qual é a finalidade da piscina?
          </label>
          <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Lazer familiar</option>
            <option>Comercial</option>
          </select>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold py-4 rounded-full"
        >
          Enviar
        </button>

      </form>
    </div>
  );
}
