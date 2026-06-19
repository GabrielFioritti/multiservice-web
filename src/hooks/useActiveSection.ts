import { useEffect, useState } from 'react';

const SECTION_IDS = ['inicio', 'servicios', 'nosotros', 'contacto'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      let current = 'inicio';
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return activeSection;
}
