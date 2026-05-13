import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroOffice from "@/assets/hero-office.jpg";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax on the background image and content
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Cinematic background with Ken Burns + parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <img
          src={heroOffice}
          alt="Kantoor van Van Schaik C.S. Advocaten"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/30" />
        {/* Vignette */}
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_45%,hsl(var(--primary)/0.55)_100%)]" />
      </motion.div>

      {/* Soft animated gold accent */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-trust/25 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-primary-foreground/10 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-trust/20 backdrop-blur-md border border-trust/40 text-trust px-4 py-2 rounded-full text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-trust animate-pulse" />
            Al meer dan 30 jaar uw juridische partner in het Oostland
          </span>
        </motion.div>

        <h1 className="font-heading font-bold text-white text-balance text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
          {"Juridische expertise".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="bg-gradient-to-r from-trust via-trust to-trust/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            waar u op kunt vertrouwen.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Persoonlijke aandacht, heldere communicatie en bewezen resultaten —
          voor ondernemers en particulieren in Berkel en Rodenrijs en omstreken.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" asChild className="group">
            <a href="tel:0105116771">
              <Phone className="h-5 w-5 mr-2" />
              Bel direct: 010 - 511 6771
            </a>
          </Button>
          <Button
            variant="outline"
            size="xl"
            asChild
            className="bg-white/10 backdrop-blur-md text-white border-white/40 hover:bg-white hover:text-primary"
          >
            <a href="/contact" className="group">
              Plan een gratis kennismaking
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="grid grid-cols-3 gap-3 md:gap-6 mt-16 max-w-3xl mx-auto"
        >
          {[
            { value: 30, suffix: "+", label: "Jaar ervaring" },
            { value: 500, suffix: "+", label: "Tevreden cliënten" },
            { value: 100, suffix: "%", label: "Toegewijd" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 hover:bg-white/15 transition-colors"
            >
              <p className="text-3xl md:text-5xl font-heading font-bold text-trust mb-1 tabular-nums">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/85 text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#trustbar"
        aria-label="Scroll verder"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-trust transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Ontdek meer</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
