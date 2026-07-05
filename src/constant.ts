import {LuGithub as Github, LuLinkedin as Linkedin} from "react-icons/lu";
import { Mail, MapPin, Phone } from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "sarojsaroj390@gmail.com", href: "mailto:sarojsaroj390@gmail.com" },
  { icon: Phone, label: "Phone", value: "+49 (123) 456-7890", href: "tel:+491234567890" },
  { icon: MapPin, label: "Location", value: "Chemnitz, Germany", href: "#" },
];

const socials = [
  { icon: Github, href: "https://github.com/saroj2053", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sarojsah2053", label: "LinkedIn" },
];

export { contactInfo, socials };