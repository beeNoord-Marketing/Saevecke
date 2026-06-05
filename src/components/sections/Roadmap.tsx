import { Section } from '../layout/Section';

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
      <div className="mt-12 relative max-w-3xl">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-brand-cta/20" />
        <div className="space-y-10">
          {milestones.map((m, i) => (
            <div key={`${m.year}-${i}`} className="relative pl-14">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-cta border-4 border-white" />
              <div className="font-bold text-brand-cta text-xl">{m.year}</div>
              <p className="mt-2 text-brand-text leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
