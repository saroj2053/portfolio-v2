import type { Certificate, SkillCategory, TechTags } from "@/types";


export const certifications: Certificate[] = [
  {
    id: 1,
    name: "Praktikumszeugnis - Softwareentwickler",
    issuer: "Check24 GmbH",
    year: "2025",
    badge: "Check24",
    pdfUrl: "/certificates/pdfs/Praktikumszeugnis_Sah_Saroj.pdf",
  },
  {
    id: 2,
    name: "Complete Web Developer Bootcamp",
    issuer: "Udemy",
    year: "2019",
    badge: "Udemy",
    pdfUrl: "/certificates/pdfs/UC-BLKY1DX7.pdf",
  },
  {
    id: 3,
    name: "Java Spring Framework 6, Spring Boot 3, Spring AI Telusko",
    issuer: "Udemy",
    year: "2025",
    badge: "Udemy",
    pdfUrl: "/certificates/pdfs/UC-cdce7864-66fa-4900-a7dc-5deef60f76ef.pdf",
  },
  {
    id: 4,
    name: "Huawei HCNA | HCIA Certification",
    issuer: "Huawei",
    year: "2020",
    badge: "Huawei",
    pdfUrl: "/certificates/pdfs/huawei_certificate.pdf",
  },
];

export const techTags: TechTags = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "REST APIs", "Tailwind CSS","Next.js", "Vite", "Jest", "Linux", "Git", "CI/CD", "FastAPI", "Spring Boot"
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "#C4622D",
    darkColor: "#D97B4A",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    color: "#6B7C5C",
    darkColor: "#8A9E78",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 80 },
      { name: "Java / Spring", level: 70 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#1C1917",
    darkColor: "#FAF7F2",
    skills: [
      { name: "Docker", level: 72 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
];





