import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#060B2D] text-gray-300 pt-16 pb-8">

      <div className="max-w-[1640px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              SAMPOOL
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              é uma empresa moçambicana especializada em construção,
              reabilitação e manutenção de piscinas
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Shop
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos" className="hover:text-white transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-white transition">
                  Projectos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Empresa
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-white transition">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/testemunhos" className="hover:text-white transition">
                  Testemunho
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Contactar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscrever-se
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Subscreva-se para receber novidades do nosso website
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Coloca seu email"
                className="w-full px-4 py-2 rounded-l-md bg-[#0c1445] border border-gray-700 focus:outline-none text-sm"
              />
              <button className="bg-white text-black px-4 rounded-r-md text-sm font-medium hover:bg-gray-200 transition">
                Entrar
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>© 2026. Todos direitos reservados</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Política de privacidade
            </Link>
            <Link href="#" className="hover:text-white transition">
              Termos e condições
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookie
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
