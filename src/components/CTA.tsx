import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Clock } from "lucide-react";
import Reveal from "./Reveal";
import handshake from "@/assets/handshake-trust.jpg";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-primary">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={handshake}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-hover" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_top_right,hsl(var(--trust)/0.25),transparent_50%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-5">
            <span className="h-px w-8 bg-trust" /> Laten we kennismaken <span className="h-px w-8 bg-trust" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 text-balance leading-tight">
            Een eerste gesprek <br className="hidden md:block" />
            <span className="text-trust">kost u niets.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10">
            15 minuten aan de telefoon. Geen verplichtingen. Wel duidelijkheid over uw situatie
            en de eventuele vervolgstappen.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="tel:0105116771">
                <Phone className="h-5 w-5 mr-2" />
                010 - 511 6771
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent text-white border-white/40 hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              <a href="/contact" className="group">
                Plan een kennismaking
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/15">
            <div className="flex flex-col items-center gap-1.5 text-white/85">
              <Phone className="h-4 w-4 text-trust" />
              <span className="text-sm">010 - 511 6771</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-white/85">
              <Mail className="h-4 w-4 text-trust" />
              <a href="mailto:info@vanschaikcs.nl" className="text-sm hover:text-trust transition-colors">
                info@vanschaikcs.nl
              </a>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-white/85">
              <Clock className="h-4 w-4 text-trust" />
              <span className="text-sm">Ma–Vr · 9:00 – 17:00</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
