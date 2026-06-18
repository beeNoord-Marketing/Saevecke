import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Roadmap } from '../components/sections/Roadmap';
import { Team } from '../components/sections/Team';

export function UeberUns() {
  return (
    <>
      <TopNav />
      <main>
        <section className="bg-brand-cta text-white pt-44 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm uppercase tracking-widest text-white/70">
              Über uns
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Aus Meisterhand seit 1988
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Von der Beratung über die Planung bis hin zur Montage. Lösungen
              aus einer Hand, geführt in zweiter Generation.
            </p>
          </div>
        </section>
        <Roadmap />
        <Team />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
