import { Section } from '../layout/Section';
import { Leaf } from 'lucide-react';

export function Environment() {
  return (
    <Section id="umwelt" className="bg-brand-cta/10">
      <div className="max-w-3xl">
        <Leaf size={40} className="text-brand-cta" />
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
          Umwelt- und Klimaschutz
        </h2>
        <p className="mt-6 text-lg text-brand-text leading-relaxed">
          Zur Erhaltung unseres Lebensraumes für nachfolgende Generationen ist
          der Umwelt- und Klimaschutz eines der größten Herausforderungen.
        </p>
        <p className="mt-4 text-lg text-brand-text leading-relaxed">
          Wärme- und Kältedämmungen von Saevecke leisten einen wichtigen Beitrag
          zum Umwelt- und Klimaschutz, da fachgerechte Dämmungen Energie
          einsparen und somit Ressourcen und die Umwelt schonen.
        </p>
      </div>
    </Section>
  );
}
