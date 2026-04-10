import { ShieldCheck, Award, Building } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        About <span className="text-primary">Us</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Powerex Fire Protection System is a trusted proprietorship firm committed to delivering comprehensive fire safety solutions across Vasai-Virar and Mumbai.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-card rounded-lg p-8 text-center shadow-sm border">
          <Building className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-lg font-bold mb-2">Proprietorship Firm</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Proprietor:</strong> Santosh Kumar Doodhnath Yadav<br />
            <strong>Trade Name:</strong> Powerex Fire Protection System
          </p>
        </div>
        <div className="bg-card rounded-lg p-8 text-center shadow-sm border">
          <ShieldCheck className="w-10 h-10 text-trust mx-auto mb-4" />
          <h3 className="font-heading text-lg font-bold mb-2">GST Registered</h3>
          <p className="text-sm text-muted-foreground">
            <strong>GSTIN:</strong> 27ABKPY1137F1ZH<br />
            Registered since 20/12/2022
          </p>
        </div>
        <div className="bg-card rounded-lg p-8 text-center shadow-sm border">
          <Award className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="font-heading text-lg font-bold mb-2">Trusted Quality</h3>
          <p className="text-sm text-muted-foreground">
            Reliable fire protection systems, safety installations, and ongoing maintenance services.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
