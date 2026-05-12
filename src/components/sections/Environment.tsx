import { Section } from '../layout/Section';

export function Environment() {
  return (
    <Section id="umwelt">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
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
