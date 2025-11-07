import { Phone, Mail, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QuickContact = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Neem Direct Contact Op
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Heeft u juridische vragen of wilt u een afspraak maken? 
            Neem direct contact met ons op via een van onderstaande opties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow-professional hover:shadow-professional-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Bel Direct</h3>
              <p className="text-sm text-muted-foreground mb-3">Ma-Vr 9:00-17:00</p>
              <Button variant="outline" size="sm" className="w-full">
                010-5116771
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-professional-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">Binnen 24 uur antwoord</p>
              <Button variant="outline" size="sm" className="w-full">
                Mail Ons
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-professional-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Afspraak Maken</h3>
              <p className="text-sm text-muted-foreground mb-3">Plan een gesprek in</p>
              <Button variant="outline" size="sm" className="w-full">
                Plannen
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-professional hover:shadow-professional-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Vraag Indienen</h3>
              <p className="text-sm text-muted-foreground mb-3">Online vraagformulier</p>
              <Button variant="outline" size="sm" className="w-full">
                Formulier
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Spoed?</strong> Bij spoedeisende zaken zijn wij ook buiten kantooruren bereikbaar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
