import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Section } from '../components/layout/Section';
import { Jobs } from '../components/sections/Jobs';
import { ApplicationProcess } from '../components/sections/ApplicationProcess';
import { Apply } from '../components/sections/Apply';
import { Benefits } from '../components/sections/Benefits';

export function Karriere() {
  return (
    <>
      <TopNav />
      <main>
        <Section className="bg-brand-deep text-white">
          <p className="text-sm uppercase tracking-widest text-white/70">
            Karriere bei Saevecke
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            [Headline Karriere, Platzhalter]
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Platzhalter, kurzer Karriere-Pitch über der Stellen-Liste.
          </p>
        </Section>
        <Jobs />
        <ApplicationProcess />
        <Apply />
        <Benefits />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
