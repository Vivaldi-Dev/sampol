import React from "react";
import Image from "next/image";

export default function Sectiontree() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid md:grid-cols- gap-16 items-center">

          {/* TEXTO */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-center font-bold text-4xl md:text-6xl">
              Nossa potencial e objectivo
            </h2>

            <p className="text-center text-gray-600 text-lg leading-relaxed">
              Somos uma empresa moderna, organizada e orientada para resultados,
              contribuindo para a valorização dos imóveis e para a melhoria da
              qualidade de vida dos nossos clientes.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center">
            <Image
              src="/sction03.jpg"
              width={450}
              height={450}
              alt="Piscina"
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
