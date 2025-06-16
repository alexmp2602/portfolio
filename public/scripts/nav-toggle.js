export function setupNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.removeAttribute("tabindex");
  };

  const closeMenu = () => {
    isOpen = false;
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fade-slide-down");

    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.setAttribute("tabindex", "-1");
  };

  const toggleMenu = () => {
    isOpen ? closeMenu() : openMenu();
  };

  // Evento click botón
  menuBtn.addEventListener("click", toggleMenu);

  // Cierra al hacer clic en cualquier <a href="#...">
  mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) closeMenu();
    });
  });
}
