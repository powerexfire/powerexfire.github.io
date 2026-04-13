import { Facebook, Twitter, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground pt-12 pb-6" role="contentinfo">
    <div className="container px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Powerex Fire logo" className="h-10 w-auto" />
            <h3 className="font-heading text-xl font-bold">
              POWEREX<span className="text-primary"> FIRE</span>
            </h3>
          </div>
          <p className="text-sm text-secondary-foreground/60 leading-relaxed">Protecting Lives with Reliable Fire Safety Solutions. Serving Vasai-Virar &amp; Mumbai since 2010.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Quick Links</h4>
          <nav aria-label="Footer navigation" className="space-y-2 text-sm text-secondary-foreground/60">
            <a href="#home" className="block hover:text-primary transition-colors focus-visible:text-primary outline-none">Home</a>
            <a href="#about" className="block hover:text-primary transition-colors focus-visible:text-primary outline-none">About Us</a>
            <a href="#services" className="block hover:text-primary transition-colors focus-visible:text-primary outline-none">Services</a>
            <a href="#contact" className="block hover:text-primary transition-colors focus-visible:text-primary outline-none">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/711610248976755" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors focus-visible:text-primary outline-none" aria-label="Visit our Facebook page">
              <Facebook className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/powerexfire" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors focus-visible:text-primary outline-none" aria-label="Visit our Twitter page">
              <Twitter className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://wa.me/+919167752444" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-trust transition-colors focus-visible:text-trust outline-none" aria-label="Chat on WhatsApp">
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="tel:+919167752444" className="text-secondary-foreground/60 hover:text-primary transition-colors focus-visible:text-primary outline-none" aria-label="Call us">
              <Phone className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60 mt-4">+91 9167752444</p>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} Powerex Fire Protection System. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
