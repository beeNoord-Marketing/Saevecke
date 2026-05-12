import { Section } from '../layout/Section';
import { MessageCircle, PhoneCall } from 'lucide-react';

export function Apply() {
  return (
    <Section id="bewerbung">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Bewirb dich, wie es für dich passt
      </h2>
      <p className="mt-2 text-brand-text">Drei Wege, kein Stress.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <a
          href="https://wa.me/000000000"
          className="block border border-neutral-200 p-6 hover:border-brand-red transition-colors text-brand-headline"
        >
          <MessageCircle size={28} className="text-brand-red" />
          <h3 className="mt-4 text-lg font-semibold">WhatsApp</h3>
          <p className="mt-2 text-brand-text text-sm">
            Schreib uns direkt. Schnellste Antwort.
          </p>
        </a>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="border border-neutral-200 p-6"
        >
          <PhoneCall size={28} className="text-brand-red" />
          <h3 className="mt-4 text-lg font-semibold">Rückruf</h3>
          <p className="mt-2 text-brand-text text-sm">Wir melden uns bei dir.</p>
          <label className="block mt-4 text-sm font-semibold text-brand-headline">
            Name
          </label>
          <input
            type="text"
            className="mt-1 w-full border border-neutral-300 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Telefon
          </label>
          <input
            type="tel"
            className="mt-1 w-full border border-neutral-300 px-3 py-2"
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
          className="border border-neutral-200 p-6"
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
            className="mt-1 w-full border border-neutral-300 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Telefon / E-Mail
          </label>
          <input
            type="text"
            className="mt-1 w-full border border-neutral-300 px-3 py-2"
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Nachricht
          </label>
          <textarea
            className="mt-1 w-full border border-neutral-300 px-3 py-2"
            rows={3}
          />
          <label className="block mt-3 text-sm font-semibold text-brand-headline">
            Lebenslauf (optional)
          </label>
          <input type="file" className="mt-1 w-full text-sm" />
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
