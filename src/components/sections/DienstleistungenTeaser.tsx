import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Snowflake, Volume2, ShieldAlert } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { name: string; icon: LucideIcon }[] = [
  { name: 'Wärmedämmung', icon: Flame },
  { name: 'Kältedämmung', icon: Snowflake },
  { name: 'Schallschutz', icon: Volume2 },
  { name: 'Brandschutz', icon: ShieldAlert },
];

export function DienstleistungenTeaser() {
  return (
    <section className="relative bg-brand-cta py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.beenoordmarketing.de/Saevecke/images/material-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-cta/70" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3">
            <span className="w-12 h-px bg-white/70" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-bold">
              Leistungen
            </p>
            <span className="w-12 h-px bg-white/70" />
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white tracking-tight">
            Unsere Leistungen
          </h2>
          <p className="mt-6 text-white/90">
            Von der Beratung über die Planung bis hin zur Montage. Lösungen aus
            einer Hand für Haustechnik, Anlagentechnik und Schiffbau.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.name}
              className="border border-white/40 px-4 py-4 text-white font-semibold text-center flex flex-col items-center gap-2"
            >
              <s.icon size={28} />
              <span>{s.name}</span>
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
      </div>
    </section>
  );
}
