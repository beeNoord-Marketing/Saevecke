import { Section } from '../layout/Section';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'Platzhalter Name',
    quote: 'Platzhalter-Zitat. Hier später die echten Rezensionen.',
  },
  {
    author: 'Platzhalter Name',
    quote: 'Platzhalter-Zitat. Hier später die echten Rezensionen.',
  },
  {
    author: 'Platzhalter Name',
    quote: 'Platzhalter-Zitat. Hier später die echten Rezensionen.',
  },
];

export function Reviews() {
  return (
    <Section className="bg-brand-cta/5">
      <h2 className="text-4xl md:text-5xl font-semibold">Stimmen</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] p-6"
          >
            <div className="flex gap-1 text-brand-red">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-4 text-brand-text">„{r.quote}"</p>
            <div className="mt-4 font-semibold text-sm">{r.author}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
