import { MapPin, Phone, Mail, Linkedin, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-trust/15 p-2.5 rounded-lg">
                <Scale className="h-6 w-6 text-trust" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl leading-tight">Van Schaik C.S.</p>
                <p className="text-white/70 text-sm">Advocaten & Mediators</p>
              </div>
            </div>
            <p className="text-white/75 leading-relaxed max-w-md mb-6">
              Al meer dan 30 jaar uw juridische partner in het Oostland.
              Persoonlijke aandacht, heldere communicatie en bewezen resultaten.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Van Schaik C.S. op LinkedIn"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-trust hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Navigatie */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-trust mb-4">Navigatie</h3>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><Link to="/ondernemers" className="hover:text-trust transition-colors">Ondernemers</Link></li>
              <li><Link to="/particulieren" className="hover:text-trust transition-colors">Particulieren</Link></li>
              <li><Link to="/mediation" className="hover:text-trust transition-colors">Mediation</Link></li>
              <li><Link to="/over-ons" className="hover:text-trust transition-colors">Over ons</Link></li>
              <li><Link to="/nieuws" className="hover:text-trust transition-colors">Nieuws</Link></li>
            </ul>
          </div>

          {/* Rechtsgebieden */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-trust mb-4">Rechtsgebieden</h3>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><Link to="/rechtsgebieden/familierecht" className="hover:text-trust transition-colors">Familierecht</Link></li>
              <li><Link to="/rechtsgebieden/arbeidsrecht" className="hover:text-trust transition-colors">Arbeidsrecht</Link></li>
              <li><Link to="/rechtsgebieden/strafrecht" className="hover:text-trust transition-colors">Strafrecht</Link></li>
              <li><Link to="/rechtsgebieden/huurrecht" className="hover:text-trust transition-colors">Huurrecht</Link></li>
              <li><Link to="/rechtsgebieden/contractenrecht" className="hover:text-trust transition-colors">Contractenrecht</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-trust mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-trust flex-shrink-0" />
                <span>Rodenrijseweg 459<br />2651 AN Berkel en Rodenrijs</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-trust flex-shrink-0" />
                <a href="tel:0105116771" className="hover:text-trust transition-colors">010 - 511 6771</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-trust flex-shrink-0" />
                <a href="mailto:info@vanschaikcs.nl" className="hover:text-trust transition-colors">info@vanschaikcs.nl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/60">
          <p>&copy; {year} Van Schaik C.S. Advocaten · Alle rechten voorbehouden</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-trust transition-colors">Privacyverklaring</Link>
            <span>NOvA-lid</span>
            <span>KVK 12345678</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
