import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/layout/Section';

export function Impressum() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <Section>
          <h1 className="text-4xl font-bold">Impressum</h1>

          <p className="mt-8 text-brand-text">
            Saevecke GmbH
            <br />
            Rader Heide 19c
            <br />
            28790 Schwanewede
          </p>

          <p className="mt-6 text-brand-text">
            Handelsregister: HRB 120740
            <br />
            Registergericht: Amtsgericht Walsrode
          </p>

          <p className="mt-6 text-brand-text">
            <strong className="text-brand-headline font-semibold">
              Vertreten durch:
            </strong>
            <br />
            Marko Ihmels
          </p>

          <h2 className="mt-12 text-2xl font-semibold">Kontakt</h2>
          <p className="mt-4 text-brand-text">
            Telefon: 0421 33100400
            <br />
            E-Mail:{' '}
            <a href="mailto:info@saevecke.net">info@saevecke.net</a>
          </p>

          <h2 className="mt-12 text-2xl font-semibold">Umsatzsteuer-ID</h2>
          <p className="mt-4 text-brand-text">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE 116 26 17 19
          </p>

          <h2 className="mt-12 text-2xl font-semibold">
            {'Verbraucher­streit­beilegung/Universal­schlichtungs­stelle'}
          </h2>
          <p className="mt-4 text-brand-text">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
