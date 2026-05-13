import { Phone, Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const QuickContact = () => {
  const reduce = useReducedMotion();
  const items = [
    { icon: Phone, title: "Bel direct", sub: "Ma–Vr · 9:00–17:00", action: "010 - 511 6771", href: "tel:0105116771" },
    { icon: Mail, title: "E-mail ons", sub: "Reactie binnen 24 uur", action: "info@vanschaikcs.nl", href: "mailto:info@vanschaikcs.nl" },
    { icon: Calendar, title: "Plan kennismaking", sub: "15 minuten · vrijblijvend", action: "Inplannen", href: "/contact" },
    { icon: MessageSquare, title: "Stel uw vraag", sub: "Online formulier", action: "Naar formulier", href: "/contact" },
  ];

  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Eerste stap</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 text-balance">
            Welke route past bij u?
          </h2>
          <p className="text-muted-foreground">
            Kies wat het prettigst voelt. Wij denken graag mee — zonder verplichtingen.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const isExternal = item.href.startsWith("tel:") || item.href.startsWith("mailto:");
            const Wrapper: any = isExternal ? "a" : Link;
            const wrapperProps = isExternal ? { href: item.href } : { to: item.href };
            return (
              <Reveal key={i} delay={i * 0.06}>
                <motion.div whileHover={reduce ? undefined : { y: -4 }}>
                  <Wrapper
                    {...wrapperProps}
                    className="group block h-full bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:border-trust/30 transition-all"
                  >
                    <div className="bg-primary/5 group-hover:bg-trust/10 p-3 rounded-xl w-fit mb-4 transition-colors">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-trust transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{item.sub}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-trust transition-colors">
                      {item.action}
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Wrapper>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
