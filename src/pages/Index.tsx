import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
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
        <TrustBar />
        <WhoWeHelp />
        <Services />
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
