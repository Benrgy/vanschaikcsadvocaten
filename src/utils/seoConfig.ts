export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Van Schaik C.S. Advocaten - Juridische Dienstverlening Berkel en Rodenrijs',
    description: 'Van Schaik C.S. Advocaten biedt meer dan 30 jaar ervaring in familierecht, arbeidsrecht, strafrecht, huurrecht en contractenrecht in Berkel en Rodenrijs.',
    keywords: 'advocaat, juridisch advies, familierecht, arbeidsrecht, strafrecht, huurrecht, contractenrecht, Berkel en Rodenrijs, mediation',
    ogTitle: 'Van Schaik C.S. Advocaten - Ervaren Juridische Bijstand',
    ogDescription: 'Meer dan 30 jaar ervaring in juridische dienstverlening. Specialisten in familie-, arbeids-, straf-, huur- en contractenrecht.',
    twitterTitle: 'Van Schaik C.S. Advocaten - Juridische Experts',
    twitterDescription: 'Betrouwbare juridische dienstverlening sinds 1983. Persoonlijke begeleiding bij al uw juridische vraagstukken.'
  },
  '/ondernemers': {
    title: 'Juridische Diensten voor Ondernemers - Van Schaik C.S. Advocaten',
    description: 'Specialistische juridische ondersteuning voor ondernemers. Arbeidsrecht, contractenrecht, ondernemingsrecht en incasso. Ervaring sinds 1983.',
    keywords: 'ondernemersrecht, arbeidsrecht ondernemers, contractenrecht, bedrijfsjuridisch advies, incasso, ondernemingsrecht',
    ogTitle: 'Juridische Partner voor Ondernemers - Van Schaik C.S.',
    ogDescription: 'Praktische juridische oplossingen voor ondernemers. Van arbeidsrecht tot contractenrecht en incasso.',
    twitterTitle: 'Ondernemersrecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Uw juridische partner in zaken. Meer dan 30 jaar ervaring in ondernemingsrecht.'
  },
  '/particulieren': {
    title: 'Juridische Hulp voor Particulieren - Van Schaik C.S. Advocaten',
    description: 'Persoonlijke juridische ondersteuning voor particulieren. Familierecht, huurrecht, strafrecht en mediation. Toegankelijke hulp in moeilijke tijden.',
    keywords: 'particulieren advocaat, familierecht, echtscheiding, huurrecht, strafrecht, juridische hulp particulieren',
    ogTitle: 'Toegankelijke Juridische Hulp - Van Schaik C.S.',
    ogDescription: 'Empathische begeleiding bij juridische problemen. Duidelijke communicatie en persoonlijke aandacht.',
    twitterTitle: 'Juridische Hulp Particulieren - Van Schaik C.S.',
    twitterDescription: 'Begrijpelijke juridische hulp wanneer u die het meest nodig heeft.'
  },
  '/mediation': {
    title: 'Mediation Diensten - Drs. P. van Schaik Mediator',
    description: 'Professionele mediation door Drs. P. van Schaik. Snelle en kosteneffectieve oplossingen voor conflicten zonder rechtszaak.',
    keywords: 'mediation, mediator, conflictoplossing, bemiddeling, alternatief geschillenbeslechting, Drs. P. van Schaik',
    ogTitle: 'Mediation - Conflicten Oplossen Zonder Rechtszaak',
    ogDescription: 'Ervaren mediator helpt bij het vinden van oplossingen die voor alle partijen acceptabel zijn.',
    twitterTitle: 'Mediation Diensten - Van Schaik C.S.',
    twitterDescription: 'Bemiddeling voor snelle en effectieve conflictoplossing.'
  },
  '/over-ons': {
    title: 'Over Ons - Van Schaik C.S. Advocaten Team',
    description: 'Leer meer over Van Schaik C.S. Advocaten. Mr. F. van Schaik en Drs. P. van Schaik bieden samen meer dan 30 jaar juridische ervaring.',
    keywords: 'Van Schaik advocaten, Mr. F. van Schaik, Drs. P. van Schaik, advocatenkantoor Berkel en Rodenrijs, juridisch team',
    ogTitle: 'Het Team van Van Schaik C.S. Advocaten',
    ogDescription: 'Ontmoet onze ervaren advocaten en mediator. Persoonlijke benadering en jarenlange expertise.',
    twitterTitle: 'Team Van Schaik C.S. Advocaten',
    twitterDescription: 'Ervaren juridische professionals met een persoonlijke benadering.'
  },
  '/contact': {
    title: 'Contact - Van Schaik C.S. Advocaten Berkel en Rodenrijs',
    description: 'Neem contact op met Van Schaik C.S. Advocaten. Berkelse Poort 39, Berkel en Rodenrijs. Tel: 010-5120409. Gratis intakegesprek mogelijk.',
    keywords: 'contact advocaat, Van Schaik advocaten contact, Berkelse Poort, Berkel en Rodenrijs, intakegesprek, 010-5120409',
    ogTitle: 'Contact Van Schaik C.S. Advocaten',
    ogDescription: 'Bereikbaar voor juridisch advies. Bel 010-5120409 of plan een gratis intakegesprek.',
    twitterTitle: 'Contact - Van Schaik C.S. Advocaten',
    twitterDescription: 'Neem contact op voor juridisch advies. Gratis intakegesprek beschikbaar.'
  },
  '/nieuws': {
    title: 'Juridisch Nieuws - Van Schaik C.S. Advocaten',
    description: 'Blijf op de hoogte van het laatste juridische nieuws en updates van Van Schaik C.S. Advocaten. Relevante ontwikkelingen in het recht.',
    keywords: 'juridisch nieuws, rechtsupdates, Van Schaik nieuws, juridische ontwikkelingen, wetswijzigingen',
    ogTitle: 'Laatste Juridische Nieuws - Van Schaik C.S.',
    ogDescription: 'Actuele juridische ontwikkelingen en nieuws van ons advocatenkantoor.',
    twitterTitle: 'Juridisch Nieuws - Van Schaik C.S.',
    twitterDescription: 'Blijf informed over juridische ontwikkelingen en nieuws.'
  },
  '/rechtsgebieden/familierecht': {
    title: 'Familierecht Advocaat - Echtscheiding & Alimentatie | Van Schaik C.S.',
    description: 'Specialist in familierecht. Begeleiding bij echtscheiding, alimentatie, voogdij en omgangsregelingen. Empathische aanpak bij moeilijke tijden.',
    keywords: 'familierecht, echtscheiding advocaat, alimentatie, voogdij, omgangsregeling, huwelijkse voorwaarden, partneralimentatie',
    ogTitle: 'Familierecht Specialist - Van Schaik C.S. Advocaten',
    ogDescription: 'Ervaren begeleiding bij familierechtzaken. Van echtscheiding tot voogdijregelingen.',
    twitterTitle: 'Familierecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Specialistische hulp bij familierechtzaken en echtscheidingen.'
  },
  '/rechtsgebieden/arbeidsrecht': {
    title: 'Arbeidsrecht Advocaat - Ontslag & Arbeidsconflicten | Van Schaik C.S.',
    description: 'Arbeidsrecht specialist voor werkgevers en werknemers. Ontslagzaken, arbeidsovereenkomsten en arbeidsconflicten. Meer dan 30 jaar ervaring.',
    keywords: 'arbeidsrecht, ontslag advocaat, arbeidsovereenkomst, arbeidsconflict, ontslagvergoeding, werkgever werknemerrecht',
    ogTitle: 'Arbeidsrecht Expert - Van Schaik C.S. Advocaten',
    ogDescription: 'Juridische ondersteuning bij arbeidsrechtelijke vraagstukken voor ondernemers en werknemers.',
    twitterTitle: 'Arbeidsrecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Specialistische arbeidsrechtelijke bijstand voor alle arbeidsconflicten.'
  },
  '/rechtsgebieden/strafrecht': {
    title: 'Strafrecht Advocaat - Strafrechtelijke Verdediging | Van Schaik C.S.',
    description: 'Ervaren strafrecht advocaat. Verdediging in strafzaken, bijstand bij politieverhoor en rechtsbijstand. Bescherming van uw rechten.',
    keywords: 'strafrecht advocaat, strafrechtelijke verdediging, politieverhoor, rechtsbijstand, strafzaak, verdachte bijstand',
    ogTitle: 'Strafrecht Verdediging - Van Schaik C.S. Advocaten',
    ogDescription: 'Professionele verdediging in strafzaken. Bescherming van uw rechten bij politie en justitie.',
    twitterTitle: 'Strafrecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Ervaren strafrechtelijke verdediging en rechtsbijstand.'
  },
  '/rechtsgebieden/huurrecht': {
    title: 'Huurrecht Advocaat - Huurgeschillen & Opzegging | Van Schaik C.S.',
    description: 'Huurrecht specialist voor huurders en verhuurders. Huurgeschillen, opzegging, huurbescherming en huurprijsverhoging. Juridische ondersteuning.',
    keywords: 'huurrecht, huurgeschil, opzegging huurcontract, huurbescherming, huurprijsverhoging, huurder verhuurder recht',
    ogTitle: 'Huurrecht Specialist - Van Schaik C.S. Advocaten',
    ogDescription: 'Juridische hulp bij huurgeschillen en huurrechtelijke vraagstukken voor huurders en verhuurders.',
    twitterTitle: 'Huurrecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Specialistische ondersteuning bij huurgeschillen en huurrechtelijke kwesties.'
  },
  '/rechtsgebieden/contractenrecht': {
    title: 'Contractenrecht Advocaat - Contracten & Overeenkomsten | Van Schaik C.S.',
    description: 'Contractenrecht specialist. Opstellen en beoordelen van contracten, algemene voorwaarden en overeenkomsten. Juridische zekerheid voor ondernemers.',
    keywords: 'contractenrecht, contract opstellen, overeenkomst, algemene voorwaarden, contractbreuk, ondernemingscontracten',
    ogTitle: 'Contractenrecht Expert - Van Schaik C.S. Advocaten',
    ogDescription: 'Professionele contractondersteuning. Van opstellen tot beoordelen van alle overeenkomsten.',
    twitterTitle: 'Contractenrecht - Van Schaik C.S. Advocaten',
    twitterDescription: 'Specialistische contractondersteuning voor waterproof overeenkomsten.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];