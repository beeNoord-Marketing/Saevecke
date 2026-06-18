import { Section } from '../layout/Section';
import { ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: '1987',
    text: 'Thomas Saevecke legt erfolgreich seine Meisterprüfung ab und schafft damit die fachliche Grundlage für den späteren eigenen Betrieb.',
  },
  {
    year: '1988',
    text: 'Gründung des Betriebs durch Isoliermeister Thomas Saevecke. Der erste Betriebssitz befindet sich in der Reiterschanze in Schwanewede-Neunkirchen.',
  },
  {
    year: '1990',
    text: 'Der Betrieb wächst weiter und zieht zum Schillingshof in Schwanewede-Neunkirchen um.',
  },
  {
    year: '1996',
    text: 'Mit dem Anbau einer Werkstatt, eines Büros und eines größeren Lagers wird der Betrieb deutlich erweitert.',
  },
  {
    year: '2004',
    text: 'Marko Ihmels tritt in den Betrieb ein und beginnt seine kaufmännische Ausbildung.',
  },
  {
    year: '2006',
    text: 'Marko Ihmels schließt seine kaufmännische Ausbildung erfolgreich ab. Im selben Jahr beginnt Dennis Saevecke seine Ausbildung zum Isolierer im Betrieb.',
  },
  {
    year: '2007',
    text: 'Marko Ihmels wird neben Thomas Saevecke zweiter Geschäftsführer des Unternehmens.',
  },
  {
    year: '2008',
    text: 'Marko Ihmels erwirbt Geschäftsanteile am Unternehmen und wird Mitgesellschafter der Firma. Damit wird frühzeitig der Grundstein für die weitere gemeinsame Entwicklung des Unternehmens gelegt.',
  },
  {
    year: '2009',
    text: 'Der Betrieb zieht in die heutigen Betriebsräume in der Rader Heide 19c in Schwanewede-Neunkirchen. Die neuen Räume bieten mehr Lagerkapazität sowie größere Büro- und Werkstattflächen. Ebenfalls 2009 legt Dennis Saevecke erfolgreich seine Gesellenprüfung zum Isolierer ab.',
  },
  {
    year: '2013',
    text: '25-jähriges Betriebsjubiläum. Gefeiert wird gemeinsam mit Mitarbeitern, Geschäftspartnern und Nachbarn auf dem Firmengelände.',
  },
  {
    year: '2019',
    text: 'Dennis Saevecke legt erfolgreich seine Meisterprüfung ab und stärkt damit die fachliche Kompetenz im Betrieb weiter.',
  },
  {
    year: '2023',
    text: '35-jähriges Betriebsjubiläum. Dieses besondere Ereignis wird gemeinsam mit allen Mitarbeitern und Partnern im GOP in Bremen gefeiert.',
  },
  {
    year: '2025',
    text: 'Thomas Saevecke zieht sich aus dem operativen Geschäft zurück, bleibt dem Unternehmen jedoch weiterhin als Gesellschafter verbunden.',
  },
  {
    year: '2025',
    text: 'Marko Ihmels übernimmt die alleinige Geschäftsführung und führt den Betrieb in die nächste Unternehmensphase.',
  },
];

export function Roadmap() {
  return (
    <Section id="ueber-uns">
      <h2 className="text-3xl md:text-4xl font-semibold">Unsere Geschichte</h2>
      <div className="mt-12 bg-white shadow-[0_0_40px_rgba(0,0,0,0.15)] relative">
        <div className="overflow-x-auto scroll-smooth">
          <div className="relative flex gap-8 px-8 py-10 min-w-max">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 right-8 top-12 h-px bg-brand-cta/30"
            />
            {milestones.map((m, i) => (
              <article
                key={`${m.year}-${i}`}
                className="w-72 shrink-0 relative"
              >
                <div className="w-4 h-4 rounded-full bg-brand-cta border-4 border-white relative z-10" />
                <div className="mt-6 font-bold text-brand-cta text-2xl">
                  {m.year}
                </div>
                <p className="mt-3 text-brand-text leading-relaxed text-sm">
                  {m.text}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent flex items-center justify-end pr-4">
          <ChevronRight
            size={32}
            className="text-brand-cta animate-pulse"
          />
        </div>
      </div>
    </Section>
  );
}
