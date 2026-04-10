import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/+919167752444?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <a href="tel:+919167752444" className="flex items-start gap-4 group">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 9167752444</p>
              </div>
            </a>
            <a href="https://wa.me/+919167752444" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <MessageCircle className="w-6 h-6 text-trust mt-1 shrink-0" />
              <div>
                <p className="font-bold">WhatsApp</p>
                <p className="text-muted-foreground group-hover:text-trust transition-colors">Chat with us instantly</p>
              </div>
            </a>
            <a href="mailto:info@powerexfire.com" className="flex items-start gap-4 group">
              <Mail className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-muted-foreground group-hover:text-accent transition-colors">info@powerexfire.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-bold">Address</p>
                <p className="text-muted-foreground">G/201, Rashmi Garden, Evershine City, Vasai East, Vasai-Virar City, Mumbai, Maharashtra 401208</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border h-64">
              <iframe
                title="Powerex Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.5!2d72.8368007!3d19.4100445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI0JzM2LjIiTiA3MsKwNTAnMTIuNSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold mb-6">Send an Inquiry</h3>
            {submitted && <p className="mb-4 text-trust font-semibold">Redirecting to WhatsApp...</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone</label>
                <input
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-colors">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
