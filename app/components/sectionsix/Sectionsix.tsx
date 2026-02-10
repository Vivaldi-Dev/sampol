'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Sectionsix() {
    const router = useRouter()

    const handleButtonClick = () => {
        router.push('/projectos')
    }

    return (
        <div>
            <div className='relative'>

                <div className="relative w-full mt-10 md:mt-20 h-120 md:h-200 bg-[url('/Rectangle29.png')] bg-cover bg-center bg-no-repeat flex items-center">

                    <div className="max-w-7xl px-10 md:px-30 space-y-5">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0B1A3A]">
                            Prova Social e Credibilidade
                        </h2>

                        <p className="mt-4 max-w-xl text-sm text-[#0B1A3A]/80">
                            Resultados que falam por nós Temos testemunhos de clientes satisfeitos, parcerias com fornecedores de materiais certificados e projetos executados com sucesso ao longo de mais de uma década de atuação
                        </p>

                        <button 
                            onClick={handleButtonClick}
                            className='bg-[#00BFEA] px-5 md:px-24 py-2 md:py-4 rounded-full font-bold text-white md:text-2xl hover:bg-[#00a8cc] transition'
                        >
                            Ver projetos realizados
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}