import Image from "next/image";
import Link from "next/link";
import {
  Hammer,
  Wrench,
  Droplets,
  Settings,
  Waves,
  Armchair,
} from "lucide-react";

const services = [
  {
    title: "Construção de Piscinas",
    image: "/contrucao.jpg",
    icon: Hammer,
  },
  {
    title: "Reabilitação de Piscinas",
    image: "/reabilitacao.png",
    icon: Wrench,
  },
  {
    title: "Manutenção e Tratamento de Água",
    image: "/manutencao01.jpg",
    icon: Droplets,
  },
  {
    title: "Assistência Técnica Especializada",
    image: "/reparacao01.jpg",
    icon: Settings,
  },
  {
    title: "Reparação e Venda de Equipamentos",
    image: "/reparacao.jpg",
    icon: Waves,
  },
  {
    title: "Projecção de Projectos de Piscinas",
    image: "/projecao.jpg",
    icon: Armchair,
  },
];

export default function SectionTwo() {
  return (
    <section className="md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-5 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Nossos Serviços
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Soluções completas para piscinas residenciais,
            comerciais e institucionais
          </p>

          <Link href="/servicos"
            className="inline-block mt-4 text-lg underline hover:text-sky-600 transition">
            Ver todos Serviços
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl
                  ${index >= 3 ? "lg:col-span-1 sm:col-span-2" : ""}
                `}>
                <div className="relative h-64">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500" />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-4">

                    <div className="bg-sky-500 p-3 rounded-full shadow-lg">
                      <Icon size={20} className="text-white" />
                    </div>

                    <h3 className="text-white text-xl font-semibold max-w-[200px]">
                      {service.title}
                    </h3>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
