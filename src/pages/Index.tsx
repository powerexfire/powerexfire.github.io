import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FireRisksSection from "@/components/FireRisksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FireRisksSection />
      <TestimonialsSection />
      <ContactSection />
      <LegalSection />
    </main>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
