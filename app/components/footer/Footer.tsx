import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#060828] text-white'>
            <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 py-20 mt-10 ">
                <div>
                    <p>SAMPOOL</p>
                    <p>é uma empresa moçambicana especializada em construção, reabilitação e manutenção de piscinas</p>
                </div>

                <ul className="space-y-2 text-center font-extralight">
                    <li><Link href={''}>Serviços</Link></li>
                    <li><Link href={''}>Projectos</Link></li>
                    <li><Link href={''}>Depoimento</Link></li>
                    <li><Link href={''}>Accessorios</Link></li>

                </ul>

                <ul className="space-y-2 text-center font-extralight">
                    <p>Empresa</p>
                    <li><Link href={''}>Sobre nos</Link></li>
                    <li> <Link href={''}>Galeria</Link></li>
                    <li> <Link href={''}>Parceria</Link></li>
                    <li> <Link href={''}>Contactos</Link></li>     
                </ul>

                <div>
                    <p>Subcrever-se s</p>
                    <p>Subcreva-se para receber novidades do nosso website</p>
                </div>
            </div>
        </div>
    )
}
