import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import PartnersCorner from "./pages/PartnersCorner";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import WhatsAppBubble from "@/components/ui/whatsapp-bubble";
import Building from "./pages/Building";
import Campuses from "./pages/OtherCampuses";
import { ScrollToTop } from "./components/ui/scrollToTop";

import ScrollProgress from "./components/ui/scroll-progress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>


      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<PartnersCorner />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/building" element={<Building />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Site-wide floating WhatsApp bubble */}
      <WhatsAppBubble />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;