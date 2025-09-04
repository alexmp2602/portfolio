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
    slug: "Delfos",
    title: "Delfos Studio · Agencia Creativa",
    description:
      "Delfos Studio es una agencia creativa que se especializa en diseño y desarrollo web. Nuestro enfoque está en crear experiencias digitales únicas y efectivas para nuestros clientes.",
    image: "/assets/projects/delfos.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://delfos-studio.vercel.app/",
    repo: "https://github.com/alexmp2602/delfos",
    highlights: [
      "Diseño minimalista y moderno",
      "Carga ultrarrápida y optimizada para SEO",
      "Interactividad avanzada con componentes de Astro",
    ],
  },
  {
    slug: "gallinas-libres",
    title: "Gallinas Libres · Emprendimiento Familiar",
    description:
      "Landing page para un emprendimiento familiar dedicado a huevos de gallinas libres. Construida con Astro y Tailwind CSS, optimizada para rendimiento, SEO y bajo peso.",
    image: "/assets/projects/gallinas.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.gallinaslibres.com/",
    repo: "https://github.com/alexmp2602/gallinas-libres",
    highlights: [
      "Carga ultraligera y rápida (web estática)",
      "SEO local para mejor posicionamiento en buscadores",
    ],
  },
  {
    slug: "iabot",
    title: "IABOT · Robótica con LEGO para Niños",
    description:
      "Sitio institucional de IABOT, un espacio de robótica educativa para niños. Desarrollado con Astro.js y Tailwind CSS, enfocado en claridad, escalabilidad y responsividad.",
    image: "/assets/projects/iabot.webp",
    tech: ["Astro.js", "Tailwind CSS"],
    link: "https://iabot.com.ar/",
    repo: "https://github.com/alexmp2602/iabot-v3",
    highlights: [
      "Diseño institucional orientado a padres y alumnos",
      "Código modular y mantenible con enfoque educativo",
    ],
  },

  {
    slug: "domus",
    title: "Domus · Estética Profesional",
    description:
      "Sitio web para una marca en crecimiento en el rubro de estética. Desarrollado con Astro y Tailwind CSS, con un diseño accesible, limpio y adaptado a su identidad visual.",
    image: "/assets/projects/domus.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://esteticadomus.com/",
    repo: "https://github.com/alexmp2602/domus",
    highlights: [
      "Interfaz visual adaptada al sector salud/estética",
      "Modo oscuro implementado desde el inicio",
    ],
  },
  {
    slug: "cerrajeria-apri",
    title: "APRI · Cerrajería 24 hs",
    description:
      "Sitio web para una cerrajería 24 hs en Mendoza. Hecho con Astro y Tailwind CSS, enfocado en visibilidad desde móviles, accesibilidad y performance.",
    image: "/assets/projects/apri.webp",
    tech: ["Astro", "Tailwind CSS"],
    link: "https://www.cerrajeriaapri24hs.com.ar/",
    repo: "https://github.com/alexmp2602/apri-cerrajeria",
    highlights: [
      "Optimización total para dispositivos móviles",
      "Mapa interactivo para contacto inmediato",
    ],
  },
];
