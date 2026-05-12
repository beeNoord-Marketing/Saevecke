import { Section } from '../layout/Section';

const milestones = [
  { year: '1989', text: 'Platzhalter Meilenstein' },
  { year: '1995', text: 'Platzhalter Meilenstein' },
  { year: '2005', text: 'Platzhalter Meilenstein' },
  { year: '2015', text: 'Platzhalter Meilenstein' },
  { year: '2026', text: 'Platzhalter Meilenstein' },
];

export function Roadmap() {
  return (
    <Section id="ueber-uns">
      <h2 className="text-3xl md:text-4xl font-semibold">Unsere Geschichte</h2>
      <p className="mt-2 text-brand-text">Platzhalter, über 35 Jahre Saevecke.</p>
      <div className="mt-12 relative">
        <div className="absolute left-0 right-0 top-6 h-px bg-neutral-300" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
          {milestones.map((m) => (
            <div key={m.year} className="relative pt-12">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-cta border-4 border-white" />
              <div className="text-center">
                <div className="font-bold text-brand-deep">{m.year}</div>
                <div className="text-sm text-brand-text mt-1">{m.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
