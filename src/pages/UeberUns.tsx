import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Section } from '../components/layout/Section';
import { Roadmap } from '../components/sections/Roadmap';
import { Team } from '../components/sections/Team';

export function UeberUns() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <Section className="bg-brand-cta text-white">
          <p className="text-sm uppercase tracking-widest text-white/70">
            Über uns
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            [Headline Über uns, Platzhalter]
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Platzhalter, kurzer Einleitungstext zur Saevecke-Geschichte und zum
            Team.
          </p>
        </Section>
        <Roadmap />
        <Team />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
