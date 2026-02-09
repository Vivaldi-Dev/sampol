import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { testimonials } from "@/app/data/projects";
import { useParams } from 'next/navigation';


export default function ProjectDetails({
    params,
}: {
    params: { id: string };
}) {
    const project = testimonials[Number(params.id)];
    // const { id } = useParams() as { id: string };

    if (!project) return notFound();

    return (
        <div className="bg-gray-100 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-6">

                <Link href="/projectos" className="text-sm mb-10 inline-block">
                    ← Voltar
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT SIDE */}
                    <div className="flex gap-4">

                        <div className="flex flex-col gap-4">
                            {project.images.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative w-24 h-24 rounded overflow-hidden"
                                >
                                    <Image
                                        src={img}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="relative flex-1 h-[500px] rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 uppercase">
                            {project.title}
                        </h2>

                        <p className="mb-2">
                            <strong>Medidas:</strong> {project.Medidas}
                        </p>

                        <p className="mb-4">
                            <strong>Tipo:</strong> {project.type}
                        </p>

                        <div className="mb-6">
                            <h3 className="font-bold mb-2">DETALHES</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {project.DETALHES}
                            </p>
                        </div>

                        {project.subscribe && (
                            <p className="mb-6 text-gray-700">
                                {project.subscribe}
                            </p>
                        )}

                        <p>
                            <strong>Local:</strong> {project.local}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
