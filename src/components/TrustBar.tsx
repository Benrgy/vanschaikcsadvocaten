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
    <section className="bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-center lg:text-left">
              <div className="flex-shrink-0">
                <div className="bg-trust/10 p-3 rounded-full">
                  <item.icon className="h-6 w-6 text-trust" />
                </div>
              </div>
              <div>
                <p className="text-foreground font-medium text-sm lg:text-base">
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