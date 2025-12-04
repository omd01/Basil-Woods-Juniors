import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import USPSection from "@/components/USPSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Best Preschool & Daycare Chennai | Play-Based Learning",
    description: "Award-winning preschool in Chennai offering holistic child development for ages 18 months to 6 years. Play-based learning with Tamil cultural values. Admissions open 2025-26! 15+ years of excellence, 500+ happy families.",
    keywords: "preschool Chennai, daycare Chennai, best preschool Chennai, kindergarten Chennai, play school Chennai, Tamil Nadu preschool, early childhood education Chennai, Basil Woods Juniors, playgroup Chennai, Montessori Chennai",
    canonical: "https://www.basilwoodschennai.in/"
  });

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <USPSection />
      <TestimonialsSection />
      <FacilitiesSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
