"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

function useCountUp(target: number, start: boolean, duration = 2000) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return

        let startTime: number | null = null

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)

            setCount(Math.floor(percentage * target))

            if (percentage < 1) {
                requestAnimationFrame(step)
            }
        }

        requestAnimationFrame(step)
    }, [start, target, duration])

    return count
}

export default function StatsSection() {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()

    const clientes = useCountUp(1000, isVisible)
    const parceiros = useCountUp(80, isVisible)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    const handleOrcamentoClick = () => {
        router.push('/formulario')
    }

    const handleConsultorClick = () => {
        const phoneNumber = '258841234567' // Substitua pelo número correto
        const message = 'Olá! Vi o site da Sampool Construções e gostaria de falar com um consultor.'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <section ref={ref} className="w-full">

            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="bg-[#c3ccd7] py-16 flex items-center justify-center gap-4">
                    <div className="text-4xl">
                        <Image src={'/users.png'} alt="" width={70} height={70} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold">+{clientes}</p>
                        <p className="text-xl font-semibold">Clientes</p>
                    </div>
                </div>

                <div className="bg-[#aab4c3] py-16 flex items-center justify-center gap-4">
                    <div className="text-4xl">
                        <Image src={'/users.png'} alt="" width={70} height={70} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold">+{parceiros}</p>
                        <p className="text-xl font-semibold">Parceiros</p>
                    </div>
                </div>

            </div>

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
                    <button 
                        onClick={handleOrcamentoClick}
                        className="bg-[#070b2c] text-white px-8 py-4 rounded-full hover:scale-105 transition"
                    >
                        Solicitar orçamento →
                    </button>

                    <button 
                        onClick={handleConsultorClick}
                        className="border border-black px-8 py-4 rounded-full hover:bg-gray-100 transition"
                    >
                        Falar com um consultor
                    </button>
                </div>
            </div>

        </section>
    )
}