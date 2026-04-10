import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", location: "Vasai East", text: "Excellent fire safety installation at our factory. Very professional and timely service.", rating: 5 },
  { name: "Priya Patel", location: "Virar West", text: "Powerex handled our entire building's fire system. Trustworthy and experienced team.", rating: 5 },
  { name: "Mohammed Ali", location: "Nalasopara", text: "Prompt response for fire extinguisher refilling. Highly recommended for businesses in Vasai.", rating: 4 },
];

const TestimonialsSection = () => (
  <section className="py-20" aria-label="Client testimonials">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-12">
        What Our <span className="text-primary">Clients Say</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card border rounded-lg p-6 relative">
            <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" aria-hidden="true" />
            <div className="flex gap-1 mb-3" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-accent text-accent" : "text-muted"}`} aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</blockquote>
            <footer>
              <p className="font-heading font-bold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
