import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Section } from '../components/layout/Section';

const services = [
  {
    title: 'Wärmedämmung',
    text: 'Wärmedämmungen von Saevecke reduzieren die Wärmeverluste beim Transport und der Lagerung von Wärme. Der Energieverbrauch und die Energiekosten werden gesenkt und die Umwelt entlastet.',
  },
  {
    title: 'Kältedämmung',
    text: 'Kältedämmungen verringern Energieverluste an kältetechnischen Anlagen und sparen somit Energiekosten ein. Des Weiteren werden Korrosionsschäden an Anlagen und Tropfwasserschäden am Baukörper verhindert.',
  },
  {
    title: 'Schallschutz',
    text: 'Schallschutzdämmungen an betriebs- und haustechnischen Anlagen verhindern die Ausbreitung von Lärm durch den Baukörper oder die Luft und verbessern somit die Wohn- und Arbeitsqualität.',
  },
  {
    title: 'Brandschutz',
    text: 'Brandschutzkonstruktionen verhindern die Ausbreitung von Feuer und Rauch im Brandfall, schützen den Baukörper und gewährleisten Menschen das sichere Verlassen des Gebäudes über die Fluchtwege.',
  },
];

export function Dienstleistungen() {
  return (
    <>
      <TopNav />
      <main>
        <Section className="bg-brand-deep text-white">
          <p className="text-sm uppercase tracking-widest text-white/70">
            Dienstleistungen
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            [Headline Dienstleistungen, Platzhalter]
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Platzhalter, kurzer Pitch zu den Saevecke-Leistungen.
          </p>
        </Section>
        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="border border-neutral-200 p-6 hover:border-brand-deep transition-colors"
              >
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-brand-text">{s.text}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
