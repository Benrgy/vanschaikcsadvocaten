import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "./components/SEOWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ondernemers from "./pages/Ondernemers";
import Particulieren from "./pages/Particulieren";
import Mediation from "./pages/Mediation";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import Nieuws from "./pages/Nieuws";
import Privacy from "./pages/Privacy";
import Familierecht from "./pages/rechtsgebieden/Familierecht";
import Arbeidsrecht from "./pages/rechtsgebieden/Arbeidsrecht";
import Strafrecht from "./pages/rechtsgebieden/Strafrecht";
import Huurrecht from "./pages/rechtsgebieden/Huurrecht";
import Contractenrecht from "./pages/rechtsgebieden/Contractenrecht";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOWrapper>
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ondernemers" element={<Ondernemers />} />
          <Route path="/particulieren" element={<Particulieren />} />
          <Route path="/mediation" element={<Mediation />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nieuws" element={<Nieuws />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rechtsgebieden/familierecht" element={<Familierecht />} />
          <Route path="/rechtsgebieden/arbeidsrecht" element={<Arbeidsrecht />} />
          <Route path="/rechtsgebieden/strafrecht" element={<Strafrecht />} />
          <Route path="/rechtsgebieden/huurrecht" element={<Huurrecht />} />
          <Route path="/rechtsgebieden/contractenrecht" element={<Contractenrecht />} />
          <Route path="*" element={<NotFound />} />
            </Routes>
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;