import { Award, Users, Scale, Shield } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Award,
      text: "Meer dan 30 jaar ervaring"
    },
    {
      icon: Scale,
      text: "Gespecialiseerd in Familie- & Arbeidsrecht"
    },
    {
      icon: Users,
      text: "Gecertificeerde Mediators"
    },
    {
      icon: Shield,
      text: "Lid van de Nederlandse Orde van Advocaten"
    }
  ];

  return (
    <section className="bg-muted py-12 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm leading-tight">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;