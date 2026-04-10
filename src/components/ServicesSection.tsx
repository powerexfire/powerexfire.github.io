import { Flame, Bell, Wrench, ClipboardCheck, Settings, HardHat } from "lucide-react";

const services = [
  { icon: Flame, title: "Fire Extinguisher Supply & Refilling", desc: "All types of fire extinguishers — CO2, ABC, Water, Foam — with certified refilling services." },
  { icon: Bell, title: "Fire Alarm Systems", desc: "Advanced fire detection and alarm systems for commercial and residential properties." },
  { icon: Settings, title: "Fire Safety Installation", desc: "Complete fire safety system installation including sprinklers, hydrants, and suppression systems." },
  { icon: Wrench, title: "Maintenance Services", desc: "Annual maintenance contracts and regular servicing of all fire safety equipment." },
  { icon: ClipboardCheck, title: "Safety Inspection & Consulting", desc: "Professional fire safety audits, risk assessment, and compliance consulting." },
  { icon: HardHat, title: "Safety Equipment Supply", desc: "Personal protective equipment, safety signage, and emergency response gear." },
];

const ServicesSection = () => (
  <section id="services" className="py-20" aria-label="Our services">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Comprehensive fire protection solutions tailored to your needs.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article key={s.title} className="group bg-card border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-200">
              <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a href="https://wa.me/+919167752444?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground outline-none">
          Request a Quote
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
