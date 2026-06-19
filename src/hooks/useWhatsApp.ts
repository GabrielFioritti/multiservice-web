import { useCallback, useState, type MouseEvent } from 'react';
import { siteConfig } from '../config/siteConfig';

export type WhatsAppClickHandler = (e: MouseEvent) => void;

function getWhatsAppUrl() {
  const { whatsapp, whatsappMessage } = siteConfig;
  if (!whatsapp) return null;
  const text = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${whatsapp}?text=${text}`;
}

export function useWhatsApp() {
  const [showNotice, setShowNotice] = useState(false);

  const handleWhatsAppClick = useCallback((e: MouseEvent) => {
    const url = getWhatsAppUrl();
    if (url) {
      window.open(url, '_blank', 'noopener');
    } else {
      e.preventDefault();
      setShowNotice(true);
    }
  }, []);

  const closeNotice = useCallback(() => setShowNotice(false), []);

  return { showNotice, handleWhatsAppClick, closeNotice };
}
