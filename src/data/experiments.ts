export interface Experiment {
  slug: string;
  title: string;
  description?: string;
  demo?: string;
  image?: string;
}

export const experiments: Experiment[] = [
  {
    slug: "sigj",
    title: "SIGJ | Gestión Judicial",
    description:
      "Aplicación moderna para la gestión digital de expedientes, documentación y agenda. Optimiza flujos de trabajo y mejora la accesibilidad.",
    demo: "https://sigj.vercel.app/",
    image: "/assets/lab/sigj.webp",
  },
  {
    slug: "gsap",
    title: "Animaciones con GSAP",
    description:
      "Colección de microanimaciones visuales creadas con GSAP. Ideal para UI modernas.",
    image: "/assets/lab/gsap-cover.webp",
  },
  {
    slug: "cursor-gsap",
    title: "Cursor Personalizado con GSAP",
    description:
      "Interacción avanzada con cursor animado usando la librería GSAP para efectos suaves y personalizados.",
    demo: "/demos/cursor-gsap/index.html",
  },
  {
    slug: "parallax-scroll",
    title: "Parallax Básico",
    description:
      "Efecto parallax con imágenes de fondo y capas superpuestas para una experiencia visual más dinámica.",
    demo: "/demos/parallax-scroll/index.html",
  },
  {
    slug: "scroll-progress",
    title: "Barra de Progreso al Scroll",
    description:
      "Barra que muestra el avance de lectura vertical conforme se navega por la página.",
    demo: "/demos/scroll-progress/index.html",
  },
  {
    slug: "scroll-reveal",
    title: "Animación Scroll Reveal",
    description:
      "Animación suave al hacer scroll, usando IntersectionObserver con HTML, CSS y JavaScript puro.",
    demo: "/demos/scroll-reveal/index.html",
  },
  {
    slug: "scrolltrigger-animation",
    title: "ScrollTrigger Animation",
    description:
      "Animaciones por secciones controladas con ScrollTrigger para una narrativa fluida.",
    demo: "/demos/scrolltrigger-animation/index.html",
  },
  {
    slug: "scrolltrigger-timeline",
    title: "Sticky Timeline con ScrollTrigger",
    description:
      "Cronología animada con efecto sticky usando ScrollTrigger de GSAP para una experiencia narrativa fluida.",
    demo: "/demos/scrolltrigger-timeline/index.html",
  },
];
