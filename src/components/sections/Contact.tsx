import { Send } from "lucide-react";
import { toast } from "sonner";
import SectionHeader from "../SectionHeader";
import formValidationSchema from "@/lib/validation";
import {Formik} from "formik";
import emailjs from "@emailjs/browser";
import FormInput from "../FormInput";
import { contactInfo, socials } from "@/constant";

export default function Contact() {
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
            <Formik initialValues = {{ name: "", email: "", subject: "", message: "" }} validationSchema={formValidationSchema} onSubmit={(values, { setSubmitting, resetForm }) => {
              const serviceId = "service_8c3p1iq";
              const templateId = "template_ajyhcpi";
              const publicKey = "uV3e4sbtIIM3oFHbB";

              const templateParams = {
                from_name: values.name,
                from_email: values.email,
                to_name: "Saroj Sah",
                subject: values.subject,
                message: values.message,
              };
              emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => { 
                console.log(response); 
                toast.success(
                  "Message sent! I'll get back to you within 24 hours."
                ); 
                resetForm(); 
              })
              .catch((error) => { toast.error(`Error sending email ${error}`) })
              .finally(() => { setSubmitting(false); });
             
            }}
            >
              {({handleChange, handleBlur, isSubmitting, errors, values, touched, handleSubmit}) => (
                <form
              onSubmit={handleSubmit}
              className="reveal brutal-card p-8 bg-primary-foreground dark:bg-primary-foreground space-y-4"
              style={{ transitionDelay: "150ms" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <FormInput 
                    label="Name" 
                    name="name" 
                    type="text" 
                    placeholder="Your Name" 
                    value={values.name} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    error={touched.name && errors.name ? errors.name : null} />
                </div>
                <div>
                  <FormInput 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={values.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    error={touched.email && errors.email ? errors.email : null} />
                  </div>
              </div>

              <FormInput
                label="Subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject && errors.subject ? errors.subject : null}
              />
         
              <FormInput
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell me about your project or idea..."
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && errors.message ? errors.message : null}
              />

              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="brutal-btn bg-primary dark:bg-primary text-cream px-8 py-3 w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
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
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
