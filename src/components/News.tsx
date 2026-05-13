import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const News = () => {
  const reduce = useReducedMotion();
  const newsItems = [
    {
      id: 1,
      title: "Nieuwe regelgeving arbeidsrecht per 1 januari",
      excerpt: "Belangrijke wijzigingen in de Wet werk en zekerheid die werkgevers en werknemers raken.",
      date: "15 dec",
      category: "Arbeidsrecht",
      slug: "nieuwe-regelgeving-arbeidsrecht-2024",
    },
    {
      id: 2,
      title: "Veranderingen in het familierecht: wat betekent dit?",
      excerpt: "Overzicht van de belangrijkste wijzigingen en de gevolgen voor echtscheidingszaken.",
      date: "28 nov",
      category: "Familierecht",
      slug: "veranderingen-familierecht-2024",
    },
    {
      id: 3,
      title: "Mediation als alternatief voor procederen",
      excerpt: "Waarom mediation steeds populairder wordt en hoe het tijd én kosten bespaart.",
      date: "10 nov",
      category: "Mediation",
      slug: "mediation-alternatief-juridische-procedures",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-trust uppercase tracking-[0.2em] text-xs font-semibold mb-3">Inzichten</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3 text-balance">
              Kennis die u verder helpt
            </h2>
            <p className="text-lg text-muted-foreground">
              Praktische artikelen over actuele juridische ontwikkelingen.
            </p>
          </div>
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link to="/nieuws">
              Alle artikelen
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                className="group h-full bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/90 via-primary to-primary/70 relative overflow-hidden">
                  <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,hsl(var(--trust)/0.4),transparent_60%)]" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-white/80">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-trust transition-colors">
                    Lees verder
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
