'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Textsection() {
    const router = useRouter()

    const handleButtonClick = () => {
        router.push('/formulario')
    }

    return (
        <section className="py-10 md:py-16">
            <div className="max-w-3xl mx-auto px-6 text-center space-y-6">

                <h2 className="text-3xl md:text-5xl font-semibold">
                    Tipos e Dimensões de Piscinas
                </h2>

                <p className="text-sm font-light leading-relaxed ">
                    A piscina certa para cada espaço e necessidade.
                    Executamos piscinas pequenas, médias e grandes,
                    adaptadas ao espaço disponível e ao objetivo do cliente,
                    seja lazer familiar ou uso comercial intensivo.
                </p>

                <button 
                    onClick={handleButtonClick}
                    className="bg-[#00BFEA] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#00a8cc] transition"
                >
                    Escolher tipo de piscina
                </button>

            </div>
        </section>
    )
}