import { useState, useRef, useCallback } from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || trimmedName.length < 2) errs.name = "Name must be at least 2 characters.";
    else if (trimmedName.length > 100) errs.name = "Name must be under 100 characters.";

    if (!trimmedPhone) errs.phone = "Phone number is required.";
    else if (!/^[+]?[\d\s\-()]{7,15}$/.test(trimmedPhone)) errs.phone = "Enter a valid phone number.";

    if (!trimmedMessage || trimmedMessage.length < 5) errs.message = "Message must be at least 5 characters.";
    else if (trimmedMessage.length > 500) errs.message = "Message must be under 500 characters.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nMessage: ${form.message.trim()}`;
    window.open(
      `https://wa.me/919167752444?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
    setErrors({});
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSubmitted(false), 4000);
  }, [form]);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-20 bg-muted" aria-label="Contact us">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <a href="tel:+919167752444" className="flex items-start gap-4 group" aria-label="Call us at +91 9167752444">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 9167752444</p>
              </div>
            </a>
            <a href="https://wa.me/919167752444" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group" aria-label="Chat with us on WhatsApp">
              <MessageCircle className="w-6 h-6 text-trust mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold">WhatsApp</p>
                <p className="text-muted-foreground group-hover:text-trust transition-colors">Chat with us instantly</p>
              </div>
            </a>
            <a href="mailto:info@powerexfire.com" className="flex items-start gap-4 group" aria-label="Email us at info@powerexfire.com">
              <Mail className="w-6 h-6 text-accent mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold">Email</p>
                <p className="text-muted-foreground group-hover:text-accent transition-colors">info@powerexfire.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold">Address</p>
                <p className="text-muted-foreground">G/201, Rashmi Garden, Evershine City, Vasai East, Vasai-Virar City, Mumbai, Maharashtra 401208</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border h-64">
              <iframe
                title="Powerex Fire Protection System location on Google Maps"
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

          <div className="bg-card border rounded-lg p-8">
            <h3 className="font-heading text-2xl font-bold mb-6">Send an Inquiry</h3>
            {submitted && (
              <div className="mb-4 bg-trust/10 border border-trust/30 text-trust px-4 py-3 rounded-md font-semibold text-sm" role="status">
                ✓ Redirecting to WhatsApp...
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium mb-1 block">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={`w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.name ? "border-destructive" : ""}`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-destructive text-xs mt-1" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-sm font-medium mb-1 block">Phone</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={`w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${errors.phone ? "border-destructive" : ""}`}
                  placeholder="+91 XXXXXXXXXX"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && <p id="phone-error" className="text-destructive text-xs mt-1" role="alert">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  id="contact-message"
                  required
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={`w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors ${errors.message ? "border-destructive" : ""}`}
                  placeholder="How can we help you?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="text-destructive text-xs mt-1" role="alert">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
