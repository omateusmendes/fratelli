import { hotel, flags } from './hotel';
import { rooms } from './rooms';

export interface FaqItem {
  question: string;
  answer: string;
  /** Exibir na versão curta da home. */
  featured?: boolean;
}

const roomsSummary = rooms.map((r) => `${r.name} (${r.beds}, ${r.size} m²)`).join(', ');

/**
 * Dúvidas frequentes — apenas informações do levantamento do hotel.
 * TODO(hotel): incluir políticas (pets, berços, camas extras) quando confirmadas.
 */
export const faq: FaqItem[] = [
  {
    question: 'Quais são os horários de check-in e check-out?',
    answer: `O check-in é ${hotel.schedule.checkInPhrase} e o check-out ${hotel.schedule.checkOutPhrase}. Se precisar chegar ou sair fora desses horários, fale com a recepção com antecedência.`,
    featured: true,
  },
  {
    question: 'O hotel tem estacionamento?',
    answer: 'Sim. O Fratelli Premium Hotel oferece estacionamento privativo gratuito para hóspedes.',
    featured: true,
  },
  {
    question: 'O café da manhã está incluído?',
    answer: flags.breakfastIncluded
      ? 'Sim. O café da manhã em estilo buffet está incluído na diária.'
      : 'O hotel serve café da manhã em estilo buffet. Confirme com a recepção, no momento da reserva, se ele está incluído na sua tarifa.',
    featured: true,
  },
  {
    question: 'Como faço uma reserva?',
    answer: `Pelo WhatsApp da recepção, pelo telefone ${hotel.phone.display} ou pelo Booking.com. Na página de contato, você monta o pedido com datas, número de hóspedes e acomodação, e envia direto pelo WhatsApp.`,
    featured: true,
  },
  {
    question: 'Quantas pessoas cabem em cada acomodação?',
    answer: `Todas as acomodações recebem até 2 hóspedes: ${roomsSummary}.`,
  },
  {
    question: 'O Wi-Fi é gratuito?',
    answer: 'Sim. O acesso à internet é gratuito em toda a propriedade.',
  },
  {
    question: 'A recepção funciona 24 horas?',
    answer: 'Sim. A equipe fica disponível 24 horas para receber e orientar os hóspedes.',
  },
  {
    question: 'Onde fica o hotel?',
    answer: `Na ${hotel.address.street.replace('Av.', 'Avenida')}, no bairro Jardim Paraíso, uma região tranquila de Elói Mendes (MG). Um local silencioso para descansar, com acesso prático à cidade e à região de Varginha.`,
  },
  {
    question: 'O hotel tem elevador e acessibilidade?',
    answer:
      'Sim. O hotel conta com elevador e estrutura de acesso adaptado. Se você tiver alguma necessidade específica, fale com a recepção antes da chegada.',
  },
];

export const homeFaq = faq.filter((item) => item.featured);
