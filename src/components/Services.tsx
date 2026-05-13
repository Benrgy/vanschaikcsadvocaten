import { Scale, Heart, Briefcase, Home, FileText, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const Services = () => {
  const reduce = useReducedMotion();
  const services = [
    { icon: Heart, title: "Familierecht", description: "Echtscheiding, alimentatie, gezag en omgang — met aandacht voor het hele gezin.", to: "/rechtsgebieden/familierecht" },
    { icon: Briefcase, title: "Arbeidsrecht", description: "Ontslag, contracten en conflicten op de werkvloer — voor werknemer en werkgever.", to: "/rechtsgebieden/arbeidsrecht" },
    { icon: Scale, title: "Strafrecht", description: "Heldere verdediging en deskundige bijstand bij verhoor, dagvaarding of zitting.", to: "/rechtsgebieden/strafrecht" },
    { icon: Home, title: "Huurrecht", description: "Huurcontracten, gebreken en geschillen tussen huurder en verhuurder.", to: "/rechtsgebieden/huurrecht" },
    { icon: FileText, title: "Contractenrecht", description: "Opstellen, beoordelen en onderhandelen van waterdichte overeenkomsten.", to: "/rechtsgebieden/contractenrecht" },
    { icon: Users, title: "Mediation", description: "Geschillen oplossen in goed overleg — sneller, goedkoper en met behoud van relatie.", to: "/mediation" },
  ];

  return (
    <section id="expertise" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Onze expertise</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-5 text-balance">
            Specialismen waar wij thuis zijn
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Van complexe ondernemingszaken tot persoonlijke familiekwesties — wij combineren
            inhoudelijke diepgang met menselijke aandacht.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-trust/0 via-trust to-trust/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between mb-5">
                  <div className="bg-primary/5 group-hover:bg-trust/10 p-3 rounded-xl transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-trust transition-colors" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-trust group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5">{service.description}</p>
                <Link
                  to={service.to}
                  className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-trust transition-colors"
                  aria-label={`Meer over ${service.title}`}
                >
                  Lees meer
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
