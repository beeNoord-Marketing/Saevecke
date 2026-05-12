import { Link, NavLink } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const links = [
  { label: 'Karriere', to: '/karriere' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Dienstleistungen', to: '/dienstleistungen' },
  { label: 'Kontakt', to: '/#kontakt' },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-brand-headline text-lg">
          Saevecke
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
                    : 'text-brand-headline hover:text-brand-red'
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
