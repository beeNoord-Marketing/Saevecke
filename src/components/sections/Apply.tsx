import { Section } from '../layout/Section';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { EditorialEyebrow } from '../layout/EditorialEyebrow';

export function Apply() {
  return (
    <Section id="bewerbung">
      <EditorialEyebrow>Drei Wege</EditorialEyebrow>
      <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
        Bewirb dich, wie es für dich passt
      </h2>
      <p className="mt-4 text-lg text-brand-text leading-relaxed max-w-2xl">
        Drei Wege, kein Stress.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a
          href="https://wa.me/000000000"
          className="block bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 p-6 transition-all duration-300 text-brand-headline"
        >
          <MessageCircle size={28} className="text-brand-red" />
          <h3 className="mt-4 text-lg font-semibold">WhatsApp</h3>
          <p className="mt-2 text-brand-text text-sm">
            Schreib uns direkt. Schnellste Antwort.
          </p>
        </a>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] p-6"
        >
          <PhoneCall size={28} className="text-brand-red" />
          <h3 className="mt-4 text-lg font-semibold">Rückruf</h3>
          <p className="mt-2 text-brand-text text-sm">Wir melden uns bei dir.</p>
          <label className="block mt-4 text-sm font-semibold text-brand-headline">
            Name
          </label>
          <input
            type="text"
            className="mt-1 w-full border border-brand-cta/30 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Telefon
          </label>
          <input
            type="tel"
            className="mt-1 w-full border border-brand-cta/30 px-3 py-2"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-brand-cta text-white py-2 font-semibold hover:opacity-90"
          >
            Rückruf anfordern
          </button>
        </form>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)] p-6"
        >
          <h3 className="text-lg font-semibold">Kurzbewerbung</h3>
          <p className="mt-2 text-brand-text text-sm">
            Name, Kontakt, kurze Nachricht, fertig.
          </p>
          <label className="block mt-4 text-sm font-semibold text-brand-headline">
            Name
          </label>
          <input
            type="text"
            className="mt-1 w-full border border-brand-cta/30 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Telefon / E-Mail
          </label>
          <input
            type="text"
            className="mt-1 w-full border border-brand-cta/30 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Nachricht
          </label>
          <textarea
            className="mt-1 w-full border border-brand-cta/30 px-3 py-2"
            rows={3}
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Lebenslauf (optional)
          </label>
          <input
            type="file"
            className="mt-1 block w-full text-sm text-brand-text file:mr-4 file:bg-brand-cta file:text-white file:border-0 file:px-4 file:py-2 file:font-semibold file:cursor-pointer hover:file:opacity-90"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-brand-red text-white py-2 font-semibold hover:opacity-90"
          >
            Bewerbung absenden
          </button>
        </form>
      </div>
    </Section>
  );
}
