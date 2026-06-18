import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-cta text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-bold text-lg">Saevecke GmbH</div>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">
            Rader Heide 19c
            <br />
            28790 Schwanewede
            <br />
            Telefon: 0421 33100400
            <br />
            <a
              href="mailto:info@saevecke.net"
              className="text-white hover:opacity-80"
            >
              info@saevecke.net
            </a>
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Seite</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/karriere" className="text-white/80 hover:text-white">
                Karriere
              </Link>
            </li>
            <li>
              <Link to="/ueber-uns" className="text-white/80 hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link
                to="/dienstleistungen"
                className="text-white/80 hover:text-white"
              >
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="/#kontakt" className="text-white/80 hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Rechtliches</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/impressum" className="text-white/80 hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                to="/datenschutz"
                className="text-white/80 hover:text-white"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-white/60">
          © {new Date().getFullYear()} Saevecke GmbH
        </div>
      </div>
    </footer>
  );
}
