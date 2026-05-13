import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Scale, HandshakeIcon } from "lucide-react";
import handshake from "@/assets/handshake-trust.jpg";
import mediation from "@/assets/mediation-room.jpg";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Kennismaking",
    text: "Een gratis en vrijblijvend gesprek waarin u uw situatie deelt en wij luisteren.",
  },
  {
    icon: ClipboardList,
    title: "2. Strategie",
    text: "Wij beoordelen uw zaak juridisch en stellen samen met u een helder plan op.",
  },
  {
    icon: Scale,
    title: "3. Behartiging",
    text: "U krijgt een vaste advocaat, korte lijnen en regelmatige updates over de voortgang.",
  },
  {
    icon: HandshakeIcon,
    title: "4. Resultaat",
    text: "Een oplossing die staat — in de rechtszaal, aan de mediation-tafel, of via een schikking.",
  },
];

/**
 * "Onze aanpak" — visual journey with two paralleled images and a 4-step process.
 * Communicates how a client experiences the firm from first call to result.
 */
const Journey = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-trust text-sm font-semibold tracking-[0.25em] uppercase mb-4"
          >
            — Onze aanpak
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5"
          >
            Van eerste gesprek tot zekerheid.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Een traject in vier duidelijke stappen. Geen verrassingen, geen vakjargon —
            alleen heldere afspraken en oprechte aandacht voor uw zaak.
          </motion.p>
        </div>

        {/* Visual collage */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src={handshake}
              alt="Een advocaat schudt de hand van een nieuwe cliënt"
              loading="lazy"
              width={1600}
              height={1067}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="text-trust text-xs uppercase tracking-[0.2em] mb-2">Persoonlijk</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                Eén vast aanspreekpunt voor uw hele traject.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src={mediation}
              alt="Mediation kamer waar conflicten worden opgelost"
              loading="lazy"
              width={1600}
              height={1067}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="text-trust text-xs uppercase tracking-[0.2em] mb-2">Mediation</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                Conflicten oplossen zonder de gang naar de rechter.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-card border border-border rounded-xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-primary/5 group-hover:bg-trust/15 p-3 rounded-lg w-fit mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
