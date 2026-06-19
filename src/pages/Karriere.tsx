import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { WiggleGradient } from '../components/layout/WiggleGradient';
import { Jobs } from '../components/sections/Jobs';
import { ApplicationProcess } from '../components/sections/ApplicationProcess';
import { Apply } from '../components/sections/Apply';
import { Benefits } from '../components/sections/Benefits';

export function Karriere() {
  return (
    <>
      <TopNav />
      <main>
        <section className="relative bg-brand-cta text-white pt-44 pb-24 overflow-hidden">
          <WiggleGradient />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="text-sm uppercase tracking-widest text-white/70">
              Karriere
            </p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-white">
              Deine Karriere @Saevecke
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Fairer Lohn, ein cooles Team und eine unbefristete Festanstellung.
            </p>
          </div>
        </section>
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
