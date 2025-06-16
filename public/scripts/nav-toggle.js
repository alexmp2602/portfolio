export function setupNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;

    mobileMenu.classList.toggle("hidden", !isOpen);
    mobileMenu.classList.toggle("animate-fade-slide-down", isOpen);

    // Accesibilidad
    menuBtn.setAttribute("aria-expanded", isOpen.toString());
    mobileMenu.setAttribute("aria-hidden", (!isOpen).toString());

    // Prevención de foco si está oculto
    if (!isOpen) {
      mobileMenu.setAttribute("tabindex", "-1");
    } else {
      mobileMenu.removeAttribute("tabindex");
    }
  };

  menuBtn.addEventListener("click", toggleMenu);

  // Cerrar menú al hacer clic en un enlace interno
  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) toggleMenu();
    });
  });
}
