import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";

const OverOns = () => {
  const team = [
    {
      name: "Mr. F. van Schaik",
      title: "Advocaat & Oprichter",
      specializations: "Familierecht, Strafrecht, Algemeen Civiel Recht",
      image: lawyer1,
      bio: "Mr. F. van Schaik is sinds 1983 werkzaam als advocaat en heeft het kantoor opgericht. Met meer dan 40 jaar ervaring is hij een erkende expert op het gebied van familierecht en strafrecht. Hij staat bekend om zijn gedegen kennis en persoonlijke benadering van cliënten.",
      experience: "Sinds 1983"
    },
    {
      name: "Drs. P. van Schaik",
      title: "Mediator",
      specializations: "Mediation, Conflictoplossing, Familiezaken",
      image: lawyer2,
      bio: "Drs. P. van Schaik is een ervaren en gecertificeerde mediator die zich specialiseert in het oplossen van conflicten zonder langdurige rechtszaken. Hij helpt partijen om tot wederzijds acceptabele oplossingen te komen.",
      experience: "Gecertificeerd Mediator"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Meer dan 40 jaar ervaring in juridische dienstverlening"
    },
    {
      icon: Users,
      title: "Persoonlijk",
      description: "Directe toegang tot uw advocaat, geen tussenpersonen"
    },
    {
      icon: Clock,
      title: "Betrouwbaar",
      description: "Al meer dan vier decennia een vertrouwde naam in de regio"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Over Van Schaik C.S.
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Al meer dan 40 jaar een betrouwbare partner voor juridische dienstverlening 
              in de regio Oostland.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Onze Geschiedenis
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Van Schaik C.S. Advocaten werd opgericht in 1983 door Mr. F. van Schaik. 
                  Vanaf het begin hebben wij ons gericht op het bieden van hoogwaardige 
                  juridische dienstverlening met een persoonlijke touch.
                </p>
                <p className="text-lg leading-relaxed">
                  Door de jaren heen hebben wij ons ontwikkeld tot een gerenommeerd kantoor 
                  dat zowel particulieren als ondernemers bijstaat in juridische aangelegenheden. 
                  Onze ervaring en lokale kennis maken ons tot een vertrouwde partner.
                </p>
                <p className="text-lg leading-relaxed">
                  In de loop der tijd hebben wij onze dienstverlening uitgebreid met mediation, 
                  een moderne en effectieve manier om conflicten op te lossen zonder langdurige 
                  rechtszaken.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base font-heading">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Ons Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={`${member.name}, ${member.title} bij Van Schaik C.S.`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/10 shadow-md"
                      />
                    </div>
                    <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.title}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground font-medium">
                      {member.experience}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Specialisaties:</h4>
                      <p className="text-muted-foreground">{member.specializations}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  <MapPin className="h-6 w-6 inline mr-2 text-primary" />
                  Ons Kantoor
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Adres:</strong> Berkelse Poort 39, 2651 JX Berkel en Rodenrijs</p>
                  <p><strong>Postbus:</strong> Postbus 10, 2650 AA Berkel en Rodenrijs</p>
                  <p><strong>Telefoon:</strong> 010-5116771</p>
                  <p><strong>Fax:</strong> 010-5120410</p>
                  <p><strong>Email:</strong> info@vanschaikcs.nl</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Bezoek Ons Kantoor</h3>
                <p className="text-muted-foreground mb-4">
                  Ons kantoor is goed bereikbaar en beschikt over parkeergelegenheid. 
                  Wij ontvangen u graag voor een persoonlijk gesprek.
                </p>
                <Button variant="professional" asChild>
                  <Link to="/contact">
                    Plan een Afspraak
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;