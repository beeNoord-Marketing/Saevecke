import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Section } from '../components/layout/Section';

const services = [
  {
    title: 'Wärmedämmung',
    text: 'Wärmedämmungen von Saevecke reduzieren die Wärmeverluste beim Transport und der Lagerung von Wärme. Der Energieverbrauch und die Energiekosten werden gesenkt und die Umwelt entlastet.',
    img: 'https://cdn.beenoordmarketing.de/Saevecke/images/zahnraeder.jpg',
  },
  {
    title: 'Kältedämmung',
    text: 'Kältedämmungen verringern Energieverluste an kältetechnischen Anlagen und sparen somit Energiekosten ein. Des Weiteren werden Korrosionsschäden an Anlagen und Tropfwasserschäden am Baukörper verhindert.',
    img: 'https://cdn.beenoordmarketing.de/Saevecke/images/bohrer-1.jpg',
  },
  {
    title: 'Schallschutz',
    text: 'Schallschutzdämmungen an betriebs- und haustechnischen Anlagen verhindern die Ausbreitung von Lärm durch den Baukörper oder die Luft und verbessern somit die Wohn- und Arbeitsqualität.',
    img: 'https://cdn.beenoordmarketing.de/Saevecke/images/daemmwolle-2.jpg',
  },
  {
    title: 'Brandschutz',
    text: 'Brandschutzkonstruktionen verhindern die Ausbreitung von Feuer und Rauch im Brandfall, schützen den Baukörper und gewährleisten Menschen das sichere Verlassen des Gebäudes über die Fluchtwege.',
    img: 'https://cdn.beenoordmarketing.de/Saevecke/images/zahnraeder.jpg',
  },
];

export function Dienstleistungen() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <Section className="bg-brand-cta text-white">
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
        <Section className="bg-brand-cta/5">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="border border-brand-cta/20 bg-white overflow-hidden hover:border-brand-cta transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-brand-text">{s.text}</p>
                </div>
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
