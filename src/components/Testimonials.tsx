import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Van Schaik C.S. heeft mij uitstekend geholpen tijdens mijn echtscheiding. Professioneel, helder en altijd bereikbaar.",
      author: "M. Janssen",
      type: "Particulier · Familierecht",
    },
    {
      quote: "Als ondernemer wil je een advocaat die meedenkt. Ze begrijpen onze bedrijfsvoering en geven praktisch juridisch advies dat echt helpt.",
      author: "Directeur MKB",
      type: "Onderneming · Contractenrecht",
    },
    {
      quote: "De mediation heeft ons geholpen om een arbeidsconflict op te lossen zonder rechter. Zeer tevreden over de aanpak.",
      author: "R. de Vries",
      type: "Particulier · Mediation",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Cliëntervaringen</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-5 text-balance">
            Vertrouwd door honderden cliënten
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-trust text-trust" />
              ))}
            </div>
            <span className="text-sm">Gemiddeld 4,9 / 5 op basis van cliëntreviews</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="relative h-full bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-shadow">
                <Quote className="absolute -top-3 left-6 h-8 w-8 text-trust bg-white p-1 rounded-md" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-trust text-trust" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 text-[15px]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.type}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
