import { Zap, TreePine, Flame, FlaskConical } from "lucide-react";

const risks = [
  { icon: Zap, title: "Electrical Overload", desc: "Heavy use of ACs and fans overloads circuits. Older wiring overheats and sparks under extra load.", color: "text-accent" },
  { icon: TreePine, title: "Dry Vegetation", desc: "Low humidity and extreme heat turn grass and leaves into a tinderbox — a single spark can cause a large fire.", color: "text-trust" },
  { icon: Flame, title: "Human Activity", desc: "Outdoor activities like barbecuing, camping, and fireworks involve open flames and flammable materials.", color: "text-primary" },
  { icon: FlaskConical, title: "Volatile Materials", desc: "Paints, petrol, and gas cylinders become more volatile in direct sunlight or extreme heat.", color: "text-fire-glow" },
];

const FireRisksSection = () => (
  <section className="py-20 bg-muted" aria-label="Why fire risks spike in summer">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Why Fire Risks <span className="text-primary">Spike in Summer</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Don't wait for fire — <strong>be prepared today.</strong> Understanding the risks is the first step to prevention.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {risks.map((r) => {
          const Icon = r.icon;
          return (
            <article key={r.title} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${r.color}`} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold">{r.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </article>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/+919167752444?text=Hi%2C%20I%20want%20a%20fire%20safety%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-colors"
        >
          Get a Free Safety Audit
        </a>
      </div>
    </div>
  </section>
);

export default FireRisksSection;
