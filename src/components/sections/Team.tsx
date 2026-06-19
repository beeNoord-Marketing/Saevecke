import { Section } from '../layout/Section';
import { Users, GraduationCap, Dog, Award, Calendar } from 'lucide-react';

const teamBase = 'https://cdn.beenoordmarketing.de/Saevecke/images/';

type Person = { img: string; name: string; role?: string };

const team: Person[] = [
  {
    img: `${teamBase}geschaeftsfuehrer.jpg`,
    name: 'Marko Ihmels',
    role: 'Geschäftsführer',
  },
  {
    img: `${teamBase}mitarbeiter-3.jpg`,
    name: 'Dennis Saevecke',
    role: 'Projektmanagement, Ausbildungsbeauftragter und Isolierermeister',
  },
  { img: `${teamBase}mitarbeiter-1.jpg`, name: 'Vanessa Schloen' },
  { img: `${teamBase}mitarbeiter-2.jpg`, name: 'Petra Schnibbe' },
];

const dogs = {
  img: `${teamBase}hunde.jpg`,
  names: 'Bürohund 1 und Bürohund 2',
  note: 'Platzhalter-Steckbrief',
};

export function Team() {
  return (
    <Section className="bg-brand-cta/5">
      <div className="flex items-center gap-3">
        <Users size={32} className="text-brand-cta shrink-0" />
        <h2 className="text-4xl md:text-5xl font-semibold">Das Team</h2>
      </div>
      <p className="mt-4 text-brand-text text-lg leading-relaxed max-w-3xl">
        Wir beschäftigen in einem Team von über 20 Mitarbeitern qualifizierte
        Facharbeiter mit langjähriger Erfahrung und bilden seit Jahren
        erfolgreich im Beruf Wärme-, Kälte-, Schall- und Brandschutzisolierer
        aus.
      </p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-cta/20 max-w-4xl">
        <div className="bg-white p-6 hyphens-none">
          <Users size={20} className="text-brand-cta" />
          <div className="mt-4 text-5xl md:text-6xl font-bold text-brand-headline tracking-tight">
            20+
          </div>
          <div className="mt-2 text-sm text-brand-text uppercase tracking-wider">
            Mitarbeiter
          </div>
        </div>
        <div className="bg-white p-6 hyphens-none">
          <Award size={20} className="text-brand-cta" />
          <div className="mt-4 text-5xl md:text-6xl font-bold text-brand-headline tracking-tight">
            Meister
          </div>
          <div className="mt-2 text-sm text-brand-text uppercase tracking-wider">
            Aus Meisterhand
          </div>
        </div>
        <div className="bg-white p-6 hyphens-none">
          <GraduationCap size={20} className="text-brand-cta" />
          <div className="mt-4 text-5xl md:text-6xl font-bold text-brand-headline tracking-tight">
            Lehre
          </div>
          <div className="mt-2 text-sm text-brand-text uppercase tracking-wider">
            Ausbildungsbetrieb
          </div>
        </div>
        <div className="bg-white p-6 hyphens-none">
          <Calendar size={20} className="text-brand-cta" />
          <div className="mt-4 text-5xl md:text-6xl font-bold text-brand-headline tracking-tight">
            1988
          </div>
          <div className="mt-2 text-sm text-brand-text uppercase tracking-wider">
            Gegründet
          </div>
        </div>
      </div>
      <p className="mt-6 text-brand-text">
        Büroteam und unsere zwei Bürohunde.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((p) => (
          <div key={p.img}>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                  p.role === 'Geschäftsführer'
                    ? 'scale-110 object-[50%_25%] hover:scale-[1.15]'
                    : ''
                }`}
              />
            </div>
            <div className="mt-3 text-sm font-semibold">{p.name}</div>
            {p.role && (
              <div className="text-xs text-brand-text">{p.role}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-3">
        <Dog size={24} className="text-brand-cta" />
        <h3 className="text-xl font-semibold">Die Bürohunde</h3>
      </div>
      <div className="mt-6 max-w-xl mx-auto bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] p-6">
        <div className="aspect-video overflow-hidden">
          <img
            src={dogs.img}
            alt={dogs.names}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="mt-4 font-semibold">{dogs.names}</div>
        <div className="text-sm text-brand-text">{dogs.note}</div>
      </div>
    </Section>
  );
}
