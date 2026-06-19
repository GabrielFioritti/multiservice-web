(function () {
  'use strict';

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');

  // Mobile nav toggle
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });

  // WhatsApp links
  function getWhatsAppUrl() {
    const { whatsapp, whatsappMessage } = SITE_CONFIG;
    if (!whatsapp) return null;
    const text = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${whatsapp}?text=${text}`;
  }

  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = getWhatsAppUrl();
      if (url) {
        window.open(url, '_blank', 'noopener');
      } else {
        e.preventDefault();
        showWhatsAppNotice();
      }
    });
  });

  function showWhatsAppNotice() {
    const existing = document.querySelector('.whatsapp-notice');
    if (existing) existing.remove();

    const notice = document.createElement('div');
    notice.className = 'whatsapp-notice';
    notice.innerHTML = `
      <div class="whatsapp-notice__box">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        <p><strong>WhatsApp próximamente</strong></p>
        <span>El contacto por WhatsApp estará disponible en breve. Por ahora podés visitarnos en Uruguay 2051 de 9 a 17 hs.</span>
        <button class="whatsapp-notice__close">Entendido</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .whatsapp-notice {
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center;
        padding: 24px; animation: fadeIn 0.3s ease;
      }
      .whatsapp-notice__box {
        background: #fff; border-radius: 16px; padding: 32px;
        max-width: 380px; text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        animation: slideUp 0.3s ease;
      }
      .whatsapp-notice__box svg { margin-bottom: 16px; }
      .whatsapp-notice__box p { font-size: 1.15rem; margin-bottom: 8px; }
      .whatsapp-notice__box span { color: #6b7280; font-size: 0.95rem; display: block; margin-bottom: 20px; }
      .whatsapp-notice__close {
        background: #25d366; color: #fff; border: none;
        padding: 12px 32px; border-radius: 10px;
        font-weight: 700; font-size: 0.95rem; cursor: pointer;
        transition: background 0.2s;
      }
      .whatsapp-notice__close:hover { background: #1da851; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notice);

    notice.querySelector('.whatsapp-notice__close').addEventListener('click', () => notice.remove());
    notice.addEventListener('click', (e) => {
      if (e.target === notice) notice.remove();
    });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-card, .highlight-card, .about__content, .about__visual, .contact__item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--red)';
      }
    });
  }, { passive: true });
})();
