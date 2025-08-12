import { useState } from "react";
import { Menu, X, Phone, Linkedin, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Vacancy Banner */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-medium text-sm">
              VACATURE VOOR ERVAREN ADVOCAAT - Bekijk onze vacature
            </span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl font-heading font-bold text-primary">
                  Van Schaik C.S. Advocaten
                </h1>
              </Link>
            </div>

            {/* Search */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Zoeken..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  ONDERNEMERS <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/ondernemers">Voor Ondernemers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/arbeidsrecht">Arbeidsrecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/contractenrecht">Contractenrecht</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  PARTICULIEREN <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/particulieren">Voor Particulieren</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/familierecht">Familierecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/strafrecht">Strafrecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/huurrecht">Huurrecht</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/mediation" className="text-foreground hover:text-primary transition-colors">
                MEDIATION
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                  RECHTSGEBIEDEN <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/familierecht">Familierecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/arbeidsrecht">Arbeidsrecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/strafrecht">Strafrecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/huurrecht">Huurrecht</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rechtsgebieden/contractenrecht">Contractenrecht</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/over-ons" className="text-foreground hover:text-primary transition-colors">
                OVER ONS
              </Link>

              <Link to="/nieuws" className="text-foreground hover:text-primary transition-colors">
                NIEUWS
              </Link>
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
              <Button variant="professional" size="sm" asChild>
                <Link to="/contact">Contact</Link>
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
                <Link to="/ondernemers" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Voor Ondernemers
                </Link>
                <Link to="/particulieren" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Voor Particulieren
                </Link>
                <Link to="/mediation" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Mediation
                </Link>
                <Link to="/over-ons" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
                <Link to="/nieuws" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Nieuws
                </Link>
                <Link to="/contact" className="px-3 py-2 text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
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
    </>
  );
};

export default Header;