export interface Testimonial {
  id: number;
  title: string;
  Medidas: string;
  type: string;
  DETALHES: string;
  local: string;
  subscribe?: string; 
  images: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Piscina Média caseira com BebyPool",
    Medidas: "8x4m, altura 90 à 160m",
    type: "L",
    DETALHES:
      "Construído na base de sistema de alvenaria com malha e Betão (concreto) manual, revestido com Marblate azul, bordas antiderrapante 50x50.",
    local: "Maputo Cidade, bairro da Costa do Sol",
    images: [
      "/projecto1.jpg",
      "/projecto2.jpg",
      "/projecto3.jpg",
      "/projecto4.jpg",
    ],
  },
  {
    id: 2,
    title: "Piscina Média caseira com BebyPool",
    Medidas: "8x4m, altura 90 à 160m",
    type: "Retangular",
    DETALHES:
      "Com bancada, construído na base de sistema de alvenaria com malha e Betão (concreto) manual, revestido com Marblate azul.",
    local: "Maputo Cidade, bairro da Costa do Sol",
    images: [
      "/projecto5.jpg",
      "/projecto6.jpg",
      "/projecto7.jpg",
      "/projecto8.jpg",
    ],
  },
  {
    id: 3,
    title: "Piscina grande caseira tipo retangular",
    Medidas: "12x5m com anexo de BebyPool 3x2m altura 1 à 1.80m",
    type: "T",
    DETALHES:
      "Construído na base de alvenaria com malha e Betão, revestido com Marblate azul, bordas antiderrapante 25x25 cor de tijolo.",
    local: "Marracuene, bairro de Ricatla",
    images: [
      "/projecto9.jpg",
      "/projecto10.jpg",
      "/projecto12.jpg",
      "/projecto12.jpg",
    ],
  },
  {
    id: 4,
    title: "Piscina caseira com cascata",
    Medidas: "12x5m + 3x2m",
    type: "Caseira com cascata",
    DETALHES:
      "Tipo Praia e oval, começa rasa e vai aprofundando aos poucos. Ideal para crianças e idosos.",
    local: "Maputo",
    subscribe:
      "Super confortável: dá para sentar, deitar e relaxar na parte rasa.",
    images: [
      "/projecto13.jpg",
      "/projecto14.jpg",
      "/projecto15.jpg",
      "/projecto16.jpg",
    ],
  },
  {
    id: 5,
    title: "Piscina grande caseira tipo retangular",
    Medidas: "12x4m com anexo 3m² altura 1 à 1.80m",
    type: "Retangular",
    DETALHES:
      "Construído na base de sacos com malha e Betão manual, revestido com Marblate branco.",
    local: "Marracuene, bairro de Mincanhine",
    images: [
      "/projecto17.jpg",
      "/projecto18.jpg",
      "/projecto19.jpg",
      "/projecto20.png",
    ],
  },
];