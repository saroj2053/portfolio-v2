import { certifications } from "@/data/certificates";
import { Award, GraduationCap } from "lucide-react";
import CertificateCard from "../CertificateCard";
import { degrees } from "@/data/resume";
import SectionHeader from "../SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <SectionHeader sectionLabel="05 — Education" sectionTitle="Qualifications &" sectionSubtitle="Certifications" />
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Degrees */}
          <div>
            <div className="flex items-center gap-3 mb-8 reveal">
              <GraduationCap size={20} className="text-primary" />
              <h3 className="font-semibold text-lg text-foreground dark:text-foreground">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-6">
              {degrees.map((deg, i) => (
                <div
                  key={deg.degree}
                  className="reveal brutal-card p-6"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-['Ovo'] font-bold text-lg text-primary tracking-wide">
                        {deg.degree}
                      </h4>
                      <div className="font-['Lato'] font-bold text-foreground text-sm mt-0.5">
                        {deg.institution}
                      </div>
                    </div>
                    <span className="font-['Ovo'] text-xs font-semibold text-foreground dark:text-foreground bg-background dark:bg-[#3A3530] border border-foreground dark:border-foreground px-2 py-0.5 shrink-0">
                      {deg.period}
                    </span>
                  </div>

                  <p className="font-['Lato'] text-sm text-foreground dark:text-foreground leading-relaxed mb-3">
                    {deg.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="font-['Ovo'] text-xs text-foreground dark:text-foreground uppercase tracking-wide">
                      GPA:
                    </span>
                    <span className="font-['Ovo'] text-xs font-bold text-foreground dark:text-foreground">
                      {deg.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8 reveal">
              <Award size={20} className="text-primary" />
              <h3 className=" font-semibold text-lg text-foreground">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <CertificateCard key={cert.name} cert={cert} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
