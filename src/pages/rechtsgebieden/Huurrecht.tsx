import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, FileText, DollarSign, Scale, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Huurrecht = () => {
  const services = [
    {
      icon: Home,
      title: "Huurgeschillen",
      description: "Oplossen van conflicten tussen huurders en verhuurders."
    },
    {
      icon: DollarSign,
      title: "Huurverhoging",
      description: "Beoordeling en betwisting van huurverhogingen."
    },
    {
      icon: FileText,
      title: "Opzegging & Ontruiming",
      description: "Juridische bijstand bij opzegging en ontruimingszaken."
    },
    {
      icon: Scale,
      title: "Huurcommissie",
      description: "Vertegenwoordiging bij de huurcommissie."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Huurrecht
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bescherming van uw belangen als huurder of verhuurder. 
              Wij kennen de huurwetgeving en kunnen u effectief bijstaan.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Huurrecht Expertise
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Het huurrecht is complex en kent veel specifieke regels voor verschillende 
                  situaties. Wij hebben ruime ervaring in het begeleiden van zowel huurders 
                  als verhuurders bij huurrechtelijke geschillen.
                </p>
                <p className="text-lg leading-relaxed">
                  Of het nu gaat om een huurverhoging, opzegging of onderhoudskwestie - 
                  wij kennen uw rechten en plichten en kunnen u effectief bijstaan.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Veel Voorkomende Geschillen</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Onrechtmatige huurverhoging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gebreken en onderhoud</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Onrechtmatige opzegging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Servicekosten en bijkomende kosten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Huurgeschil? Wij Helpen U
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Neem contact op voor een juridische beoordeling van uw huurrechtelijke situatie.
            </p>
            <Button variant="professional" size="lg" asChild>
              <Link to="/contact">
                Vraag Juridisch Advies
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Huurrecht;