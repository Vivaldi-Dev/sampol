import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
    {
        title: 'Construção de Piscinas',
        image: '/piscina.png',
    },
    {
        title: 'Reabilitação de Piscinas',
        image: '/piscina02.jpg',
    },
    {
        title: 'Manutenção e Tratamento de Água',
        image: '/manutencao.jpg',
    },
    {
        title: 'Assistência Técnica Especializada',
        image: '/tecnica.jpg',
    },
    {
        title: 'Reparação e Venda de Equipamentos',
        image: '/reparacao.jpg',
    },
]

export default function SectionTwo() {
    return (

        <section className='relative'>
            <div className="absolute top-0 left-0 -z-10">
                <Image
                    src="/Vector02.png"
                    width={550}
                    height={550}
                    alt="Elemento decorativo"
                    className="object-contain"
                />
            </div>
            <section className="relative py-4 px-6 max-w-7xl mx-auto">

                <div className="text-center ">
                    <h2 className="text-5xl font-semibold ">
                        Nossos Serviços
                    </h2>

                    <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
                        Soluções completas para piscinas residenciais,
                        comerciais e institucionais
                    </p>

                    <Link href="/servicos" className="inline-block mt-2 text-xl underline hover:text-blue-600 transition">
                        Ver todos Serviços
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="absolute inset-0 bg-black/40" />

                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-white text-xl font-semibold">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </section>


    )
}
