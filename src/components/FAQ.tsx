import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import Reveal from "./Reveal";

const FAQ = () => {
  const faqs = [
    { question: "Wat zijn de kosten van een advocaat?", answer: "Onze tarieven zijn transparant en worden vooraf besproken. We werken meestal op basis van een uurtarief, maar bieden ook vaste prijzen voor standaard procedures. Tijdens het eerste gesprek bespreken we altijd de verwachte kosten en mogelijkheden voor rechtsbijstandverzekering." },
    { question: "Hoe start ik een zaak bij Van Schaik C.S.?", answer: "U kunt contact opnemen via 010-5116771 of het contactformulier. We plannen dan een intakegesprek waarin we uw situatie bespreken en advies geven over de beste aanpak. Dit eerste gesprek is vrijblijvend." },
    { question: "Bieden jullie een gratis eerste gesprek aan?", answer: "Ja. Wij bieden een gratis telefonisch intakegesprek van ongeveer 15 minuten. Tijdens dit gesprek bespreken we uw situatie en de mogelijke vervolgstappen." },
    { question: "Wat is het verschil tussen een advocaat en een mediator?", answer: "Een advocaat behartigt uw belangen en geeft juridisch advies. Een mediator is een neutrale partij die beide kanten helpt om samen tot een oplossing te komen. Onze advocaten zijn ook gecertificeerd MfN-mediator." },
    { question: "Kan ik gebruik maken van mijn rechtsbijstandverzekering?", answer: "Ja, wij werken samen met alle grote rechtsbijstandverzekeraars. We helpen u graag bij het controleren van uw dekking en de aanvraag van toestemming." },
    { question: "Hoe lang duurt een gemiddelde procedure?", answer: "Dit verschilt per zaak. Een eenvoudige contractkwestie kan binnen weken zijn opgelost; een echtscheiding of complexe ondernemingszaak kan maanden duren. We houden u altijd op de hoogte." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-trust/10 text-trust px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            Veelgestelde vragen
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
            Antwoorden voordat u belt
          </h2>
          <p className="text-lg text-muted-foreground">
            De meest gestelde vragen over werken met Van Schaik C.S. Advocaten.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-border overflow-hidden data-[state=open]:shadow-card data-[state=open]:border-trust/30 transition-all"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-muted/40 transition-colors">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-10">
          <p className="text-muted-foreground">
            Andere vraag?{" "}
            <a href="/contact" className="text-primary font-semibold hover:text-trust transition-colors underline-offset-4 hover:underline">
              Neem gerust contact op
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
