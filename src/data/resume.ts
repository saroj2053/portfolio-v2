import type { Degree, Experience } from "@/types";

const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "CHECK24 GmbH",
    period: "08/2025 - 09/2025",
    type: "Full-time",
    description:
      "Worked collaboratively with a team of 3 other interns to deliver a AI based summarization of feedbacks gathered in both Girokonto and KreditKarte departments.",
    highlights: ["Java", "Spring Boot", "React.js", "Angular", "Thymeleaf", "Bitbucket", "Jenkins", "WireMock", "Git", "Vault", "Jira"],
    color: "#C4622D",
  },
  {
    role: "Full Stack Developer",
    company: "Susankya Tech Pvt. Ltd.",
    period: "11/2020 - 07/2022",
    type: "Full-time",
    description:
      "Developed a consultancy management platform for clients in the education sector, streamlining operations and improving client engagement. Implemented features such as appointment scheduling, document management, and real-time notifications, resulting in a 25% increase in client satisfaction.",
    highlights: ["JavaScript", "Node.js", "Express", "MongoDB", "React.js"],
    color: "#6B7C5C",
  },
  {
    role: "Web Developer Intern",
    company: "Sarobar Technology Pvt. Ltd.",
    period: "04/2020 - 10/2020",
    type: "Full-time",
    description:
      "Built and maintained responsive marketing websites and landing pages. Improved average page load speed by 35% through code splitting, lazy loading, and image optimization strategies.",
    highlights: ["Python", "Django", "MySQL", "JavaScript", "Bootstrap"],
    color: "#1C1917",
  },
  
];

const degrees: Degree[] = [
   {
    degree: "Masters in Web Engineering",
    institution: "TECHNICAL UNIVERSITY OF CHEMNITZ, GERMANY",
    period: "2023 - Present",
    description:
      "Relevant Coursework: Software Engineering, Database Management, XML, Current Trends in Web Engineering, Cloud and Web Applications",
    gpa: "N/A",
  },
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "AMRITSAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
    period: "09/2016 - 11/2020",
    description:
      "Relevant Coursework: Fundamental of Computer Programming and IT, Web Technologies, Design of Data Algorithms, Software Engineering, Database Management, Artificial Intelligence, Machine Learning",
    gpa: "7.75 / 10.0",
  },
 
];


export { experiences , degrees };