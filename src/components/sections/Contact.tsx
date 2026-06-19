import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

type Mode = 'bewerbung' | 'kunde';

export function Contact() {
  const [mode, setMode] = useState<Mode>('bewerbung');

  return (
    <section id="kontakt" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.beenoordmarketing.de/Saevecke/images/briefkopf.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">Kontakt</h2>
      <p className="mt-2 text-brand-text">
        Schreib uns, wir antworten zackig.
      </p>

      <div className="mt-8 inline-flex rounded-full bg-brand-cta/10 p-1">
        <button
          type="button"
          onClick={() => setMode('bewerbung')}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            mode === 'bewerbung'
              ? 'bg-brand-red text-white'
              : 'text-brand-headline hover:text-brand-red'
          }`}
        >
          Ich bewerbe mich
        </button>
        <button
          type="button"
          onClick={() => setMode('kunde')}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
            mode === 'kunde'
              ? 'bg-brand-cta text-white'
              : 'text-brand-headline hover:text-brand-cta'
          }`}
        >
          Ich bin Kunde / Interessent
        </button>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-brand-red mt-0.5" />
            <div>
              Saevecke GmbH
              <br />
              Rader Heide 19c
              <br />
              28790 Schwanewede
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-brand-red" />
            <a
              href="tel:+4942133100400"
              className="text-brand-headline hover:text-brand-red"
            >
              0421 33100400
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-brand-red" />
            <a
              href="mailto:info@saevecke.net"
              className="text-brand-headline hover:text-brand-red"
            >
              info@saevecke.net
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle size={20} className="text-brand-red" />
            <a
              href="https://wa.me/000000000"
              className="text-brand-headline hover:text-brand-red"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          {mode === 'bewerbung' ? (
            <>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">
                Telefon / E-Mail
              </label>
              <input
                type="text"
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">
                Nachricht (optional)
              </label>
              <textarea
                rows={5}
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">
                Lebenslauf (optional)
              </label>
              <input
                type="file"
                className="block w-full text-sm text-brand-text file:mr-4 file:bg-brand-cta file:text-white file:border-0 file:px-4 file:py-2 file:font-semibold file:cursor-pointer hover:file:opacity-90"
              />
              <button
                type="submit"
                className="bg-brand-red text-white px-6 py-2 font-semibold hover:opacity-90"
              >
                Bewerbung absenden
              </button>
            </>
          ) : (
            <>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">
                Firma (optional)
              </label>
              <input
                type="text"
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">E-Mail</label>
              <input
                type="email"
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <label className="block text-sm font-semibold">Nachricht</label>
              <textarea
                rows={5}
                className="w-full border border-brand-cta/30 px-3 py-2"
              />
              <button
                type="submit"
                className="bg-brand-cta text-white px-6 py-2 font-semibold hover:opacity-90"
              >
                Nachricht senden
              </button>
            </>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}
