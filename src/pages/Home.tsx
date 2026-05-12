import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { StickyWhatsApp } from '../components/layout/StickyWhatsApp';
import { Hero } from '../components/sections/Hero';
import { Intro } from '../components/sections/Intro';
import { JobTeaser } from '../components/sections/JobTeaser';
import { DienstleistungenTeaser } from '../components/sections/DienstleistungenTeaser';
import { Environment } from '../components/sections/Environment';
import { Reviews } from '../components/sections/Reviews';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Intro />
        <JobTeaser />
        <div className="bg-brand-cta">
          <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-white/40" />
          </div>
        </div>
        <DienstleistungenTeaser />
        <Environment />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
