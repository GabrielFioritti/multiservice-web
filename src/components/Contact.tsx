import { siteConfig } from '../config/siteConfig';
import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { FadeIn } from './FadeIn';
import { ClockIcon, MapPinIcon, WhatsAppIcon } from './icons';

type ContactProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function Contact({ onWhatsAppClick }: ContactProps) {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Ubicación</span>
          <h2 className="section__title">Contacto</h2>
          <p className="section__desc">
            Visitános en Salto o escribinos por WhatsApp. Estamos de 9:00 a 17:00 hs, horario corrido.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <FadeIn className="contact__item">
              <div className="contact__icon">
                <MapPinIcon size={24} />
              </div>
              <div>
                <h4>Dirección</h4>
                <p>
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}, {siteConfig.country}
                </p>
              </div>
            </FadeIn>

            <FadeIn className="contact__item">
              <div className="contact__icon">
                <ClockIcon size={24} />
              </div>
              <div>
                <h4>Horario</h4>
                <p>{siteConfig.scheduleDetail}</p>
              </div>
            </FadeIn>

            <FadeIn className="contact__item">
              <div className="contact__icon contact__icon--whatsapp">
                <WhatsAppIcon size={24} />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="#" className="contact__link" onClick={onWhatsAppClick}>
                    {siteConfig.whatsappDisplay}
                  </a>
                </p>
                <small className="contact__note">Auxilios mecánicos y consultas</small>
              </div>
            </FadeIn>
          </div>

          <div className="contact__map">
            <iframe
              title={`Ubicación ${siteConfig.businessName} - ${siteConfig.fullAddress}`}
              src={`https://maps.google.com/maps?q=${siteConfig.mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
