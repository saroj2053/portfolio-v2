import type { Project } from "@/types";

import campusflowImage from "@/assets/project-images/campusflow-website.png";
import movixImage from "@/assets/project-images/movix_website.png";
import sarlahiMarktImg from "@/assets/project-images/sarlahimarkt-image.png";
import solarCalculiteImg from "@/assets/project-images/solarCalculite2.png";
import lightMaterialDashboardReactImage from "@/assets/project-images/light-material-dashboard-react.png";
import chatAppImage from "@/assets/project-images/chat-app.png";
import getFlixGPTImage from "@/assets/project-images/getflixgpt.png";
import webWizardsImage from "@/assets/project-images/webwizards.png";
import rateMyUni from "@/assets/project-images/ratemyuni.png";
import stronicsImage from "@/assets/project-images/stronics-image.png";
import gitlabCICDAutomationToolImage from "@/assets/project-images/gitlab-CICD-automation-tool.png";
import brightFutureAcademyImage from "@/assets/project-images/bright-future-academy-image.png";


export const projects:Project[] = [
  {
    id: 1,
    title: "SarlahiMarkt - Local Online Marketplace",
    category: "Online Ecommerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    tags: [
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "React",
      "Redux",
      "TailwindCSS",
    ],
    image: sarlahiMarktImg,
    liveUrl: "https://sarlahimarkt.vercel.app/",
    githubUrl: "https://github.com/saroj2053/sarlahimarkt-frontend",
    featured: true,
    accent: "#C4622D",
  },
  {
    id: 2,
    title: "CampusFlow - for Across Universities",
    category: "Web App",
    description:
       "A platform to facilitate cross-border universities operations.",
    tags: ["Python",
      "Django",
      "React",
      "MySql",
      "Blazegraph",
      "SparQL",
      "Bootstrap",],
    image: campusflowImage,
    liveUrl: "https://campusflow-frontend-navy.vercel.app/",
    githubUrl: "#",
    featured: true,
    accent: "#6B7C5C",
  },
  {
    id:3,
    title: "Solar Calculite - a solar pv estimator",
    category: "University Project",
    description:
      "Estimation of power produced by the photovoltaic products.",
    tags: ["HTML",
      "CSS",
      "React",
      "NodeJs",
      "MongoDB",
      "Express",
      "Bootstrap",],
    image: solarCalculiteImg,
    liveUrl: "https://solar-calculite.netlify.app/",
    githubUrl: "https://github.com/saroj2053/solarcalculite-frontend",
    featured: true,
    accent: "#1C1917",
  },
  {
    id: 4,
    title: "Movix",
    category: "Movie Discovery App",
    description:
     "A platform that uses the TMDB API to showcase movie data.",
    tags: ["React", "NodeJs", "MongoDB", "TMDB API"],
    image: movixImage,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "#8A9E78",
  },

  {
    id: 5,
    title: "Light Material Dashboard React",
    category: "UI Template",
    description:
    "A free Material-UI Admin with a fresh, new design inspired by Google's Material Design.",
    tags: ["React", "Material UI", "React Router"],
    image: lightMaterialDashboardReactImage,
    liveUrl: "https://light-material-dashboard-react.vercel.app/",
    githubUrl: "https://github.com/saroj2053/light-material-dashboard-react",
    featured: true,
    accent: "#C4622D",
  },
  {
    id: 6,
    title: "MERN Chat App",
    category: "Real-time Chat Application",
    description:
    "A real-time-chat application in textual format with features like user authentication, online status, and more.",
    tags: ["Nodejs", "MongoDB", "ReactJS", "Chakra UI", "Zustand"],
    image: chatAppImage,
    liveUrl: "https://chatapp-t6jh.onrender.com/",
    githubUrl: "https://github.com/saroj2053/mern-chat-app",
    featured: true,
    accent: "#6B7C5C",
  },
    {
      id: 7,
      image: getFlixGPTImage,
      title: "GetFlixGPT",
      category: "Movie Recommendation System",
      description: "A movie recommendation system that uses MistralAI to provide personalized movie suggestions.",
      tags: [
      "React",
      "TMDB API",
      "MistralAI",
      "TailwindCSS",
      "React Redux",
      "Firebase",
      ],
    githubUrl: "https://github.com/saroj2053/gateflix-GPT",
    liveUrl: "https://getflixgpt-18c35.web.app/",
    featured: true,
    accent: "#1C1917",
  },

  {
    id: 8,
    image: webWizardsImage,
    title: "Web Wizards",
    description:
      "An agency that provides services for web development, web design, and digital marketing.",
    tags: ["React", "Raw CSS", "EmailJs"],
    githubUrl: "https://github.com/saroj2053/web-wizards",
    liveUrl: "https://web-wizards-saroj2053s-projects.vercel.app/",
    category: "Web Development Agency",
    featured: true,
    accent: "#C4622D",
  },
  {
    id: 9,
    image: rateMyUni,
    title: "Rate My Uni",
    description: "Review and rating platform for universities in Nepal",
    tags: ["Nodejs", "Express", "MongoDB", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/saroj2053/ratemyuni",
    liveUrl: "https://ratemyuni-3vzl.onrender.com/",
    category: "University Review Platform",
    featured: true,
    accent: "#6B7C5C",
  },

  {
    id: 10,
    image: stronicsImage,
    title: "Stronics - An electronics retail store",
    description: "A basic e-commerce platform for electronics products",
    tags: [
      "Nodejs",
      "Express",
      "MongoDB",
      "ejs template engine",
      "Express Validator",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/saroj2053/Stronics",
    liveUrl: "https://stronics.onrender.com/",
    category: "E-commerce Platform",
    featured: true,
    accent: "#1C1917",
  },

  {
    id: 11,
    image: gitlabCICDAutomationToolImage,
    title: "GitLab CI/CD Automation Tool",
    description: "A tool to automate the CI/CD pipeline for GitLab projects related to R programming.",
    tags: ["Javascript", "Nodejs", "Express", "GitLab API", "CI/CD", "Automation", "React", "NextUI", "TailwindCSS"],
    githubUrl: "",
    liveUrl: "",
    category: "Automation Tool",
    featured: true,
    accent: "#C4622D",
  }, 
  {
    id: 12,
    image: brightFutureAcademyImage,
    title: "Bright Future Academy",
    description:
      "A platform for students to learn and grow with various courses and resources.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Thymeleaf",
      "Bootstrap UI",
      "MySQL",
    ],
    githubUrl: "https://github.com/saroj2053/school-management-system",
    liveUrl: "https://bright-future-academy-ut5s.onrender.com/",
    category: "Educational Platform",
    featured: true,
    accent: "#6B7C5C",
  },
];