import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Home, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Familierecht = () => {
  const services = [
    {
      icon: Heart,
      title: "Echtscheiding",
      description: "Begeleiding bij echtscheidingsprocedures, van minnelijke regeling tot gerechtelijke uitspraak."
    },
    {
      icon: DollarSign,
      title: "Alimentatie",
      description: "Berekening en vaststelling van partner- en kinderalimentatie volgens de laatste richtlijnen."
    },
    {
      icon: Users,
      title: "Voogdij & Omgang",
      description: "Regeling van voogdij en omgangsregelingen in het belang van het kind."
    },
    {
      icon: Home,
      title: "Vermogensrecht",
      description: "Verdeling van gemeenschappelijke goederen en pensioenen bij scheiding."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Intake gesprek",
      description: "Uitgebreide bespreking van uw situatie en juridische mogelijkheden"
    },
    {
      step: 2,
      title: "Juridisch advies",
      description: "Heldere uitleg van uw rechten en plichten onder het familierecht"
    },
    {
      step: 3,
      title: "Strategie bepalen",
      description: "Samen bepalen we de beste aanpak voor uw specifieke situatie"
    },
    {
      step: 4,
      title: "Uitvoering",
      description: "Wij nemen de juridische stappen en houden u op de hoogte van de voortgang"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Familierecht
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Persoonlijke begeleiding bij familierechtzaken. Wij helpen u door moeilijke 
              tijden met respect, empathie en juridische expertise.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Familierecht Met Zorg en Aandacht
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Familierechtzaken zijn vaak emotioneel belastend en complex. Mr. F. van Schaik 
                  heeft meer dan 40 jaar ervaring in het begeleiden van cliënten door deze 
                  moeilijke periode.
                </p>
                <p className="text-lg leading-relaxed">
                  Of het nu gaat om een echtscheiding, alimentatiekwestie of voogdijregeling - 
                  wij combineren juridische expertise met een persoonlijke, empathische benadering. 
                  Uw belangen en die van uw kinderen staan centraal.
                </p>
                <p className="text-lg leading-relaxed">
                  Wij streven altijd naar een minnelijke oplossing, maar zijn ook bereid om 
                  uw belangen krachtig te verdedigen wanneer dat nodig is.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/contact">
                    Plan een Gesprek
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Waarom Kiezen Voor Ons?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Meer dan 40 jaar ervaring in familierecht</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Empathische en persoonlijke benadering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Transparante communicatie en kosten</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Altijd het belang van kinderen voorop</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ervaring met zowel minnelijke als gerechtelijke procedures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Onze Diensten
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

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Hoe Wij Werken
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Echtscheiding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Een echtscheiding is een ingrijpende gebeurtenis. Wij begeleiden u door 
                    het gehele proces en zorgen ervoor dat uw belangen optimaal worden behartigd.
                  </p>
                  <p className="font-semibold">Waar wij u mee helpen:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Scheidingsconvenant opstellen</li>
                    <li>• Alimentatie berekenen</li>
                    <li>• Omgangsregeling kinderen</li>
                    <li>• Vermogensverdeling</li>
                    <li>• Pensioenrechten</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Kinderen & Voogdij</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Het belang van kinderen staat altijd centraal. Wij helpen bij het vinden 
                    van oplossingen die het beste zijn voor uw kinderen.
                  </p>
                  <p className="font-semibold">Onze expertise:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Voogdijregelingen</li>
                    <li>• Omgangsregelingen</li>
                    <li>• Kinderalimentatie</li>
                    <li>• Internationaal kinderontvoering</li>
                    <li>• Gezinshereniging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-muted/30 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Heeft U Juridische Hulp Nodig?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Neem vrijblijvend contact op voor een persoonlijk gesprek. 
              Wij luisteren naar uw verhaal en adviseren u over de beste juridische stappen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" asChild>
                <Link to="/contact">
                  Plan een Afspraak
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/mediation">
                  Overweeg Mediation
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

export default Familierecht;