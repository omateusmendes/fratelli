/**
 * Dados institucionais do Fratelli Premium Hotel.
 * Fonte: roteiro do site (Booking + fontes públicas, nov./2026).
 * Itens marcados com TODO(hotel) dependem de confirmação da administração.
 */

export const hotel = {
  name: 'Fratelli Premium Hotel',
  shortName: 'Fratelli',
  tagline: 'Conforto e acolhimento no Centro de Elói Mendes',
  description:
    'Hotel no Centro de Elói Mendes, Minas Gerais, com Quartos Duplos, Quartos Deluxe e Suíte com Hidromassagem, café da manhã, Wi-Fi e estacionamento gratuitos e recepção 24 horas.',

  address: {
    street: 'Av. Belo Horizonte, 386',
    district: 'Centro',
    city: 'Elói Mendes',
    state: 'MG',
    stateName: 'Minas Gerais',
    postalCode: '', // TODO(hotel): confirmar CEP
    country: 'BR',
  },

  /** Coordenadas aproximadas do endereço — TODO(hotel): conferir o pin no Google Maps. */
  geo: { lat: -21.6106, lng: -45.5656 },

  phone: {
    display: '(35) 99972-9999',
    e164: '+5535999729999',
  },

  whatsapp: {
    // TODO(hotel): confirmar se este é o WhatsApp oficial da recepção.
    number: '5535999729999',
    defaultMessage:
      'Olá! Vim pelo site do Fratelli Premium Hotel e gostaria de consultar disponibilidade.',
  },

  email: '', // TODO(hotel): e-mail oficial
  instagram: '', // TODO(hotel): URL do Instagram oficial

  // TODO(hotel): link direto da ficha do hotel no Booking.com
  bookingUrl: 'https://www.booking.com/searchresults.pt-br.html?ss=Fratelli+Premium+Hotel+El%C3%B3i+Mendes',

  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Fratelli+Premium+Hotel+Av.+Belo+Horizonte+386+El%C3%B3i+Mendes+MG',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Fratelli+Premium+Hotel,+Av.+Belo+Horizonte,+386,+El%C3%B3i+Mendes+-+MG&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Fratelli+Premium+Hotel+Av.+Belo+Horizonte+386+El%C3%B3i+Mendes+MG',

  // TODO(hotel): validar horários.
  schedule: {
    checkIn: '15h às 18h',
    checkOut: '12h às 12h30',
    checkInISO: '15:00',
    checkOutISO: '12:00',
    reception: '24 horas',
  },
} as const;

export const fullAddress = `${hotel.address.street}, ${hotel.address.district}, ${hotel.address.city} – ${hotel.address.state}`;

/**
 * Chaves para exibir/ocultar conteúdo que ainda depende de confirmação.
 * Basta trocar para `true` quando o hotel validar.
 */
export const flags = {
  /** Restaurante servindo jantar (citado nas fontes, a confirmar). */
  showDinner: false,
  /** Café da manhã incluso na diária (a confirmar). */
  breakfastIncluded: false,
  /** Seção de políticas (pets, berços, camas extras). */
  showPolicies: false,
} as const;
