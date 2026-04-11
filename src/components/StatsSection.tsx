const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "1000+", label: "Extinguishers Supplied" },
  { value: "100+", label: "AMC Contracts" },
  { value: "24/7", label: "Emergency Support" },
];

const StatsSection = () => (
  <section className="py-12 bg-primary text-primary-foreground" aria-label="Company statistics">
    <div className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-3xl md:text-4xl font-bold">{s.value}</p>
            <p className="text-sm text-primary-foreground/80 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
