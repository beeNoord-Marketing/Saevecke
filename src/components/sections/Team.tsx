import { Section } from '../layout/Section';

const teamBase = 'https://cdn.beenoordmarketing.de/Saevecke/images/';

type Person = { img: string; name: string; role?: string };

const team: Person[] = [
  {
    img: `${teamBase}geschaeftsfuehrer.jpg`,
    name: 'Marko Ihmels',
    role: 'Geschäftsführer',
  },
  { img: `${teamBase}mitarbeiter-1.jpg`, name: 'Platzhalter Name' },
  { img: `${teamBase}mitarbeiter-2.jpg`, name: 'Platzhalter Name' },
  { img: `${teamBase}mitarbeiter-3.jpg`, name: 'Platzhalter Name' },
];

const dogs = {
  img: `${teamBase}hunde.jpg`,
  names: 'Bürohund 1 und Bürohund 2',
  note: 'Platzhalter-Steckbrief',
};

export function Team() {
  return (
    <Section className="bg-brand-cta/5">
      <h2 className="text-3xl md:text-4xl font-semibold">Das Team</h2>
      <p className="mt-2 text-brand-text">
        Büroteam und unsere zwei Bürohunde.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((p) => (
          <div key={p.img}>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className={`w-full h-full object-cover ${
                  p.role === 'Geschäftsführer'
                    ? 'scale-110 object-[50%_25%]'
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

      <h3 className="mt-12 text-xl font-semibold text-center">Die Bürohunde</h3>
      <div className="mt-6 max-w-xl mx-auto bg-white border border-brand-cta/20 p-6">
        <div className="aspect-video overflow-hidden">
          <img
            src={dogs.img}
            alt={dogs.names}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 font-semibold">{dogs.names}</div>
        <div className="text-sm text-brand-text">{dogs.note}</div>
      </div>
    </Section>
  );
}
