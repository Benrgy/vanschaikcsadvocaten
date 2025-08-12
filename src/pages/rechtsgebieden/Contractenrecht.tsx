import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertTriangle, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contractenrecht = () => {
  const services = [
    {
      icon: FileText,
      title: "Contracten Opstellen",
      description: "Opstellen van juridisch waterdichte contracten en overeenkomsten."
    },
    {
      icon: CheckCircle,
      title: "Contractbeoordeling",
      description: "Beoordelen van contracten voordat u tekent."
    },
    {
      icon: AlertTriangle,
      title: "Contractgeschillen",
      description: "Oplossen van geschillen over contractuele verplichtingen."
    },
    {
      icon: Scale,
      title: "Algemene Voorwaarden",
      description: "Opstellen en beoordelen van algemene voorwaarden."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contractenrecht
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Juridisch waterdichte contracten en oplossingen voor contractgeschillen. 
              Bescherm uw belangen met professioneel juridisch advies.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          <div className="bg-muted/30 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Contractadvies Nodig?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Laat uw contract beoordelen door een ervaren jurist voordat u tekent.
            </p>
            <Button variant="professional" size="lg" asChild>
              <Link to="/contact">
                Neem Contact Op
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contractenrecht;