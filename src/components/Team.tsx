import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";

const Team = () => {
  const team = [
    {
      name: "Mr. F. van Schaik",
      title: "Advocaat & Oprichter",
      specializations: "Familierecht, Strafrecht, Mediation",
      image: lawyer1,
      bio: "Met meer dan 30 jaar ervaring is Mr. van Schaik een erkende expert op het gebied van familierecht en strafrecht. Hij is gecertificeerd mediator en heeft honderden zaken succesvol afgerond."
    },
    {
      name: "Mw. A. de Jong",
      title: "Advocaat & Partner",
      specializations: "Arbeidsrecht, Contractenrecht, Ondernemingsrecht",
      image: lawyer2,
      bio: "Mw. de Jong specialiseert zich in arbeidsrecht en ondernemingsrecht. Zij begeleidt zowel werknemers als werkgevers bij complexe juridische vraagstukken en heeft uitgebreide ervaring in contractonderhandelingen."
    }
  ];

  return (
    <section id="team" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Maak Kennis Met Onze Advocaten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ons ervaren team van advocaten staat klaar om u te helpen met al uw juridische vraagstukken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, advocaat bij Van Schaik C.S.`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/10 shadow-md"
                  />
                </div>
                <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.title}
                </CardDescription>
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Wilt u kennismaken met ons team? 
            <span className="text-primary font-medium ml-1">Neem contact op voor een vrijblijvend gesprek.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;