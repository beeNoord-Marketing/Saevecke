import { Section } from '../layout/Section';

const placeholderImages = [
  'https://cdn.beenoordmarketing.de/Saevecke/images/zahnraeder.jpg',
  'https://cdn.beenoordmarketing.de/Saevecke/images/bohrer-1.jpg',
  'https://cdn.beenoordmarketing.de/Saevecke/images/daemmwolle-2.jpg',
];

const teamPlaceholders = Array.from({ length: 6 }, (_, i) => i);

const dogs = [
  { name: 'Bürohund 1', note: 'Platzhalter-Steckbrief', img: placeholderImages[0] },
  { name: 'Bürohund 2', note: 'Platzhalter-Steckbrief', img: placeholderImages[1] },
  { name: 'Bürohund 3', note: 'Platzhalter-Steckbrief', img: placeholderImages[2] },
];

export function Team() {
  return (
    <Section className="bg-brand-cta/5">
      <h2 className="text-3xl md:text-4xl font-semibold">Das Team</h2>
      <p className="mt-2 text-brand-text">
        Platzhalter, Büroteam plus die drei Bürohunde.
      </p>

      <div className="mt-10 aspect-video relative overflow-hidden">
        <img
          src={placeholderImages[1]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-cta/60 flex items-center justify-center text-white font-semibold">
          Teamvideo · Platzhalter
        </div>
      </div>

      <h3 className="mt-12 text-xl font-semibold">Büroteam</h3>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {teamPlaceholders.map((i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img
              src={placeholderImages[i % placeholderImages.length]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-xl font-semibold">Die Bürohunde</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {dogs.map((d) => (
          <div
            key={d.name}
            className="bg-white border border-brand-cta/20 p-6"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={d.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 font-semibold">{d.name}</div>
            <div className="text-sm text-brand-text">{d.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
