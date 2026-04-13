import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  return (
    <header role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Skip to main content
      </a>
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/20 transition-colors duration-300 ${scrolled ? "bg-secondary shadow-lg" : "bg-secondary/95 backdrop-blur-sm"}`} aria-label="Main navigation">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wider">
            <img src={logo} alt="Powerex Fire logo" className="h-10 w-auto" />
            POWEREX<span className="text-primary"> FIRE</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-secondary-foreground/80 hover:text-primary focus-visible:text-primary font-medium text-sm uppercase tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm">
                {l.label}
              </a>
            ))}
            <a href="tel:+919167752444" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-secondary outline-none">
              <Phone className="w-4 h-4" aria-hidden="true" /> Call Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden bg-secondary border-t border-primary/20 pb-4" role="menu">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} role="menuitem" onClick={() => setOpen(false)} className="block px-6 py-3 text-secondary-foreground/80 hover:text-primary hover:bg-secondary-foreground/5 font-medium text-sm uppercase tracking-wide transition-colors outline-none focus-visible:bg-secondary-foreground/5 focus-visible:text-primary">
                {l.label}
              </a>
            ))}
            <div className="px-6 pt-2">
              <a href="tel:+919167752444" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm focus-visible:ring-2 focus-visible:ring-primary-foreground outline-none">
                <Phone className="w-4 h-4" aria-hidden="true" /> Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
