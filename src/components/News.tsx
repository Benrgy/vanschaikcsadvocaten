import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nieuwe regelgeving arbeidsrecht per 1 januari 2024",
      excerpt: "Belangrijke wijzigingen in de Wet werk en zekerheid die van invloed zijn op werkgevers en werknemers.",
      date: "15 december 2023",
      category: "Arbeidsrecht",
      slug: "nieuwe-regelgeving-arbeidsrecht-2024"
    },
    {
      id: 2,
      title: "Veranderingen in het familierecht: wat betekent dit voor u?",
      excerpt: "Overzicht van de belangrijkste wijzigingen in het familierecht en de gevolgen voor echtscheidingszaken.",
      date: "28 november 2023",
      category: "Familierecht",
      slug: "veranderingen-familierecht-2024"
    },
    {
      id: 3,
      title: "Mediation als alternatief voor juridische procedures",
      excerpt: "Waarom mediation steeds populairder wordt en hoe het u tijd en kosten kan besparen.",
      date: "10 november 2023",
      category: "Mediation",
      slug: "mediation-alternatief-juridische-procedures"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Laatste Nieuws
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen in het Nederlandse recht
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-heading leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </CardDescription>
                <Button variant="outline" size="sm" className="group">
                  Lees meer
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="professional" size="lg" asChild>
            <Link to="/nieuws">
              Bekijk Alle Nieuws
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;