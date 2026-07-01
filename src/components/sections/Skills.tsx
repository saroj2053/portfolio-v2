import { skillCategories, techTags } from "@/data/certificates";
import { useSkinStore } from "@/stores/skinStore";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import SkillTag from "../SkillTag";

function SkillBar({ name, level, color, darkColor, delay }: { name: string; level: number; color: string; darkColor: string; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const skinId = useSkinStore((s) => s.skinId);
  const isDark = skinId === "desert-night" || skinId === "ocean" || skinId === "midnight";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-['Lato'] text-sm font-bold text-foreground">{name}</span>
        <span className="font-['Ovo'] text-xs font-semibold text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted border border-border overflow-hidden">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: animated ? `${level}%` : "0%",
            backgroundColor: animated ? (isDark ? darkColor : color) : color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader sectionLabel="02 — Skills" sectionTitle="What I" sectionSubtitle="Bring to the Table" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className="reveal brutal-card p-6"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 border-2 border-border"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="font-['Ovo'] font-bold text-xl text-foreground">
                  {cat.title}
                </h3>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  darkColor={cat.darkColor}
                  delay={si * 80 + ci * 150}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="reveal brutal-card p-8">
          <div className="section-label mb-4">Technologies I Work With</div>
          <div className="flex flex-wrap gap-3">
            {techTags.map((tag, i) => (
              <SkillTag key={tag} tag={tag} delayInMs={`${i * 50}ms`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
