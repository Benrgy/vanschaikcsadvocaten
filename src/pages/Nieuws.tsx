import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nieuws = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nieuwe regelgeving arbeidsrecht per 1 januari 2024",
      excerpt: "Belangrijke wijzigingen in de Wet werk en zekerheid die van invloed zijn op werkgevers en werknemers. Deze aanpassingen beïnvloeden onder andere de flexibilisering van arbeidscontracten en de rechten van werknemers.",
      content: "De nieuwe regelgeving brengt significante veranderingen met zich mee voor de arbeidsmarkt. Werkgevers moeten zich bewust zijn van de aangescherpte regels rond tijdelijke contracten en de verplichtingen ten aanzien van vast personeel.",
      date: "15 december 2023",
      category: "Arbeidsrecht",
      author: "Mr. F. van Schaik",
      slug: "nieuwe-regelgeving-arbeidsrecht-2024"
    },
    {
      id: 2,
      title: "Veranderingen in het familierecht: wat betekent dit voor u?",
      excerpt: "Overzicht van de belangrijkste wijzigingen in het familierecht en de gevolgen voor echtscheidingszaken, alimentatie en voogdij.",
      content: "Het familierecht ondergaat regelmatig aanpassingen. De meest recente wijzigingen hebben betrekking op de berekening van alimentatie en de regeling van voogdij bij scheiding.",
      date: "28 november 2023",
      category: "Familierecht",
      author: "Mr. F. van Schaik",
      slug: "veranderingen-familierecht-2024"
    },
    {
      id: 3,
      title: "Mediation als alternatief voor juridische procedures",
      excerpt: "Waarom mediation steeds populairder wordt en hoe het u tijd en kosten kan besparen bij het oplossen van conflicten.",
      content: "Mediation biedt een constructieve manier om conflicten op te lossen zonder de stress en kosten van een rechtszaak. Steeds meer mensen kiezen voor deze vorm van geschillenbeslechting.",
      date: "10 november 2023",
      category: "Mediation",
      author: "Drs. P. van Schaik",
      slug: "mediation-alternatief-juridische-procedures"
    },
    {
      id: 4,
      title: "Huurrecht: nieuwe bescherming voor huurders",
      excerpt: "Recent ingevoerde maatregelen bieden huurders betere bescherming tegen onredelijke huurverhogingen en onterechte opzegging.",
      content: "De regering heeft nieuwe maatregelen ingevoerd om huurders beter te beschermen. Deze wijzigingen hebben directe gevolgen voor zowel huurders als verhuurders.",
      date: "22 oktober 2023",
      category: "Huurrecht",
      author: "Mr. F. van Schaik",
      slug: "huurrecht-nieuwe-bescherming-huurders"
    },
    {
      id: 5,
      title: "Contractenrecht: valkuilen in algemene voorwaarden",
      excerpt: "Waarop u moet letten bij het ondertekenen van contracten en hoe u zich kunt beschermen tegen onredelijke voorwaarden.",
      content: "Algemene voorwaarden bevatten vaak bepalingen die nadelig kunnen zijn. Het is belangrijk om deze zorgvuldig door te lezen voordat u een contract ondertekent.",
      date: "5 oktober 2023",
      category: "Contractenrecht",
      author: "Mr. F. van Schaik",
      slug: "contractenrecht-valkuilen-algemene-voorwaarden"
    },
    {
      id: 6,
      title: "Strafrecht: uw rechten tijdens politieverhoor",
      excerpt: "Wat u moet weten over uw rechten wanneer u wordt verhoord door de politie en wanneer u juridische bijstand moet inschakelen.",
      content: "Het is cruciaal om uw rechten te kennen tijdens een politieverhoor. U heeft het recht om te zwijgen en juridische bijstand in te schakelen.",
      date: "18 september 2023",
      category: "Strafrecht",
      author: "Mr. F. van Schaik",
      slug: "strafrecht-rechten-politieverhoor"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Arbeidsrecht": return "bg-blue-100 text-blue-800";
      case "Familierecht": return "bg-green-100 text-green-800";
      case "Mediation": return "bg-purple-100 text-purple-800";
      case "Huurrecht": return "bg-orange-100 text-orange-800";
      case "Contractenrecht": return "bg-red-100 text-red-800";
      case "Strafrecht": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Juridisch Nieuws
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Blijf op de hoogte van de laatste ontwikkelingen in het Nederlandse recht 
              en ontdek hoe deze van invloed kunnen zijn op uw situatie.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {item.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed text-base">
                    {item.excerpt}
                  </CardDescription>
                  <div className="text-muted-foreground leading-relaxed mb-6">
                    {item.content}
                  </div>
                  <Button variant="outline" className="group">
                    Lees het volledige artikel
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Blijf Op de Hoogte
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Wilt u automatisch op de hoogte blijven van juridische ontwikkelingen 
                die van belang kunnen zijn voor uw situatie? Neem contact met ons op.
              </p>
              <Button variant="professional" size="lg">
                Neem Contact Op
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nieuws;