'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div className="mx-4 mt-4 px-6 md:py-4 flex items-center justify-between rounded-2xl">

                <div className='relative'>
                    <Image src={'/logo.png'} alt='' width={150} height={150} />
                </div>


                <nav className="hidden md:flex gap-8 font-medium text-white text-lg bg-[#060828] p-4 rounded-2xl">
                    <Link href="/">Início</Link>
                    <Link href="/#quem-somos">
                        Quem Somos
                    </Link>

                    <Link href="/servicos">Serviços</Link>
                    <Link href="/projectos">Projetos</Link>
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
                <div className="md:hidden mx-4 mt-2 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl">
                    <div className="flex flex-col text-center space-y-4">
                        <Link
                            className="block"
                            onClick={() => setOpen(false)}
                            href="#">
                            Início
                        </Link>
                        <Link href="/#quem-somos">
                            Quem Somos
                        </Link>
                        <Link
                            className="block"
                            onClick={() => setOpen(false)}
                            href="/formulario">
                            Formulário
                        </Link>
                        <Link
                            className="block"
                            onClick={() => setOpen(false)}
                            href="/servicos">
                            Serviços
                        </Link>
                        <Link
                            className="block"
                            onClick={() => setOpen(false)}
                            href="/">
                            Projetos
                        </Link>

                        <button className="w-full mt-4 bg-[#0A8BAE] font-semibold py-3 rounded-full text-sm shadow text-white">
                            FALE CONNOSCO
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
