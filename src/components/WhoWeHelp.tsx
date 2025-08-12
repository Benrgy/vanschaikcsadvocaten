import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, FileText, Briefcase } from "lucide-react";

const WhoWeHelp = () => {
  return (
    <section id="particulieren" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Voor Wie Wij Werken
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wij bieden juridische ondersteuning aan zowel particulieren als ondernemers, 
            met een persoonlijke benadering voor elke situatie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Particulieren */}
          <Card className="shadow-card hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Voor Particulieren</CardTitle>
              <CardDescription className="text-base">
                Persoonlijke juridische ondersteuning voor belangrijke levensmomenten
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Echtscheiding en familierecht</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Arbeidsconflicten en ontslag</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Burenruzies en huurproblemen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Strafzaken en boetes</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Wij begrijpen dat juridische problemen stressvol kunnen zijn. Daarom bieden wij 
                  heldere uitleg en praktische oplossingen die aansluiten bij uw persoonlijke situatie.
                </p>
                <Button variant="professional" className="w-full">
                  Meer Info Voor Particulieren
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ondernemers */}
          <Card className="shadow-card hover:shadow-lg transition-shadow duration-300" id="ondernemers">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Voor Ondernemers</CardTitle>
              <CardDescription className="text-base">
                Strategische juridische ondersteuning voor uw bedrijf
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Contracten en overeenkomsten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Incasso en debiteurenbeheer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Bedrijfsorganisatie en restructuring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Werknemersrecht en HR-kwesties</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Als ondernemer heeft u een betrouwbare juridische partner nodig. Wij denken mee 
                  over strategische beslissingen en beschermen uw bedrijfsbelangen.
                </p>
                <Button variant="professional" className="w-full">
                  Meer Info Voor Ondernemers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;