export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string | null;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accent: string;
}

export type TechTags = string[];

export type Certificate = {
  id: number;
  name: string;
  issuer: string;
  year: string;
  badge: string;
  pdfUrl: string;
}

export type SkillCategory = {
  title: string;
  color: string;
  darkColor: string;
  skills: { name: string; level: number }[];
}

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  color: string;
}

export type Degree = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa: string;
}