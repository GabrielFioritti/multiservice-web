import { siteConfig } from '../config/siteConfig';
import { navLinks } from '../data/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={siteConfig.logo} alt={siteConfig.businessName} width="52" height="52" />
          <div>
            <strong>{siteConfig.businessName}</strong>
            <p>
              {siteConfig.tagline} · {siteConfig.subtitle} · {siteConfig.city}
            </p>
          </div>
        </div>
        <div className="footer__links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer__copy">
          &copy; 2026 {siteConfig.businessName}. {siteConfig.fullAddress}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
