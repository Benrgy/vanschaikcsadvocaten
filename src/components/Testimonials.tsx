import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Van Schaik C.S. heeft mij uitstekend geholpen tijdens mijn echtscheiding. Professioneel, helder en altijd bereikbaar. Ik kan dit kantoor van harte aanbevelen.",
      author: "M. Janssen",
      type: "Particulier"
    },
    {
      quote: "Als ondernemer heb je een advocaat nodig die meedenkt. Van Schaik C.S. begrijpt onze bedrijfsvoering en geeft praktisch juridisch advies dat echt helpt.",
      author: "Directeur MKB-bedrijf",
      type: "Onderneming"
    },
    {
      quote: "De mediation door Van Schaik C.S. heeft ons geholpen om een moeilijk arbeidsconflict op te lossen zonder naar de rechter te hoeven. Zeer tevreden over de aanpak.",
      author: "R. de Vries",
      type: "Particulier"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Wat Cliënten Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Onze cliënten waarderen onze persoonlijke benadering en professionele service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;