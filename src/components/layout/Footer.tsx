import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-bold text-lg">Saevecke GmbH</div>
          <p className="mt-2 text-neutral-300 text-sm">
            Wärme · Kälte · Schall · Brandschutz
            <br />
            Schwanewede bei Bremen
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Seite</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/karriere" className="text-neutral-300 hover:text-white">
                Karriere
              </Link>
            </li>
            <li>
              <Link to="/ueber-uns" className="text-neutral-300 hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link
                to="/dienstleistungen"
                className="text-neutral-300 hover:text-white"
              >
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="/#kontakt" className="text-neutral-300 hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Rechtliches</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/impressum" className="text-neutral-300 hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                to="/datenschutz"
                className="text-neutral-300 hover:text-white"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-neutral-400">
          © {new Date().getFullYear()} Saevecke GmbH
        </div>
      </div>
    </footer>
  );
}
