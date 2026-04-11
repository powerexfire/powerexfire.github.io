import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of fire extinguishers do you supply?",
    a: "We supply all types including ABC Powder, CO2, Water, Foam, and Clean Agent extinguishers — all ISI/BIS certified. We also provide wall-mounting brackets and signage.",
  },
  {
    q: "Do you provide Annual Maintenance Contracts (AMC)?",
    a: "Yes, we offer comprehensive AMC plans covering quarterly inspections, pressure testing, refilling, and replacement of expired units to keep your premises compliant year-round.",
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Vasai-Virar, Mumbai, Thane, Navi Mumbai, and surrounding areas in Maharashtra. Contact us for availability in your area.",
  },
  {
    q: "Can you help with Fire NOC from the fire department?",
    a: "Absolutely. We assist with fire safety audits, documentation, and liaising with the fire department to help you obtain your Fire NOC smoothly.",
  },
  {
    q: "How often should fire extinguishers be refilled or serviced?",
    a: "Fire extinguishers should be inspected annually and refilled/hydro-tested every 3–5 years depending on the type. Our AMC plans ensure you never miss a service date.",
  },
  {
    q: "Do you offer emergency or same-day service?",
    a: "Yes, we provide 24/7 emergency support. Call us at +91 9167752444 for urgent requirements and we'll respond as quickly as possible.",
  },
];

const FAQSection = () => (
  <section className="py-20" aria-label="Frequently asked questions">
    <div className="container px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
      </p>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-heading font-bold text-sm md:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
