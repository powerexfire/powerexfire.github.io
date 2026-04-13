import { ClipboardList, Search, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Inquiry & Consultation", desc: "Reach out via call or WhatsApp. We understand your requirements and premises." },
  { icon: Search, step: "02", title: "Site Inspection & Audit", desc: "Our team visits your location, assesses fire risks, and recommends optimal solutions." },
  { icon: Wrench, step: "03", title: "Installation & Setup", desc: "We install certified fire safety systems — extinguishers, alarms, hydrants, and more." },
  { icon: ShieldCheck, step: "04", title: "AMC & Ongoing Support", desc: "Regular servicing, compliance checks, and 24/7 emergency support for complete peace of mind." },
];

const ProcessSection = () => (
  <section className="py-20" aria-label="How we work">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        How We <span className="text-primary">Work</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        A simple, transparent process from first call to long-term protection.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.step} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" aria-hidden="true" />
              )}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative">
                <Icon className="w-9 h-9 text-primary" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-primary-foreground rounded-full text-xs font-heading font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;
