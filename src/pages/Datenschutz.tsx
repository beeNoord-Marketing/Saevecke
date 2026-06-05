import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/layout/Section';

export function Datenschutz() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <Section>
          <h1 className="text-4xl font-bold">Datenschutz</h1>
          <p className="mt-4 text-brand-text">Platzhalter, Inhalt folgt.</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
