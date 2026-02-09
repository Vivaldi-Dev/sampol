'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div className="mx-4 mt-4 px-6 py-4 flex items-center justify-between rounded-2xl">

                <h1 className="font-bold text-2xl tracking-wide">
                    SAMPOOL
                </h1>


                <nav className="hidden md:flex gap-8 font-medium text-white text-lg bg-[#060828] p-4 rounded-2xl">
                    <Link href="#">Início</Link>
                    <Link href="#">Quem Somos</Link>
                    <Link href="/servicos">Serviços</Link>
                    <Link href="/projetos">Projetos</Link>
                    <div className=''>
                        <Link className='bg-[#0A8BAE] p-2 rounded-2xl' href="/formulario"> fale connosco</Link>
                    </div>
                </nav>

                <div>

                </div>
                
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={() => setOpen(!open)}>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
            </div>


            {open && (
                <div className="md:hidden mx-4 mt-2 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl space-y-4">
                    <Link onClick={() => setOpen(false)} href="#">Início</Link>
                    <Link onClick={() => setOpen(false)} href="#">Quem Somos</Link>
                    <Link onClick={() => setOpen(false)} href="/formulario">Formulário</Link>
                    <Link onClick={() => setOpen(false)} href="/servicos">Serviços</Link>
                    <Link onClick={() => setOpen(false)} href="/">Projetos</Link>

                    <button className="w-full mt-4 bg-[#0A8BAE] font-semibold py-3 rounded-full text-sm shadow text-[#717171]">
                        FALE CONNOSCO
                    </button>
                </div>
            )}
        </header>
    )
}
