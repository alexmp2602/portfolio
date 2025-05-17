export interface Experiment {
  slug: string;
  title: string;
  description: string;
  preview: string;
  tech: string[];
  demo: string;
  notes?: string[];
}

export const experiments: Experiment[] = [
  {
    slug: "cursor-gsap",
    title: "Cursor animado con GSAP",
    description: "Interacción visual con un cursor reactivo usando GSAP.",
    preview: "/assets/lab/cursor-gsap.webp",
    tech: ["GSAP", "Vanilla JS"],
    demo: "/demos/cursor-gsap/index.html",
    notes: ["Movimiento fluido", "Ideal para portafolios creativos"],
  },
  {
    slug: "scroll-reveal",
    title: "Scroll Reveal con IntersectionObserver",
    description: "Animaciones suaves al entrar en viewport.",
    preview: "/assets/lab/scroll-reveal.webp",
    tech: ["IntersectionObserver", "CSS"],
    demo: "/demos/scroll-reveal/index.html",
    notes: ["Basado en IntersectionObserver", "Animaciones one-shot"],
  },
  {
    slug: "scrolltrigger-timeline",
    title: "Timeline con ScrollTrigger",
    description: "Scroll secuencial con pin y GSAP.",
    preview: "/assets/lab/scrolltrigger-timeline.webp",
    tech: ["GSAP", "ScrollTrigger"],
    demo: "/demos/scrolltrigger-timeline/index.html",
    notes: ["Pin activo", "Contenido animado paso a paso"],
  },
  {
    slug: "scroll-progress",
    title: "Indicador de progreso con scroll",
    description: "Barra que muestra el progreso del scroll.",
    preview: "/assets/lab/scroll-progress.webp",
    tech: ["JS", "CSS"],
    demo: "/demos/scroll-progress/index.html",
    notes: ["Fácil de implementar", "Útil para blogs o tutoriales"],
  },
  {
    slug: "sticky-scroll",
    title: "Scroll con posición sticky",
    description: "Elementos que permanecen visibles al hacer scroll.",
    preview: "/assets/lab/sticky-scroll.webp",
    tech: ["CSS", "HTML"],
    demo: "/demos/sticky-scroll/index.html",
    notes: ["Usa position: sticky", "Compatibilidad amplia"],
  },
  {
    slug: "scrolltrigger-anim",
    title: "Animaciones al hacer scroll (ScrollTrigger)",
    description: "Entradas animadas al hacer scroll con GSAP + ScrollTrigger.",
    preview: "/assets/lab/scrolltrigger-anim.webp",
    tech: ["GSAP", "ScrollTrigger"],
    demo: "/demos/scrolltrigger-anim/index.html",
    notes: ["Scroll reveal progresivo", "Animaciones fluidas"],
  },
  {
    slug: "parallax-scroll",
    title: "Efecto Parallax al hacer scroll",
    description: "Simula profundidad con movimiento diferenciado de capas.",
    preview: "/assets/lab/parallax-scroll.webp",
    tech: ["CSS", "JS"],
    demo: "/demos/parallax-scroll/index.html",
    notes: ["Fácil de adaptar", "Ideal para headers visuales"],
  },
];
