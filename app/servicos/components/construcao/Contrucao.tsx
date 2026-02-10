import TestimonialsSection from '@/app/components/TestimonialsSection/TestimonialsSection'
import Image from 'next/image'
import React from 'react'

export default function Contrucao() {
    return (
        <div>
            <div className=''>
                <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 '>
                        <div className='relative mt-20'>
                            <Image src={'/Group21.png'} alt='' width={900} height={500} />
                        </div>

                        <div className='max-w-extra max-w-xl px-5 md:px-0'>
                            <p className='font-bold text-5xl mb-2'>Construção de Piscinas</p>
                            <p className='font-extralight'>Transformamos o seu projeto em realidade, desde a avaliação do espaço até aos acabamentos finais. Executamos piscinas residenciais, de condomínios, hotéis, clubes e piscinas olímpicas, garantindo segurança estrutural, eficiência hidráulica e acabamento de alto padrão.</p>
                            <button className='bg-[#00BFEA] p-4 rounded-full text-white font-bold mt-5'>
                                Agendar uma reunião
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">


                        <div className="px-6 sm:px-10 max-w-xl order-2 sm:order-1">
                            <p className="font-bold text-3xl sm:text-5xl mb-4">
                                Reabilitação de Piscinas
                            </p>

                            <p className="font-light text-gray-600 leading-relaxed">
                                Recuperamos piscinas com problemas estruturais, infiltrações,
                                fissuras ou desgaste do revestimento. Atuamos na impermeabilização,
                                substituição de sistemas hidráulicos e renovação completa da piscina.
                            </p>
                        </div>

                        <div className="relative order-1 sm:order-2">
                            <Image
                                src="/Group11.png"
                                alt="Reabilitação de Piscinas"
                                width={900}
                                height={500}
                                className="rounded-2xl object-cover w-full"
                            />
                        </div>

                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>
                        <div className='relative'>
                            <Image src={'/Group13.png'} alt='' width={900} height={500} />

                        </div>

                        <div className='px-5 md:px-0'>
                            <p className='font-bold text-4xl'>Assistência Técnica Especializada</p>
                            <p className='md:max-w-2xl'>Acompanhamento técnico profissional para garantir que a construção ou reabilitação da piscina siga as normas corretas, evitando erros, retrabalhos e custos desnecessários.</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>

                        <div className='px-10 order-2 sm:order-1'>
                            <p className='font-bold text-4xl'>
                                Reparação e Venda de Equipamentos
                            </p>
                            <p>
                                Realizamos diagnóstico e reparação de bombas, filtros, aquecedores e sistemas elétricos,
                                além da venda de materiais e equipamentos de piscina certificados.
                            </p>
                        </div>

                        <div className='relative order-1 sm:order-2'>
                            <Image
                                src={'/Group11.png'}
                                alt=''
                                width={900}
                                height={500}
                            />
                        </div>

                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 '>


                        <div className='relative'>
                            <Image src={'/Group15.png'} alt='' width={900} height={500} />

                        </div>

                        <div className='px-10'>
                            <p className='font-bold text-4xl'>Manutenção e Tratamento de Água</p>
                            <p> Cuidamos do funcionamento contínuo da sua piscina com manutenção preventiva e corretiva, limpeza, ajuste do sistema de filtração e tratamento químico da água, sempre respeitando as normas de segurança.</p>
                        </div>
                    </div>


                    <TestimonialsSection />

                    <div className="text-center py-20 px-6 max-w-3xl mx-auto space-y-6">
                        <h3 className="text-xl font-semibold">
                            Dê o próximo passo com segurança
                        </h3>

                        <p className="text-gray-600">
                            Entre em contacto connosco para solicitar um orçamento, agendar uma visita
                            técnica ou esclarecer dúvidas. Estamos prontos para transformar o seu espaço
                            num verdadeiro ambiente de lazer e valorização.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#070b2c] text-white px-8 py-4 rounded-full hover:scale-105 transition">
                                Solicitar orçamento →
                            </button>

                            <button className="border border-black px-8 py-4 rounded-full hover:bg-gray-100 transition">
                                Falar com um consultor
                            </button>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}
