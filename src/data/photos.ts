import type { ImageMetadata } from 'astro';

import recepcao from '@/assets/fotos/areas-comuns/recepcao-fratelli-premium-hotel-eloi-mendes.jpg';
import salaoCafe from '@/assets/fotos/areas-comuns/salao-cafe-da-manha-e-restaurante-fratelli-premium-hotel-eloi-mendes.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /**
   * Ponto de foco (CSS object-position), também usado como origem do zoom.
   * Ex.: '58% 62%' mantém a cama no centro e afasta bordas indesejadas.
   */
  focus?: string;
}

/** Fotos das áreas comuns do hotel. */
export const commonPhotos = {
  recepcao: {
    src: recepcao,
    alt: 'Recepção do Fratelli Premium Hotel com balcão, painel ripado em madeira e sofá de espera',
  },
  salaoCafe: {
    src: salaoCafe,
    alt: 'Salão do café da manhã e restaurante do Fratelli Premium Hotel com mesas de madeira e balcão',
  },
} satisfies Record<string, Photo>;
