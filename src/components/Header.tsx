import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { navLinks } from '../data/content';
import type { WhatsAppClickHandler } from '../hooks/useWhatsApp';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollHeader } from '../hooks/useScrollHeader';
import { WhatsAppIcon } from './icons';

type HeaderProps = {
  onWhatsAppClick: WhatsAppClickHandler;
};

export function Header({ onWhatsAppClick }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);
  const scrolled = useScrollHeader();
  const activeSection = useActiveSection();

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header
      className="header"
      id="header"
      style={{ boxShadow: scrolled ? '0 4px 24px rgba(26, 61, 143, 0.15)' : 'none' }}
    >
      <div className="container header__inner">
        <a href="#inicio" className="header__logo">
          <img src={siteConfig.logo} alt={siteConfig.businessName} width="60" height="60" />
          <span className="header__brand">
            <strong>{siteConfig.businessName}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </a>

        <button
          className={`nav-toggle ${navOpen ? 'active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${navOpen ? 'open' : ''}`} id="nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="btn btn--whatsapp btn--sm nav__cta" onClick={onWhatsAppClick}>
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
