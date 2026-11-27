import { experience } from "./portfolio";

export const resume = {
  es: {
    summary: "Frontend Developer con experiencia en sitios web, interfaces para sistemas internos y producción de piezas HTML5. Trabajo con React, Next.js y TypeScript. Mi experiencia en soporte IT complementa el desarrollo.",
    experienceTitle: "Experiencia",
    skillsTitle: "Tecnologías",
    educationTitle: "Formación",
    projectsTitle: "Proyectos seleccionados",
    printLabel: "Imprimir o guardar PDF",
    switchLabel: "Read in English",
    experience,
    projects: [
      ["IABOT 4.0", "Rediseño y desarrollo en Next.js de una web educativa con cursos y sedes."],
      ["Minuto de Silencio", "Experiencia interactiva con React Three Fiber y Supabase."],
      ["SIGJ", "Demo en React y TypeScript de una aplicación de gestión judicial."],
    ],
    education: "Formación Front End · Oracle Next Education / Alura (2023)",
  },
  en: {
    summary: "Frontend Developer with experience building websites, interfaces for internal systems and animated HTML5 creatives. I work with React, Next.js and TypeScript, with a background in IT support.",
    experienceTitle: "Experience",
    skillsTitle: "Technologies",
    educationTitle: "Education",
    projectsTitle: "Selected projects",
    printLabel: "Print or save as PDF",
    switchLabel: "Ver en español",
    experience: [
      { organization: "Nodra Studio", role: "Co-founder", detail: "I scope, design and develop web projects with my business partner." },
      { organization: "Hogarth Argentina · WPP", role: "Freelance frontend production", detail: "Built animated HTML5 creatives with GSAP for digital campaigns, meeting asset-weight and delivery specifications." },
      { organization: "IABOT Robótica Educativa", role: "Teacher and coordinator", detail: "Taught and coordinated robotics and programming classes. I also designed and built the updated website." },
      { organization: "Municipality of Mercedes", role: "Full-stack development and IT support", detail: "Built and maintained internal systems and worked with their users to understand usability issues and resolve incidents." },
    ],
    projects: [
      ["IABOT 4.0", "Designed and built an educational website in Next.js, with pages for courses and locations."],
      ["Minuto de Silencio", "Interactive web experience built with React Three Fiber and Supabase."],
      ["SIGJ", "Judicial case management demo built with React and TypeScript."],
    ],
    education: "Front End programme · Oracle Next Education / Alura (2023)",
  },
} as const;

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Astro", "GSAP", "Git", "Node.js", "REST APIs", "SQL",
];
