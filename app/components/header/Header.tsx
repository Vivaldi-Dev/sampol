import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="relative z-10 flex items-center justify-between px-10 py-6">
                <h1 className="font-bold text-2xl">SAMPOOL</h1>

                <nav className="hidden md:flex gap-8 font-medium text-white text-lg">
                    <a href="#">Menu</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Serviços</a>
                    <a href="#">Projetos</a>
                </nav>

                <button className="bg-white font-semibold px-6 py-4 rounded-full text-sm shadow text-[#717171]">
                    FALE CONNOSCO
                </button>
            </header>
        </div>
    )
}
