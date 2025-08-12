import { Scale, Heart, Briefcase, Home, FileText, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Familierecht",
      description: "Echtscheiding, kinderalimentatie, voogdij en partnerschap kwesties.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Briefcase,
      title: "Arbeidsrecht",
      description: "Arbeidscontracten, ontslag, arbeidsconflicten en werknemersrechten.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Scale,
      title: "Strafrecht",
      description: "Verdediging in strafzaken, boetes en juridische bijstand.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Home,
      title: "Huurrecht",
      description: "Huurcontracten, huurproblemen en geschillen tussen huurder en verhuurder.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: FileText,
      title: "Contractenrecht",
      description: "Opstellen, beoordelen en onderhandelen van zakelijke contracten.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Users,
      title: "Mediation",
      description: "Geschillenbeslechting door middel van mediation en bemiddeling.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="expertise" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Onze Expertisegebieden
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Met decennia aan ervaring bieden wij uitgebreide juridische dienstverlening 
            op verschillende rechtsgebieden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 rounded-full w-fit mb-3 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Heeft u een juridische vraag op een ander gebied? Neem contact met ons op voor een vrijblijvend gesprek.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;