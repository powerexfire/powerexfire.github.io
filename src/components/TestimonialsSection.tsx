import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", text: "Excellent fire safety installation at our factory. Very professional and timely service.", rating: 5 },
  { name: "Priya Patel", text: "Powerex handled our entire building's fire system. Trustworthy and experienced team.", rating: 5 },
  { name: "Mohammed Ali", text: "Prompt response for fire extinguisher refilling. Highly recommended for businesses in Vasai.", rating: 4 },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-12">
        What Our <span className="text-primary">Clients Say</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border rounded-lg p-6">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
            <p className="font-heading font-bold text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
