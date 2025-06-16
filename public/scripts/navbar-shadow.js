export function setupNavbarShadow() {
  const nav = document.querySelector("[data-navbar]");
  if (!nav) return;

  let lastKnownScrollY = 0;
  let ticking = false;

  const applyShadow = () => {
    nav.classList.toggle("shadow-md", lastKnownScrollY > 10);
    ticking = false;
  };

  const onScroll = () => {
    lastKnownScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(applyShadow);
      ticking = true;
    }
  };

  // Inicial
  applyShadow();
  window.addEventListener("scroll", onScroll, { passive: true });
}
