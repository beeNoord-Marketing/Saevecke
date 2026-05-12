import { Link } from 'react-router-dom';
import { Section } from '../layout/Section';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export function JobTeaser() {
  return (
    <Section className="bg-gradient-to-b from-white to-brand-cta">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-brand-cta font-semibold">
          Aktuell gesucht
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Wärme-, Kälte- und Schallschutzisolierer (m/w/d)
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-brand-text">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} /> Vollzeit
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> Schwanewede
          </span>
        </div>
        <p className="mt-6 text-brand-text">
          Platzhalter, kurzer Pitch zur Geselle-Stelle.
        </p>
        <Link
          to="/karriere"
          className="mt-8 inline-flex items-center gap-2 bg-brand-cta text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
        >
          Zur Karriere-Seite <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
