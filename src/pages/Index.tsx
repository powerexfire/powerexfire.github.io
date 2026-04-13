import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FireRisksSection from "@/components/FireRisksSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FireRisksSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <LegalSection />
    </main>
    <Footer />
    <FloatingButtons />
    <BackToTop />
  </div>
);

export default Index;
