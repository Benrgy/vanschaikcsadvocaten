import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Klaar om uw juridische vraag te bespreken?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Neem vandaag nog vrijblijvend contact op. Ons team staat voor u klaar 
          om uw juridische uitdagingen samen met u aan te pakken.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
            <Phone className="h-5 w-5 mr-2" />
            Plan een Gesprek
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
            <Mail className="h-5 w-5 mr-2" />
            Stuur een E-mail
          </Button>
        </div>

        <div className="space-y-4 text-white/90">
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span className="text-lg font-semibold">010-5116771</span>
          </div>
          <p className="text-sm">
            Bereikbaar op werkdagen van 9:00 tot 17:00 uur
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;