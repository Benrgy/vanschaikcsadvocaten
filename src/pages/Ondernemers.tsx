import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, FileText, Scale, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Ondernemers = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Arbeidsrecht",
      description: "Ondersteuning bij arbeidsovereenkomsten, ontslagzaken en arbeidsconflicten.",
      link: "/rechtsgebieden/arbeidsrecht"
    },
    {
      icon: FileText,
      title: "Contractenrecht",
      description: "Opstellen en beoordelen van contracten, algemene voorwaarden en overeenkomsten.",
      link: "/rechtsgebieden/contractenrecht"
    },
    {
      icon: Scale,
      title: "Ondernemingsrecht",
      description: "Juridische begeleiding bij bedrijfsvoering, fusies en overnames.",
      link: "/contact"
    },
    {
      icon: Shield,
      title: "Incasso & Vordering",
      description: "Effectieve incasso van openstaande vorderingen en schuldeisersbescherming.",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Voor Ondernemers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Juridische ondersteuning die uw bedrijf vooruit helpt. 
              Wij begrijpen de uitdagingen waarmee ondernemers worden geconfronteerd.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Uw Juridische Partner in Zaken
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Als ondernemer heeft u te maken met complexe juridische vraagstukken. 
                  Van arbeidsrecht tot contractenrecht, van incasso tot ondernemingsrecht - 
                  wij staan klaar om u te ondersteunen.
                </p>
                <p className="text-lg leading-relaxed">
                  Met meer dan 30 jaar ervaring begrijpen wij de uitdagingen van het 
                  ondernemerschap en bieden wij praktische, resultaatgerichte juridische oplossingen.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/contact">
                    Neem Contact Op
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Waarom Kiezen Voor Van Schaik C.S.?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Meer dan 30 jaar ervaring in ondernemingsrecht</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Persoonlijke benadering en directe toegang tot advocaten</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transparante kostenstructuur en heldere communicatie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Snelle responstijd en proactief meedenken</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>
                      Meer Informatie
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ondernemers;