import { Award, Users, Scale, Shield } from "lucide-react";
import { motion } from "framer-motion";

const TrustBar = () => {
  const trustItems = [
    { icon: Award, text: "30+ jaar ervaring", sub: "Vertrouwd in het Oostland" },
    { icon: Scale, text: "Familie- & Arbeidsrecht", sub: "Specialisten met focus" },
    { icon: Users, text: "Gecertificeerde Mediators", sub: "Ook zonder rechter" },
    { icon: Shield, text: "Nederlandse Orde van Advocaten", sub: "Lidmaatschap & toezicht" },
  ];

  return (
    <section
      id="trustbar"
      className="relative bg-gradient-to-b from-background to-muted/40 py-14 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-card transition-all"
            >
              <div className="flex-shrink-0">
                <div className="bg-primary/10 group-hover:bg-trust/15 p-3 rounded-lg transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-trust transition-colors" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm leading-tight">{item.text}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
