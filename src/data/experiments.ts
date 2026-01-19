// src/data/experiments.ts
export interface Experiment {
  slug: string;
  title: string;
  description?: string;
  demo?: string;
  image?: string;
  imageWebp?: string;
  imageAvif?: string;
  tags?: string[];
}

export const experiments: Experiment[] = [
  {
    slug: "sigj",
    title: "SIGJ | Gestión Judicial",
    description:
      "Aplicación para la gestión de expedientes, documentación y agenda, con foco en flujos de trabajo y accesibilidad.",
    demo: "https://sigj.vercel.app/",
    image: "/assets/lab/sigj.webp",
    tags: ["Sistemas"],
  },
  {
    slug: "saae",
    title: "SAAE | Acciones Estatutarias",
    description:
      "Sistema web para gestionar acciones estatutarias docentes con registro de escuelas, importación, workflow de revisión/aprobación y tablero con totales por región.",
    demo: "https://saae-sist.vercel.app/",
    image: "/assets/lab/saae.webp",
    tags: ["Sistemas", "Educación"],
  },
  {
    slug: "gsap",
    title: "Animaciones con GSAP",
    description:
      "Colección de microanimaciones pensadas para UI modernas, con foco en suavidad y control.",
    image: "/assets/lab/gsap-cover.webp",
    tags: ["Animaciones", "UI", "GSAP"],
  },
  {
    slug: "cursor-gsap",
    title: "Cursor Personalizado con GSAP",
    description:
      "Cursor animado con GSAP para interacciones suaves y personalizadas.",
    demo: "/demos/cursor-gsap/index.html",
    tags: ["Animaciones", "GSAP", "Interacción"],
  },
  {
    slug: "parallax-scroll",
    title: "Parallax básico",
    description:
      "Efecto parallax con capas para una experiencia visual más dinámica.",
    demo: "/demos/parallax-scroll/index.html",
    tags: ["Animaciones", "Scroll", "Parallax"],
  },
  {
    slug: "scroll-progress",
    title: "Barra de progreso al scroll",
    description:
      "Indicador de avance de lectura conforme se navega por la página.",
    demo: "/demos/scroll-progress/index.html",
    tags: ["UI", "Scroll"],
  },
  {
    slug: "scroll-reveal",
    title: "Animación scroll reveal",
    description:
      "Revelado al hacer scroll usando IntersectionObserver con HTML, CSS y JavaScript.",
    demo: "/demos/scroll-reveal/index.html",
    tags: ["Animaciones", "Scroll", "Reveal"],
  },
  {
    slug: "scrolltrigger-animation",
    title: "ScrollTrigger · Animación por secciones",
    description:
      "Animaciones por secciones controladas con ScrollTrigger para una narrativa fluida.",
    demo: "/demos/scrolltrigger-animation/index.html",
    tags: ["Animaciones", "GSAP", "ScrollTrigger"],
  },
  {
    slug: "scrolltrigger-timeline",
    title: "ScrollTrigger · Timeline sticky",
    description:
      "Timeline con efecto sticky usando ScrollTrigger para una experiencia narrativa fluida.",
    demo: "/demos/scrolltrigger-timeline/index.html",
    tags: ["Animaciones", "GSAP", "ScrollTrigger", "Sticky"],
  },
];
