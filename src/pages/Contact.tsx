import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Neem vrijblijvend contact met ons op. Wij staan klaar om u te helpen 
              met al uw juridische vragen.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Neem Contact Op
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam *</Label>
                    <Input id="firstName" placeholder="Uw voornaam" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam *</Label>
                    <Input id="lastName" placeholder="Uw achternaam" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input id="email" type="email" placeholder="uw.email@voorbeeld.nl" required />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input id="phone" type="tel" placeholder="06-12345678" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Onderwerp *</Label>
                  <Input id="subject" placeholder="Waar kunnen wij u mee helpen?" required />
                </div>
                
                <div>
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Beschrijf uw juridische vraag of situatie..."
                    rows={6}
                    required 
                  />
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>* Verplichte velden</p>
                  <p>Wij behandelen uw gegevens vertrouwelijk conform onze privacyverklaring.</p>
                </div>
                
                <Button type="submit" variant="professional" size="lg" className="w-full md:w-auto">
                  <Send className="h-5 w-5 mr-2" />
                  Verstuur Bericht
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Kantooradres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Van Schaik C.S. Advocaten</p>
                    <p>Berkelse Poort 39</p>
                    <p>2651 JX Berkel en Rodenrijs</p>
                    <p className="pt-2">
                      <strong>Postbus:</strong> Postbus 10<br />
                      2650 AA Berkel en Rodenrijs
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Telefoon & Fax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Telefoon:</strong> 010-5116771</p>
                    <p><strong>Fax:</strong> 010-5120410</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>info@vanschaikcs.nl</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Openingstijden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p><strong>Maandag - Vrijdag:</strong> 9:00 - 17:00</p>
                    <p><strong>Zaterdag & Zondag:</strong> Gesloten</p>
                    <p className="text-sm text-muted-foreground pt-2">
                      Buiten kantooruren kunt u ons bereiken via e-mail. 
                      Wij reageren binnen 24 uur op uw bericht.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-heading font-bold mb-3">Bereikbaarheid</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Met de auto:</strong> Gratis parkeren beschikbaar voor het kantoor</p>
                  <p><strong>Openbaar vervoer:</strong> Bus halte op 2 minuten loopafstand</p>
                  <p><strong>Trein:</strong> Station Berkel en Rodenrijs op 10 minuten loopafstand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;