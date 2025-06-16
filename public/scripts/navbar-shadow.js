export function setupNavbarShadow() {
  const nav = document.querySelector("[data-navbar]");
  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateNavStyles = () => {
    const shouldAddShadow = lastScrollY > 10;

    nav.classList.toggle("navbar-shadow", shouldAddShadow);
    nav.classList.toggle("navbar-scrolled", shouldAddShadow);

    ticking = false;
  };

  const onScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateNavStyles);
      ticking = true;
    }
  };

  updateNavStyles(); // inicial
  window.addEventListener("scroll", onScroll, { passive: true });
}
