import { siteConfig } from '../config/siteConfig';
import { aboutFeatures } from '../data/content';
import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { FadeIn } from './FadeIn';
import { CheckIcon } from './icons';

type AboutProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function About({ onWhatsAppClick }: AboutProps) {
  return (
    <section className="section section--dark" id="nosotros">
      <div className="container about">
        <FadeIn className="about__content">
          <span className="section__label section__label--light">Sobre nosotros</span>
          <h2 className="section__title section__title--light">
            {siteConfig.businessName}, tu taller en Salto
          </h2>
          <p className="about__text">
            Somos un taller de mecánica y electricidad en <strong>{siteConfig.city}</strong>, con experiencia en autos,
            motos y vehículos en general. En <strong>{siteConfig.businessName}</strong> trabajamos todo lo que tenga
            motor: desde un service hasta una reparación compleja.
          </p>
          <p className="about__text">
            Además del trabajo en taller, realizamos <strong>auxilios mecánicos</strong> para cuando te quedás varado.
            Atención directa, sin vueltas, con la confianza de un negocio local.
          </p>

          <ul className="about__list">
            {aboutFeatures.map((feature) => (
              <li key={feature}>
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>

          <a href="#" className="btn btn--primary" onClick={onWhatsAppClick}>
            Escribinos por WhatsApp
          </a>
        </FadeIn>

        <FadeIn className="about__visual">
          <div className="about__logo-card">
            <img src={siteConfig.logo} alt={siteConfig.businessName} width="280" height="280" />
          </div>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__num">Salto</span>
              <span className="stat__label">Taller local</span>
            </div>
            <div className="stat">
              <span className="stat__num">9–17</span>
              <span className="stat__label">Horario corrido</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
