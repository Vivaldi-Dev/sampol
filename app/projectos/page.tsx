import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import { testimonials } from "../data/projects";

export default function Page() {
  return (
    <div>
      <div className="py-20 bg-gray-100">
        <div className="border-b pb-4 mb-10 max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Veja alguns projectos</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <Link key={item.id} href={`/projectos/${item.id}`}>
              <div className="cursor-pointer group">
                <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <p className="mt-4 text-lg font-semibold">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  {item.Medidas}
                </p>
                
                <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {item.type}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}