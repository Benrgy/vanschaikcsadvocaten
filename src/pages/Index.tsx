import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProfessionalBadge from "@/components/ProfessionalBadge";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import QuickContact from "@/components/QuickContact";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <ProfessionalBadge />
        </div>
        <TrustBar />
        <WhoWeHelp />
        <Services />
        <QuickContact />
        <Team />
        <Testimonials />
        <FAQ />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
