import Image from 'next/image'
import React from 'react'

export default function Contrucao() {
    return (
        <div>
            <div className=''>
                <div className=''>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 '>
                        <div className='relative mt-20'>
                            <Image src={'/Group12.png'} alt='' width={900} height={500} />

                        </div>

                        <div className='max-w-extra max-w-xl'>
                            <p className='font-bold text-5xl mb-2'>Construção de Piscinas</p>
                            <p className='font-extralight'>Transformamos o seu projeto em realidade, desde a avaliação do espaço até aos acabamentos finais. Executamos piscinas residenciais, de condomínios, hotéis, clubes e piscinas olímpicas, garantindo segurança estrutural, eficiência hidráulica e acabamento de alto padrão.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 '>

                        <div className='px-10 max-w-xl'>
                            <p className='font-bold text-5xl mb-2'>Reabilitação de Piscinas</p>
                            <p className='font-extralight'> Recuperamos piscinas com problemas estruturais, infiltrações, fissuras ou desgaste do revestimento. Atuamos na impermeabilização, substituição de sistemas hidráulicos e renovação completa da piscina.</p>
                        </div>

                        <div className='relative'>
                            <Image src={'/Group11.png'} alt='' width={900} height={500} />

                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10'>
                        <div className='relative'>
                            <Image src={'/Group13.png'} alt='' width={900} height={500} />

                        </div>

                        <div>
                            <p className='font-bold text-4xl'>Assistência Técnica Especializada</p>
                            <p>Acompanhamento técnico profissional para garantir que a construção ou reabilitação da piscina siga as normas corretas, evitando erros, retrabalhos e custos desnecessários.</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 '>

                        <div className='px-10'>
                            <p className='font-bold text-4xl'>Reparação e Venda de Equipamentos</p>
                            <p>Realizamos diagnóstico e reparação de bombas, filtros, aquecedores e sistemas elétricos, além da venda de materiais e equipamentos de piscina certificados</p>
                        </div>

                        <div className='relative'>
                            <Image src={'/Group11.png'} alt='' width={900} height={500} />

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


                    <div className="relative w-full mt-20 h-220 bg-[url('/Rectangle33.png')] bg-cover bg-center bg-no-repeat flex items-center">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-auto">


                            <div className="flex flex-col">
                                <span className="text-[120px] font-light text-black leading-none">
                                    01
                                </span>

                                <div className="w-24 h-[1px] bg-white my-6" />

                                <h3 className="font-semibold text-lg text-black mb-4">
                                    Projetos e Casos de Sucesso
                                </h3>

                                <p className="text-sm text-black/80 leading-relaxed max-w-xs">
                                    Atuamos há mais de uma década no mercado, oferecendo soluções completas,
                                    técnicas modernas e materiais de alta qualidade, garantindo confiança,
                                    segurança e satisfação aos nossos clientes.
                                </p>
                            </div>


                            <div className="flex flex-col">
                                <span className="text-[120px] font-light text-black leading-none">
                                    02
                                </span>

                                <div className="w-24 h-[1px] bg-white my-6" />

                                <h3 className="font-semibold text-lg text-black mb-4">
                                    Projetos e Casos de Sucesso
                                </h3>

                                <p className="text-sm text-black/80 leading-relaxed max-w-xs">
                                    Atuamos há mais de uma década no mercado, oferecendo soluções completas,
                                    técnicas modernas e materiais de alta qualidade, garantindo confiança,
                                    segurança e satisfação aos nossos clientes.
                                </p>
                            </div>


                            <div className="flex flex-col">
                                <span className="text-[120px] font-light text-black leading-none">
                                    03
                                </span>

                                <div className="w-24 h-[1px] bg-white my-6" />

                                <h3 className="font-semibold text-lg text-black mb-4">
                                    Projetos e Casos de Sucesso
                                </h3>

                                <p className="text-sm text-black/80 leading-relaxed max-w-xs">
                                    Atuamos há mais de uma década no mercado, oferecendo soluções completas,
                                    técnicas modernas e materiais de alta qualidade, garantindo confiança,
                                    segurança e satisfação aos nossos clientes.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>




            </div>
        </div>
    )
}
