// /scripts/nav-toggle.js
export function setupNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  let isOpen = false;
  const ctrl = new AbortController();
  const { signal } = ctrl;

  const openMenu = () => {
    isOpen = true;
    mobileMenu.classList.remove("hidden");
    // si usás animación personalizada
    mobileMenu.classList.add("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.removeAttribute("tabindex");

    // focus al primer link
    const firstLink = mobileMenu.querySelector("a, button");
    firstLink?.focus();
  };

  const closeMenu = () => {
    isOpen = false;
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.setAttribute("tabindex", "-1");

    menuBtn.focus(); // vuelve el foco al botón
  };

  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());

  // === Eventos ===
  menuBtn.addEventListener("click", toggleMenu, { signal });

  // Cierra al hacer clic en cualquier link interno
  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => isOpen && closeMenu(), { signal });
  });

  // Escape para cerrar
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape" && isOpen) closeMenu();
    },
    { signal }
  );

  // Opcional: focus trap básico
  document.addEventListener(
    "focusin",
    (e) => {
      if (isOpen && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
        e.stopPropagation();
        const firstLink = mobileMenu.querySelector("a, button");
        firstLink?.focus();
      }
    },
    { signal }
  );

  // devolver función cleanup
  return () => ctrl.abort();
}
