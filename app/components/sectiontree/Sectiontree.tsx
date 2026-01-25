import React from 'react'
import Image from 'next/image'

export default function Sectiontree() {
    return (
        <div className='relative'>
            <div className=' py-20 w-full max-w-7xl container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 '>

                <div className='space-y-5'>
                    <p className='font-bold text-6xl'>Nossa potencial e objectivo</p>
                    <div>
                        <p>Somos uma empresa moderna, organizada e orientada para resultados,
                            contribuindo para a valorização dos imóveis e para a melhoria da qualidade de vida dos nossos clientes.</p>
                    </div>
                </div>

                <div>
                    <Image
                        src="/sction03.jpg"
                        width={450}
                        height={450}
                        alt="Piscina"
                        className="rounded-2xl object-cover"
                    />
                </div>



            </div>

           
        </div>

    )
}
