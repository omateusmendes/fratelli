import type { Photo } from './photos';

// Fotos profissionais (WebP). Cada categoria tem 2 modelos de quarto.
import duplo03Camas from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-03-duas-camas-de-solteiro-fratelli-premium-hotel-eloi-mendes.webp';
import duplo03Cabeceira from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-03-camas-de-solteiro-cabeceira-estofada-fratelli-premium-hotel-eloi-mendes.webp';
import duplo03Banheiro from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-03-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.webp';
import duplo01Camas from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-01-duas-camas-de-solteiro-fratelli-premium-hotel-eloi-mendes.webp';
import duplo01Tv from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-01-tv-escrivaninha-e-armario-fratelli-premium-hotel-eloi-mendes.webp';
import duplo01Banheiro from '@/assets/fotos/quarto-duplo/quarto-duplo-quarto-01-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe02Tv from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-02-cama-de-casal-e-tv-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe02Cama from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-02-cama-de-casal-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe02Banheiro from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-02-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe04Escrivaninha from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-04-cama-de-casal-e-escrivaninha-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe04Cabeceira from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-04-cama-de-casal-cabeceira-estofada-fratelli-premium-hotel-eloi-mendes.webp';
import deluxe04Banheiro from '@/assets/fotos/quarto-deluxe/quarto-deluxe-quarto-04-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.webp';
import suite06Cama from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-06-cama-casal-extragrande-fratelli-premium-hotel-eloi-mendes.webp';
import suite06Sofa from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-06-cama-e-sofa-fratelli-premium-hotel-eloi-mendes.webp';
import suite06Banheira from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-06-banheira-de-hidromassagem-fratelli-premium-hotel-eloi-mendes.webp';
import suite06Banheiro from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-06-banheiro-marmorizado-fratelli-premium-hotel-eloi-mendes.webp';
import suite05Cama from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-05-cama-casal-extragrande-fratelli-premium-hotel-eloi-mendes.webp';
import suite05Sofa from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-05-cama-e-sofa-fratelli-premium-hotel-eloi-mendes.webp';
import suite05Banheira from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-05-banheira-de-hidromassagem-com-janela-fratelli-premium-hotel-eloi-mendes.webp';
import suite05Banheiro from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-quarto-05-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.webp';
export interface RoomSpec {
  label: string;
  value: string;
}

export interface Room {
  slug: string;
  name: string;
  /** Nome curto usado em botões e mensagens. */
  shortName: string;
  tagline: string;
  size: number;
  beds: string;
  guests: number;
  summary: string;
  description: string;
  /** Apenas comodidades confirmadas nas fichas públicas. */
  amenities: string[];
  featured?: boolean;
  /** Galeria da acomodação; a primeira foto é a capa. Vazia = placeholder. */
  photos: Photo[];
  /** Texto alternativo usado pelo placeholder quando não há fotos. */
  imageAlt: string;
}

/**
 * Inventário: 3 categorias, cada uma com 2 modelos de quarto (fotos intercaladas nas galerias).
 * TODO(hotel): confirmar diferenças entre as variantes (climatização, varanda,
 * térreo, camas) antes de detalhá-las no site.
 */
export const rooms: Room[] = [
  {
    slug: 'quarto-duplo',
    name: 'Quarto Duplo',
    shortName: 'Quarto Duplo',
    tagline: 'Praticidade para duas pessoas',
    size: 28,
    beds: '2 camas de solteiro',
    guests: 2,
    summary: 'Duas camas de solteiro e estrutura funcional para descansar com tranquilidade.',
    description:
      'Uma opção prática e confortável para quem prefere camas individuais. Com duas camas de solteiro e estrutura funcional, oferece o espaço necessário para descansar com tranquilidade.',
    amenities: ['Banheiro privativo', 'TV', 'Wi-Fi gratuito'],
    imageAlt: 'Quarto Duplo com duas camas de solteiro',
    photos: [
      { src: duplo03Camas, alt: 'Quarto Duplo do Fratelli Premium Hotel com duas camas de solteiro, escrivaninha e janela' },
      { src: duplo01Camas, alt: 'Quarto Duplo com duas camas de solteiro, almofadas azuis e cortinas' },
      { src: duplo03Cabeceira, alt: 'Camas de solteiro com cabeceira estofada e almofadas laranja no Quarto Duplo' },
      { src: duplo01Tv, alt: 'TV de parede, escrivaninha com cadeira, espelho e armário no Quarto Duplo' },
      { src: duplo03Banheiro, alt: 'Banheiro do Quarto Duplo com box de vidro, bancada de granito e revestimento marmorizado' },
      { src: duplo01Banheiro, alt: 'Banheiro do Quarto Duplo com box de vidro, janela e bancada de granito' },
    ],
  },
  {
    slug: 'quarto-deluxe',
    name: 'Quarto Deluxe',
    shortName: 'Quarto Deluxe',
    tagline: 'Mais espaço para aproveitar a estadia',
    size: 36,
    beds: '1 cama de casal grande',
    guests: 2,
    summary: 'Metragem generosa e cama de casal para viagens a trabalho ou lazer.',
    description:
      'O Quarto Deluxe combina conforto e praticidade em um ambiente acolhedor. Sua metragem generosa é ideal para quem valoriza comodidade ao longo de viagens a trabalho ou lazer.',
    // TODO(hotel): completar após validar climatização, varanda e banheiro.
    amenities: ['Wi-Fi gratuito'],
    imageAlt: 'Quarto Deluxe com cama de casal',
    photos: [
      { src: deluxe02Tv, alt: 'Quarto Deluxe do Fratelli Premium Hotel com cama de casal, TV de parede e cortinas' },
      { src: deluxe04Escrivaninha, alt: 'Quarto Deluxe com cama de casal, cabeceira estofada e escrivaninha' },
      { src: deluxe02Cama, alt: 'Cama de casal com almofadas verdes e criado-mudo no Quarto Deluxe' },
      { src: deluxe04Cabeceira, alt: 'Cama de casal com cabeceira estofada e almofadas laranja no Quarto Deluxe' },
      { src: deluxe02Banheiro, alt: 'Banheiro do Quarto Deluxe com box de vidro, bancada de granito e revestimento marmorizado' },
      { src: deluxe04Banheiro, alt: 'Banheiro do Quarto Deluxe com box de vidro e bancada de granito' },
    ],
  },
  {
    slug: 'suite-hidromassagem',
    name: 'Suíte com Hidromassagem',
    shortName: 'Suíte com Hidromassagem',
    tagline: 'Destaque de experiência',
    size: 40,
    beds: '1 cama de casal extragrande',
    guests: 2,
    summary: 'Cama extragrande e banheira de hidromassagem para momentos especiais.',
    description:
      'Um convite para aproveitar momentos especiais. A suíte reúne cama de casal extragrande e banheira de hidromassagem para oferecer uma experiência de descanso diferenciada.',
    amenities: ['Banheira de hidromassagem', 'Ar-condicionado', 'TV', 'Banheiro privativo', 'Wi-Fi gratuito'],
    featured: true,
    imageAlt: 'Suíte com cama de casal extragrande e banheira de hidromassagem',
    photos: [
      { src: suite06Cama, alt: 'Suíte com Hidromassagem do Fratelli Premium Hotel com cama de casal extragrande, cabeceira estofada e mesa com orquídea' },
      { src: suite05Banheira, alt: 'Banheira de hidromassagem da suíte com janela e bancada de granito' },
      { src: suite05Cama, alt: 'Suíte com cama de casal extragrande, mesa com cadeiras e tapete' },
      { src: suite06Banheira, alt: 'Banheira de hidromassagem da suíte com revestimento marmorizado' },
      { src: suite06Sofa, alt: 'Cama de casal, sofá e quadro decorativo na suíte' },
      { src: suite05Sofa, alt: 'Cama de casal com almofadas laranja, sofá e abajur na suíte' },
      { src: suite06Banheiro, alt: 'Banheiro da suíte com revestimento marmorizado, box de vidro e banheira' },
      { src: suite05Banheiro, alt: 'Banheiro da suíte com box de vidro e bancada de granito' },
    ],
  },
];
