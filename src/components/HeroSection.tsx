import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
    <img src={heroBg} alt="" role="presentation" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
    <div className="absolute inset-0 bg-secondary/75" aria-hidden="true" />
    <div className="relative z-10 container text-center px-4 py-32">
      <p className="text-accent font-heading text-lg md:text-xl font-semibold tracking-widest uppercase mb-4 animate-pulse-glow inline-block px-4 py-1 rounded">
        🔥 Your Safety, Our Responsibility
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
        POWEREX<br /><span className="text-primary">FIRE PROTECTION</span><br />SYSTEM
      </h1>
      <p className="mt-6 text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
        Protecting Lives with Reliable Fire Safety Solutions — Vasai-Virar &amp; Mumbai
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:+919167752444" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-colors animate-pulse-glow focus-visible:ring-2 focus-visible:ring-primary-foreground outline-none">
          <Phone className="w-5 h-5" aria-hidden="true" /> Call Now
        </a>
        <a href="https://wa.me/+919167752444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-trust text-trust-foreground px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-trust/90 transition-colors focus-visible:ring-2 focus-visible:ring-trust-foreground outline-none">
          <MessageCircle className="w-5 h-5" aria-hidden="true" /> WhatsApp Chat
        </a>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-secondary-foreground/60">
        <span>✅ GST Registered</span>
        <span>✅ ISI/BIS Certified Products</span>
        <span>✅ Trusted Since 2022</span>
        <span>✅ 24/7 Emergency Support</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
