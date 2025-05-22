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
    slug: "sigj",
    title: "SIGJ | Gestión Judicial",
    description:
      "Aplicación moderna para la gestión digital de expedientes, documentación y agenda en entornos administrativos. Desarrollada con Next.js, React y Tailwind CSS, esta solución optimiza flujos de trabajo, automatiza procesos y mejora la accesibilidad a la información.",
    image: "/assets/projects/sigj.webp",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://sigj.vercel.app/",
    highlights: [
      "Interfaz responsive para entornos administrativos",
      "Accesibilidad priorizada con etiquetas ARIA",
      "Flujo de carga optimizado y control de estado",
    ],
  },
  {
    slug: "iabot",
    title: "IABOT | Robótica con LEGO para Niños",
    description:
      "Sitio web institucional para IABOT, un espacio de aprendizaje con robótica educativa para niños. Desarrollado con Next.js y Tailwind CSS, con foco en claridad, escalabilidad y responsividad.",
    image: "/assets/projects/iabot.webp",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://iabot.com.ar/",
    highlights: [
      "Diseño institucional para padres y alumnos",
      "Código mantenible y organizado por componentes",
    ],
  },
  {
    slug: "gallinas-libres",
    title: "Gallinas Libres | Emprendimiento familiar",
    description:
      "Landing page para un emprendimiento local de huevos de gallinas libres. Creada con Astro y Tailwind CSS, optimizada para rendimiento, SEO y bajo peso.",
    image: "/assets/projects/gallinas.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.gallinaslibres.com/",
    highlights: [
      "Carga inicial ultraligera",
      "SEO básico para emprendimientos locales",
    ],
  },
  {
    slug: "domus",
    title: "Domus | Estética Profesional",
    description:
      "Sitio web institucional para un emprendimiento de estética en crecimiento. Desarrollado con Astro y Tailwind CSS, con un diseño accesible y minimalista adaptado al rubro.",
    image: "/assets/projects/domus.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://esteticadomus.com/",
    highlights: [
      "Diseño UI adaptado al rubro salud y estética",
      "Dark mode implementado desde el inicio",
    ],
  },
  {
    slug: "cerrajeria-apri",
    title: "Cerrajería APRI",
    description:
      "Sitio web para cerrajería 24 hs. Implementado con Astro y Tailwind CSS, con foco en SEO, accesibilidad y performance.",
    image: "/assets/projects/apri.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.cerrajeriaapri24hs.com.ar/",
    highlights: [
      "Optimización para dispositivos móviles",
      "Mapa interactivo de ubicación",
    ],
  },
];
