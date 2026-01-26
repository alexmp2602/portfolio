// src/data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  repo?: string;
  highlights?: string[];
  engineering?: string[];
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
    engineering: [
      "Carga diferida de la escena 3D para reducir TTI en dispositivos móviles",
      "Gestión de estados de interacción como flujos explícitos para evitar inconsistencias en la experiencia",
      "Uso de Supabase Realtime con control de renders para minimizar impacto en performance",
    ],
  },

  {
    slug: "sigj",
    title: "SIGJ · Gestión Judicial",
    description:
      "Sistema web para gestión de expedientes, documentación y agenda. Optimiza flujos de trabajo, reduce fricción operativa y prioriza accesibilidad en pantallas de alta densidad de información.",
    image: "/assets/projects/sigj.webp",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://sigj.vercel.app/",
    highlights: [
      "Gestión de expedientes, documentación y agenda en un flujo unificado",
      "UI pensada para productividad: jerarquía visual + atajos de navegación",
      "Tableros y vistas de detalle con foco en legibilidad y densidad",
    ],
    engineering: [
      "Modelado de UI compleja con componentes reutilizables y estados predecibles para reducir bugs en flujos críticos",
      "Estrategias de performance en listados (render parcial, memoización y paginación) para mantener la app fluida con datasets grandes",
      "Accesibilidad aplicada a tablas/controles (focus states, navegación por teclado, contraste) para uso intensivo",
    ],
  },

  {
    slug: "saae",
    title: "SAAE · Acciones Estatutarias",
    description:
      "Sistema web para gestionar acciones estatutarias docentes (MAD, Acrecentamiento, Servicio Provisorio, Traslado). Incluye registro de escuelas, importación, workflow de revisión/aprobación y tablero con totales por región.",
    image: "/assets/projects/saae.webp",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://saae-sist.vercel.app/",
    highlights: [
      "Workflow de revisión/aprobación con estados claros y trazabilidad",
      "Importación de datos + normalización para operar sobre base consistente",
      "Tablero con métricas y totales por región para seguimiento operativo",
    ],
    engineering: [
      "Diseño de workflow explícito (estados + transiciones) para evitar ambigüedad en aprobaciones y reducir errores operativos",
      "Validaciones de datos e integridad (cliente/servidor) para mantener consistencia tras importaciones",
      "Separación de concerns: UI de administración + capas de dominio para facilitar mantenimiento y evolución",
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
