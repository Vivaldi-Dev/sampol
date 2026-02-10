import React from 'react'
import Image from 'next/image'

export default function Setionfour() {
    return (
        <div className='relative'>

            <div className="hidden relative w-full mt-20 h-120 md:h-200 bg-[url('/Rectangle29.png')] bg-cover bg-center bg-no-repeat md:flex items-center">

                <div className="max-w-7xl px-10 md:px-30 space-y-5">
                    <h2 className="text-xl md:text-6xl font-extrabold text-[#0B1A3A]">
                        Tipos e Dimensões de Piscinas
                    </h2>

                    <p className="mt-4 max-w-xl text-sm text-[#0B1A3A]/80">
                        A piscina certa para cada espaço e necessidade Executamos piscinas pequenas, médias e grandes,
                        adaptadas ao espaço disponível e ao objetivo do cliente, seja lazer familiar ou uso comercial intensivo
                    </p>

                    <button className='bg-[#00BFEA] px-24 py-4 rounded-full font-bold text-white text-2xl '>Escolher tipo de piscina</button>
                </div>
            </div>

           

        </div>
    )
}
