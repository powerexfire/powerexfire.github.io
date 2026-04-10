import { Facebook, Twitter, MessageCircle, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
    <div className="container px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">
            POWEREX<span className="text-primary"> FIRE</span>
          </h3>
          <p className="text-sm text-secondary-foreground/60">Protecting Lives with Reliable Fire Safety Solutions. Serving Vasai-Virar & Mumbai since 2022.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-secondary-foreground/60">
            <a href="#home" className="block hover:text-primary transition-colors">Home</a>
            <a href="#about" className="block hover:text-primary transition-colors">About Us</a>
            <a href="#services" className="block hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-3">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/711610248976755" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/powerexfire" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://wa.me/+919167752444" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-trust transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="tel:+919167752444" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Call">
              <Phone className="w-6 h-6" />
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
