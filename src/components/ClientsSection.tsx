import { Building2, Home, Factory, GraduationCap, UtensilsCrossed, Hospital } from "lucide-react";

const industries = [
  { icon: Factory, label: "Factories & Warehouses" },
  { icon: Building2, label: "Commercial Buildings" },
  { icon: Home, label: "Housing Societies" },
  { icon: GraduationCap, label: "Schools & Colleges" },
  { icon: UtensilsCrossed, label: "Hotels & Restaurants" },
  { icon: Hospital, label: "Hospitals & Clinics" },
];

const ClientsSection = () => (
  <section className="py-20 bg-secondary text-secondary-foreground" aria-label="Industries we serve">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Industries We <span className="text-primary">Serve</span>
      </h2>
      <p className="text-center text-secondary-foreground/70 max-w-2xl mx-auto mb-12">
        From small businesses to large industrial facilities — we protect them all.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.label}
              className="flex flex-col items-center gap-3 p-5 rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 hover:border-primary/40 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-heading font-bold leading-tight">{ind.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ClientsSection;
