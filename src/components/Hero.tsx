import { siteConfig } from '../config/siteConfig';
import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { WhatsAppIcon } from './icons';

type HeroProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function Hero({ onWhatsAppClick }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            {siteConfig.city}, {siteConfig.country} · {siteConfig.subtitle}
          </span>
          <h1 className="hero__title">
            Tu vehículo en las <span>mejores manos</span>
          </h1>
          <p className="hero__text">
            Taller local de mecánica y electricidad en Salto. Reparamos y mantenemos autos, motos y todo lo que tenga
            motor. También hacemos auxilios mecánicos cuando te quedás en la ruta.
          </p>
          <div className="hero__actions">
            <a href="#" className="btn btn--primary" onClick={onWhatsAppClick}>
              <WhatsAppIcon size={20} />
              Consultar por WhatsApp
            </a>
            <a href="#servicios" className="btn btn--outline">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="hero__logo-wrap">
          <img
            src={siteConfig.heroLogo}
            alt={`Logo ${siteConfig.businessName}`}
            className="hero__logo"
            width="420"
            height="420"
          />
        </div>
      </div>
    </section>
  );
}
