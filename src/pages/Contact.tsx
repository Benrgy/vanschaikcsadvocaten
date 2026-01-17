import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const contactFormSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "Voornaam is verplicht")
    .max(50, "Voornaam mag maximaal 50 tekens bevatten"),
  lastName: z.string()
    .trim()
    .min(1, "Achternaam is verplicht")
    .max(50, "Achternaam mag maximaal 50 tekens bevatten"),
  email: z.string()
    .trim()
    .min(1, "E-mailadres is verplicht")
    .email("Voer een geldig e-mailadres in")
    .max(255, "E-mailadres mag maximaal 255 tekens bevatten"),
  phone: z.string()
    .trim()
    .max(20, "Telefoonnummer mag maximaal 20 tekens bevatten")
    .regex(/^[\d\s\-+()]*$/, "Voer een geldig telefoonnummer in")
    .optional()
    .or(z.literal("")),
  subject: z.string()
    .trim()
    .min(1, "Onderwerp is verplicht")
    .max(100, "Onderwerp mag maximaal 100 tekens bevatten"),
  message: z.string()
    .trim()
    .min(10, "Bericht moet minimaal 10 tekens bevatten")
    .max(2000, "Bericht mag maximaal 2000 tekens bevatten"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Construct mailto link with validated and encoded data
    const mailtoSubject = encodeURIComponent(`Contactformulier: ${data.subject}`);
    const mailtoBody = encodeURIComponent(
      `Naam: ${data.firstName} ${data.lastName}\n` +
      `E-mail: ${data.email}\n` +
      `Telefoon: ${data.phone || "Niet opgegeven"}\n\n` +
      `Bericht:\n${data.message}`
    );
    
    window.location.href = `mailto:info@vanschaikcs.nl?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    toast.success("Uw e-mailprogramma wordt geopend om het bericht te versturen.");
    form.reset();
  };

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
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Voornaam *</FormLabel>
                          <FormControl>
                            <Input placeholder="Uw voornaam" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Achternaam *</FormLabel>
                          <FormControl>
                            <Input placeholder="Uw achternaam" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mailadres *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefoonnummer</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="06-12345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Onderwerp *</FormLabel>
                        <FormControl>
                          <Input placeholder="Waar kunnen wij u mee helpen?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bericht *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschrijf uw juridische vraag of situatie..."
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-sm text-muted-foreground">
                    <p>* Verplichte velden</p>
                    <p>Wij behandelen uw gegevens vertrouwelijk conform onze privacyverklaring.</p>
                  </div>
                  
                  <Button type="submit" variant="professional" size="lg" className="w-full md:w-auto">
                    <Send className="h-5 w-5 mr-2" />
                    Verstuur Bericht
                  </Button>
                </form>
              </Form>
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
