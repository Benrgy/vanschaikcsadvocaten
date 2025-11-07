import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-6">
            Privacyverklaring
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                1. Algemeen
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Van Schaik C.S. Advocaten hecht veel waarde aan de bescherming van uw persoonsgegevens. 
                In deze privacyverklaring informeren wij u over de manier waarop wij met uw persoonsgegevens omgaan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                2. Welke gegevens verzamelen wij?
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Wij verzamelen alleen persoonsgegevens die u zelf aan ons verstrekt, bijvoorbeeld wanneer u:
              </p>
              <ul className="list-disc pl-6 text-foreground mb-4 space-y-2">
                <li>Contact met ons opneemt via telefoon, e-mail of ons contactformulier</li>
                <li>Een afspraak maakt voor een juridisch consult</li>
                <li>Onze diensten afneemt als cliënt</li>
                <li>Inschrijft voor onze nieuwsbrief</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                3. Waarvoor gebruiken wij uw gegevens?
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Wij gebruiken uw persoonsgegevens voor:
              </p>
              <ul className="list-disc pl-6 text-foreground mb-4 space-y-2">
                <li>Het verlenen van juridische diensten</li>
                <li>Communicatie over uw zaak</li>
                <li>Het voldoen aan wettelijke verplichtingen</li>
                <li>Het verbeteren van onze dienstverlening</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                4. Beveiliging
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
                te beschermen tegen verlies of onrechtmatige verwerking. Toegang tot uw gegevens is 
                beperkt tot geautoriseerd personeel dat gebonden is aan geheimhouding.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                5. Uw rechten
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                U heeft recht op inzage, correctie, verwijdering en beperking van de verwerking van 
                uw persoonsgegevens. U kunt hiervoor contact met ons opnemen via de onderstaande contactgegevens.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                6. Contact
              </h2>
              <p className="text-foreground leading-relaxed mb-2">
                Voor vragen over deze privacyverklaring kunt u contact met ons opnemen:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Van Schaik C.S. Advocaten</p>
                <p className="text-foreground">Rodenrijseweg 459</p>
                <p className="text-foreground">2651 AN Berkel en Rodenrijs</p>
                <p className="text-foreground mt-2">Tel: 010-5116771</p>
                <p className="text-foreground">E-mail: info@vanschaikcs.nl</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
