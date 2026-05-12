import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'mitarbeiter',
    eyebrow: 'Saevecke GmbH · Schwanewede seit 1989',
    title: '[Headline Hero, Mitarbeitersuche, Platzhalter]',
    subline:
      'Platzhalter-Subline. Hier landet die Recruiting-Botschaft, sobald die Texte freigegeben sind.',
    primary: { to: '/karriere', label: 'Karriere ansehen' },
    secondary: { to: '/karriere#bewerbung', label: 'Direkt bewerben' },
    gradient: 'from-brand-deep via-brand-headline to-brand-headline',
  },
  {
    id: 'umwelt',
    eyebrow: 'Saevecke GmbH · Verantwortung für Norddeutschland',
    title: '[Headline Hero, Umweltbewusstsein, Platzhalter]',
    subline:
      'Platzhalter-Subline. Hier kommt die Umwelt-Botschaft, sobald die Texte freigegeben sind.',
    primary: { to: '/#umwelt', label: 'Mehr erfahren' },
    secondary: { to: '/dienstleistungen', label: 'Unsere Leistungen' },
    gradient: 'from-brand-cta via-brand-deep to-brand-headline',
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      7000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[85vh] text-white overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 min-h-[85vh] flex items-center">
        <div className="relative w-full">
          {slides.map((s, i) => (
            <div
              key={s.id}
              aria-hidden={i !== index}
              className={`transition-opacity duration-700 ${
                i === index
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-white/70">
                {s.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white">
                {s.title}
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-xl">{s.subline}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={s.primary.to}
                  className="bg-brand-cta text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
                >
                  {s.primary.label}
                </Link>
                <Link
                  to={s.secondary.to}
                  className="border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                >
                  {s.secondary.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'bg-white w-8' : 'bg-white/40 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
