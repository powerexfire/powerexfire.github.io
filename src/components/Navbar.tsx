import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wider">
          POWEREX<span className="text-primary"> FIRE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-secondary-foreground/80 hover:text-primary font-medium text-sm uppercase tracking-wide transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+919167752444" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-primary/20 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary font-medium text-sm uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a href="tel:+919167752444" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
