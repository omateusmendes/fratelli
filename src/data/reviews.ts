/**
 * Indicadores públicos de avaliação.
 * São dados dinâmicos: TODO(hotel) revisar valores e data antes de cada publicação.
 */
export const reviews = {
  checkedAt: 'novembro de 2026',
  booking: {
    platform: 'Booking.com',
    score: 9.1,
    scale: 10,
    // TODO(hotel): quantidade de avaliações para o JSON-LD (aggregateRating.reviewCount)
    reviewCount: undefined as number | undefined,
    url: 'https://www.booking.com/searchresults.pt-br.html?ss=Fratelli+Premium+Hotel+El%C3%B3i+Mendes',
    categories: [
      { label: 'Funcionários', score: 9.4 },
      { label: 'Limpeza', score: 9.3 },
      { label: 'Conforto', score: 9.1 },
    ],
  },
  google: {
    platform: 'Google',
    score: 4.7,
    scale: 5,
    url: 'https://www.google.com/maps/search/?api=1&query=Fratelli+Premium+Hotel+El%C3%B3i+Mendes',
  },
  /** Aspectos mais valorizados pelos hóspedes, segundo o levantamento. */
  highlights: [
    {
      title: 'Atendimento',
      text: 'A equipe é o ponto mais bem avaliado: atenção, cordialidade e disposição para ajudar.',
    },
    {
      title: 'Limpeza',
      text: 'Acomodações e áreas comuns cuidadas diariamente, com nota de destaque.',
    },
    {
      title: 'Café da manhã',
      text: 'Variedade e cuidado para começar o dia bem, antes de compromissos ou passeios.',
    },
  ],
} as const;

/** Formata nota no padrão brasileiro (9.1 → "9,1"). */
export const formatScore = (n: number) => n.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
