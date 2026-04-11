import { Flame, Bell, Wrench, ClipboardCheck, Settings, HardHat, Factory, GraduationCap } from "lucide-react";

const services = [
  { icon: Flame, title: "Fire Extinguisher Sales & Refilling", desc: "All types — CO2, ABC, Water, Foam — with ISI-certified refilling services and delivery." },
  { icon: Bell, title: "Fire Alarm & Hydrant Systems", desc: "Advanced detection, alarm panels, hydrant networks, and sprinkler systems for total coverage." },
  { icon: Settings, title: "Fire Safety Installation", desc: "End-to-end installation of suppression systems, hose reels, sprinklers, and hydrant lines." },
  { icon: Wrench, title: "AMC (Annual Maintenance Contract)", desc: "Scheduled servicing, pressure testing, and compliance checks to keep your systems ready year-round." },
  { icon: Factory, title: "Industrial & Factory Safety", desc: "Tailored fire protection for factories, warehouses, and industrial facilities with NBC compliance." },
  { icon: GraduationCap, title: "Fire Mock Drill & Training", desc: "On-site mock drills, evacuation training, and fire safety awareness programs for your team." },
  { icon: ClipboardCheck, title: "Safety Inspection & Consulting", desc: "Professional fire audits, risk assessments, NOC assistance, and compliance consulting." },
  { icon: HardHat, title: "Safety Equipment Supply", desc: "PPE kits, safety signage, emergency lights, and rescue gear for complete workplace safety." },
];

const ServicesSection = () => (
  <section id="services" className="py-20" aria-label="Our services">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Comprehensive fire protection solutions for residential, commercial, and industrial needs.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article key={s.title} className="group bg-card border rounded-lg p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-200">
              <Icon className="w-9 h-9 text-primary mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="font-heading text-base font-bold mb-1.5">{s.title}</h3>
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
