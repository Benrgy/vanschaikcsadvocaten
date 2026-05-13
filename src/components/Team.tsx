import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const Team = () => {
  const reduce = useReducedMotion();
  const team = [
    {
      name: "Mr. F. van Schaik",
      title: "Advocaat & Oprichter",
      specializations: ["Familierecht", "Strafrecht", "Mediation"],
      image: lawyer1,
      bio: "Met meer dan 30 jaar ervaring een erkende expert in familie- en strafrecht. Gecertificeerd mediator met honderden succesvol afgeronde zaken.",
    },
    {
      name: "Mw. A. de Jong",
      title: "Advocaat & Partner",
      specializations: ["Arbeidsrecht", "Contractenrecht", "Ondernemingsrecht"],
      image: lawyer2,
      bio: "Specialist in arbeids- en ondernemingsrecht. Begeleidt werkgevers én werknemers bij complexe vraagstukken en contractonderhandelingen.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Het team</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            De mensen achter uw zaak
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen anoniem advocatenkantoor. U weet altijd wie er voor u staat.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-border transition-shadow h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name}, advocaat bij Van Schaik C.S.`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <h3 className="text-2xl font-heading font-bold">{member.name}</h3>
                    <p className="text-trust text-sm font-medium mt-1">{member.title}</p>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specializations.map((s) => (
                      <span key={s} className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
