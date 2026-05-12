import { Link } from 'react-router-dom';
import { Section } from '../layout/Section';
import { ArrowRight } from 'lucide-react';

const services = ['Wärmedämmung', 'Kältedämmung', 'Schallschutz', 'Brandschutz'];

export function DienstleistungenTeaser() {
  return (
    <Section className="bg-brand-cta">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-white/80 font-semibold">
          Leistungen
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
          Was wir machen
        </h2>
        <p className="mt-6 text-white/90">
          Platzhalter, kurzer Teaser zu den Saevecke-Leistungen.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
        {services.map((s) => (
          <div
            key={s}
            className="border border-white/40 px-4 py-3 text-white font-semibold text-center"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/dienstleistungen"
          className="inline-flex items-center gap-2 bg-white text-brand-cta px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
        >
          Mehr <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
