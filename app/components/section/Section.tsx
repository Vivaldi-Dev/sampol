import Image from 'next/image'

export default function Section() {
  return (
    <section className="py-16 font-montserrat">

      <div className="max-w-6xl 2xl:2xl:max-w-350 mx-auto px-6">

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <Image src="/sectiono2.jpg" width={450} height={450} alt="Piscina" className="rounded-2xl object-cover" />
          </div>

          <div>
            <p className="font-light text-base sm:text-6xl mb-3">
              SAMPOOL
            </p>

            <p className="text-gray-600 leading-relaxed">
              <span className='font-bold text-black'>Nossas soluções atendem pessoas singulares,</span>
              condomínios, hotéis, clubes e salões de eventos,
              oferecendo escolhas personalizadas para cada tipo de cliente com uma <span className='font-bold text-black'>garantia de até 05 anos.</span>
            </p>
          </div>

        </div>
      </div>


      <div className="relative w-full mt-20 h-200 bg-[url('/Rectangle29.png')] bg-cover bg-center bg-no-repeat flex items-center">

        <div className="max-w-7xl px-30 space-y-5">
          <h2 className="text-xl md:text-9xl font-extrabold text-[#0B1A3A]">
            Quem Somos
          </h2>

          <p className="mt-4 max-w-xl text-sm text-[#0B1A3A]/80">
            A Sampool Construções nasceu para responder a uma lacuna clara no mercado, a falta de empresas especializadas e confiáveis na construção e manutenção de piscinas. Desde a nossa criação,
            atuamos com foco na qualidade dos acabamentos, cumprimento de prazos e acompanhamento técnico rigoroso em todas as fases da obra.
          </p>

          <button className='bg-[#00BFEA] px-24 py-4 rounded-full font-bold text-white text-2xl '>Ver projectos</button>
        </div>

      </div>

    </section>
  )
}
