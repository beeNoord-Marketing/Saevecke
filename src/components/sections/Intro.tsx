import { Section } from '../layout/Section';

export function Intro() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-brand-cta font-semibold">
          Saevecke GmbH
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          [Headline Intro, Platzhalter]
        </h2>
        <p className="mt-6 text-lg text-brand-text leading-relaxed">
          Platzhalter, allgemeiner Einleitungstext für die Seite. Hier kommt das
          „Wer wir sind, was wir machen, warum es uns gibt"-Statement. Zwei bis
          vier Absätze, norddeutsch direkt, keine Floskeln.
        </p>
      </div>
    </Section>
  );
}
