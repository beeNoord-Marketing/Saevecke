import { MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EditorialEyebrow } from '../layout/EditorialEyebrow';

type Meta = { icon: LucideIcon; text: string };
type Job = {
  eyebrow: string;
  title: string;
  meta: Meta[];
  pitch: string;
  featured?: boolean;
};

const jobs: Job[] = [
  {
    eyebrow: 'Geselle gesucht',
    title: 'Wärme-, Kälte- und Schallschutzisolierer (m/w/d)',
    meta: [
      { icon: Clock, text: 'Vollzeit' },
      { icon: MapPin, text: 'Schwanewede' },
    ],
    pitch:
      'Fairer Lohn, cooles Team, unbefristet. Wir freuen uns auf deine Bewerbung.',
    featured: true,
  },
  {
    eyebrow: 'Ausbildung',
    title: 'Wärme-, Kälte- und Schallschutzisolierer (m/w/d)',
    meta: [
      { icon: Clock, text: 'Ausbildung' },
      { icon: MapPin, text: 'Schwanewede' },
      { icon: Calendar, text: 'Start 01.08.2024' },
    ],
    pitch:
      'Drei Jahre Ausbildung im Handwerk. Praxis im Betrieb, Theorie in der Berufsschule.',
  },
  {
    eyebrow: 'Schulpraktikum',
    title: 'Schulpraktikanten (m/w/d)',
    meta: [
      { icon: Clock, text: 'Praktikum' },
      { icon: MapPin, text: 'Schwanewede' },
      { icon: Calendar, text: 'Jederzeit möglich' },
    ],
    pitch: 'Ein Schulpraktikum ist bei uns jederzeit möglich.',
  },
];

export function Jobs() {
  return (
    <section id="stellen" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.beenoordmarketing.de/Saevecke/images/halle-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <EditorialEyebrow>Karriere</EditorialEyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
          Aktive Stellen
        </h2>
        <p className="mt-4 text-lg text-brand-text leading-relaxed max-w-2xl">
          Werde Teil des Teams. Wir freuen uns auf dich.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {jobs.map((j) => (
            <article
              key={j.eyebrow + j.title}
              className={`p-6 bg-white transition-all duration-300 ${
                j.featured
                  ? 'shadow-[0_0_30px_rgba(0,0,0,0.15)]'
                  : 'shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-1'
              }`}
            >
              <p
                className={`text-xs uppercase tracking-widest font-semibold ${
                  j.featured ? 'text-brand-red' : 'text-brand-text'
                }`}
              >
                {j.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug">
                {j.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-brand-text">
                {j.meta.map((m, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5">
                    <m.icon size={14} /> {m.text}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-brand-text">{j.pitch}</p>
              <a
                href="#bewerbung"
                className="mt-6 inline-flex items-center gap-2 text-brand-red font-semibold"
              >
                Jetzt bewerben <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
