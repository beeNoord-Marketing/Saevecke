import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { WiggleGradient } from '../components/layout/WiggleGradient';
import { Roadmap } from '../components/sections/Roadmap';
import { Team } from '../components/sections/Team';
import { Award } from 'lucide-react';

export function UeberUns() {
  return (
    <>
      <TopNav />
      <main>
        <section className="relative bg-brand-cta text-white pt-44 pb-24 overflow-hidden">
          <WiggleGradient />
          <div className="relative mx-auto max-w-6xl px-6">
            <Award size={40} className="text-white/80" />
            <p className="mt-4 text-sm uppercase tracking-widest text-white/70">
              Über uns
            </p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-white">
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
