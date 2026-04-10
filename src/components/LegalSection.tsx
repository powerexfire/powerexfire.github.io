import { ShieldCheck } from "lucide-react";

const legalItems = [
  ["GSTIN", "27ABKPY1137F1ZH"],
  ["Proprietor", "Santosh Kumar Doodhnath Yadav"],
  ["Business Type", "Proprietorship"],
  ["Registered Address", "G/201, Rashmi Garden, Evershine City, Vasai East, Maharashtra 401208"],
] as const;

const LegalSection = () => (
  <section className="py-16 bg-secondary" aria-label="Business verification">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-trust/20 text-trust px-4 py-2 rounded-full font-semibold text-sm mb-6">
          <ShieldCheck className="w-5 h-5" aria-hidden="true" /> Verified Business
        </div>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-secondary-foreground mb-8">
          GST Registered &amp; <span className="text-primary">Verified</span>
        </h2>
        <dl className="grid sm:grid-cols-2 gap-4 text-left bg-secondary-foreground/5 rounded-lg p-6 border border-secondary-foreground/10">
          {legalItems.map(([label, value]) => (
            <div key={label} className="py-2">
              <dt className="text-xs uppercase tracking-wider text-secondary-foreground/50">{label}</dt>
              <dd className="font-semibold text-secondary-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default LegalSection;
