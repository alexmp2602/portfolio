export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  repo?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    slug: "minuto-de-silencio",
    title: "Minuto de Silencio · Experiencia Web Interactiva",
    description:
      "Experiencia web inmersiva con una escena 3D interactiva y microinteracciones guiadas por el usuario. Combina narrativa, performance y UX para crear un ritual digital de despedida.",
    image: "/assets/projects/minutodesilencio.webp",
    tech: [
      "Next.js",
      "React Three Fiber",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    link: "https://www.minutodesilencio.net/",
    repo: "https://github.com/alexmp2602/minutodesilencio",
    highlights: [
      "Escena 3D interactiva con React Three Fiber",
      "Flujos de interacción guiados y estados controlados",
      "Mensajes colaborativos en tiempo real",
      "Integración de UI, audio y narrativa",
    ],
  },
  {
    slug: "iabot",
    title: "IABOT · Robótica Educativa",
    description:
      "Sitio institucional para un espacio de robótica educativa. Enfoque en claridad del mensaje, estructura escalable y experiencia responsive para padres y alumnos.",
    image: "/assets/projects/iabot.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://iabot.com.ar/",
    repo: "https://github.com/alexmp2602/iabot-v3",
    highlights: [
      "Arquitectura clara y mantenible",
      "Diseño orientado a contenido educativo",
    ],
  },
  {
    slug: "delfos",
    title: "Delfos Studio · Agencia Creativa",
    description:
      "Web institucional para una agencia creativa. Diseño minimalista, estructura modular y foco en performance y SEO.",
    image: "/assets/projects/delfos.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://delfos-studio.vercel.app/",
    repo: "https://github.com/alexmp2602/delfos",
    highlights: [
      "Diseño limpio y consistente",
      "Carga rápida y base optimizada para SEO",
    ],
  },
  {
    slug: "gallinas-libres",
    title: "Gallinas Libres · Landing de Emprendimiento",
    description:
      "Landing page para un emprendimiento familiar. Sitio estático optimizado para performance, SEO y bajo peso.",
    image: "/assets/projects/gallinas.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.gallinaslibres.com/",
    repo: "https://github.com/alexmp2602/gallinas-libres",
    highlights: [
      "Web estática ultraligera",
      "Optimización SEO para búsquedas locales",
    ],
  },
  {
    slug: "domus",
    title: "Domus · Estética Profesional",
    description:
      "Sitio web para una marca del rubro estética. Diseño accesible, identidad visual cuidada y soporte de modo oscuro.",
    image: "/assets/projects/domus.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://esteticadomus.com/",
    repo: "https://github.com/alexmp2602/domus",
    highlights: [
      "Diseño alineado al sector salud/estética",
      "Modo oscuro integrado desde la base",
    ],
  },
  {
    slug: "cerrajeria-apri",
    title: "APRI · Cerrajería 24 hs",
    description:
      "Sitio web orientado a contacto rápido desde dispositivos móviles, con foco en accesibilidad y performance.",
    image: "/assets/projects/apri.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.cerrajeriaapri24hs.com.ar/",
    repo: "https://github.com/alexmp2602/apri-cerrajeria",
    highlights: [
      "Diseño mobile-first",
      "Integración de mapa para contacto inmediato",
    ],
  },
];
