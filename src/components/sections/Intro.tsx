import { Section } from '../layout/Section';

export function Intro() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-3">
          <span className="w-12 h-px bg-brand-cta" />
          <p className="text-xs uppercase tracking-[0.3em] text-brand-cta font-bold">
            Saevecke GmbH
          </p>
          <span className="w-12 h-px bg-brand-cta" />
        </div>
        <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
          Zu jeder Zeit
          <br />
          <span className="italic font-display">flexibel, fair, nah</span>
        </h2>
        <p className="mt-8 text-lg text-brand-text leading-relaxed">
          Von der Beratung über die Planung bis hin zur Montage bieten wir Ihnen
          Lösungen aus einer Hand.
        </p>
      </div>
    </Section>
  );
}
