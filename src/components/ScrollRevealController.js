import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Adds reveal classes after React has rendered; unsupported browsers keep content visible. */
export default function ScrollRevealController() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;

    let observer;
    const frame = window.requestAnimationFrame(() => {
      const targets = document.querySelectorAll(
        '.landing-page > div, .landing-page .property-card, .landing-page .service-card, .landing-page #agents, header, main > section, main > article, main > div, main > footer, footer, h1, h2'
      );
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

      targets.forEach((target, index) => {
        target.classList.add('reveal-on-scroll');
        if (target.matches('.property-card, .service-card')) {
          target.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
        }
        observer.observe(target);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
