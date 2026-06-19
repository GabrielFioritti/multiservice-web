import { services } from '../data/content';
import { FadeIn } from './FadeIn';

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Lo que hacemos</span>
          <h2 className="section__title">Nuestros servicios</h2>
          <p className="section__desc">
            Mecánica, electricidad, mantenimiento y auxilios mecánicos en Salto. Autos, motos y todo lo que tenga motor.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <FadeIn key={service.num}>
              <article className="service-card">
                <div className="service-card__num">{service.num}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
