import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import scalesImg from "@/assets/justice-scales.jpg";

/**
 * Cinematic story / brand-statement section with parallax image and
 * editorial typography. Conveys trust and craftsmanship.
 */
const Story = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative gradient blobs */}
      <div aria-hidden className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-trust/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary-foreground/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image with parallax */}
          <motion.div
            className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={scalesImg}
              alt="Symbool van recht en gerechtigheid"
              loading="lazy"
              width={1600}
              height={1067}
              className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
              style={reduce ? undefined : { y: imgY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-trust/90 text-trust-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-trust-foreground" />
                Sinds 1993
              </div>
            </div>
          </motion.div>

          {/* Editorial copy */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-trust text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            >
              — Onze belofte
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8"
            >
              Een vertrouwde naam
              <br />
              <span className="text-trust">in het Oostland.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-lg text-primary-foreground/85 max-w-2xl"
            >
              <p>
                Van Schaik C.S. Advocaten staat al ruim drie decennia voor degelijke
                juridische dienstverlening — voor particulieren én voor het bedrijfsleven.
                Een laagdrempelig kantoor met advocaten die ieder hun eigen specialisme
                hebben en samen vrijwel elk rechtsgebied bestrijken.
              </p>
              <p>
                Wij behandelen uw zaak alsof het de onze is. Heldere taal, korte lijnen
                en een persoonlijke aanpak — daar herkent u ons aan.
              </p>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 border-l-2 border-trust pl-6"
            >
              <Quote className="h-6 w-6 text-trust mb-3" />
              <blockquote className="font-heading text-xl md:text-2xl italic text-primary-foreground/95 leading-snug">
                "Recht is geen abstract begrip — het is mensenwerk. Wij zorgen dat
                het ook in úw voordeel werkt."
              </blockquote>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
