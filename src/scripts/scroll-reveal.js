export function setupScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const revealEls = document.querySelectorAll("[data-reveal]");

  revealEls.forEach((el, index) => {
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !el.classList.contains("revealed")) {
          el.classList.add("revealed");

          el.animate(
            {
              opacity: [0, 1],
              transform: ["translateY(24px)", "translateY(0)"],
            },
            {
              duration: 600,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              delay: index * 100,
              fill: "forwards",
            }
          );

          obs.unobserve(el);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(el);
  });
}
