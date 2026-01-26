import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-transparent">
                <h1 className="font-bold text-2xl">SAMPOOL</h1>

                <nav className="hidden md:flex gap-8 font-medium text-black text-lg">
                    <Link href="#">Início</Link>
                    <Link href="#">Quem Somos</Link>
                    <Link href="/formulario">Formulario</Link>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/">Projetos</Link>
                </nav>

                <button className="bg-white font-semibold px-6 py-4 rounded-full text-sm shadow text-[#717171]">
                    FALE CONNOSCO
                </button>
            </header>
        </div>
    )
}
