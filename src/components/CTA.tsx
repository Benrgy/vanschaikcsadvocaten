import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary-hover to-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Klaar Voor Juridische Bijstand?
          </h2>
          <p className="text-lg md:text-xl text-white/95 mb-2 max-w-3xl mx-auto">
            Neem vandaag nog vrijblijvend contact op voor een gratis kennismakingsgesprek.
          </p>
          <p className="text-white/90 max-w-2xl mx-auto">
            Ons ervaren team staat klaar om uw juridische uitdaging samen met u op te lossen.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefonisch Contact</h3>
                  <p className="text-2xl font-bold text-primary mb-1">010-5116771</p>
                  <p className="text-sm text-muted-foreground">Ma-Vr: 9:00 - 17:00 uur</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail Contact</h3>
                  <p className="text-lg font-semibold text-primary mb-1">info@vanschaikcs.nl</p>
                  <p className="text-sm text-muted-foreground">Reactie binnen 24 uur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:0105116771">
                <Phone className="h-5 w-5 mr-2" />
                Direct Bellen
              </a>
            </Button>
            <Button variant="professional" size="xl" asChild>
              <a href="mailto:info@vanschaikcs.nl">
                <Mail className="h-5 w-5 mr-2" />
                Stuur een E-mail
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/90 text-sm">
              <strong className="text-trust">Spoedeisend?</strong> Ook buiten kantooruren bereikbaar voor urgente zaken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;