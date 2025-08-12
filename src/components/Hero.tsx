import { Button } from "@/components/ui/button";
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
          Uw Vertrouwde Partner in{" "}
          <span className="text-trust">Juridische Zaken</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Al meer dan 30 jaar deskundig juridisch advies en mediation voor ondernemers 
          en particulieren in de regio Oostland.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Neem Direct Contact Op
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            Bekijk Onze Expertise
          </Button>
        </div>
        
        <div className="mt-12 text-white/80 text-sm">
          <p>Telefonisch bereikbaar: <span className="font-semibold text-white">010-5116771</span></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;