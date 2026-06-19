import { highlights } from '../data/content';
import { FadeIn } from './FadeIn';

function HighlightIcon({ type }: { type: (typeof highlights)[number]['icon'] }) {
  switch (type) {
    case 'wrench':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'rescue':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 17h4" />
          <path d="M3 17h2l1.5-4.5a2 2 0 0 1 1.9-1.4H17a2 2 0 0 1 1.9 1.4L20.5 17H22" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M12 3v6" />
          <path d="M9 6h6" />
        </svg>
      );
    case 'clock':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export function Highlights() {
  return (
    <section className="highlights">
      <div className="container highlights__grid">
        {highlights.map((item) => (
          <FadeIn key={item.title} className="highlight-card">
            <div className="highlight-card__icon">
              <HighlightIcon type={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
