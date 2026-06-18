import { Section } from '../layout/Section';

export function Intro() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-brand-cta font-semibold">
          Saevecke GmbH
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Zu jeder Zeit flexibel, fair, nah
        </h2>
        <p className="mt-6 text-lg text-brand-text leading-relaxed">
          Von der Beratung über die Planung bis hin zur Montage bieten wir Ihnen
          Lösungen aus einer Hand.
        </p>
      </div>
    </Section>
  );
}
