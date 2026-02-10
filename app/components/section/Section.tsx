'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

interface SectionProps {
  id?: string;
}


export default function Section({ id }: SectionProps) {

  const router = useRouter()

  const handleOrcamentoClick = () => {
    router.push('/projectos')
  }

  return (
    <section className="md:py-16 font-montserrat">

      <div className="max-w-6xl 2xl:2xl:max-w-350 mx-auto px-6">

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


          <div className='block md:hidden'>
            <p className='text-center'>SAMPOOL</p>
            <p className="font-bold text-base sm:text-6xl mb-3 text-center">
              Nossas soluções atendem
            </p>

            <p className="leading-relaxed text-sm text-center">
              <span className='font-bold'> Nossas soluções atendem pessoas singulares, </span>
              condomínios, hotéis, clubes e salões de eventos, oferecendo escolhas personalizadas para cada tipo de cliente com uma garantia de até 05 anos.
            </p>
          </div>

          <div className='relative w-70 h-90 md:h-full md:w-full mx-auto '>
            <Image src="/sectiono2.jpg" width={450} height={450} alt="Piscina" className="rounded-2xl object-cover" />
            <button className='absolute md:hidden bottom-0 p-4 left-10 text-white bg-[#060828] font-bold rounded-full'> Solicitar orçamento</button>
          </div>

          <div className='hidden md:block'>
            <p className="font-bold text-base sm:text-6xl mb-3">
              Nossas soluções atendem
            </p>

            <p className="leading-relaxed font-semibold">
              Nossas soluções atendem pessoas singulares, condomínios, hotéis, clubes e salões de eventos, oferecendo escolhas personalizadas para cada tipo de cliente com uma garantia de até 05 anos.
            </p>
          </div>

        </div>
      </div>


      <div className="relative w-full mt-20 h-120 md:h-200 bg-[url('/Rectangle29.png')] md:bg-cover md:bg-center bg-no-repeat flex items-center">

        <div className="max-w-7xl px-10 md:px-30 space-y-5">
          <h2 className="text-center md:text-start text-4xl md:text-9xl font-extrabold text-[#0B1A3A]">
            Quem Somos
          </h2>

          <p className="mt-4 max-w-xl text-sm text-[#0B1A3A]/80">
            A Sampool Construções nasceu para responder a uma lacuna clara no mercado, a falta de empresas especializadas e confiáveis na construção e manutenção de piscinas. Desde a nossa criação,
            atuamos com foco na qualidade dos acabamentos, cumprimento de prazos e acompanhamento técnico rigoroso em todas as fases da obra.
          </p>

          <button onClick={handleOrcamentoClick} className='bg-[#00BFEA] px-24 py-4 rounded-full font-bold text-white text-2xl '>Ver projectos</button>
        </div>

      </div>

    </section>
  )
}
