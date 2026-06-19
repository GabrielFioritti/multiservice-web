import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { WhatsAppIcon } from './icons';

type WhatsAppFloatProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function WhatsAppFloat({ onWhatsAppClick }: WhatsAppFloatProps) {
  return (
    <a
      href="#"
      className="whatsapp-float"
      onClick={onWhatsAppClick}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="whatsapp-float__tooltip">¡Escribinos!</span>
    </a>
  );
}
