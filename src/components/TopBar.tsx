import { siteConfig } from '../config/siteConfig';
import { ClockIcon, MapPinIcon, WhatsAppIcon } from './icons';

export function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <span className="top-bar__item">
          <ClockIcon />
          {siteConfig.schedule}
        </span>
        <span className="top-bar__item">
          <MapPinIcon />
          {siteConfig.address}, {siteConfig.city}
        </span>
        <a href={`https://wa.me/${siteConfig.whatsapp}`} className="top-bar__item top-bar__item--whatsapp" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={16} />
          {siteConfig.whatsappDisplay}
        </a>
      </div>
    </div>
  );
}
