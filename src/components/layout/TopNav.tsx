import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const links = [
  { label: 'Karriere', to: '/karriere' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Dienstleistungen', to: '/dienstleistungen' },
  { label: 'Kontakt', to: '/#kontakt' },
];

const NAV_HEIGHT = 96;
const HERO_VH = 0.85;

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const compute = () => {
      const threshold = isHome
        ? window.innerHeight * HERO_VH - NAV_HEIGHT
        : 80;
      setScrolled(window.scrollY > threshold);
    };
    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-brand-cta/70 border-white/20'
          : 'bg-white/0 border-white/30'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-24 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Saevecke GmbH"
          className="self-stretch bg-white px-4 flex items-center"
        >
          <img
            src="https://cdn.beenoordmarketing.de/Saevecke/logos/saevecke_logo.png"
            alt="Saevecke GmbH"
            className="h-16 w-auto block"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-brand-red'
                    : 'text-white hover:text-brand-red'
                }`
              }
              end={l.to === '/#kontakt' ? false : undefined}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/karriere#bewerbung"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-2 font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />
            WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}
