import type { Photo } from './photos';
import { commonPhotos } from './photos';
import { rooms } from './rooms';

const room = (slug: string, index: number, focus?: string): Photo => {
  const photo = rooms.find((r) => r.slug === slug)?.photos[index];
  if (!photo) throw new Error(`Foto ${index} do quarto "${slug}" não encontrada`);
  return focus ? { ...photo, focus } : photo;
};

/** Foto de fundo do topo de cada página interna (com ponto de foco). */
export const pageHeroPhotos = {
  sobre: room('suite-hidromassagem', 3, '62% 60%'),
  acomodacoes: room('suite-hidromassagem', 0, '64% 70%'),
  cafe: { ...commonPhotos.salaoCafe, focus: '60% 60%' },
  comodidades: { ...commonPhotos.recepcao, focus: '64% 52%' },
  avaliacoes: room('suite-hidromassagem', 1, '58% 62%'),
  localizacao: { ...commonPhotos.recepcao, focus: '56% 48%' },
  contato: room('quarto-deluxe', 0, '70% 70%'),
} satisfies Record<string, Photo>;
