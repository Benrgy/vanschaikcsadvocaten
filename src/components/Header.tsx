import { useState } from "react";
import { Menu, X, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-bold text-primary">
              Van Schaik C.S. Advocaten
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#expertise" className="text-foreground hover:text-primary transition-colors">
              Expertise
            </a>
            <a href="#ondernemers" className="text-foreground hover:text-primary transition-colors">
              Voor Ondernemers
            </a>
            <a href="#particulieren" className="text-foreground hover:text-primary transition-colors">
              Voor Particulieren
            </a>
            <a href="#mediation" className="text-foreground hover:text-primary transition-colors">
              Mediation
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Over Ons
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-medium">010-5116771</span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-1" />
                LinkedIn
              </a>
            </Button>
            <Button variant="professional" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <a href="#expertise" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Expertise
              </a>
              <a href="#ondernemers" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Voor Ondernemers
              </a>
              <a href="#particulieren" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Voor Particulieren
              </a>
              <a href="#mediation" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Mediation
              </a>
              <a href="#team" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Over Ons
              </a>
              <a href="#contact" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="px-3 py-2 border-t border-border">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="font-medium">010-5116771</span>
                </div>
                <Button variant="professional" size="sm" className="w-full">
                  Contact Opnemen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;