import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Informatie */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Van Schaik C.S. Advocaten</p>
                  <p>Rodenrijseweg 459</p>
                  <p>2651 AN Berkel en Rodenrijs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>010-5116771</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@vanschaikcs.nl</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Maandag - Vrijdag</p>
                  <p>9:00 - 17:00 uur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/ondernemers" className="hover:text-trust transition-colors">Voor Ondernemers</Link></li>
              <li><Link to="/particulieren" className="hover:text-trust transition-colors">Voor Particulieren</Link></li>
              <li><Link to="/mediation" className="hover:text-trust transition-colors">Mediation</Link></li>
              <li><Link to="/over-ons" className="hover:text-trust transition-colors">Over Ons</Link></li>
              <li><Link to="/contact" className="hover:text-trust transition-colors">Contact</Link></li>
              <li><Link to="/nieuws" className="hover:text-trust transition-colors">Nieuws</Link></li>
            </ul>
          </div>

          {/* Rechtsgebieden */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Rechtsgebieden</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/rechtsgebieden/familierecht" className="hover:text-trust transition-colors">Familierecht</Link></li>
              <li><Link to="/rechtsgebieden/arbeidsrecht" className="hover:text-trust transition-colors">Arbeidsrecht</Link></li>
              <li><Link to="/rechtsgebieden/strafrecht" className="hover:text-trust transition-colors">Strafrecht</Link></li>
              <li><Link to="/rechtsgebieden/huurrecht" className="hover:text-trust transition-colors">Huurrecht</Link></li>
              <li><Link to="/rechtsgebieden/contractenrecht" className="hover:text-trust transition-colors">Contractenrecht</Link></li>
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Juridische Informatie</h3>
            <div className="space-y-3 text-white/90">
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-trust transition-colors">Privacyverklaring</Link></li>
                <li><a href="#" className="hover:text-trust transition-colors">Algemene Voorwaarden</a></li>
                <li><a href="#" className="hover:text-trust transition-colors">Klachtenregeling</a></li>
                <li><a href="#" className="hover:text-trust transition-colors">Disclaimer</a></li>
              </ul>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm font-semibold text-white mb-2">Geregistreerd bij:</p>
                <p className="text-sm">Nederlandse Orde van Advocaten</p>
                <p className="text-sm mt-2">KVK: 12345678</p>
                <p className="text-sm">BTW: NL123456789B01</p>
              </div>

              <div className="pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center space-x-2 hover:text-trust transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>Volg ons op LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center text-white/90 space-y-2">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Van Schaik C.S. Advocaten. Alle rechten voorbehouden.
            </p>
            <p className="text-xs">
              Lid van de Nederlandse Orde van Advocaten | KVK: 12345678 | BTW: NL123456789B01
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;