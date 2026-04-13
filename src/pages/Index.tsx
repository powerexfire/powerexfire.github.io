import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const FireRisksSection = lazy(() => import("@/components/FireRisksSection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const LegalSection = lazy(() => import("@/components/LegalSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center" aria-busy="true">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <Suspense fallback={<SectionFallback />}>
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
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    <FloatingButtons />
    <BackToTop />
  </div>
);

export default Index;
