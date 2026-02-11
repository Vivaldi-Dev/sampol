'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Banner() {
  const router = useRouter()

  const handleOrcamentoClick = () => {
    router.push('/formulario')
  }

  const handleConsultorClick = () => {
    const phoneNumber = '258841234567' 
    const message = 'Olá! Gostaria de falar com um consultor da Sampool Construções.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative w-full h-120 lg:h-200 2xl:min-h-screen bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat font-montserrat">

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 flex items-center justify-center md:min-h-[calc(100vh-96px)] md:px-12">
        <div className="relative w-full max-w-7xl h-100 md:h-150 bg-[url('/Ellipsebolile2.png')] md:bg-[url('/Ellipse22.png')] md:bg-contain md:bg-center md:bg-no-repeat flex flex-col items-center justify-center text-center md:px-6 mt-40">
          <div className='mt-15 md:mt-25'>
            <h2 className="text-xl md:text-6xl font-bold tracking-wide">
              SAMPOOL{' '}
              <span className="text-[#0A8BAE]">CONSTRUÇÕES</span>
            </h2>

            <p className="mt-4 text-black max-w-2xl font-medium text-sm md:text-xl">
              Há mais de <span className='font-bold'>10 anos no mercado moçambicano</span> , a Sampool Construções é especializada na construção, reabilitação e manutenção de piscinas. Trabalhamos com técnicas modernas, materiais de qualidade e uma equipa técnica experiente para entregar obras seguras, duráveis e visualmente impecáveis.
            </p>

            <div className='hidden md:flex justify-center gap-5'>
              <button
                onClick={handleOrcamentoClick}
                className="mt-6 bg-[#060828] text-white px-10 py-4 font-semibold rounded-full shadow hover:opacity-90 transition"
              >
                Solicitar orçamento
              </button>

              <button
                onClick={handleConsultorClick}
                className="mt-6 text-black px-10 py-4 font-semibold rounded-full border hover:opacity-90 transition"
              >
                Falar com um consultor
              </button>
            </div>

            <div className='md:hidden flex flex-col items-center px-10 space-y-4'>
              <button onClick={handleOrcamentoClick} className='bg-[#00BFEA] text-white p-2 w-fit rounded-2xl font-semibold'>
                Solicitar orçamento
              </button>
              <button onClick={handleConsultorClick} className='bg-[#060828] text-white p-2 w-fit rounded-2xl font-semibold'>
                Falar com um consultor
              </button>
            </div>

          </div>

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