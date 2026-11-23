import type { Photo } from './photos';

import duploCamas from '@/assets/fotos/quarto-duplo/quarto-duplo-duas-camas-de-solteiro-fratelli-premium-hotel-eloi-mendes.jpg';
import duploArmario from '@/assets/fotos/quarto-duplo/quarto-duplo-armario-e-tv-fratelli-premium-hotel-eloi-mendes.jpg';
import duploBanheiro from '@/assets/fotos/quarto-duplo/quarto-duplo-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.jpg';
import deluxeCama from '@/assets/fotos/quarto-deluxe/quarto-deluxe-cama-de-casal-fratelli-premium-hotel-eloi-mendes.jpg';
import deluxeTv from '@/assets/fotos/quarto-deluxe/quarto-deluxe-tv-e-cortinas-fratelli-premium-hotel-eloi-mendes.jpg';
import deluxeSofa from '@/assets/fotos/quarto-deluxe/quarto-deluxe-cama-de-casal-e-sofa-fratelli-premium-hotel-eloi-mendes.jpg';
import deluxeBanheiro from '@/assets/fotos/quarto-deluxe/quarto-deluxe-banheiro-com-box-fratelli-premium-hotel-eloi-mendes.jpg';
import suiteCama from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-cama-casal-extragrande-fratelli-premium-hotel-eloi-mendes.jpg';
import suiteBanheira from '@/assets/fotos/suite-hidromassagem/suite-banheira-de-hidromassagem-fratelli-premium-hotel-eloi-mendes.jpg';
import suiteBanheiro from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-banheiro-amplo-fratelli-premium-hotel-eloi-mendes.jpg';
import suiteSofa from '@/assets/fotos/suite-hidromassagem/suite-hidromassagem-cama-e-sofa-fratelli-premium-hotel-eloi-mendes.jpg';

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
 * Inventário: 5 opções em 3 categorias (2 Duplos, 2 Deluxe, 1 Suíte).
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
      { src: duploCamas, alt: 'Quarto Duplo do Fratelli Premium Hotel com duas camas de solteiro e cortinas cinza' },
      { src: duploArmario, alt: 'Armário aberto com cabides e TV de parede no Quarto Duplo' },
      { src: duploBanheiro, alt: 'Banheiro do Quarto Duplo com box de vidro e pastilhas' },
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
      { src: deluxeCama, alt: 'Quarto Deluxe do Fratelli Premium Hotel com cama de casal, almofadas coloridas e escrivaninha' },
      { src: deluxeTv, alt: 'Quarto Deluxe com TV de parede, cortinas e cama de casal arrumada' },
      { src: deluxeSofa, alt: 'Cama de casal com mantas e sofá de dois lugares no Quarto Deluxe' },
      { src: deluxeBanheiro, alt: 'Banheiro do Quarto Deluxe com box de vidro e pastilhas' },
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
      { src: suiteCama, alt: 'Suíte com Hidromassagem do Fratelli Premium Hotel com cama de casal extragrande, mesa e poltrona' },
      { src: suiteBanheira, alt: 'Banheira de hidromassagem da suíte com bancada de mármore' },
      { src: suiteBanheiro, alt: 'Banheiro amplo da suíte com revestimento marmorizado e box de vidro' },
      { src: suiteSofa, alt: 'Cama de casal com mantas e sofá de dois lugares na suíte' },
    ],
  },
];
