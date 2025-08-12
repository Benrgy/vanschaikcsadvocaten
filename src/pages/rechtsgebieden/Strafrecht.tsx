import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, AlertTriangle, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Strafrecht = () => {
  const services = [
    {
      icon: Shield,
      title: "Verdediging in Strafzaken",
      description: "Professionele verdediging bij alle vormen van strafbare feiten."
    },
    {
      icon: Scale,
      title: "Politieverhoor Bijstand",
      description: "Juridische bijstand tijdens verhoren en inverzekeringstellingen."
    },
    {
      icon: AlertTriangle,
      title: "Jeugdstrafrecht",
      description: "Gespecialiseerde begeleiding van minderjarigen in het strafrecht."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Strafrecht
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ervaren verdediging in strafzaken. Uw rechten en belangen staan centraal 
              in elke fase van de strafrechtelijke procedure.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Professionele Strafrechtelijke Verdediging
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Mr. F. van Schaik heeft meer dan 40 jaar ervaring in het strafrecht. 
                  Hij verdedigt cliënten in alle soorten strafzaken, van lichte overtredingen 
                  tot complexe misdrijven.
                </p>
                <p className="text-lg leading-relaxed">
                  Wij geloven dat iedereen recht heeft op een goede verdediging. 
                  Daarom bieden wij persoonlijke aandacht en maken we tijd om uw zaak 
                  grondig voor te bereiden.
                </p>
              </div>
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2" />
                  <span className="font-semibold text-red-800">Spoedgeval? Bel direct: 010-5116771</span>
                </div>
                <p className="text-sm text-red-700 mt-1">
                  Wij zijn 24/7 bereikbaar voor spoedgevallen
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Uw Rechten</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Recht op zwijgen tijdens verhoor</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Recht op juridische bijstand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Recht op inzage in het dossier</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Recht op eerlijk proces</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              Verdacht van een Strafbaar Feit?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Neem onmiddellijk contact op. Hoe eerder u juridische bijstand inschakelt, 
              hoe beter wij u kunnen helpen.
            </p>
            <Button variant="professional" size="lg" asChild>
              <Link to="/contact">
                Direct Contact Opnemen
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strafrecht;