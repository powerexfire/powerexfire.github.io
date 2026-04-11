import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", location: "Factory Owner, Vasai", text: "Powerex installed a complete fire safety system in our factory. Very professional team and they handle AMC servicing on time every quarter.", rating: 5 },
  { name: "Priya Mehta", location: "Housing Society, Virar", text: "We got fire extinguishers and alarm systems for our entire society. The pricing was transparent and the team was very responsive.", rating: 5 },
  { name: "Amit Patel", location: "Restaurant Owner, Mumbai", text: "They helped us get our fire NOC quickly. The mock drill training for our staff was extremely helpful and well-organized.", rating: 5 },
  { name: "Sunita Yadav", location: "School Administrator", text: "Excellent service! They conducted a full fire audit and installed safety equipment across our campus within the promised timeline.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20" aria-label="Client testimonials">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        What Our <span className="text-primary">Clients Say</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Trusted by factories, societies, schools, and businesses across Vasai-Virar &amp; Mumbai.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card border rounded-lg p-5 relative flex flex-col">
            <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" aria-hidden="true" />
            <div className="flex gap-1 mb-3" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.rating ? "fill-accent text-accent" : "text-muted"}`} aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1 italic">"{t.text}"</blockquote>
            <footer className="pt-3 border-t">
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
