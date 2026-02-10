import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sra. Eugênia",
    initial: "E",
    text: `A Sampool Construções realizou um excelente trabalho na minha piscina. Fiquei muito satisfeita com o resultado final, que ficou bonito e bem executado. Apesar de ter havido um pequeno constrangimento relacionado com uma ligeira perda de água na área do babypool, a qualidade do serviço foi evidente. A água da piscina melhorou significativamente, com um azul muito mais bonito. Recomendo a Sampool sem qualquer dúvida. Destaco ainda a postura da equipa: jovens profissionais, respeitosos, bem apresentados e com uma excelente forma de comunicar. Estão de parabéns.`,
  },
  {
    name: "Sr. Wilson",
    initial: "W",
    text: `Fiquei bastante satisfeita com os serviços da Sampool Construções, que tem demonstrado consistência na prestação de bons serviços. A empresa respondeu de forma eficaz às minhas preocupações, sobretudo no que diz respeito à limpeza e à gestão da qualidade da água. A melhoria da água foi muito significativa. Recomendo a Sampool pela seriedade no atendimento, pela rapidez na resposta ao meu pedido e por apresentar preços adequados e competitivos face ao mercado.     `,
  },
  {
    name: "Sr. João",
    initial: "J",
    text: `Fiquei muito satisfeito com o trabalho realizado pela Sampool Construções. A qualidade da água da piscina melhorou de forma evidente e o resultado final superou as minhas expectativas. Recomendo a empresa sem hesitação. Obrigado pelo excelente serviço. `,
  },
  {
    name: "Sr. Edgar Mabutana",
    initial: "E",
    text: `O serviço da Sampool Construções foi satisfatório e correspondeu às minhas expectativas. O trabalho realizado é aceitável e a melhoria da piscina é visível. Recomendo a empresa.`,
  },
  {
    name: "Sra. Dárica",
    initial: "D",
    text: `Fiquei bastante satisfeita com os serviços da Sampool Construções, que tem demonstrado consistência na prestação de bons serviços. A empresa respondeu de forma eficaz às minhas preocupações, sobretudo no que diz respeito à limpeza e à gestão da qualidade da água. A melhoria da água foi muito significativa. Recomendo a Sampool pela seriedade no atendimento, pela rapidez na resposta ao meu pedido e por apresentar preços adequados e competitivos face ao mercado`,
  },
];

export default function TestimonialsSection() {
  return (
    <section className=" py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          O que nosso clientes dizem
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 justify-center mt-10 max-w-4xl mx-auto">
          {testimonials.slice(3).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  name,
  initial,
  text,
}: {
  name: string;
  initial: string;
  text: string;
}) {
  return (
    <div className="bg-sky-200/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        {text}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sky-300 flex items-center justify-center font-semibold text-gray-800">
            {initial}
          </div>
          <span className="font-medium text-gray-800">{name}</span>
        </div>

        <div className="flex gap-1 text-sky-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  );
}
