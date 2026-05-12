import { Section } from '../layout/Section';

const teamPlaceholders = Array.from({ length: 6 }, (_, i) => i + 1);
const dogs = [
  { name: 'Bürohund 1', note: 'Platzhalter-Steckbrief' },
  { name: 'Bürohund 2', note: 'Platzhalter-Steckbrief' },
  { name: 'Bürohund 3', note: 'Platzhalter-Steckbrief' },
];

export function Team() {
  return (
    <Section className="bg-neutral-50">
      <h2 className="text-3xl md:text-4xl font-semibold">Das Team</h2>
      <p className="mt-2 text-brand-text">
        Platzhalter, Büroteam plus die drei Bürohunde.
      </p>

      <div className="mt-10 aspect-video bg-neutral-300 flex items-center justify-center text-neutral-600">
        Teamvideo · Platzhalter
      </div>

      <h3 className="mt-12 text-xl font-semibold">Büroteam</h3>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {teamPlaceholders.map((i) => (
          <div key={i} className="aspect-square bg-neutral-300" />
        ))}
      </div>

      <h3 className="mt-12 text-xl font-semibold">Die Bürohunde</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {dogs.map((d) => (
          <div
            key={d.name}
            className="bg-white border border-neutral-200 p-6"
          >
            <div className="aspect-square bg-neutral-300" />
            <div className="mt-4 font-semibold">{d.name}</div>
            <div className="text-sm text-brand-text">{d.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
