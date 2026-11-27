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
    education: ["Tecnicatura Universitaria en Programación · UTN San Nicolás (desde 2025)", "Formación Front End · Oracle Next Education / Alura (2023)"],
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
      { organization: "Nodra Studio", role: "Co-founder", period: "Aug 2026 – Present", detail: "I scope, design and develop web projects with my business partner." },
      { organization: "Freelance", role: "Frontend Developer", period: "Mar 2020 – Present", detail: "I build websites and interfaces with React, Next.js and Astro and integrate APIs and data flows to fit each project." },
      { organization: "Hogarth Argentina · WPP", role: "Freelance frontend production", period: "May 2025 – Oct 2026", detail: "Built animated HTML5 creatives with GSAP for digital campaigns, meeting asset-weight and delivery specifications." },
      { organization: "Infomac Soluciones IT", role: "IT support technician", period: "May 2026 – Nov 2026", detail: "Diagnosed and repaired laptops, reinstalled operating systems and prepared computers for end users." },
      { organization: "IABOT Robótica Educativa", role: "Teacher and coordinator", period: "Mar 2022 – Oct 2026", detail: "Taught and coordinated robotics and programming classes. I also designed and built the updated website." },
      { organization: "Municipality of Mercedes", role: "Frontend development · Internal systems", period: "Aug 2023 – Mar 2024", detail: "Built and maintained internal systems and worked with their users to understand usability issues and resolve incidents." },
    ],
    projects: [
      ["IABOT 4.0", "Designed and built an educational website in Next.js, with pages for courses and locations."],
      ["Minuto de Silencio", "Interactive web experience built with React Three Fiber and Supabase."],
      ["SIGJ", "Judicial case management demo built with React and TypeScript."],
    ],
    education: ["University Technical Degree in Programming · UTN San Nicolás (since 2025)", "Front End programme · Oracle Next Education / Alura (2023)"],
  },
} as const;

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Astro", "GSAP", "Git", "Node.js", "REST APIs", "SQL",
];
