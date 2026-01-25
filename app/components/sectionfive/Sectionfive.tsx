import Image from 'next/image'
import React from 'react'

export default function Sectionfive() {
    return (
        <div className='relative'>
            <div className=' py-20 w-full max-w-7xl container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 '>

                <div>
                    <Image
                        src="/napce.jpg"
                        width={450}
                        height={450}
                        alt="Piscina"
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="font-bold mb-2">Por que escolher a Sampool Construções?</p>
                        <p className="font-extralight">Diferenciais que fazem a diferença</p>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            'Técnicas modernas de construção',
                            'Materiais de alta qualidade',
                            'Equipa técnica qualificada',
                            'Cumprimento rigoroso de prazos',
                            'Atendimento personalizado',
                            'Suporte pós-obra',
                        ].map((text, index) => (
                            <div
                                key={index}
                                className="h-24 w-full rounded bg-[#AFE9F9] flex items-center justify-center text-center px-4"
                            >
                                <p className="font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    )
}
