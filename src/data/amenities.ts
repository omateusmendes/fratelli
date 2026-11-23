export type AmenityIcon =
  | 'wifi'
  | 'car'
  | 'coffee'
  | 'utensils'
  | 'concierge'
  | 'bell'
  | 'sofa'
  | 'sparkles'
  | 'shirt'
  | 'accessibility';

export interface Amenity {
  icon: AmenityIcon;
  title: string;
  text: string;
  /** Nome usado no JSON-LD (schema.org amenityFeature). */
  schemaName: string;
}

/** Comodidades identificadas nas fichas públicas de hospedagem. */
export const amenities: Amenity[] = [
  {
    icon: 'wifi',
    title: 'Wi-Fi gratuito',
    text: 'Acesso gratuito à internet em toda a propriedade.',
    schemaName: 'Wi-Fi gratuito',
  },
  {
    icon: 'car',
    title: 'Estacionamento gratuito',
    text: 'Vagas privativas sem custo adicional para hóspedes.',
    schemaName: 'Estacionamento privativo gratuito',
  },
  {
    icon: 'coffee',
    title: 'Café da manhã',
    text: 'Opções em estilo buffet para começar o dia com tranquilidade.',
    schemaName: 'Café da manhã',
  },
  {
    icon: 'utensils',
    title: 'Restaurante',
    text: 'Culinária brasileira preparada para receber hóspedes.',
    schemaName: 'Restaurante',
  },
  {
    icon: 'concierge',
    title: 'Recepção 24 horas',
    text: 'Equipe disponível a qualquer hora para orientar sua estadia.',
    schemaName: 'Recepção 24 horas',
  },
  {
    icon: 'bell',
    title: 'Serviço de quarto',
    text: 'Atendimento no conforto da sua acomodação.',
    schemaName: 'Serviço de quarto',
  },
  {
    icon: 'sofa',
    title: 'Lounge e terraço',
    text: 'Ambientes compartilhados para relaxar ou conversar.',
    schemaName: 'Lounge compartilhado e terraço',
  },
  {
    icon: 'sparkles',
    title: 'Limpeza diária',
    text: 'Acomodações arrumadas todos os dias.',
    schemaName: 'Limpeza diária',
  },
  {
    icon: 'shirt',
    title: 'Serviço de passar roupas',
    text: 'Para chegar impecável aos seus compromissos.',
    schemaName: 'Serviço de passar roupas',
  },
  {
    icon: 'accessibility',
    title: 'Elevador e acessibilidade',
    text: 'Elevador e estrutura de acesso adaptado.',
    schemaName: 'Elevador',
  },
];

/** Os quatro destaques da faixa abaixo do hero (prévia visual). */
export const highlights: Pick<Amenity, 'icon' | 'title'>[] = [
  { icon: 'coffee', title: 'Café da manhã' },
  { icon: 'car', title: 'Estacionamento gratuito' },
  { icon: 'wifi', title: 'Wi-Fi gratuito' },
  { icon: 'concierge', title: 'Recepção 24 horas' },
];
