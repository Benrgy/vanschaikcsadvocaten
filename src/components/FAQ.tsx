import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wat zijn de kosten van een advocaat?",
      answer: "Onze tarieven zijn transparant en worden vooraf besproken. We werken meestal op basis van een uurtarief, maar bieden ook vaste prijzen voor standaard procedures. Tijdens het eerste gesprek bespreken we altijd de verwachte kosten en mogelijkheden voor rechtsbijstandverzekering."
    },
    {
      question: "Hoe start ik een zaak bij Van Schaik C.S.?",
      answer: "U kunt contact met ons opnemen via telefoon (010-5116771) of onze website. We plannen dan een intake gesprek waarin we uw situatie bespreken en advies geven over de beste aanpak. Dit eerste gesprek is vrijblijvend."
    },
    {
      question: "Bieden jullie een gratis eerste gesprek aan?",
      answer: "Ja, wij bieden een gratis telefonisch intakegesprek van ongeveer 15 minuten. Tijdens dit gesprek kunnen we uw situatie bespreken en u adviseren over de vervolgstappen. Voor uitgebreidere gesprekken rekenen we ons reguliere uurtarief."
    },
    {
      question: "Wat is het verschil tussen een advocaat en een mediator?",
      answer: "Een advocaat vertegenwoordigt uw belangen en geeft juridisch advies. Een mediator is een neutrale partij die beide partijen helpt om samen tot een oplossing te komen. Mediation is vaak sneller en goedkoper dan een rechtszaak. Onze advocaten zijn ook gecertificeerd als mediator."
    },
    {
      question: "Kan ik gebruik maken van mijn rechtsbijstandverzekering?",
      answer: "Ja, wij werken samen met alle grote rechtsbijstandverzekeraars in Nederland. We helpen u graag bij het controleren van uw dekking en het indienen van uw claim. Neem uw polisnummer mee naar het eerste gesprek."
    },
    {
      question: "Hoe lang duurt een gemiddelde juridische procedure?",
      answer: "Dit verschilt sterk per type zaak en complexiteit. Een eenvoudige contractkwestie kan binnen enkele weken opgelost zijn, terwijl een echtscheiding of complexe ondernemingsrechtelijke zaak maanden kan duren. We houden u altijd op de hoogte van de voortgang."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Hier vindt u antwoorden op de meest gestelde vragen over onze dienstverlening.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-border"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Heeft u nog andere vragen? 
            <span className="text-primary font-medium ml-1">Neem gerust contact met ons op.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;