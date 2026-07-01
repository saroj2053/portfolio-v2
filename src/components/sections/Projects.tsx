import { projects } from "@/data/projects";
import SectionHeader from "../SectionHeader";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <SectionHeader sectionLabel="04 — Projects" sectionTitle="Things I've" sectionSubtitle="Built & Shipped" />
      
        {/* Featured projects — large cards */}
        {/* Variation in the property of is project featured... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects.map((project, i) => {
            const isFeatured = project.featured;
            const delay = isFeatured ? `${i * 120}ms` : `${i * 100 + 200}ms`; // Adjusting delay based on whether the project is featured or not
            return (
              <ProjectCard key={project.title} project={project} delayMs={delay} isFeatured={isFeatured} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
