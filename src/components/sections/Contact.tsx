import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SectionHeader from "../SectionHeader";
import {LuGithub as Github, LuLinkedin as Linkedin} from "react-icons/lu";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sarojsaroj390@gmail.com", href: "mailto:sarojsaroj390@gmail.com" },
  { icon: Phone, label: "Phone", value: "+49 (123) 456-7890", href: "tel:+491234567890" },
  { icon: MapPin, label: "Location", value: "Chemnitz, Germany", href: "#" },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <SectionHeader sectionLabel="06 — Contact" sectionTitle="Let's Build" sectionSubtitle="Something Together" />
     
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT — Info */}
          <div className="lg:col-span-2 space-y-8">
            <p className="reveal font-['Lato'] leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I typically respond within 24 hours.
            </p>

            {/* Contact info */}
            <div className="reveal space-y-4" style={{ transitionDelay: "100ms" }}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon size={16} className="text-primary group-hover:text-cream transition-colors" />
                  </div>
                  <div>
                    <div className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest">
                      {item.label}
                    </div>
                    <div className="font-['Lato'] text-primary font-bold text-sm mt-0.5 group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <div className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest mb-4">
                Find me online
              </div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border-2 border-[#6B6560] rounded-full flex items-center justify-center text-[#6B6560] hover:border-primary  hover:text-primary transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="reveal brutal-card p-8 bg-primary-foreground dark:bg-primary-foreground space-y-4"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest block mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border-2 border-foreground  bg-secondary dark:bg-secondary px-3 py-2.5 font-['Google_Sans_Flex'] text-foreground  placeholder:text-[#A09890] dark:placeholder:text-[#6B6560] focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest block mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border-2 border-foreground bg-secondary dark:bg-secondary px-3 py-2.5 font-['Google_Sans_Flex']   text-foreground  placeholder:text-[#A09890] dark:placeholder:text-[#6B6560] focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full border-2 border-foreground  bg-secondary dark:bg-secondary px-3 py-2.5 font-['Google_Sans_Flex']   text-foreground  placeholder:text-[#A09890] dark:placeholder:text-[#6B6560] focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest block mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="w-full border-2 border-foreground  bg-secondary dark:bg-secondary px-3 py-2.5 font-['Google_Sans_Flex']   text-foreground  placeholder:text-[#A09890] dark:placeholder:text-[#6B6560] focus:outline-none focus:border-primary dark:focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="brutal-btn bg-primary dark:bg-primary text-cream px-8 py-3 w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
