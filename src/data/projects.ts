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
    slug: "iabot",
    title: "IABOT | Robótica con LEGO para Niños",
    description:
      "Sitio web institucional para IABOT, un espacio de aprendizaje en robótica educativa infantil. Desarrollado con Next.js y Tailwind CSS, con foco en claridad, escalabilidad y responsividad.",
    image: "/assets/projects/iabot.webp",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://iabot.com.ar/",
    highlights: [
      "Diseño institucional orientado a padres y alumnos",
      "Código organizado por componentes y mantenible",
    ],
  },
  {
    slug: "gallinas-libres",
    title: "Gallinas Libres | Emprendimiento Familiar",
    description:
      "Landing page para un emprendimiento local de huevos de gallinas libres. Construida con Astro y Tailwind CSS, optimizada para rendimiento, SEO y bajo peso.",
    image: "/assets/projects/gallinas.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.gallinaslibres.com/",
    highlights: [
      "Carga inicial ultraligera (web estática)",
      "SEO básico para posicionamiento local",
    ],
  },
  {
    slug: "domus",
    title: "Domus | Estética Profesional",
    description:
      "Sitio institucional para una marca en crecimiento en el rubro de estética. Hecho con Astro y Tailwind CSS, con un diseño accesible, limpio y adaptado a su identidad visual.",
    image: "/assets/projects/domus.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://esteticadomus.com/",
    highlights: [
      "Diseño UI adaptado al rubro salud/estética",
      "Modo oscuro implementado desde el inicio",
    ],
  },
  {
    slug: "cerrajeria-apri",
    title: "Cerrajería APRI",
    description:
      "Sitio web para una cerrajería 24 hs en Buenos Aires. Hecho con Astro y Tailwind CSS, enfocado en visibilidad, accesibilidad y performance desde móviles.",
    image: "/assets/projects/apri.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.cerrajeriaapri24hs.com.ar/",
    highlights: [
      "Optimización total para dispositivos móviles",
      "Mapa interactivo para ubicación rápida",
    ],
  },
];
