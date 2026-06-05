import { Link } from 'react-router-dom';
import zahnraederHero from '../../assets/zahnraeder.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-brand-cta text-white overflow-hidden">
      <img
        src={zahnraederHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />
      <img
        src="https://cdn.beenoordmarketing.de/Saevecke/images/daemmwolle-2.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 min-h-[85vh] flex items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-white/80">
            Saevecke GmbH · Schwanewede seit 1989
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white">
            [Headline Hero, Platzhalter]
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl">
            Platzhalter-Subline. Hier landet die Botschaft, sobald die Texte
            freigegeben sind.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/karriere"
              className="bg-white text-brand-cta px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Karriere ansehen
            </Link>
            <Link
              to="/karriere#bewerbung"
              className="border border-white/60 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Direkt bewerben
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
