import { siteConfig } from '../config/siteConfig';
import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { WhatsAppIcon } from './icons';

type CtaBannerProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function CtaBanner({ onWhatsAppClick }: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>¿Te quedaste en la ruta o necesitás el taller?</h2>
          <p>
            Auxilios mecánicos y consultas por WhatsApp al {siteConfig.whatsappDisplay}. Respondemos a la brevedad.
          </p>
        </div>
        <a href="#" className="btn btn--whatsapp btn--lg" onClick={onWhatsAppClick}>
          <WhatsAppIcon size={22} />
          Escribinos ahora
        </a>
      </div>
    </section>
  );
}
