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
      "Aplicación moderna para la gestión de expedientes, documentación y agenda. Optimiza flujos de trabajo y mejora la accesibilidad.",
    demo: "https://sigj.vercel.app/",
    image: "/assets/lab/sigj.webp",
    tags: ["Sistemas", "Full-Stack"],
  },
  {
    slug: "saae",
    title: "SAAE | Acciones Estatutarias",
    description:
      "Sistema web para gestionar acciones estatutarias docentes (MAD, Acrecentamiento, Servicio Provisorio, Traslado) con registro de escuelas, importación y workflow de revisión/aprobación, más tablero con totales por región.",
    demo: "https://saae-sist.vercel.app/",
    image: "/assets/lab/saae.webp",
    tags: ["Sistemas", "Full-Stack", "Educación"],
  },
  {
    slug: "gsap",
    title: "Animaciones con GSAP",
    description:
      "Colección de microanimaciones visuales creadas con GSAP. Ideal para UI modernas.",
    image: "/assets/lab/gsap-cover.webp",
    tags: ["Animaciones", "UI", "GSAP"],
  },
  {
    slug: "cursor-gsap",
    title: "Cursor Personalizado con GSAP",
    description:
      "Interacción avanzada con cursor animado usando GSAP para efectos suaves y personalizados.",
    demo: "/demos/cursor-gsap/index.html",
    tags: ["Animaciones", "GSAP", "Interacción"],
  },
  {
    slug: "parallax-scroll",
    title: "Parallax Básico",
    description:
      "Efecto parallax con imágenes de fondo y capas superpuestas para una experiencia visual más dinámica.",
    demo: "/demos/parallax-scroll/index.html",
    tags: ["Animaciones", "Scroll", "Parallax"],
  },
  {
    slug: "scroll-progress",
    title: "Barra de Progreso al Scroll",
    description:
      "Barra que muestra el avance de lectura vertical conforme se navega por la página.",
    demo: "/demos/scroll-progress/index.html",
    tags: ["UI", "Scroll"],
  },
  {
    slug: "scroll-reveal",
    title: "Animación Scroll Reveal",
    description:
      "Animación suave al hacer scroll, usando IntersectionObserver con HTML, CSS y JavaScript puro.",
    demo: "/demos/scroll-reveal/index.html",
    tags: ["Animaciones", "Scroll", "Reveal"],
  },
  {
    slug: "scrolltrigger-animation",
    title: "ScrollTrigger Animation",
    description:
      "Animaciones por secciones controladas con ScrollTrigger para una narrativa fluida.",
    demo: "/demos/scrolltrigger-animation/index.html",
    tags: ["Animaciones", "GSAP", "ScrollTrigger"],
  },
  {
    slug: "scrolltrigger-timeline",
    title: "Sticky Timeline con ScrollTrigger",
    description:
      "Cronología animada con efecto sticky usando ScrollTrigger de GSAP para una experiencia narrativa fluida.",
    demo: "/demos/scrolltrigger-timeline/index.html",
    tags: ["Animaciones", "GSAP", "ScrollTrigger", "Sticky"],
  },
];
