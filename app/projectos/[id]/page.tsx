'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import type { Testimonial } from "@/app/data/projects";
import { testimonials } from "@/app/data/projects";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
    const [project, setProject] = useState<Testimonial | null>(null);
    const [loading, setLoading] = useState(true);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    useEffect(() => {
        params.then(resolvedParams => {
            const id = resolvedParams.id;
            
            // Buscar pelo ID numérico do projeto
            const projetoEncontrado = testimonials.find(p => p.id.toString() === id);
            
            if (projetoEncontrado) {
                setProject(projetoEncontrado);
            } else {
                // Tentar também buscar por índice como fallback
                const index = parseInt(id);
                if (!isNaN(index) && index >= 0 && index < testimonials.length) {
                    setProject(testimonials[index]);
                } else {
                    setProject(null);
                }
            }
            
            setLoading(false);
        });
    }, [params]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-sm sm:text-base text-gray-600">Carregando projeto...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        notFound();
    }

    const handleThumbnailClick = (index: number) => {
        setMainImageIndex(index);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link 
                    href="/projectos" 
                    className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800 font-medium mb-6 sm:mb-8 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Voltar para Projetos
                </Link>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* LEFT SIDE - Galeria de imagens */}
                    <div>
                        {/* Imagem principal */}
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl mb-4 sm:mb-6">
                            <Image
                                src={project.images[mainImageIndex]}
                                alt={`${project.title} - imagem principal`}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-opacity duration-300"
                            />
                        </div>

                        {/* Miniaturas */}
                        <div className="grid grid-cols-4 gap-2 sm:gap-4">
                            {project.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                        mainImageIndex === index 
                                        ? 'border-blue-500 scale-105 shadow-md' 
                                        : 'border-transparent hover:border-blue-300'
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} - miniatura ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 15vw"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - Informações */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                {project.title}
                            </h1>
                            <div className="inline-flex items-center gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                    {project.type}
                                </span>
                                <span className="text-sm text-gray-500">ID: {project.id}</span>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Medidas
                                </h3>
                                <p className="text-lg sm:text-xl text-gray-800 font-medium">
                                    {project.Medidas}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Detalhes da Construção
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    {project.DETALHES}
                                </p>
                            </div>

                            {project.subscribe && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                                    <h3 className="text-sm font-semibold text-yellow-700 uppercase tracking-wide mb-2">
                                        Destaque
                                    </h3>
                                    <p className="text-yellow-800">
                                        {project.subscribe}
                                    </p>
                                </div>
                            )}

                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Localização
                                </h3>
                                <div className="flex items-center text-gray-800">
                                    <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-lg font-medium">{project.local}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/formulario"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center">
                                    Solicitar Orçamento
                                </Link>
                                <Link
                                    href="/projectos"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center">
                                    Ver Outros Projetos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}