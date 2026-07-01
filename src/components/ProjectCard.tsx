import type { Project } from '@/types';
import React from 'react'
import { ExternalLink, } from "lucide-react";
import {LuGithub as Github} from "react-icons/lu";
import SkillTag from './SkillTag';

const ProjectCard : React.FC<{ project: Project, isFeatured: boolean, delayMs: string }> = ({ project, isFeatured, delayMs }) => {
  return (
    <>
    <div
              key={project.title}
              className={`reveal brutal-card group w-full ${isFeatured ? "overflow-hidden" : "p-6"} `}
              style={{ transitionDelay: delayMs }}
            >
              {/* Image (Only for featured projects) */}
              {isFeatured && project.image && (
                <div className="relative h-52 overflow-hidden border-b-2 border-charcoal dark:border-cream">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              )}


            {/* Content common for both featured and non-featured projects */}
              <div className={isFeatured ? "p-6" : ""}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="section-label mb-1">{project.category}</div>
                    <h3 className=" text-xl text-foreground dark:text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isFeatured ? "w-8 h-8" : "w-7 h-7"} border-2 border-foreground flex items-center justify-center hover:bg-foreground  hover:text-cream transition-colors`}
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isFeatured ? "w-8 h-8" : "w-7 h-7"} border-2 border-primary  flex items-center justify-center hover:bg-primary hover:text-cream transition-colors`}
                      aria-label="Live site"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <p className="font-['Lato'] text-sm text-foreground text-justify leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <SkillTag key={tag} tag={tag} delayInMs={`${i * 50}ms`} />
                  ))}
                </div>
              </div>
            </div>
    </>
  )
}

export default ProjectCard;