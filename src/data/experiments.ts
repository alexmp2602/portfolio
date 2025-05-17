export interface Experiment {
  slug: string;
  title: string;
  description: string;
  demo: string;
}

export const experiments: Experiment[] = [
  {
    slug: "scroll-reveal",
    title: "Animación Scroll Reveal",
    description:
      "Ejemplo de animación con IntersectionObserver para revelar contenido al hacer scroll, usando HTML, CSS y JavaScript.",
    demo: "/demos/scroll-reveal/index.html",
  },
  {
    slug: "parallax-scroll",
    title: "Parallax Básico",
    description:
      "Demostración de efecto parallax con imágenes de fondo y capas superpuestas.",
    demo: "/demos/parallax-scroll/index.html",
  },
  {
    slug: "cursor-gsap",
    title: "Cursor Personalizado con GSAP",
    description:
      "Interacción avanzada con animación del cursor usando la librería GSAP.",
    demo: "/demos/cursor-gsap/index.html",
  },
  {
    slug: "scroll-progress",
    title: "Barra de Progreso al Scroll",
    description:
      "Barra de progreso que indica el avance vertical de la página conforme se hace scroll.",
    demo: "/demos/scroll-progress/index.html",
  },
  {
    slug: "sticky-scroll",
    title: "Sticky Scroll Animado",
    description:
      "Elementos que se fijan y animan mientras se hace scroll en la página.",
    demo: "/demos/sticky-scroll/index.html",
  },
  {
    slug: "scrolltrigger-timeline",
    title: "Sticky Timeline con ScrollTrigger",
    description:
      "Cronología animada y sticky utilizando la librería ScrollTrigger de GSAP.",
    demo: "/demos/scrolltrigger-timeline/index.html",
  },
];
