import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Scale, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Particulieren = () => {
  const services = [
    {
      icon: Heart,
      title: "Familierecht",
      description: "Begeleiding bij echtscheiding, alimentatie, voogdij en andere familiezaken.",
      link: "/rechtsgebieden/familierecht"
    },
    {
      icon: Home,
      title: "Huurrecht",
      description: "Ondersteuning bij huurgeschillen, opzegging en huurbescherming.",
      link: "/rechtsgebieden/huurrecht"
    },
    {
      icon: Scale,
      title: "Strafrecht",
      description: "Verdediging in strafzaken en bijstand tijdens politieverhoren.",
      link: "/rechtsgebieden/strafrecht"
    },
    {
      icon: Users,
      title: "Mediation",
      description: "Bemiddeling bij conflicten voor snelle en kosteneffectieve oplossingen.",
      link: "/mediation"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Voor Particulieren
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Persoonlijke juridische ondersteuning wanneer u die het meest nodig heeft. 
              Wij staan naast u in moeilijke tijden.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Toegankelijke Juridische Hulp
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Juridische problemen kunnen overweldigend zijn. Of het nu gaat om een 
                  echtscheiding, een huurgeschil of een strafzaak - wij maken het juridische 
                  proces begrijpelijk en beheersbaar.
                </p>
                <p className="text-lg leading-relaxed">
                  Onze advocaten spreken duidelijke taal en nemen de tijd om uw situatie 
                  te begrijpen. Wij geloven in een persoonlijke benadering waarbij u zich 
                  gehoord en gesteund voelt.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/contact">
                    Gratis Intakegesprek
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Onze Aanpak</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Duidelijke communicatie in begrijpelijke taal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Persoonlijke aandacht en empathische benadering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transparante kosten en eerlijke adviezen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Snelle reactie op uw vragen en zorgen</span>
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

export default Particulieren;