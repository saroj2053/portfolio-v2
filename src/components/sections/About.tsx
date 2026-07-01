import Pill from "../Pill";
import { FaDownload } from "react-icons/fa6";
import { Code2, Heart, MapPin } from "lucide-react";
import SectionHeader from "../SectionHeader";

const highlights = [
  { icon: MapPin, label: "Location", value: "Chemnitz, Germany" },
  { icon: Code2, label: "Specialty", value: "Full-Stack Development" },
  { icon: Heart, label: "Passion", value: "Clean, Purposeful Code" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <SectionHeader sectionLabel="01 — About Me" sectionTitle="The Person" sectionSubtitle="Behind the Code" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* LEFT — Bio text */}
          <div className="lg:col-span-3 space-y-6">
            <p
              className="reveal font-['Lato'] text-justify text-base text-[#3A3530] dark:text-[#D0C8C0] leading-relaxed"
              style={{ transitionDelay: "100ms" }}
            >
              Hi! I'm <strong className="text-primary">Saroj Sah</strong>, a full-stack developer
              who loves building complete web applications from the ground up. Over the past two years, I’ve focused on using the MERN stack to create software that is both scalable and easy to use.
            </p>
            <p
              className="reveal font-['Lato'] text-justify text-base text-[#6B6560] dark:text-[#A09890] leading-relaxed"
              style={{ transitionDelay: "200ms" }}
            >
              For me, coding is all about continuous learning. Right now, I'm deepening my skills by getting my Master's degree in Web Engineering at TU Chemnitz. I’m currently looking for new opportunities to bring my experience and fresh ideas to innovative teams. Let's build something great together!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {/* Two pills */}
            <div className="reveal pt-4" style={{ transitionDelay: "400ms" }}>
              <Pill text="Developer" />
            </div>
            <div className="reveal pt-4" style={{ transitionDelay: "400ms" }}>
              <Pill text="Student" />
            </div>
            {/* Download CV button */}
            <div className="reveal pt-4" style={{ transitionDelay: "400ms" }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="brutal-btn bg-primary text-[#FAF7F2] px-6 py-3 inline-flex items-center gap-2"
                >
                <span>Download CV</span>
                <span className="text-[#FAF7F2]"><FaDownload /></span>
              </a>
            </div>
                </div>
          </div>

          {/* RIGHT — Info cards, location, speciality, passion */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="reveal brutal-card p-4 flex items-start gap-4"
                style={{ transitionDelay: `${i * 80 + 150}ms` }}
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-background rounded-full">
                  <item.icon size={18} className="text-[#FAF7F2]" />
                </div>
                <div>
                  <div className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="font-['Lato'] font-semibold tracking-wide text-foreground dark:text-foreground mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
