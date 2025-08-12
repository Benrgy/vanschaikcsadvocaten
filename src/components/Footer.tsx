import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";

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
              <li><a href="#expertise" className="hover:text-trust transition-colors">Expertise</a></li>
              <li><a href="#ondernemers" className="hover:text-trust transition-colors">Voor Ondernemers</a></li>
              <li><a href="#particulieren" className="hover:text-trust transition-colors">Voor Particulieren</a></li>
              <li><a href="#mediation" className="hover:text-trust transition-colors">Mediation</a></li>
              <li><a href="#team" className="hover:text-trust transition-colors">Over Ons</a></li>
              <li><a href="#contact" className="hover:text-trust transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Rechtsgebieden */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Rechtsgebieden</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#" className="hover:text-trust transition-colors">Familierecht</a></li>
              <li><a href="#" className="hover:text-trust transition-colors">Arbeidsrecht</a></li>
              <li><a href="#" className="hover:text-trust transition-colors">Strafrecht</a></li>
              <li><a href="#" className="hover:text-trust transition-colors">Huurrecht</a></li>
              <li><a href="#" className="hover:text-trust transition-colors">Contractenrecht</a></li>
              <li><a href="#" className="hover:text-trust transition-colors">Mediation</a></li>
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Informatie</h3>
            <div className="space-y-3 text-white/90">
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-trust transition-colors">Algemene Voorwaarden</a></li>
                <li><a href="#" className="hover:text-trust transition-colors">Privacyverklaring</a></li>
                <li><a href="#" className="hover:text-trust transition-colors">Klachtenregeling</a></li>
              </ul>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm">KVK: 12345678</p>
                <p className="text-sm">BTW: NL123456789B01</p>
                <p className="text-sm">Lid van de Nederlandse Orde van Advocaten</p>
              </div>

              <div className="pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center space-x-2 hover:text-trust transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90">
          <p>&copy; 2024 Van Schaik C.S. Advocaten. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;