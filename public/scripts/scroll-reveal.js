export function setupScrollReveal() {
  if (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        const el = entry.target;

        if (entry.isIntersecting && !el.classList.contains("revealed")) {
          el.classList.add("revealed");

          const delay = parseInt(el.dataset.revealDelay || "0");

          if (typeof el.animate === "function") {
            el.animate(
              {
                opacity: [0, 1],
                transform: ["translateY(20px)", "translateY(0)"],
              },
              {
                duration: 500,
                easing: "cubic-bezier(0.33, 1, 0.68, 1)", // más responsivo
                delay,
                fill: "forwards",
              }
            );
          } else {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }

          observer.unobserve(el);
        }
      }
    },
    {
      threshold: 0.05, // antes: 0.2 — aparece más temprano
      rootMargin: "0px 0px -10% 0px", // antes: -20% — entra en escena antes
    }
  );

  revealEls.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.willChange = "opacity, transform";
    el.dataset.revealDelay = `${index * 60}`; // antes: 100 — más fluido
    observer.observe(el);
  });
}
