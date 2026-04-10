import { ShieldCheck } from "lucide-react";

const LegalSection = () => (
  <section className="py-16 bg-secondary">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-trust/20 text-trust px-4 py-2 rounded-full font-semibold text-sm mb-6">
          <ShieldCheck className="w-5 h-5" /> Verified Business
        </div>
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-secondary-foreground mb-8">
          GST Registered & <span className="text-primary">Verified</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-left bg-secondary-foreground/5 rounded-lg p-6 border border-secondary-foreground/10">
          {[
            ["GSTIN", "27ABKPY1137F1ZH"],
            ["Proprietor", "Santosh Kumar Doodhnath Yadav"],
            ["Business Type", "Proprietorship"],
            ["Registered Address", "G/201, Rashmi Garden, Evershine City, Vasai East, Maharashtra 401208"],
          ].map(([label, value]) => (
            <div key={label} className="py-2">
              <p className="text-xs uppercase tracking-wider text-secondary-foreground/50">{label}</p>
              <p className="font-semibold text-secondary-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LegalSection;
