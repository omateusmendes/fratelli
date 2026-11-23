export interface NavItem {
  href: string;
  label: string;
  /** Outras rotas que deixam este item marcado como ativo. */
  match?: string[];
}

/**
 * Menu principal enxuto (4 itens). O contato fica no botão "Fale com a recepção";
 * Café da manhã e Avaliações continuam acessíveis pela home, pelas páginas
 * relacionadas e pelo rodapé.
 */
export const nav: NavItem[] = [
  { href: '/sobre/', label: 'O hotel', match: ['/avaliacoes/'] },
  { href: '/acomodacoes/', label: 'Acomodações' },
  { href: '/comodidades/', label: 'Comodidades', match: ['/cafe-da-manha/'] },
  { href: '/localizacao/', label: 'Localização' },
];

/** Página de destino do botão principal do cabeçalho. */
export const contactHref = '/contato/';

/** Navegação completa do rodapé (todas as páginas). */
export const footerNav: NavItem[] = [
  { href: '/', label: 'Início' },
  { href: '/sobre/', label: 'O hotel' },
  { href: '/acomodacoes/', label: 'Acomodações' },
  { href: '/cafe-da-manha/', label: 'Café da manhã' },
  { href: '/comodidades/', label: 'Comodidades' },
  { href: '/avaliacoes/', label: 'Avaliações' },
  { href: '/localizacao/', label: 'Localização' },
  { href: '/contato/', label: 'Contato e reservas' },
];
