import { Button } from "@/components/ui/button";
import { Building2, Heart, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const WhoWeHelp = () => {
  const reduce = useReducedMotion();
  const groups = [
    {
      icon: Heart,
      title: "Voor particulieren",
      tagline: "Persoonlijke aandacht voor wat ertoe doet",
      items: ["Echtscheiding & familierecht", "Arbeidsconflicten en ontslag", "Huurproblemen en burenrecht", "Strafzaken en bijstand"],
      copy: "Juridische problemen zijn stressvol. Wij vertalen complexiteit naar heldere keuzes en begeleiden u stap voor stap.",
      to: "/particulieren",
    },
    {
      icon: Building2,
      title: "Voor ondernemers",
      tagline: "Een advocaat die uw business kent",
      items: ["Contracten & overeenkomsten", "Incasso en debiteurenbeheer", "Arbeidsrecht en HR-vragen", "Bedrijfsstructuur & geschillen"],
      copy: "Wij denken vooruit, voorkomen risico's en treden krachtig op wanneer dat nodig is — zodat u kunt ondernemen.",
      to: "/ondernemers",
    },
  ];

  return (
    <section id="particulieren" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Voor wie</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Twee werelden, één toewijding
          </h2>
          <p className="text-lg text-muted-foreground">
            Of u nu een ondernemer of particulier bent — onze aanpak is altijd persoonlijk.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                id={i === 1 ? "ondernemers" : undefined}
                className="group relative h-full bg-white rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-card-hover border border-border transition-shadow overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-trust/5 rounded-full blur-3xl group-hover:bg-trust/10 transition-colors" />
                <div className="relative">
                  <div className="bg-primary/5 group-hover:bg-trust/10 p-3.5 rounded-xl w-fit mb-5 transition-colors">
                    <g.icon className="h-7 w-7 text-primary group-hover:text-trust transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">{g.title}</h3>
                  <p className="text-trust font-medium text-sm mb-6">{g.tagline}</p>

                  <ul className="space-y-3 mb-6">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-trust/15 flex items-center justify-center">
                          <Check className="h-3 w-3 text-trust" />
                        </span>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground leading-relaxed mb-7">{g.copy}</p>

                  <Button variant="outline" asChild className="group/btn">
                    <Link to={g.to}>
                      Bekijk dienstverlening
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
