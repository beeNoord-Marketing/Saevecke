import { Section } from '../layout/Section';
import {
  Stethoscope,
  Dumbbell,
  Shirt,
  PartyPopper,
  Clock,
  Car,
  PiggyBank,
  Smartphone,
  Bike,
  ClipboardCheck,
} from 'lucide-react';

const benefits = [
  { icon: Stethoscope, title: 'Private Zusatzkrankenversicherung', isNew: true },
  { icon: Dumbbell, title: 'Firmenfitness' },
  { icon: Shirt, title: 'Hochwertige Dienstbekleidung' },
  { icon: PartyPopper, title: 'Team Events' },
  { icon: Clock, title: 'Faire Arbeitszeiten' },
  { icon: Car, title: 'Dienstfahrzeug' },
  { icon: PiggyBank, title: 'Vermögenswirksame Leistungen' },
  { icon: Smartphone, title: 'Diensthandy' },
  { icon: Bike, title: 'Job-Rad' },
  { icon: ClipboardCheck, title: 'Digitale Zeiterfassung' },
];

export function Benefits() {
  return (
    <Section id="benefits" className="bg-neutral-50">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Was du bei uns bekommst
      </h2>
      <p className="mt-2 text-brand-text">
        Platzhalter, kurze Einleitung zu den Benefits.
      </p>
      <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="relative bg-white border border-neutral-200 p-5"
          >
            {b.isNew && (
              <span className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5">
                NEU
              </span>
            )}
            <b.icon size={28} className="text-brand-deep" />
            <h3 className="mt-3 text-sm font-semibold leading-snug">{b.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
