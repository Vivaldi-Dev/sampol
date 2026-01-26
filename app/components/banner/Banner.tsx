'use client'
import React from 'react'


export default function Banner() {
  return (
    <section className="relative w-full h-106 md:min-h-screen bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat font-montserrat">

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 flex items-center justify-center md:min-h-[calc(100vh-96px)] md:px-12">
        <div className="relative w-full max-w-7xl h-100 md:h-150 bg-[url('/Ellipsebolile2.png')] md:bg-[url('/Ellipse2.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6 mt-20">

          <h2 className="text-xl md:text-6xl font-bold tracking-wide">
            SAMPOOL{' '}
            <span className="text-[#0A8BAE]">CONSTRUÇÕES</span>
          </h2>

          <p className="mt-4 text-black max-w-2xl font-medium text-sm md:text-xl">
            Há mais de <span className='font-bold'>10 anos no mercado moçambicano</span> , a Sampool Construções é especializada na construção, reabilitação e manutenção de piscinas. Trabalhamos com técnicas modernas, materiais de qualidade e uma equipa técnica experiente para entregar obras seguras, duráveis e visualmente impecáveis.
          </p>

          <button className="mt-6 bg-[#00BFEA] text-white px-10 py-3 font-semibold rounded-full shadow hover:opacity-90 transition">
            Fale connosco
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          ↓
        </div>
      </div>

    </section>
  )
}
