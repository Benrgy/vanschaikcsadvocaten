import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, DollarSign, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Mediation = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Sneller",
      description: "Mediation duurt gemiddeld 3-6 maanden versus jaren voor een rechtszaak."
    },
    {
      icon: DollarSign,
      title: "Goedkoper",
      description: "Mediation kost vaak 70% minder dan een gerechtelijke procedure."
    },
    {
      icon: Users,
      title: "Behoud van Relaties",
      description: "Mediation helpt relaties te herstellen in plaats van te verstoren."
    },
    {
      icon: CheckCircle,
      title: "Zelfbepaling",
      description: "U bepaalt zelf de uitkomst, niet de rechter."
    }
  ];

  const suitableFor = [
    "Echtscheidingszaken en alimentatiekwesties",
    "Arbeidsconflicten tussen werkgever en werknemer",
    "Burenruzies en erfeniskwesties",
    "Handelsgeschillen tussen bedrijven",
    "Conflicten binnen familie of vriendenkring"
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Mediation
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Een moderne en effectieve manier om conflicten op te lossen. 
              Sneller, goedkoper en met behoud van goede relaties.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Wat is Mediation?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Mediation is een vorm van conflictoplossing waarbij een neutrale derde partij 
                  - de mediator - partijen helpt om zelf tot een oplossing te komen. In tegenstelling 
                  tot een rechtszaak, bepaalt een rechter niet de uitkomst.
                </p>
                <p className="text-lg leading-relaxed">
                  Drs. P. van Schaik is een ervaren en gecertificeerde mediator die u kan helpen 
                  om conflicten op een constructieve manier op te lossen.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="professional" size="lg" asChild>
                  <Link to="/contact">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Vraag Mediation Aan
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-heading font-bold mb-4">Het Mediation Proces</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Intake</h4>
                    <p className="text-sm text-muted-foreground">Kennismaking en uitleg van het proces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Gesprekken</h4>
                    <p className="text-sm text-muted-foreground">Structurele gesprekken om tot oplossingen te komen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Overeenkomst</h4>
                    <p className="text-sm text-muted-foreground">Vastleggen van de afspraken in een bindende overeenkomst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              Mediation is Geschikt Voor
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {suitableFor.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="professional" asChild>
                <Link to="/contact">
                  Plan een Informatiegesprek
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mediation;