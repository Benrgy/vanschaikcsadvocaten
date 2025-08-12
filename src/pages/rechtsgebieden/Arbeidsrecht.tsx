import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Users, Shield, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Arbeidsrecht = () => {
  const services = [
    {
      icon: FileText,
      title: "Arbeidscontracten",
      description: "Opstellen, beoordelen en onderhandelen van arbeidsovereenkomsten en CAO's."
    },
    {
      icon: Users,
      title: "Ontslag & Reorganisatie",
      description: "Begeleiding bij ontslag, reorganisaties en ontslagvergoedingen."
    },
    {
      icon: Shield,
      title: "Arbeidsconflicten",
      description: "Oplossen van conflicten tussen werkgever en werknemer."
    },
    {
      icon: Briefcase,
      title: "Ziekte & Arbeidsongeschiktheid",
      description: "Ondersteuning bij ziekteverzuim en WIA-procedures."
    }
  ];

  const werkgeversServices = [
    "Arbeidscontracten opstellen en beoordelen",
    "Ontslagprocedures en reorganisaties",
    "Cao-onderhandelingen en implementatie",
    "Compliance en arbeidsrecht wetgeving",
    "Preventief juridisch advies",
    "Geschillenbeslechting en mediation"
  ];

  const werknemersServices = [
    "Beoordeling arbeidscontracten",
    "Ondersteuning bij ontslag",
    "Ontslagvergoeding onderhandelen",
    "Werkloosheidsuitkering procedures",
    "Discriminatie en pesten op werk",
    "Arbeidsomstandigheden en veiligheid"
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Arbeidsrecht
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Deskundige juridische ondersteuning voor werkgevers en werknemers. 
              Wij kennen de arbeidsrechtelijke wetgeving door en door.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Arbeidsrecht Voor Alle Partijen
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Arbeidsrecht is een complex rechtsgebied dat voortdurend verandert. 
                  Wij hebben uitgebreide ervaring in het begeleiden van zowel werkgevers 
                  als werknemers bij arbeidsrechtelijke vraagstukken.
                </p>
                <p className="text-lg leading-relaxed">
                  Van het opstellen van arbeidscontracten tot complexe ontslagzaken - 
                  wij bieden praktische juridische oplossingen die aansluiten bij de 
                  werkelijkheid van de moderne arbeidsmarkt.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/contact">
                    Vraag Juridisch Advies
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-heading font-bold">Belangrijke Wijzigingen 2024</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Nieuwe regels voor tijdelijke contracten</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Aangescherpte WW-regeling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Verhoging minimumloon en bijgevolgen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Nieuwe cao-bepalingen in verschillende sectoren</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Onze Arbeidsrecht Diensten
            </h2>
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
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Voor Werkgevers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Als werkgever heeft u te maken met complexe arbeidsrechtelijke verplichtingen. 
                    Wij helpen u om compliant te blijven en risico's te minimaliseren.
                  </p>
                  <div>
                    <p className="font-semibold mb-2">Onze diensten voor werkgevers:</p>
                    <ul className="space-y-1 text-sm">
                      {werkgeversServices.map((service, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center">
                  <Users className="h-6 w-6 mr-2 text-primary" />
                  Voor Werknemers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Als werknemer heeft u rechten die beschermd moeten worden. 
                    Wij staan naast u om deze rechten te waarborgen en uw belangen te behartigen.
                  </p>
                  <div>
                    <p className="font-semibold mb-2">Onze diensten voor werknemers:</p>
                    <ul className="space-y-1 text-sm">
                      {werknemersServices.map((service, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              Arbeidsconflict? Wij Helpen U
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold mb-2">Snelle Reactie</h4>
                <p className="text-sm text-muted-foreground">Wij reageren binnen 24 uur op uw arbeidsrechtelijke vraag</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold mb-2">Deskundig Advies</h4>
                <p className="text-sm text-muted-foreground">Helder juridisch advies op basis van actuele wetgeving</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold mb-2">Resultaatgericht</h4>
                <p className="text-sm text-muted-foreground">Wij streven naar de beste uitkomst voor uw specifieke situatie</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="professional" size="lg" asChild>
                <Link to="/contact">
                  Neem Direct Contact Op
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Arbeidsrecht;