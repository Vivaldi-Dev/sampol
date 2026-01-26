import Image from "next/image";

export default function Page() {
  return (
    <div className="py-30 pishko specular">
      <div className="border-b pb-3 mb-8 max-w-7xl mx-auto px-4">
        <p className="text-xl font-medium">Veja alguns projectos</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 ">

        <div>
          <div className="relative w-full h-[340px] rounded overflow-hidden">
            <Image
              src="/napsce01.jpg"
              alt="Reabilitação de Piscina"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-medium">Reabilitação de Piscina</p>
          <p className="text-sm text-gray-500">2024</p>
        </div>

        <div>
          <div className="relative w-full h-[340px] rounded overflow-hidden">
            <Image
              src="/napsce01.jpg"
              alt="Construção de Piscinas"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-medium">Construção de Piscinas</p>
          <p className="text-sm text-gray-500">2015</p>
        </div>

        <div>
          <div className="relative w-full h-[340px] rounded overflow-hidden">
            <Image
              src="/napsce03.jpg"
              alt="Assistência Técnica Especializada"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-medium">
            Assistência Técnica Especializada
          </p>
          <p className="text-sm text-gray-500">2025</p>
        </div>
      </div>
    </div>
  );
}
