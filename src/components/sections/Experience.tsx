import {experiences} from "@/data/resume";
import SectionHeader from "../SectionHeader";
import SkillTag from "../SkillTag";


export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <SectionHeader sectionLabel="03 — Experience" sectionTitle="Where I've" sectionSubtitle="Made an Impact" />
       
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-foreground dark:bg-foreground hidden md:block opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="reveal relative flex gap-0 md:gap-12 items-start"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-6"
                >
                  <div
                    className="w-4 h-4 rotate-45 flex-shrink-0 bg-primary border-2 border-background"
                    // style={{ backgroundColor: exp.color }}
                  />
                </div>

                {/* Card */}
                <div className="brutal-card-accent flex-1 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-['Ovo'] font-bold text-xl text-foreground dark:text-foreground tracking-wider">
                        {exp.role}
                      </h3>
                      <div className="font-['Lato'] font-bold text-primary mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="font-['Ovo'] text-xs font-semibold text-[#6B6560]  bg-background border border-primary px-2 py-0.5">
                        {exp.period}
                      </span>
                      <span className="font-['Ovo'] text-sm font-semibold text-foreground uppercase tracking-wide">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="font-['Lato'] text-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag, i) => (
                      <SkillTag key={tag} tag={tag} delayInMs={`${i * 50}ms`} />
                    ))}
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
