import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="mb-6">
          <span className="inline-block bg-trust/20 text-trust px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Al meer dan 30 jaar uw juridische partner
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 text-balance">
          Juridische Expertise
          <br />
          <span className="text-trust">Waar U Op Kunt Vertrouwen</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Deskundig juridisch advies en mediation voor ondernemers en particulieren 
          in de regio Berkel en Rodenrijs. Persoonlijke aandacht, heldere communicatie en bewezen resultaten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="xl" asChild>
            <a href="tel:0105116771">
              <Phone className="h-5 w-5 mr-2" />
              Bel Nu: 010-5116771
            </a>
          </Button>
          <Button variant="professional" size="xl" asChild>
            <a href="#contact">
              Plan Een Gratis Kennismakingsgesprek
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold text-trust mb-1">30+</p>
            <p className="text-white/90 text-sm">Jaar Ervaring</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold text-trust mb-1">500+</p>
            <p className="text-white/90 text-sm">Tevreden Cliënten</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold text-trust mb-1">100%</p>
            <p className="text-white/90 text-sm">Toegewijd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;