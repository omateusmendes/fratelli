import type { Photo } from './photos';
import { commonPhotos } from './photos';
import { rooms } from './rooms';

const room = (slug: string, index: number, focus?: string): Photo => {
  const photo = rooms.find((r) => r.slug === slug)?.photos[index];
  if (!photo) throw new Error(`Foto ${index} do quarto "${slug}" não encontrada`);
  return focus ? { ...photo, focus } : photo;
};

/**
 * Foto de fundo do topo de cada página interna (com ponto de foco).
 * Os índices seguem a ordem das galerias em rooms.ts.
 */
export const pageHeroPhotos = {
  sobre: room('suite-hidromassagem', 5, '42% 55%'), // suíte 05: cama, sofá e abajur
  acomodacoes: room('quarto-deluxe', 1, '45% 60%'), // Deluxe 04: cama e escrivaninha
  cafe: { ...commonPhotos.salaoCafe, focus: '60% 60%' },
  comodidades: { ...commonPhotos.recepcao, focus: '64% 52%' },
  avaliacoes: room('suite-hidromassagem', 3, '62% 55%'), // suíte 06: banheira de hidromassagem
  localizacao: { ...commonPhotos.recepcao, focus: '56% 48%' },
  contato: room('quarto-duplo', 0, '50% 60%'), // Duplo 03: duas camas de solteiro
} satisfies Record<string, Photo>;
