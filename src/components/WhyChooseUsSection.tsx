import { ShieldCheck, Clock, BadgeCheck, Users, Headphones, Award } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Certified & Compliant", desc: "All products are ISI/BIS certified. We follow NBC and IS standards for every installation." },
  { icon: Clock, title: "24/7 Emergency Support", desc: "Round-the-clock assistance for fire emergencies, equipment failures, and urgent servicing needs." },
  { icon: BadgeCheck, title: "GST Registered Business", desc: "Fully legitimate proprietorship with GSTIN 27ABKPY1137F1ZH — transparent billing guaranteed." },
  { icon: Users, title: "Trained Professionals", desc: "Our technicians are trained in fire safety protocols and equipped with the latest tools." },
  { icon: Headphones, title: "Free Consultation", desc: "Get a no-obligation fire safety audit and expert recommendations for your premises." },
  { icon: Award, title: "Trusted Since 2010", desc: "Serving Vasai-Virar & Mumbai with reliable fire protection solutions and a growing clientele for over 15 years." },
];

const WhyChooseUsSection = () => (
  <section className="py-20 bg-secondary text-secondary-foreground" aria-label="Why choose us">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Why Choose <span className="text-primary">Powerex?</span>
      </h2>
      <p className="text-center text-secondary-foreground/70 max-w-2xl mx-auto mb-12">
        Your safety is our responsibility. Here's what sets us apart.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.title} className="flex gap-4 p-5 rounded-lg border border-secondary-foreground/10 hover:border-primary/40 transition-colors bg-secondary-foreground/5">
              <Icon className="w-8 h-8 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-heading text-lg font-bold mb-1">{r.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
