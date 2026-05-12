import { Section } from '../layout/Section';
import { Phone, Users, Mail, FileSignature } from 'lucide-react';

const steps = [
  {
    n: 1,
    icon: Phone,
    title: 'Telefonat',
    text: 'Kurzes Kennenlernen am Telefon.',
  },
  {
    n: 2,
    icon: Users,
    title: 'Vorstellung',
    text: 'Du kommst vorbei, schaust dir den Laden an, wir reden Klartext.',
  },
  {
    n: 3,
    icon: Mail,
    title: 'Rückmeldung',
    text: 'Innerhalb weniger Tage hörst du von uns. Versprochen.',
  },
  {
    n: 4,
    icon: FileSignature,
    title: 'Vertrag',
    text: 'Passt alles, geht es los.',
  },
];

export function ApplicationProcess() {
  return (
    <Section className="bg-neutral-50">
      <h2 className="text-3xl md:text-4xl font-semibold">
        So läuft die Bewerbung
      </h2>
      <p className="mt-2 text-brand-text">Kein Anschreiben, kein Deckblatt-Theater.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="w-12 h-12 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold">
              {s.n}
            </div>
            <h3 className="mt-4 text-lg font-semibold flex items-center gap-2">
              <s.icon size={18} className="text-brand-cta" /> {s.title}
            </h3>
            <p className="mt-2 text-brand-text text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
