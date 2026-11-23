import { hotel } from '@/data/hotel';

/** Monta o link do WhatsApp da recepção com uma mensagem pré-preenchida. */
export function buildWhatsAppUrl(message: string = hotel.whatsapp.defaultMessage): string {
  return `https://wa.me/${hotel.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão para consultar uma acomodação específica. */
export function roomMessage(roomName: string): string {
  return `Olá! Vim pelo site do Fratelli Premium Hotel e gostaria de consultar a disponibilidade do ${roomName}.`;
}
